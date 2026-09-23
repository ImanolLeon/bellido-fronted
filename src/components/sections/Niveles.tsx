import { IMG } from '../../data/images'
import { Label } from '../ui/Label'

export function Niveles() {
  return (
    <section id="niveles" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Label>UNA TRAYECTORIA QUE ACOMPAÑA</Label>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            Cada etapa, un nuevo horizonte
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-brand">
            Dos niveles conectados por una misma mirada: conocer a cada estudiante, desafiarlo y
            celebrar su crecimiento.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="group overflow-hidden rounded-3xl bg-sky-soft shadow-lg shadow-navy/5 transition hover:-translate-y-1">
            <div className="overflow-hidden">
              <img
                src={IMG.primaria}
                alt="Niños y niñas de primaria en el aula"
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-8 lg:p-10">
              <span className="inline-flex items-center rounded-full bg-coral/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-coral">
                6 a 11 años
              </span>
              <h3 className="mt-4 text-2xl font-extrabold text-navy">Primaria</h3>
              <p className="mt-3 leading-relaxed text-slate-brand">
                Curiosidad, hábitos y vínculos sólidos para aprender con alegría.
              </p>
              <a
                href="#admisiones"
                className="mt-6 inline-flex items-center gap-2 font-bold text-primary transition group-hover:gap-3"
              >
                Conocer Primaria
                <svg viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </article>

          <article className="group overflow-hidden rounded-3xl bg-navy text-white shadow-lg shadow-navy/20 transition hover:-translate-y-1">
            <div className="overflow-hidden">
              <img
                src={IMG.secundaria}
                alt="Estudiantes de secundaria trabajando en grupo"
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-8 lg:p-10">
              <span className="inline-flex items-center rounded-full bg-teal/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal">
                12 a 17 años
              </span>
              <h3 className="mt-4 text-2xl font-extrabold text-white">Secundaria</h3>
              <p className="mt-3 leading-relaxed text-white/80">
                Autonomía, criterio y herramientas para construir el propio futuro.
              </p>
              <a
                href="#admisiones"
                className="mt-6 inline-flex items-center gap-2 font-bold text-teal transition group-hover:gap-3"
              >
                Conocer Secundaria
                <svg viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}