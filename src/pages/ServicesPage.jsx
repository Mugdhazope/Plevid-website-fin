import PageShell from '../components/layout/PageShell.jsx';
import ServicesTimeline from '../components/services/ServicesTimeline.jsx';
import {
  servicesPageIntro,
  servicesWhatWeDo,
  servicesHowWeWork,
  servicesDifferentiators,
} from '../data/services.js';
import '../components/services/services-scroll.css';

export default function ServicesPage() {
  return (
    <PageShell>
      <div className="svc">
        <section className="svc-intro">
          <p className="svc-section-label">{servicesPageIntro.label}</p>
          <p className="svc-intro__eyebrow">{servicesPageIntro.eyebrow}</p>
          <h1 className="svc-intro__title">{servicesPageIntro.title}</h1>
          <div className="svc-intro__copy">
            {servicesPageIntro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <ServicesTimeline
          heading={servicesWhatWeDo.heading}
          items={servicesWhatWeDo.items}
        />

        <ServicesTimeline
          heading={servicesHowWeWork.heading}
          subheading={servicesHowWeWork.subheading}
          items={servicesHowWeWork.items}
        />

        <ServicesTimeline
          heading={servicesDifferentiators.heading}
          items={servicesDifferentiators.items}
        />
      </div>
    </PageShell>
  );
}
