import PageShell from '../components/layout/PageShell.jsx';
import PageHero from '../components/pages/PageHero.jsx';
import Reveal from '../components/motion/Reveal.jsx';
import RevealStagger from '../components/motion/RevealStagger.jsx';
import { AccordionGroup } from '../components/motion/AccordionGroup.jsx';
import {
  careersPageIntro,
  jobOpenings,
  whatWeOffer,
  applyInfo,
} from '../data/careers.js';

function JobContent({ job }) {
  return (
    <div className="plevid-career-job__grid">
      <div>
        <h3 className="plevid-career-job__label">Qualifications</h3>
        <ul className="plevid-card__list">
          {job.qualifications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="plevid-career-job__label">Key Responsibilities</h3>
        <ul className="plevid-card__list">
          {job.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="plevid-career-job__label">Preferred Skills</h3>
        <ul className="plevid-card__list">
          {job.skills.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function CareersPage() {
  const accordionItems = jobOpenings.map((job) => ({
    id: job.id,
    title: job.title,
    meta: `${job.location} · ${job.positions} Open Position${job.positions > 1 ? 's' : ''}`,
    job,
  }));

  return (
    <PageShell>
      <Reveal>
        <PageHero
          label={careersPageIntro.label}
          title={careersPageIntro.title}
          description={`${careersPageIntro.subtitle}. ${careersPageIntro.description}`}
        />
      </Reveal>

      <section className="plevid-section">
        <div className="plevid-section__inner">
          <AccordionGroup
            items={accordionItems}
            renderContent={(item) => <JobContent job={item.job} />}
          />
        </div>
      </section>

      <section className="plevid-section plevid-section--accent">
        <div className="plevid-section__inner">
          <Reveal>
            <h2 className="plevid-section__display">What We Offer</h2>
          </Reveal>
          <RevealStagger className="plevid-grid plevid-grid--3" stagger={0.08} delay={0.1}>
            {whatWeOffer.map((item) => (
              <div key={item.title} className="plevid-card plevid-card--service plevid-card--interactive">
                <h3 className="plevid-card__title">{item.title}</h3>
                <p className="plevid-card__text">{item.text}</p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="plevid-section">
        <Reveal className="plevid-section__inner plevid-career-apply">
          <h2 className="plevid-section__display">Apply Now</h2>
          <p className="plevid-section__text">
            <a className="plevid-link-accent" href={`mailto:${applyInfo.email}`}>
              {applyInfo.email}
            </a>
          </p>
          <address className="plevid-section__text plevid-career-apply__address">
            {applyInfo.address}
          </address>
        </Reveal>
      </section>
    </PageShell>
  );
}
