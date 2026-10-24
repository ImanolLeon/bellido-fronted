import { IMG } from '../../data/images'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      <div className=" pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />

      <div className="container-page relative grid gap-14 pb-24 pt-12 sm:pb-28 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20 lg:pb-28 lg:pt-20">
        <div className="hero-rise">
          

          <h1 className="mt-6 max-w-[13ch] font-display text-[clamp(2.85rem,7vw,5.25rem)] leading-[0.98] tracking-[-0.03em] text-ink">
            Aquí se aprende a pensar en voz alta.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
            Primaria y secundaria con una educación cercana, exigente y humana. Desde 1998
            acompañamos a cada estudiante a descubrir lo que piensa y a decirlo con criterio.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href="#admisiones"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-seal"
            >
              Agendar una visita
              <svg viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#niveles"
              className="text-sm font-semibold text-ink underline decoration-ink/25 underline-offset-4 transition-colors hover:text-seal hover:decoration-seal"
            >
              Conocer los niveles
            </a>
          </div>

        
        </div>

        <div className="hero-rise-late relative mx-auto w-full max-w-[30rem] lg:mr-0">
          <figure className="relative">
            <img
              src={IMG.hero}
              alt="Estudiantes del colegio participando en clase"
              className="aspect-[4/5] w-full rounded-sm object-cover outline outline-1 -outline-offset-1 outline-ink/10"
            />

           

            <figcaption className="letter-card absolute -bottom-10 left-4 w-[min(19rem,calc(100%-2rem))] bg-white p-5 sm:-left-8 sm:p-6">
              <p className="text-xs font-medium text-ink-soft">Fragmento de una carta a su esposo, 1822</p>
              <blockquote className="mt-3 text-[15px] italic leading-relaxed text-ink">
                «Avísale al jefe de esa fuerza, señor Quirós, y trata tú de huir inmediatamente a
                Huancavelica…»
              </blockquote>
              <p className="mt-4 font-script text-[2rem] leading-none text-seal">
                María Parado de Bellido
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
