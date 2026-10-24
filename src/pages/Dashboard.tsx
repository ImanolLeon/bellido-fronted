import { Sidebar } from '../components/layout/Sidebar'

export function Dashboard() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased">
      <Sidebar />
      <div className="lg:pl-72">
        <header className="sticky top-0 z-30  bg-paper/90 backdrop-blur-md">
          <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
            <div>
             
              <h1 className="mt-2 font-display text-2xl tracking-[-0.01em] text-ink sm:text-3xl">
                Visión general
              </h1>
            </div>
            <button className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-seal">
              Nuevo registro
            </button>
          </div>
        </header>

        <main className="px-5 py-10 sm:px-8 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {[{ label: 'Usuarios', value: '12' }, { label: 'Estudiantes', value: '428' }, { label: 'Apoderados', value: '312' }, { label: 'Matrículas activas', value: '426' }].map(
              (item) => (
                <article key={item.label} className="border border-ink/15 bg-white p-6">
                  <p className="text-sm text-ink-soft">{item.label}</p>
                  <p className="mt-3 font-display text-3xl tracking-[-0.02em] text-ink">{item.value}</p>
                  <div className="mt-4 h-px w-full " />
                  
                </article>
              )
            )}
          </div>

          <section className="mt-10 border border-ink/15 bg-white">
            <div className="flex flex-col gap-4 border-b border-ink/10 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div>
                
                <h2 className="mt-3 font-display text-xl tracking-[-0.01em] text-ink sm:text-2xl">
                  Gestión del sistema
                </h2>
              </div>
            
            </div>
            <div className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: 'Usuarios', desc: 'Gestionar cuentas y accesos' },
                { label: 'Estudiantes', desc: 'Ficha, datos y estado' },
                { label: 'Apoderados', desc: 'Vinculación familiar' },
                { label: 'Matrículas', desc: 'Proceso y seguimiento' },
                { label: 'Grados y Secciones', desc: 'Niveles, secciones y turnos' },
                { label: 'Salones asignados', desc: 'Distribución por año' },
              ].map((card) => (
                <a
                  key={card.label}
                  href="#"
                  className="group flex items-center justify-between gap-4 bg-white px-6 py-5 transition-colors hover:bg-paper sm:px-8"
                >
                  <div>
                    <p className="font-semibold text-ink">{card.label}</p>
                    <p className="mt-1 text-sm text-ink-soft">{card.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
