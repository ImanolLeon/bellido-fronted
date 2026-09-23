import type { ReactNode } from 'react'

export function Label({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">
      {children}
    </p>
  )
}