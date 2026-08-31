import PageShell from '../components/layout/PageShell.jsx';
import Reveal from '../components/motion/Reveal.jsx';
import RevealStagger from '../components/motion/RevealStagger.jsx';
import ApproachComparison from '../components/services/ApproachComparison.jsx';
import {
  approachPageIntro,
  approachSteps,
  precisionInDetail,
  whyProjectsFail,
  fromVisionToReality,
} from '../data/services.js';
import '../components/services/services-scroll.css';

export default function ServicesPage() {
  return (
    <PageShell>
      <div className="svc">
        <Reveal>
          <section className="svc-intro">
            <p className="svc-section-label">{approachPageIntro.label}</p>
            <p className="svc-intro__eyebrow">{approachPageIntro.eyebrow}</p>
            <h1 className="svc-intro__title">{approachPageIntro.title}</h1>
            <div className="svc-intro__copy">
              <p>{approachPageIntro.paragraph}</p>
            </div>
          </section>
        </Reveal>

        <section className="svc-approach-steps">
          <div className="svc-approach-steps__grid">
            <RevealStagger className="svc-approach-steps__list" stagger={0.1}>
              {approachSteps.steps.map((step) => (
                <div key={step.number} className="svc-approach-step">
                  <span className="svc-approach-step__num">{step.number}</span>
                  <div>
                    <h3 className="svc-approach-step__title">{step.title}</h3>
                    <p className="svc-approach-step__text">{step.text}</p>
                  </div>
                </div>
              ))}
            </RevealStagger>
            <RevealStagger className="svc-approach-steps__values" stagger={0.08} delay={0.2}>
              {approachSteps.values.map((value) => (
                <div key={value.title} className="svc-approach-value">
                  <h4 className="svc-approach-value__title">{value.title}</h4>
                  <p className="svc-approach-value__text">{value.text}</p>
                </div>
              ))}
            </RevealStagger>
          </div>
          <Reveal>
            <p className="svc-approach-steps__footer">{approachSteps.footer}</p>
            <p className="svc-approach-steps__keywords">{approachSteps.keywords}</p>
          </Reveal>
        </section>

        <section className="plevid-section plevid-section--accent">
          <div className="plevid-section__inner">
            <Reveal>
              <h2 className="plevid-section__display">{precisionInDetail.heading}</h2>
            </Reveal>
            <div className="plevid-section__inner--split" style={{ marginTop: '32px' }}>
              <Reveal delay={0.1}>
                <div>
                  {precisionInDetail.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)} className="plevid-section__text" style={{ marginBottom: '16px' }}>
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
              <RevealStagger className="plevid-grid plevid-grid--2" stagger={0.08}>
                {precisionInDetail.callouts.map((item) => (
                  <div key={item.label} className="plevid-card plevid-card--service plevid-card--interactive">
                    <h3 className="plevid-card__title">{item.label}</h3>
                    <p className="plevid-card__text">{item.detail}</p>
                  </div>
                ))}
              </RevealStagger>
            </div>
          </div>
        </section>

        <Reveal>
          <ApproachComparison
            heading={whyProjectsFail.heading}
            intro={whyProjectsFail.intro}
            mistakes={whyProjectsFail.mistakes}
            approach={whyProjectsFail.approach}
            footer={whyProjectsFail.footer}
          />
        </Reveal>

        <section className="plevid-section">
          <div className="plevid-section__inner">
            <Reveal>
              <h2 className="plevid-section__display">{fromVisionToReality.heading}</h2>
              <p className="plevid-section__eyebrow">{fromVisionToReality.subtitle}</p>
            </Reveal>
            <RevealStagger className="plevid-grid plevid-grid--3" stagger={0.1} delay={0.1}>
              {fromVisionToReality.steps.map((step) => (
                <article key={step.number} className="plevid-card plevid-card--service plevid-card--interactive">
                  <p className="plevid-card__meta">{step.number}</p>
                  <h3 className="plevid-card__title">{step.title}</h3>
                  <ul className="plevid-card__list">
                    {step.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </RevealStagger>
            <Reveal delay={0.2}>
              <p className="plevid-section__text" style={{ marginTop: '48px', maxWidth: '64ch' }}>
                {fromVisionToReality.footer}
              </p>
            </Reveal>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
