import { IMG } from '../../data/images'


const VALORES = ['Curiosidad', 'Respeto', 'Autonomía', 'Colaboración', 'Compromiso', 'Creatividad']

export function ComoAprendemos() {
  return (
    <section id="vida" className="bg-white py-20 lg:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[0.98fr_1.02fr] lg:gap-20">
        <div className="relative">
          <img
            src={IMG.aula}
            alt="Docente acompañando a estudiantes en una sesión de trabajo"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover outline outline-1 -outline-offset-1 outline-ink/10"
          />
       
        </div>

        <div>
    
          <h2 className="mt-5 max-w-[16ch] font-display text-[clamp(2.1rem,4.2vw,3.35rem)] leading-[1.05] tracking-[-0.02em] text-ink">
            Cada estudiante es protagonista.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft">
            En nuestras aulas el ritmo se adapta, las voces se escuchan y los errores forman
            parte del camino. Así construimos personas seguras, curiosas y comprometidas con su
            comunidad.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {VALORES.map((valor) => (
              <li
                key={valor}
                className="rounded-full border border-ink/20 px-4 py-1.5 text-sm font-medium text-ink"
              >
                {valor}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
