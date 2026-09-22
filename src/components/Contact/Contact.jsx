import { useState } from 'react'
import useReveal from '../../hooks/useReveal'
import './Contact.css'

const EMAIL = 'albert.phonbut@gmail.com'

const links = [
  { label: 'GitHub', href: 'https://github.com/AlbertCap' },
  { label: 'LinkedIn', href: 'www.linkedin.com/in/albert-phonbut' },
]

function CopyIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function Contact() {
  const ref = useReveal()
  const [copied, setCopied] = useState(false)

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container reveal" ref={ref}>
        <h2 className="contact__heading">
          LET'S BUILD
          <br />
          <span className="accent">SOMETHING.</span>
        </h2>

        <p className="contact__subtext">
          I'm currently looking for Junior Software Developer opportunities.
        </p>

        <ul className="contact__links">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="contact__link"
                target="_blank"
                rel="noreferrer"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}

          <li>
            <button
              type="button"
              className={`contact__link ${copied ? 'contact__link--copied' : ''}`}
              onClick={handleCopyEmail}
            >
              Email
              <span aria-hidden="true">{copied ? <CheckIcon /> : <CopyIcon />}</span>
              <span className="sr-only" aria-live="polite">
                {copied ? 'Email address copied to clipboard' : ''}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </section>
  )
}
