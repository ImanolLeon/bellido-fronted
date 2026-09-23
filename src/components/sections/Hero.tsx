import { IMG } from '../../data/images'
import { Label } from '../ui/Label'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-sky-soft">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 left-0 size-80 rounded-full bg-teal/15 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
        <div>
          <Label>APRENDER HOY. TRANSFORMAR MAÑANA.</Label>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
            Un colegio para crecer con{' '}
            <span className="text-primary">confianza</span> y{' '}
            <span className="text-coral">curiosidad</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-brand">
            Acompañamos a cada estudiante desde Primaria hasta Secundaria con una educación
            cercana, innovadora y profundamente humana.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#admisiones"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Conocer admisiones
              <svg viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#propuesta"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy/15 bg-white px-7 py-3.5 text-sm font-semibold text-navy transition hover:border-primary hover:text-primary"
            >
              Descubrir el colegio
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="size-3 rounded-full bg-coral" />
              <span className="size-3 rounded-full bg-primary" />
              <span className="size-3 rounded-full bg-sun" />
            </span>
            <p className="text-sm font-medium text-slate-brand">
              Más de <strong className="text-navy">400 familias</strong> forman nuestra comunidad
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src={IMG.hero}
            alt="Estudiantes del colegio participando en clase"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl shadow-navy/20"
          />
          <div className="absolute -bottom-6 left-4 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-xl shadow-navy/10 sm:left-6 sm:p-5">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
                />
              </svg>
            </span>
            <div>
              <p className="font-bold text-navy">Educación con propósito</p>
              <p className="text-xs font-semibold text-slate-brand">Formando desde 1998</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}