import { useState } from 'react';
import PageShell from '../components/layout/PageShell.jsx';
import PageHero from '../components/pages/PageHero.jsx';
import ComingSoonBadge from '../components/pages/ComingSoonBadge.jsx';
import Reveal from '../components/motion/Reveal.jsx';
import RevealStagger from '../components/motion/RevealStagger.jsx';
import { knowledgeHubContent } from '../data/knowledgeHub.js';

export default function KnowledgeHubPage() {
  const [activeTopic, setActiveTopic] = useState(knowledgeHubContent.topics[0].id);

  return (
    <PageShell>
      <Reveal>
        <PageHero
          label={knowledgeHubContent.label}
          title={knowledgeHubContent.title}
          description={knowledgeHubContent.subtitle}
        />
      </Reveal>
      <div className="plevid-coming-soon-wrap">
        <ComingSoonBadge />
      </div>

      <section className="plevid-section">
        <div className="plevid-section__inner">
          <Reveal>
            <div className="plevid-topic-tabs" role="tablist" aria-label="Knowledge topics">
              {knowledgeHubContent.topics.map((topic) => (
                <button
                  key={topic.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTopic === topic.id}
                  className={`plevid-topic-tabs__btn${activeTopic === topic.id ? ' is-active' : ''}`}
                  onClick={() => setActiveTopic(topic.id)}
                >
                  {topic.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </Reveal>

          <RevealStagger className="plevid-grid plevid-grid--3" stagger={0.06}>
            {knowledgeHubContent.topics.map((topic) => (
              <article
                key={topic.id}
                id={topic.id}
                className={`plevid-card plevid-card--service plevid-card--interactive${
                  activeTopic === topic.id ? ' is-highlighted' : ''
                }`}
              >
                <h2 className="plevid-card__title">{topic.title}</h2>
                {topic.subtitle && <p className="plevid-card__meta">{topic.subtitle}</p>}
                <p className="plevid-card__text">{topic.description}</p>
                {topic.scale && <p className="plevid-card__meta">{topic.scale.join(' · ')}</p>}
                {topic.angles && <p className="plevid-card__meta">{topic.angles.join(' · ')}</p>}
                {topic.effects && <p className="plevid-card__meta">{topic.effects.join(' · ')}</p>}
                {topic.highlight && <p className="plevid-card__meta">{topic.highlight}</p>}
              </article>
            ))}
          </RevealStagger>

          <Reveal className="plevid-section__callout" delay={0.15}>
            <h3 className="plevid-section__title">{knowledgeHubContent.footer.title}</h3>
            <p className="plevid-section__text">{knowledgeHubContent.footer.text}</p>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
