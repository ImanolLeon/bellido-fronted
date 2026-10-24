import { useEffect, useState } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Niveles } from './components/sections/Niveles'
import { Propuesta } from './components/sections/Propuesta'
import { Estadisticas } from './components/sections/Estadisticas'
import { ComoAprendemos } from './components/sections/ComoAprendemos'
import { VidaEscolar } from './components/sections/VidaEscolar'
import { Campus } from './components/sections/Campus'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'

function App() {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const hash = window.location.hash
    if (hash.startsWith('#/')) {
      const clean = hash.slice(1)
      if (clean !== path) {
        window.history.replaceState(null, '', clean)
        setPath(clean)
      }
    } else if (hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
  }, [path])

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash
      if (hash.startsWith('#/')) {
        const clean = hash.slice(1)
        if (clean !== path) {
          setPath(clean)
          window.scrollTo({ top: 0 })
        }
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [path])

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const target = event.target
      if (!(target instanceof Element)) return
      const anchor = target.closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href) return

      if (href.startsWith('#/')) {
        event.preventDefault()
        const clean = href.slice(1)
        window.history.pushState(null, '', clean)
        setPath(clean)
        window.scrollTo({ top: 0 })
        return
      }

      const isInternal = href.startsWith('/') || href.startsWith('#')
      if (!isInternal) return

      event.preventDefault()

      if (href.startsWith('/')) {
        window.history.pushState(null, '', href)
        setPath(window.location.pathname)
        window.scrollTo({ top: 0 })
        return
      }

      const id = href.slice(1)
      if (id === 'login') {
        window.history.pushState(null, '', '/login')
        setPath('/login')
        window.scrollTo({ top: 0 })
        return
      }

      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      window.history.replaceState(null, '', window.location.pathname)
    }

    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  }, [])

  if (path === '/login') {
    return <Login />
  }

  if (path === '/dashboard' || path.startsWith('/dashboard')) {
    return <Dashboard />
  }

  return (
    <div className="bg-paper font-sans text-ink antialiased">
      <Header />
      <main>
        <Hero />
        <Niveles />
        <Propuesta />
        <Estadisticas />
        <ComoAprendemos />
        <VidaEscolar />
        <Campus />
      </main>
      <Footer />
    </div>
  )
}

export default App