import logoUrl from '../../../img/logo.png'

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3">
      <img
        src={logoUrl}
        alt="Logo del Colegio María Parado de Bellido"
        className="h-10 w-auto"
        width={40}
        height={44}
      />
      <span className="leading-tight">
        <span
          className={`block font-display text-[15px] tracking-[-0.01em] ${
            dark ? 'text-paper' : 'text-ink'
          }`}
        >
          María Parado de Bellido
        </span>
        <span
          className={`mt-0.5 block text-[11px] font-medium ${
            dark ? 'text-paper/60' : 'text-ink-soft'
          }`}
        >
          Colegio en Chiclayo
        </span>
      </span>
    </a>
  )
}
