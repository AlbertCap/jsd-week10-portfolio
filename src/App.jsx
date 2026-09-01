import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import CurrentStatus from './components/CurrentStatus/CurrentStatus'
import Projects from './components/Projects/Projects'
import Learning from './components/Learning/Learning'
import Journey from './components/Journey/Journey'
import About from './components/About/About'
import TechStack from './components/TechStack/TechStack'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import CaseStudy from './components/CaseStudy/CaseStudy'

export default function App() {
  const [view, setView] = useState('home')
  const pendingSectionId = useRef(null)

  // Runs after switching back to the home view, so it can scroll to the
  // section that was requested while a different view was showing.
  useEffect(() => {
    if (view === 'home' && pendingSectionId.current) {
      const id = pendingSectionId.current
      pendingSectionId.current = null
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView()
      })
    } else if (view === 'case-study') {
      window.scrollTo(0, 0)
    }
  }, [view])

  function goToSection(id) {
    if (view === 'home') {
      document.getElementById(id)?.scrollIntoView()
    } else {
      pendingSectionId.current = id
      setView('home')
    }
  }

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar onNavigate={goToSection} />
      <main id="main-content">
        {view === 'home' ? (
          <>
            <Hero />
            <CurrentStatus />
            <Projects onViewCaseStudy={() => setView('case-study')} />
            <Learning />
            <Journey />
            <About />
            <TechStack />
            <Contact />
          </>
        ) : (
          <CaseStudy onBack={() => goToSection('work')} />
        )}
      </main>
      <Footer />
    </>
  )
}
