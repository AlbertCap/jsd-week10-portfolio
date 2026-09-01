import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile menu whenever the viewport grows back to desktop size.
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 641px)')
    const handleChange = (e) => {
      if (e.matches) setMenuOpen(false)
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  function handleNavigate(id, event) {
    event.preventDefault()
    setMenuOpen(false)
    onNavigate(id)
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a
          href="#top"
          className="navbar__logo"
          onClick={(e) => handleNavigate('top', e)}
        >
          ALBERT<span className="accent">.DEV</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavigate(link.id, e)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="navbar__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`navbar__mobile-menu ${menuOpen ? 'is-open' : ''}`}
        aria-label="Mobile"
        hidden={!menuOpen}
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => handleNavigate(link.id, e)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
