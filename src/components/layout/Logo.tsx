import logoUrl from '../../../img/logo.png'

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3">
      <img src={logoUrl} alt="Logo María Parado de Bellido" className="h-11 w-auto" />
      <span className="leading-tight">
        <span className={`block text-sm font-extrabold tracking-tight ${dark ? 'text-white' : 'text-navy'}`}>
          María Parado de Bellido
        </span>
        <span className={`block text-[11px] font-semibold tracking-[0.25em] ${dark ? 'text-white/60' : 'text-primary'}`}>
          CHICLAYO
        </span>
      </span>
    </a>
  )
}