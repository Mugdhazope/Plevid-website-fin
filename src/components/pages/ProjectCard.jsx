export default function ProjectCard({ project }) {
  return (
    <article className="plevid-card plevid-card--project">
      <div className="plevid-card__media">
        <img src={project.image} alt={project.title} loading="lazy" />
        <span className={`plevid-card__status plevid-card__status--${project.status.toLowerCase()}`}>
          {project.status}
        </span>
      </div>
      <div className="plevid-card__body">
        <p className="plevid-card__meta">{project.location}</p>
        <h2 className="plevid-card__title">{project.title}</h2>
        <p className="plevid-card__text">{project.description}</p>
      </div>
    </article>
  );
}
