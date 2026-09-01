import useReveal from '../../hooks/useReveal'
import project from '../../data/project'
import './Projects.css'

export default function Projects({ onViewCaseStudy }) {
  const ref = useReveal()

  return (
    <section id="work" className="section projects">
      <div className="container">
        <h2 className="eyebrow">Selected Work</h2>

        <article className="reveal featured-project" ref={ref}>
          <div className="featured-project__preview">
            <img
              src={project.images.home.src}
              alt={project.images.home.alt}
              loading="lazy"
            />
          </div>

          <div className="featured-project__body">
            <span className="featured-project__status">
              <span className="featured-project__status-dot" aria-hidden="true" />
              {project.status.toUpperCase()}
            </span>

            <h3 className="featured-project__title">{project.title}</h3>
            <p className="featured-project__category">{project.category}</p>

            <p className="featured-project__description">
              {project.shortDescription}
            </p>

            <p className="featured-project__tech">
              {project.technologies.join(' · ')}
            </p>

            <button
              type="button"
              className="featured-project__link"
              onClick={onViewCaseStudy}
            >
              VIEW CASE STUDY <span aria-hidden="true">→</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}
