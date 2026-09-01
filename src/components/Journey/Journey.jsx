import useReveal from '../../hooks/useReveal'
import './Journey.css'

const steps = [
  {
    title: "Bachelor's Degree in Investment Informatics",
    org: 'Rangsit University',
    location: 'Pathum Thani, Thailand',
    date: 'December 2025',
    details: [
      'Learned programming fundamentals and algorithms using Python.',
      'Studied databases and web development as part of the coursework.',
    ],
  },
  {
    title: 'Associate Financial Advisor',
    org: 'Metta Associates',
    location: 'Nonthaburi',
    date: 'July 2025 – May 2026',
    details: [
      'Built custom Python scripts to calculate and visualize investment statistics and risk metrics.',
      'Used data analysis to turn raw financial data into clear visualizations.',
    ],
  },
  {
    title: 'Junior Software Developer in Training',
    org: 'Generation Coding Bootcamp',
    location: null,
    date: 'June 2026 – September 2026',
    details: [
      'Learning to build full-stack web applications with the MERN stack.',
      'Practicing with MongoDB, Express.js, React, and Node.js.',
    ],
    current: true,
  },
]

export default function Journey() {
  const ref = useReveal()

  return (
    <section className="section journey">
      <div className="container reveal" ref={ref}>
        <h2 className="eyebrow">My Journey</h2>

        <ol className="journey__timeline">
          {steps.map((step) => (
            <li
              key={step.title}
              className={`journey__step ${step.current ? 'journey__step--current' : ''}`}
            >
              <div className="journey__step-header">
                <h3 className="journey__step-title">{step.title}</h3>
                <span className="journey__step-date">{step.date}</span>
              </div>

              <p className="journey__step-org">
                {step.org}
                {step.location && ` · ${step.location}`}
                {step.current && (
                  <span className="journey__step-badge">In Progress</span>
                )}
              </p>

              <ul className="journey__step-list">
                {step.details.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
