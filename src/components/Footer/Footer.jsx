import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">
          ALBERT<span className="accent">.DEV</span>
        </span>

        <p className="footer__copy">© {year} ALBERT</p>

        <p className="footer__note">
          Built with curiosity and probably too much coffee.
        </p>
      </div>
    </footer>
  )
}
