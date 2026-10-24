const ESTADISTICAS = [
  { value: '25+', label: 'años educando en Chiclayo' },
  { value: '92%', label: 'de familias nos recomienda' },
  { value: '18', label: 'estudiantes por aula' },
  { value: '14', label: 'talleres y clubes' },
]

export function Estadisticas() {
  return (
    <section className="bg-ink py-16 text-paper lg:py-20">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-10">
          {ESTADISTICAS.map((stat) => (
            <div key={stat.label} >
              <p className="font-display text-4xl leading-none tracking-[-0.02em] sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 max-w-[13rem] text-sm leading-snug text-paper/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
