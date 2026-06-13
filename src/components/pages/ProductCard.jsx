export default function ProductCard({ product }) {
  return (
    <article className="plevid-card plevid-card--product">
      <div className="plevid-card__media">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="plevid-card__body">
        <span className="plevid-card__tag">{product.category}</span>
        <h2 className="plevid-card__title">{product.name}</h2>
        <p className="plevid-card__text">{product.description}</p>
      </div>
    </article>
  );
}
