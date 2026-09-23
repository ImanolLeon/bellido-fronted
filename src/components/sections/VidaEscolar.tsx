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
    <section id="vida-escolar" className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-sun">
              MUCHO MÁS QUE AULAS
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
              Una vida escolar que inspira
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-white/70 lg:pb-2">
            Talleres, clubes y encuentros que encienden intereses y crean amistades que duran
            toda la vida.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {VIDA.map((c) => (
            <article
              key={c.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/10 transition hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <img
                  src={c.img}
                  alt={c.alt}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-7">
                <h3 className="text-xl font-extrabold text-navy">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-brand">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}