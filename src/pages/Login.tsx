import { useState } from 'react'
import logoUrl from '../../img/logo.png'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email || !password) {
      setError('Ingresa tu DNI o correo y contraseña.')
      return
    }
    setError('')
    setSuccess(true)
  }

  return (
    <div className="flex min-h-screen bg-paper font-sans text-ink antialiased">
      <div className=" pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-md flex-col justify-center px-5 py-12">
        <div className="mb-10 flex flex-col items-center text-center">
          <img
            src={logoUrl}
            alt="Logo del Colegio María Parado de Bellido"
            className="h-14 w-auto"
            width={56}
            height={62}
          />
          <p className="mt-4 font-display text-xl tracking-[-0.01em] text-ink">
            María Parado de Bellido
          </p>
        </div>

        <div className="letter-card rounded-xl bg-white">
          <div className=" py-6 sm:px-8">
            <h1 className="mt-4 font-display text-2xl tracking-[-0.01em] text-ink sm:text-3xl">
              Inicia sesión
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Usa tus credenciales para acceder a tu espacio.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-6 py-6 sm:px-8">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-ink">DNI o correo electrónico</span>
              <input
                type="text"
                inputMode="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu DNI o correo"
                className="w-full border border-ink/20 bg-transparent px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/70 focus:border-seal"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-ink">Contraseña</span>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa tu contraseña"
                  className="w-full border border-ink/20 bg-transparent px-4 py-2.5 pr-11 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/70 focus:border-seal"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                  className="absolute inset-y-0 right-3 flex items-center text-ink-soft transition-colors hover:text-ink"
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-5" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-5" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </label>

            {error && (
              <p className="border border-seal/40 bg-seal-soft px-3 py-2 text-sm text-seal">
                {error}
              </p>
            )}

            {success && !error && (
              <p className="border border-chalk/40 px-3 py-2 text-sm font-medium text-chalk">
                Sesión iniciada correctamente.
              </p>
            )}

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-seal"
            >
              Iniciar sesión
            </button>
          </form>

          <div className="flex flex-col gap-2 px-6 py-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <a href="/" className="font-semibold text-ink transition-colors hover:text-seal">
              Volver al inicio
            </a>
            <a href="#" className="text-ink-soft transition-colors hover:text-ink">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-ink-soft/80">
          © {new Date().getFullYear()} Colegio María Parado de Bellido. Todos los derechos reservados.
        </p>
      </div>
    </div>
  )
}
