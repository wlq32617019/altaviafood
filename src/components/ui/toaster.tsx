'use client';

import * as React from 'react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const variantStyles: Record<string, string> = {
  default:
    'border-gray-200 bg-white text-navy shadow-lg',
  success:
    'border-emerald-200 bg-emerald-50 text-emerald-900 shadow-lg',
  destructive:
    'border-red-200 bg-red-50 text-red-900 shadow-lg',
};

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed top-4 right-4 z-[100] flex w-full max-w-sm flex-col gap-3 pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={cn(
            'pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-xl border p-4 pr-10 transition-all duration-300 animate-in slide-in-from-right-full fade-in',
            variantStyles[t.variant ?? 'default']
          )}
          role="status"
        >
          <div className="flex-1 min-w-0">
            {t.title && (
              <div className="text-sm font-semibold leading-none mb-1">
                {t.title}
              </div>
            )}
            {t.description && (
              <div className="text-sm opacity-90 leading-snug">
                {t.description}
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => dismiss(t.id)}
            className="absolute top-3 right-3 rounded-md p-1 opacity-60 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber/50"
            aria-label="Close"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
