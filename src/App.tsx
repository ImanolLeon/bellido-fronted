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

function App() {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const hash = window.location.hash
    if (hash.startsWith('#/')) {
      window.history.replaceState(null, '', hash.slice(1))
      setPath(hash.slice(1))
    } else if (hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
  }, [])

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

  return (
    <div className="bg-white font-sans text-slate-brand antialiased">
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