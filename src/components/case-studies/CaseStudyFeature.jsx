import { motion, useScroll, useTransform } from 'framer-motion';
import { useCallback, useRef, useState } from 'react';
import Reveal from '../motion/Reveal.jsx';
import RevealLine from '../motion/RevealLine.jsx';
import { useLiteMotion } from '../../hooks/useLiteMotion.js';
import './case-study-feature.css';

function CaseStudyMedia({ study, imageY }) {
  const images = study.images?.length ? study.images : [study.image];
  const hasSlider = images.length > 1;
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index) => {
    setActiveIndex((index + images.length) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  return (
    <motion.div
      className={`case-study-feature__media${hasSlider ? ' case-study-feature__media--slider' : ''}`}
      style={{ y: imageY }}
    >
      <div className="case-study-feature__media-frame">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`${study.title} — image ${index + 1}`}
            loading={index === 0 ? 'eager' : 'lazy'}
            className={index === activeIndex ? 'is-active' : ''}
          />
        ))}
        <span className="case-study-feature__status">{study.status}</span>
      </div>

      {hasSlider && (
        <div className="case-study-feature__slider-controls">
          <div className="case-study-feature__slider-nav">
            <button
              type="button"
              className="case-study-feature__slider-btn"
              onClick={goPrev}
              aria-label="Previous image"
            >
              ←
            </button>
            <span className="case-study-feature__slider-count">
              {activeIndex + 1} / {images.length}
            </span>
            <button
              type="button"
              className="case-study-feature__slider-btn"
              onClick={goNext}
              aria-label="Next image"
            >
              →
            </button>
          </div>
          <div className="case-study-feature__slider-dots" role="tablist" aria-label="Case study images">
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Show image ${index + 1}`}
                className={`case-study-feature__slider-dot${index === activeIndex ? ' is-active' : ''}`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function CaseStudyFeature({ study, index }) {
  const ref = useRef(null);
  const lite = useLiteMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [lite ? 0 : 40, lite ? 0 : -40]);
  const reversed = index % 2 === 1;
  const bodyCopy = study.expertise?.length ? study.expertise : [study.description];
  const hasScope = study.scopeOfWork?.length > 0;

  const factsBlock = study.facts?.length > 0 && (
    <Reveal delay={0.26}>
      <ul className="case-study-feature__facts">
        {study.facts.map((fact) => (
          <li key={fact.label} className="case-study-feature__fact">
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );

  const bodyBlock = bodyCopy.map((paragraph, paragraphIndex) => (
    <Reveal key={paragraphIndex} delay={0.14 + paragraphIndex * 0.04}>
      <p className="case-study-feature__text">{paragraph}</p>
    </Reveal>
  ));

  const quoteBlock = study.quote && (
    <Reveal delay={0.22}>
      <blockquote className="case-study-feature__quote">&ldquo;{study.quote}&rdquo;</blockquote>
    </Reveal>
  );

  const scopeBlock = hasScope && (
    <Reveal delay={0.3}>
      <div className="case-study-feature__scope">
        <h3 className="case-study-feature__scope-title">Plevid scope of work</h3>
        <ul className="case-study-feature__scope-list">
          {study.scopeOfWork.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  );

  return (
    <article
      ref={ref}
      className={`case-study-feature${reversed ? ' case-study-feature--reversed' : ''}`}
    >
      <CaseStudyMedia study={study} imageY={imageY} />
      <div className="case-study-feature__content">
        <Reveal>
          <p className="case-study-feature__meta">{study.location}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="case-study-feature__title">{study.title}</h2>
        </Reveal>
        {study.subtitle && (
          <Reveal delay={0.1}>
            <p className="case-study-feature__subtitle">{study.subtitle}</p>
          </Reveal>
        )}
        {study.details?.length > 0 && (
          <Reveal delay={0.12}>
            <dl className="case-study-feature__details">
              {study.details.map((item) => (
                <div key={item.label} className="case-study-feature__detail">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}
        {hasScope ? (
          <>
            {factsBlock}
            {scopeBlock}
            {bodyBlock}
          </>
        ) : (
          <>
            {bodyBlock}
            {quoteBlock}
            {factsBlock}
          </>
        )}
        <Reveal delay={0.2}>
          <RevealLine className="case-study-feature__line" />
        </Reveal>
      </div>
    </article>
  );
}
