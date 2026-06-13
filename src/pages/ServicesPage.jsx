import PageShell from '../components/layout/PageShell.jsx';
import PageHero from '../components/pages/PageHero.jsx';
import ServiceCard from '../components/pages/ServiceCard.jsx';
import { services } from '../data/services.js';

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        label="services"
        title="design, customization & installation"
        description="End-to-end lighting services — from concept and specification through bespoke customization and on-site execution."
      />
      <section className="plevid-section">
        <div className="plevid-section__inner plevid-grid plevid-grid--3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
