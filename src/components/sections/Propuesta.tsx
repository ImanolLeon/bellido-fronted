import type { ReactNode } from 'react'
import { Label } from '../ui/Label'

type Propuesta = {
  icon: ReactNode
  bg: string
  fg: string
  title: string
  text: string
}

const PROPUESTAS: Propuesta[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547Z"
        />
      </svg>
    ),
    bg: 'bg-primary-soft',
    fg: 'text-primary',
    title: 'Pensamiento activo',
    text: 'Aprender haciendo, preguntando y conectando ideas.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
    bg: 'bg-teal/15',
    fg: 'text-teal',
    title: 'Bienestar integral',
    text: 'Cuidar las emociones para desplegar todo el potencial.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c2.486 2.579 3.7 5.08 3.7 9s-1.214 6.421-3.7 9m0-18c-2.486 2.579-3.7 5.08-3.7 9s1.214 6.421 3.7 9m7.5-15h-15m15 12h-15"
        />
      </svg>
    ),
    bg: 'bg-coral/15',
    fg: 'text-coral',
    title: 'Mirada global',
    text: 'Idiomas, cultura y ciudadanía para comprender el mundo.',
  },
]

export function Propuesta() {
  return (
    <section id="propuesta" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <Label>NUESTRA PROPUESTA</Label>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            Aprender para la vida
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-brand">
            Diseñamos experiencias donde el saber se transforma en carácter, herramientas y
            ganas de aportar. Cada proyecto, cada clase y cada vínculo es una oportunidad para
            crecer como personas.
          </p>
          <a
            href="#admisiones"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy/20 transition hover:-translate-y-0.5 hover:bg-navy-deep"
          >
            Ver proyecto educativo
            <svg viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="flex flex-col gap-5">
          {PROPUESTAS.map((p) => (
            <div
              key={p.title}
              className="flex items-start gap-5 rounded-3xl bg-white p-6 shadow-md shadow-navy/5 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${p.bg} ${p.fg}`}>
                {p.icon}
              </span>
              <div>
                <h3 className="text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-1 leading-relaxed text-slate-brand">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}