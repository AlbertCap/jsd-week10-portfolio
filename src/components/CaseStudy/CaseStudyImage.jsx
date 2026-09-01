import useReveal from '../../hooks/useReveal'

export default function CaseStudyImage({ image, caption }) {
  const ref = useReveal()

  return (
    <figure className="reveal case-study__figure" ref={ref}>
      <div className="case-study__image-frame">
        <img src={image.src} alt={image.alt} loading="lazy" />
      </div>
      {caption && <figcaption className="case-study__caption">{caption}</figcaption>}
    </figure>
  )
}
