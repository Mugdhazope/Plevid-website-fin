import PageShell from '../components/layout/PageShell.jsx';
import PageHero from '../components/pages/PageHero.jsx';
import ComingSoonBadge from '../components/pages/ComingSoonBadge.jsx';
import Reveal from '../components/motion/Reveal.jsx';
import { AccordionGroup } from '../components/motion/AccordionGroup.jsx';
import { experienceCenterContent } from '../data/experienceCenter.js';

export default function ExperienceCenterPage() {
  const items = experienceCenterContent.areas.map((area) => ({
    id: area.id,
    title: area.title,
    meta: null,
    description: area.description,
  }));

  return (
    <PageShell>
      <Reveal>
        <PageHero
          label={experienceCenterContent.label}
          title={experienceCenterContent.title}
          description={experienceCenterContent.subtitle}
        />
      </Reveal>
      <div className="plevid-coming-soon-wrap">
        <ComingSoonBadge />
      </div>
      <section className="plevid-section plevid-section--accent">
        <div className="plevid-section__inner">
          <AccordionGroup
            items={items}
            renderContent={(item) => <p className="plevid-card__text">{item.description}</p>}
          />
        </div>
      </section>
    </PageShell>
  );
}
