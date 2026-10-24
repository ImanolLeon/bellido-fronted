import { IMG } from '../../data/images'


const NIVELES = [
  {
    index: '01',
    img: IMG.primaria,
    alt: 'Niños y niñas de primaria en el aula',
    age: '6 a 11 años',
    title: 'Primaria',
    text: 'Curiosidad, hábitos y vínculos sólidos para aprender con alegría. Aquí se empieza a preguntar sin miedo y a convivir con otros.',
    href: '#admisiones',
    cta: 'Conocer Primaria',
  },
  {
    index: '02',
    img: IMG.secundaria,
    alt: 'Estudiantes de secundaria trabajando en grupo',
    age: '12 a 17 años',
    title: 'Secundaria',
    text: 'Autonomía, criterio y herramientas para construir el propio futuro. Acompañamos la etapa en la que las ideas empiezan a tomar forma.',
    href: '#admisiones',
    cta: 'Conocer Secundaria',
  },
]

export function Niveles() {
  return (
    <section id="niveles" className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.6fr] lg:items-end lg:gap-16">
          <div>
            <h2 className="mt-5 max-w-[18ch] font-display text-[clamp(2.1rem,4.2vw,3.35rem)] leading-[1.05] tracking-[-0.02em] text-ink">
              Dos etapas, una misma forma de mirar.
            </h2>
          </div>
        
        </div>

        <div className="mt-14 space-y-16 lg:mt-20 lg:space-y-24">
          {NIVELES.map((nivel, position) => (
            <article
              key={nivel.title}
              className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
            >
              <div
                className={`relative lg:col-span-7 ${position === 1 ? 'lg:order-2' : ''}`}
              >
                <img
                  src={nivel.img}
                  alt={nivel.alt}
                  loading="lazy"
                  className="aspect-[16/10] w-full rounded-sm object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                />
                <span
                  className="absolute -left-2 -top-6 font-display text-6xl leading-none text-seal sm:-left-4 sm:text-7xl"
                  aria-hidden="true"
                >
                  {nivel.index}
                </span>
              </div>

              <div className={`lg:col-span-5 ${position === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="mt-2 font-display text-3xl tracking-[-0.02em] text-ink sm:text-4xl">
                  {nivel.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
                  {nivel.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
