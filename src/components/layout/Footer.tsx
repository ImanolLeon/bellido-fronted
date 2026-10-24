import { Logo } from './Logo'

const COLEGIO = [
  { label: 'El colegio', href: '#propuesta' },
  { label: 'Niveles', href: '#niveles' },
  { label: 'Vida escolar', href: '#vida-escolar' },
  { label: 'Espacios', href: '#top' },
]

const ADMISIONES = [
  { label: 'Agendar una visita', href: '#admisiones' },
  { label: 'Preguntas frecuentes', href: '#admisiones' },
  { label: 'Contacto', href: '#admisiones' },
]

export function Footer() {
  return (
    <footer id="admisiones" className="bg-ink text-paper">
      <div className="container-page pt-16 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-16">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/70">
              Formamos personas capaces, seguras y comprometidas con su comunidad desde 1998.
            </p>
            <p className="mt-6 text-sm text-paper/60">
              Av. Luis Gonzales 1234, Chiclayo, Perú
              <br />
              (074) 452-1288 · admisiones@mariaparado.edu.pe
            </p>
          </div>

          <div>
            <p className="flex items-center gap-3 text-[25px] font-semibold text-paper/70">
              Colegio
            </p>
            <ul className="mt-5 space-y-3">
              {COLEGIO.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-paper/80 transition-colors hover:text-paper">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="flex items-center gap-3 text-[25px] font-semibold text-paper/70">
             Adminiciones
             
            </p>
            <ul className="mt-5 space-y-3">
              {ADMISIONES.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-paper/80 transition-colors hover:text-paper">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4  py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-paper/50">
            © {new Date().getFullYear()} Colegio María Parado de Bellido. Todos los derechos reservados.
          </p>
          <p className="text-sm text-paper/40">
            Chiclayo · Lambayeque · Perú
          </p>
        </div>
      </div>
    </footer>
  )
}
