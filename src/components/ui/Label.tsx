import type { ReactNode } from 'react'

type LabelProps = {
  children: ReactNode
  tone?: 'light' | 'dark'
}

export function Label({ children, tone = 'light' }: LabelProps) {
  return (
    <p
      className={`flex items-center gap-3 text-[13px] font-semibold ${
        tone === 'dark' ? 'text-paper/70' : 'text-ink-soft'
      }`}
    >
      <span className="h-px w-7 shrink-0 bg-seal" aria-hidden="true" />
      {children}
    </p>
  )
}
