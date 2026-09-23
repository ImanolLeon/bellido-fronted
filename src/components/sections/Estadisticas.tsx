const ESTADISTICAS = [
  { value: '25+', label: 'años educando' },
  { value: '92%', label: 'de familias nos recomienda' },
  { value: '18', label: 'alumnos por aula' },
  { value: '14', label: 'talleres y clubes' },
]

export function Estadisticas() {
  return (
    <section className="bg-primary py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 text-center sm:px-6 lg:grid-cols-4 lg:px-8">
        {ESTADISTICAS.map((s) => (
          <div key={s.label}>
            <p className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{s.value}</p>
            <p className="mx-auto mt-2 max-w-[12rem] text-sm font-medium text-white/75">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}