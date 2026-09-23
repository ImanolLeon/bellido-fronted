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
      setError('Ingresa tu correo y contraseña.')
      return
    }
    setError('')
    setSuccess(true)
  }

  return (
    <div className="flex min-h-screen bg-mist font-sans text-slate-brand antialiased">
      <div className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6">
        <div className="w-full max-w-md">
          <div className="rounded-3xl bg-white p-8 shadow-xl shadow-navy/5">
            <div className="flex flex-col items-center gap-4">
              <img src={logoUrl} alt="Logo María Parado de Bellido" className="h-16 w-auto" />
              <div className="text-center">
                <h1 className="text-xl font-extrabold tracking-tight text-navy">
                  Portal del estudiante
                </h1>
                <p className="mt-1 text-sm text-slate-brand">
                  Ingresa tus credenciales para continuar.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-navy">dni</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="12345678"
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-navy">Contraseña</span>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                    className="absolute inset-y-0 right-3 flex items-center text-slate-400 transition hover:text-primary"
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
                        <path d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
                        <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                </div>
              </label>

              {error && (
                <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
              )}

              {success && !error && (
                <p className="rounded-lg bg-teal/10 px-3 py-2 text-sm font-semibold text-teal">
                  ¡Sesión iniciada correctamente!
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary-dark"
              >
                Iniciar sesión
              </button>
            </form>

            <div className="mt-6 flex items-center justify-between text-sm">
              <a href="/" className="font-semibold text-primary transition hover:text-primary-dark">
                <svg viewBox="0 0 20 20" fill="currentColor" className="mr-1 inline size-4" aria-hidden="true">
                  <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.06l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 1 1 1.06 1.06l-4.72 4.72h11.19A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
                </svg>
                Volver al inicio
              </a>
              <a href="#" className="text-slate-brand transition hover:text-primary">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Colegio María Parado de Bellido. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}