import useReveal from '../../hooks/useReveal'
import './CurrentStatus.css'

const learning = ['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'GitHub']
const exploring = ['Mobile App Development', 'React Native', 'Expo']

export default function CurrentStatus() {
  const ref = useReveal()

  return (
    <section className="section status">
      <div className="container reveal status__grid" ref={ref}>
        <div className="status__group">
          <h2 className="status__heading">CURRENTLY LEARNING</h2>
          <ul className="status__tags">
            {learning.map((item) => (
              <li key={item} className="status__tag">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="status__group">
          <h2 className="status__heading">
            <span className="accent">EXPLORING</span>
          </h2>
          <ul className="status__tags">
            {exploring.map((item) => (
              <li key={item} className="status__tag status__tag--accent">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
