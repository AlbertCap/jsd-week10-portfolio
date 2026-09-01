import useReveal from '../../hooks/useReveal'
import project from '../../data/project'
import CaseStudyImage from './CaseStudyImage'
import './CaseStudy.css'

const overviewAreas = [
  'Product browsing',
  'Product search',
  'Shopping cart',
  'Customized bouquet',
  'Customer accounts',
  'Order management',
  'Product management',
  'Inventory management',
  'Administrative dashboard',
]

const learnings = [
  'Structuring a larger web application',
  'Working with JavaScript across the stack',
  'Connecting frontend concepts with backend functionality',
  'Working with MongoDB and thinking about data relationships',
  'Designing application flows',
  'Working as part of a development team',
  'Turning requirements into application features',
]

export default function CaseStudy({ onBack }) {
  const overviewRef = useReveal()
  const roleRef = useReveal()
  const learnedRef = useReveal()
  const statusRef = useReveal()

  const isPlaceholderLink = project.github.startsWith('[')

  return (
    <article className="case-study">
      <section className="case-study__hero">
        <div className="container">
          <p className="eyebrow">Case Study</p>

          <h1 className="case-study__title">{project.title}</h1>
          <p className="case-study__category">{project.category}</p>

          <div className="case-study__meta">
            <span className="case-study__status">
              <span className="case-study__status-dot" aria-hidden="true" />
              {project.status.toUpperCase()}
            </span>
            <span className="case-study__type">{project.type}</span>
          </div>

          <p className="case-study__intro">{project.shortDescription}</p>
        </div>
      </section>

      <section className="section case-study__section">
        <div className="container">
          <h2 className="eyebrow">Customer Experience</h2>
          <p className="case-study__text">
            The customer-facing interface is designed around browsing flower
            products and exploring customized arrangements, including a
            shopping cart and customer account area.
          </p>

          <CaseStudyImage image={project.images.home} caption="Home page" />

          <div className="case-study__highlight">
            <h3 className="case-study__highlight-title">
              Design Your Perfect Arrangement
            </h3>
            <p className="case-study__text">
              The application includes a concept for letting customers
              customize their flower arrangement by choosing different
              components, such as the flowers, vessel, and accents.
            </p>
          </div>
        </div>
      </section>

      <section className="section case-study__section">
        <div className="container reveal" ref={overviewRef}>
          <h2 className="eyebrow">Project Overview</h2>
          <p className="case-study__text">{project.description}</p>
          <p className="case-study__text">
            The application explores both customer-facing features and
            administrative functionality. Some areas are designed to
            support the flow below; others are still currently being
            developed or planned within the project.
          </p>

          <ul className="case-study__tag-list">
            {overviewAreas.map((area) => (
              <li key={area} className="case-study__tag">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section case-study__section">
        <div className="container">
          <h2 className="eyebrow">Admin Side</h2>
          <p className="case-study__text">
            The project also includes an administrative side for managing
            the E-commerce system. The dashboard concept covers areas such
            as products, orders, inventory, customers, content, and data
            visualization. Not all dashboard functionality is complete.
          </p>

          <CaseStudyImage
            image={project.images.adminDashboard}
            caption="Admin dashboard overview"
          />
        </div>
      </section>

      <section className="section case-study__section">
        <div className="container">
          <h2 className="eyebrow">Customer Account</h2>
          <p className="case-study__text">
            The customer account interface is designed to let users manage
            their profile and access information related to their shopping
            experience — things like personal information, purchases, saved
            bouquet designs, addresses, and favorites. These are not all
            production-ready yet.
          </p>

          <CaseStudyImage
            image={project.images.profile}
            caption="Customer account"
          />
        </div>
      </section>

      <section className="section case-study__section">
        <div className="container">
          <h2 className="eyebrow">System Design</h2>
          <p className="case-study__text">
            The use case diagram maps the main interactions between
            customers and administrators and the functionality of the
            E-commerce application.
          </p>

          <CaseStudyImage
            image={project.images.useCaseDiagram}
            caption="Use case diagram"
          />
        </div>
      </section>

      <section className="section case-study__section">
        <div className="container">
          <h2 className="eyebrow">Database Design</h2>
          <p className="case-study__text">
            The project uses MongoDB as the database, and the data model was
            designed around the application's main entities and
            relationships.
          </p>

          <CaseStudyImage
            image={project.images.erDiagram}
            caption="MongoDB data model"
          />
        </div>
      </section>

      <section className="section case-study__section">
        <div className="container">
          <h2 className="eyebrow">Technology</h2>
          <ul className="case-study__tag-list">
            {project.technologies.map((tech) => (
              <li key={tech} className="case-study__tag case-study__tag--accent">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section case-study__section">
        <div className="container reveal" ref={roleRef}>
          <h2 className="eyebrow">My Role</h2>
          <p className="case-study__text">
            This is a group project developed as part of my software
            development bootcamp. The project gave me hands-on experience
            working with frontend development, backend concepts, database
            design, and collaborating on a larger application.
          </p>
          <p className="case-study__text case-study__placeholder">
            [ADD MY SPECIFIC CONTRIBUTION]
          </p>
        </div>
      </section>

      <section className="section case-study__section">
        <div className="container reveal" ref={learnedRef}>
          <h2 className="eyebrow">What I Learned</h2>
          <ul className="case-study__list">
            {learnings.map((item) => (
              <li key={item} className="case-study__list-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section case-study__status-section">
        <div className="container reveal case-study__status-inner" ref={statusRef}>
          <span className="case-study__status case-study__status--large">
            <span className="case-study__status-dot" aria-hidden="true" />
            IN DEVELOPMENT
          </span>

          {isPlaceholderLink ? (
            <span className="case-study__repo-link case-study__repo-link--placeholder">
              VIEW GITHUB ↗ — {project.github}
            </span>
          ) : (
            <a
              href={project.github}
              className="case-study__repo-link"
              target="_blank"
              rel="noreferrer"
            >
              VIEW GITHUB <span aria-hidden="true">↗</span>
            </a>
          )}

          <button type="button" className="case-study__back" onClick={onBack}>
            <span aria-hidden="true">←</span> BACK TO WORK
          </button>
        </div>
      </section>
    </article>
  )
}
