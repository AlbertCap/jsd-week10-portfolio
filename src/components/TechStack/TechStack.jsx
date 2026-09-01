import useReveal from '../../hooks/useReveal'
import './TechStack.css'

const categories = [
  { label: 'Language', items: ['JavaScript'] },
  { label: 'Frontend', items: ['HTML', 'CSS', 'React'] },
  { label: 'Backend', items: ['Node.js', 'Express.js'] },
  { label: 'Database', items: ['MongoDB'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
  { label: 'Exploring', items: ['React Native', 'Expo'], accent: true },
]

export default function TechStack() {
  const ref = useReveal()

  return (
    <section className="section tech-stack">
      <div className="container">
        <h2 className="eyebrow">Tech Stack</h2>

        <div className="reveal tech-stack__grid" ref={ref}>
          {categories.map((category) => (
            <div key={category.label} className="tech-stack__group">
              <h3
                className={`tech-stack__label ${
                  category.accent ? 'accent' : ''
                }`}
              >
                {category.label}
              </h3>
              <ul>
                {category.items.map((item) => (
                  <li key={item} className="tech-stack__item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
