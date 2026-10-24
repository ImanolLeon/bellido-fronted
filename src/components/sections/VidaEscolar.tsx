import { IMG } from '../../data/images'


const VIDA = [
  {
    img: IMG.deporte,
    alt: 'Estudiantes jugando y practicando deporte',
    title: 'Deporte y movimiento',
    text: 'Torneos, gimnasia y juegos que forman carácter, equipo y hábitos saludables.',
  },
  {
    img: IMG.artecard,
    alt: 'Taller de arte con colores y pinceles',
    title: 'Arte y expresión',
    text: 'Música, teatro y artes plásticas para que cada voz encuentre su forma de decir.',
  },
  {
    img: IMG.ciencia,
    alt: 'Estudiantes experimentando en el laboratorio',
    title: 'Ciencia y tecnología',
    text: 'Laboratorio, robótica y pensamiento computacional para descubrir el cómo y el porqué.',
  },
]

export function VidaEscolar() {
  return (
    <section id="vida-escolar" className="bg-paper py-20 lg:py-28">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
          <div>
           
            <h2 className="mt-5 max-w-[16ch] font-display text-[clamp(2.1rem,4.2vw,3.35rem)] leading-[1.05] tracking-[-0.02em] text-ink">
              Una vida escolar que inspira.
            </h2>
          </div>
         
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {VIDA.map((card) => (
            <article key={card.title} className="group">
              <div className="overflow-hidden">
                <img
                  src={card.img}
                  alt={card.alt}
                  loading="lazy"
                  className="aspect-[16/11] w-full rounded-sm object-cover outline outline-1 -outline-offset-1 outline-ink/10 transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </div>
              <div className="mt-6 pt-5">
                <h3 className="font-display text-2xl tracking-[-0.01em] text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink-soft">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
