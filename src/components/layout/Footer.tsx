import { Logo } from './Logo'

const SOCIALS: Array<{ name: string; href: string; d: string }> = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com',
    d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/p/Heroina-Mar%C3%ADa-Parado-de-Bellido-100057427570970/',
    d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com',
    d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM7.119 20.452H3.555V9h3.564v11.452Z',
  },
]

const FOOTER_COLEGIO = [
  ['Proyecto educativo', '#propuesta'],
  ['Primaria', '#niveles'],
  ['Secundaria', '#niveles'],
  ['Vida escolar', '#vida-escolar'],
] as const

const FOOTER_ADMISIONES = [
  'Proceso de ingreso',
  'Aranceles',
  'Preguntas frecuentes',
  'Solicitar entrevista',
] as const

export function Footer() {
  return (
    <footer id="admisiones" className="bg-navy-deep pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Formamos personas capaces, seguras y comprometidas con su comunidad desde 1998.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-sun">Colegio</h4>
            <ul className="space-y-3 text-sm">
              {FOOTER_COLEGIO.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-white/70 transition hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-sun">Admisiones</h4>
            <ul className="space-y-3 text-sm">
              {FOOTER_ADMISIONES.map((label) => (
                <li key={label}>
                  <a href="#top" className="text-white/70 transition hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-sun">Contacto</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 size-4 shrink-0 text-teal">
                  <path
                    fillRule="evenodd"
                    d="m9.69 18.933.003.001c.179.088.425.085.603 0a1.456 1.456 0 0 0 .216-.52c.102-.326.913-2.89 2.887-4.863 1.98-1.98 4.146-2.452 4.366-2.486a.75.75 0 0 0 .702-.911c-.073-.33-.534-2.366-2.25-4.083-.916-.916-2.114-1.416-3.59-1.421C10.245 5.16 7.3 6.32 5.554 8.066c-1.743 1.744-2.918 4.66-2.91 6.398v.003l.099 1.108c.012.142.098.269.23.32.135.056.288.027.407-.07l1.21-.982 1.665-1.35 3.17-2.57.349-.283.37.26c.94.66 1.7 1.507 2.26 2.451l.278.467-.476.388-.532.43-1.547 1.253a.75.75 0 0 0 .926 1.18l-.004-.02Zm-1.364-3.791Z"
                  />
                </svg>
                Av. Luis Gonzales 1234, Chiclayo, Perú
              </li>
              <li className="flex items-center gap-2.5">
                <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 size-4 shrink-0 text-teal">
                  <path
                    fillRule="evenodd"
                    d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95.381 1.845 1.575 3.923 3.412 5.45.92.765 2.125 1.322 3.55 1.508.394.052.78-.132.927-.508l.423-1.086a1.5 1.5 0 0 1 1.587-.899l2.958.481a1.5 1.5 0 0 1 1.296 1.481V16.5a1.5 1.5 0 0 1-1.5 1.5h-.165C7.935 18 2 12.065 2 4.665V3.5Z"
                  />
                </svg>
                (074) 452-1288
              </li>
              <li className="flex items-center gap-2.5">
                <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 size-4 shrink-0 text-teal">
                  <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                  <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                </svg>
                admisiones@mariaparado.edu.pe
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 py-7 sm:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Colegio María Parado de Bellido. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-primary hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
                  <path d={social.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}