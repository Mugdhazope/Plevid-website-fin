export default function PageHero({ label, title, description }) {
  return (
    <header className="plevid-page-hero">
      <div className="plevid-page-hero__inner">
        {label && (
          <p className="plevid-page-hero__label">
            <span className="plevid-page-hero__dot" aria-hidden="true" />
            {label}
          </p>
        )}
        <h1 className="plevid-page-hero__title">{title}</h1>
        {description && <p className="plevid-page-hero__desc">{description}</p>}
      </div>
    </header>
  );
}
