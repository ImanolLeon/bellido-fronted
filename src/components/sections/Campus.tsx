import { IMG } from '../../data/images'
import { Label } from '../ui/Label'

const CAMPUS_CK = [
  'Biblioteca y mediateca',
  'Laboratorios de ciencias',
  'Polideportivo y patios verdes',
  'Aulas de música y arte',
]

export function Campus() {
  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-0 lg:px-8">
        <div className="overflow-hidden rounded-3xl lg:rounded-r-none">
          <img
            src={IMG.campus}
            alt="Campus del colegio con áreas verdes"
            className="h-full min-h-[22rem] w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center rounded-3xl bg-white p-8 shadow-md shadow-navy/5 sm:p-12 lg:rounded-l-none">
          <Label>ESPACIOS QUE EDUCAN</Label>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            Un campus abierto al descubrimiento
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-brand">
            Entornos amplios, seguros y luminosos diseñados para que cada estudiante encuentre
            su rincón favorito para imaginar, crear y convivir.
          </p>
          <ul className="mt-8 space-y-4">
            {CAMPUS_CK.map((c) => (
              <li key={c} className="flex items-center gap-3 text-base font-semibold text-navy">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}