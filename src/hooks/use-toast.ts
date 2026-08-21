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

interface ToastState {
  toasts: Toast[];
}

const TOAST_LIMIT = 3;
const TOAST_REMOVE_DELAY = 5000;

let listeners: Array<(state: ToastState) => void> = [];
let memoryState: ToastState = { toasts: [] };
let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

function dispatch(state: ToastState) {
  memoryState = state;
  listeners.forEach((listener) => listener(state));
}

function toast({
  title,
  description,
  variant = 'default',
  duration = TOAST_REMOVE_DELAY,
}: Omit<Toast, 'id'>) {
  const id = genId();

  dispatch({
    toasts: [
      { id, title, description, variant, duration },
      ...memoryState.toasts,
    ].slice(0, TOAST_LIMIT),
  });

  if (duration > 0) {
    setTimeout(() => {
      dispatch({
        toasts: memoryState.toasts.filter((t) => t.id !== id),
      });
    }, duration);
  }

  return id;
}

export function useToast() {
  const [state, setState] = React.useState<ToastState>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      listeners = listeners.filter((l) => l !== setState);
    };
  }, []);

  return {
    ...state,
    toast,
    dismiss: (id?: string) => {
      dispatch({
        toasts: id
          ? memoryState.toasts.filter((t) => t.id !== id)
          : [],
      });
    },
  };
}

export { toast };
