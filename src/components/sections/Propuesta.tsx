import type { ReactNode } from 'react'


type Propuesta = {
  icon: ReactNode
  title: string
  text: string
}

const PROPUESTAS: Propuesta[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364-.707.707M6.343 17.657l-.707.707m12.728 0-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
    title: 'Pensamiento activo',
    text: 'Aprender haciendo, preguntando y conectando ideas. Menos memorizar para el examen, más entender para la vida.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
    title: 'Bienestar integral',
    text: 'Cuidar las emociones para desplegar todo el potencial. Acompañamos también lo que no se ve en una libreta.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c2.486 2.579 3.7 5.08 3.7 9s-1.214 6.421-3.7 9m0-18c-2.486 2.579-3.7 5.08-3.7 9s1.214 6.421 3.7 9m7.5-15h-15m15 12h-15"
        />
      </svg>
    ),
    title: 'Mirada global',
    text: 'Idiomas, cultura y ciudadanía para comprender el mundo y encontrar un lugar propio en él.',
  },
]

export function Propuesta() {
  return (
    <section id="propuesta" className="bg-paper py-20 lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
         
          <h2 className="mt-5 max-w-[15ch] font-display text-[clamp(2.1rem,4.2vw,3.35rem)] leading-[1.05] tracking-[-0.02em] text-ink">
            Aprender para la vida no es un eslogan.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft">
            Es lo que pasa cuando un estudiante se anima a preguntar, cuando trabaja con otros y
            cuando descubre que lo que aprende sirve fuera del aula.
          </p>

          <blockquote className="mt-9 border-l-2 border-seal pl-5">
            <p className="font-display text-xl leading-snug tracking-[-0.01em] text-ink sm:text-2xl">
              No formamos para el examen. Formamos para lo que viene después.
            </p>
          </blockquote>

        </div>

        <div>
          {PROPUESTAS.map((propuesta) => (
            <div
              key={propuesta.title}
              className={`grid grid-cols-[auto_1fr] gap-5 py-8 sm:gap-7`}
            >
             
              <div>
                <h3 className="font-display text-2xl tracking-[-0.01em] text-ink">
                  {propuesta.title}
                </h3>
                <p className="mt-2 max-w-md text-base leading-relaxed text-ink-soft">
                  {propuesta.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
