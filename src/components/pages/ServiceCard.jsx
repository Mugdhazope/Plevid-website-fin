export default function ServiceCard({ service }) {
  return (
    <article className="plevid-card plevid-card--service">
      <span className="plevid-card__number">{service.number}</span>
      <h2 className="plevid-card__title">{service.title}</h2>
      <p className="plevid-card__text">{service.description}</p>
      <ul className="plevid-card__list">
        {service.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}
