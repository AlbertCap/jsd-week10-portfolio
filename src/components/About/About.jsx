import useReveal from '../../hooks/useReveal'
import './About.css'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section about">
      <div className="container reveal about__inner" ref={ref}>
        <h2 className="eyebrow">A Little About Me</h2>

        <p className="about__paragraph">
          I'm currently transitioning into software development and learning
          how to turn ideas into working applications.
        </p>

        <p className="about__paragraph">
          I enjoy understanding how things work, breaking problems down, and
          building things from scratch.
        </p>

        <p className="about__paragraph">
          Right now, I'm focused on becoming a better developer and exploring{' '}
          <span className="accent">mobile app development.</span>
        </p>
      </div>
    </section>
  )
}
