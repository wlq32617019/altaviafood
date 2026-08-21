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

/* ------------------------------------------------------------------ */
/*  Global deduplication & success/error suppression window           */
/*  (Defense-in-depth against Strict Mode double-invocation races).   */
/* ------------------------------------------------------------------ */

/** Any duplicate (variant + title) submitted within this ms is dropped. */
const DEDUP_WINDOW_MS = 1500;
/** If a `success` toast fires within this ms after an `error` (or vice   */
/** versa), suppress the later one if it would create a contradictory pair */
const SUCCESS_WINDOW_MS = 350;

const recentKeys = new Map<string, number>(); // dedup key -> timestamp
let lastSuccessAt = 0;
let lastDestructiveAt = 0;

interface MemoryState {
  toasts: Toast[];
}

/* ------------------------------------------------------------------ */
/*  Imperative global store                                           */
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

function dedupKey(variant: ToastVariant, title?: string) {
  return `${variant}|${(title ?? '').trim().toLowerCase()}`;
}

export function toast({
  title,
  description,
  variant = 'default',
  duration = DEFAULT_DURATION,
}: Omit<Toast, 'id'>) {
  const now = Date.now();
  const key = dedupKey(variant, title);

  /* ----- 1) Strict duplicate drop (same variant + title within window) ----- */
  const lastSeen = recentKeys.get(key) ?? 0;
  if (now - lastSeen < DEDUP_WINDOW_MS) {
    return null;
  }
  recentKeys.set(key, now);

  /* ----- 2) Success <-> Destructive mutual suppression in a short window  */
  if (variant === 'destructive' && now - lastSuccessAt < SUCCESS_WINDOW_MS) {
    // Success toast fired very recently -> this error is a spurious race.
    return null;
  }
  if (variant === 'success') {
    lastSuccessAt = now;
  } else if (variant === 'destructive') {
    lastDestructiveAt = now;
  }

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
/*  React binding: useSyncExternalStore (Strict Mode safe)            */
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
