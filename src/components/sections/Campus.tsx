import { IMG } from '../../data/images'

const CAMPUS_CK = [
  'Biblioteca y mediateca',
  'Laboratorios de ciencias',
  'Polideportivo y patios verdes',
  'Aulas de música y arte',
]

export function Campus() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-7">
            <img
              src={IMG.campus}
              alt="Campus del colegio con áreas verdes"
              loading="lazy"
              className="aspect-[16/10] w-full rounded-sm object-cover outline outline-1 -outline-offset-1 outline-ink/10"
            />
          </div>
          <div className="lg:col-span-5">
            <h2 className="mt-5 max-w-[14ch] font-display text-[clamp(2.1rem,4.2vw,3.35rem)] leading-[1.05] tracking-[-0.02em] text-ink">
              Un campus abierto al descubrimiento.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Entornos amplios, seguros y luminosos diseñados para que cada estudiante encuentre
              su rincón favorito para imaginar, crear y convivir.
            </p>
            <ul className="mt-8 space-y-4">
              {CAMPUS_CK.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-ink">
                  <span className="mt-1 size-1.5 rounded-full bg-seal" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
