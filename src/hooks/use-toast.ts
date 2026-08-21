'use client';

import * as React from 'react';

type ToastVariant = 'default' | 'success' | 'destructive';

interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

const TOAST_LIMIT = 3;
const DEFAULT_DURATION = 5000;

interface MemoryState {
  toasts: Toast[];
}

/* ------------------------------------------------------------------ */
/*  Imperative global store (strict-mode safe: each subscribe is      */
/*  registered once per effect call, deduped by Set identity)         */
/* ------------------------------------------------------------------ */

let state: MemoryState = { toasts: [] };
const listeners = new Set<(s: MemoryState) => void>();
let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

function setState(next: MemoryState) {
  state = next;
  listeners.forEach((l) => l(state));
}

const removeToastById = (id: string) =>
  setState({ toasts: state.toasts.filter((t) => t.id !== id) });

export function toast({
  title,
  description,
  variant = 'default',
  duration = DEFAULT_DURATION,
}: Omit<Toast, 'id'>) {
  const id = genId();
  const nextToast: Toast = { id, title, description, variant, duration };

  setState({
    toasts: [nextToast, ...state.toasts].slice(0, TOAST_LIMIT),
  });

  if (duration > 0) {
    window.setTimeout(() => removeToastById(id), duration);
  }

  return id;
}

export function dismiss(id?: string) {
  if (id === undefined) {
    setState({ toasts: [] });
  } else {
    removeToastById(id);
  }
}

/* ------------------------------------------------------------------ */
/*  React binding: useSyncExternalStore avoids Strict Mode double     */
/*  subscriber registration bugs (listeners never duplicate).         */
/* ------------------------------------------------------------------ */

function subscribe(l: (s: MemoryState) => void) {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}

function getSnapshot() {
  return state;
}

function getServerSnapshot(): MemoryState {
  return { toasts: [] };
}

export function useToast() {
  const snapshot = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return {
    toasts: snapshot.toasts,
    toast,
    dismiss,
  };
}
