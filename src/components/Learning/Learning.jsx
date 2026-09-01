import useReveal from '../../hooks/useReveal'
import './Learning.css'

const topics = [
  {
    number: '01',
    title: 'JavaScript',
    description: 'Building a strong foundation in modern JavaScript and programming fundamentals.',
  },
  {
    number: '02',
    title: 'React',
    description: 'Learning components, props, state, events and application structure.',
  },
  {
    number: '03',
    title: 'Backend',
    description: 'Exploring Node.js, Express.js, REST APIs and databases.',
  },
  {
    number: '04',
    title: 'Mobile',
    description: 'Exploring mobile application development as my next direction.',
  },
]

export default function Learning() {
  return (
    <section className="section learning">
      <div className="container">
        <h2 className="eyebrow">What I'm Learning</h2>

        <ul className="learning__list">
          {topics.map((topic) => (
            <TopicItem key={topic.number} topic={topic} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function TopicItem({ topic }) {
  const ref = useReveal()

  return (
    <li className="reveal learning__item" ref={ref}>
      <span className="learning__number">{topic.number}</span>
      <div>
        <h3 className="learning__title">{topic.title}</h3>
        <p className="learning__description">{topic.description}</p>
      </div>
    </li>
  )
}
