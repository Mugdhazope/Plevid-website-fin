import PageShell from '../components/layout/PageShell.jsx';
import PageHero from '../components/pages/PageHero.jsx';
import ProductCard from '../components/pages/ProductCard.jsx';
import { products } from '../data/products.js';

export default function ProductsPage() {
  return (
    <PageShell>
      <PageHero
        label="products"
        title="luxury lighting collections"
        description="Curated fixtures sourced from Italy — designed for residential, commercial, and architectural environments."
      />
      <section className="plevid-section">
        <div className="plevid-section__inner">
          <div className="plevid-grid plevid-grid--3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
