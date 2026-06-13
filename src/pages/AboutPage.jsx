import PageShell from '../components/layout/PageShell.jsx';
import PageHero from '../components/pages/PageHero.jsx';

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        label="about us"
        title="architectural lighting, thoughtfully delivered"
        description="Plevid is a luxury lighting brand based in Mumbai, sourcing premium designs from Italy and delivering bespoke lighting experiences across India."
      />
      <section className="plevid-section">
        <div className="plevid-section__inner plevid-section__inner--split">
          <div>
            <h2 className="plevid-section__title">who we are</h2>
            <p className="plevid-section__text">
              We create lighting experiences that enhance architecture, interiors, and mood with
              precision and elegance. From residential sanctuaries to commercial landmarks, every
              project is approached with the same commitment to craft and clarity.
            </p>
          </div>
          <div>
            <h2 className="plevid-section__title">what we believe</h2>
            <p className="plevid-section__text">
              Light is not an afterthought — it defines how spaces are felt. We partner with
              architects, designers, and developers to integrate lighting that is functional,
              sustainable, and unmistakably refined.
            </p>
          </div>
        </div>
      </section>
      <section className="plevid-section plevid-section--accent">
        <div className="plevid-section__inner">
          <p className="plevid-section__eyebrow">Based in Mumbai</p>
          <h2 className="plevid-section__display">Lighting across India</h2>
        </div>
      </section>
    </PageShell>
  );
}
