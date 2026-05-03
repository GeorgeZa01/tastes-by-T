import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import WelcomeModal from './components/WelcomeModal'
import { CATEGORIES } from './data/categories'
import './App.css'

function App() {
  const [hash, setHash] = useState(() => window.location.hash.slice(1) || 'home')
  const [showWelcome, setShowWelcome] = useState(() => !sessionStorage.getItem('tastesbyt-welcome-seen'))

  useEffect(() => {
    if (!window.location.hash || window.location.hash === '#') {
      window.location.hash = '#home'
    }

    const syncHash = () => {
      setHash(window.location.hash.slice(1) || 'home')
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', syncHash)
    return () => window.removeEventListener('hashchange', syncHash)
  }, [])

  const handleNavigate = (target: string) => {
    const normalizedHash = target.startsWith('#') ? target : `#${target}`
    window.location.hash = normalizedHash
  }

  const closeWelcome = () => {
    sessionStorage.setItem('tastesbyt-welcome-seen', 'true')
    setShowWelcome(false)
  }

  const page = useMemo(() => {
    if (hash === 'home' || hash === '') {
      return <HomePage onNavigate={handleNavigate} />
    }

    if (hash.startsWith('category/')) {
      const categoryId = hash.split('/')[1]
      const category = CATEGORIES.find((item) => item.id === categoryId)
      return <CategoryPage category={category} onNavigate={handleNavigate} />
    }

    return (
      <section className="not-found page-fade">
        <h1>Sweet Spot Not Found</h1>
        <p>Oops, that page is not on the menu.</p>
        <button className="btn-primary" onClick={() => handleNavigate('home')}>Return Home</button>
      </section>
    )
  }, [hash])

  return (
    <>
      {showWelcome && <WelcomeModal onClose={closeWelcome} onNavigate={handleNavigate} />}
      <Header onNavigate={handleNavigate} />
      <main>{page}</main>
      <Footer />
    </>
  )
}

export default App
