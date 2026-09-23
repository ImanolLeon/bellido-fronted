import { IMG } from '../../data/images'
import { Label } from '../ui/Label'

const VALORES = ['Curiosidad', 'Respeto', 'Autonomía', 'Colaboración', 'Compromiso', 'Creatividad']
const VALOR_DOTS = ['bg-coral', 'bg-primary', 'bg-sun', 'bg-teal', 'bg-primary', 'bg-coral']

export function ComoAprendemos() {
  return (
    <section id="vida" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative">
          <img
            src={IMG.aula}
            alt="Docente acompañando a estudiantes en una sesión de trabajo"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl shadow-navy/10"
            loading="lazy"
          />
          <img
            src={IMG.arte}
            alt="Taller de pintura de estudiantes"
            className="absolute -bottom-8 -right-4 w-44 rounded-2xl border-8 border-white object-cover shadow-xl shadow-navy/15 sm:-right-8 sm:w-60"
            loading="lazy"
          />
        </div>

        <div className="mt-6 lg:mt-0">
          <Label>CÓMO APRENDEMOS</Label>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            Cada estudiante es protagonista
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-brand">
            En nuestras aulas el ritmo se adapta, las voces se escuchan y los errores son parte
            del camino. Así construimos personas seguras, curiosas y comprometidas con su
            comunidad.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {VALORES.map((v, i) => (
              <span
                key={v}
                className="inline-flex items-center gap-2 rounded-full bg-mist px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-primary-soft hover:text-primary"
              >
                <span className={`size-2.5 rounded-full ${VALOR_DOTS[i]}`} />
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}