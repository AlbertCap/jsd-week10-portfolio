import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="hero__greeting hero__line">HELLO, I'M ALBERT 👋</p>

        <h1 className="hero__title hero__line">
          SOFTWARE
          <br />
          DEVELOPER
          <br />
          IN <span className="accent">PROGRESS.</span>
        </h1>

        <p className="hero__tagline hero__line">
          Learning. Building. Exploring.
        </p>

        <div className="hero__actions hero__line">
          <a href="#work" className="hero__cta">
            SEE WHAT I'M BUILDING <span aria-hidden="true">→</span>
          </a>
          <a
            href="https://github.com/AlbertCap"
            className="hero__secondary"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
