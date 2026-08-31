import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ourJourney } from '../../data/aboutPage.js';
import Reveal from '../motion/Reveal.jsx';
import { useLiteMotion } from '../../hooks/useLiteMotion.js';

const JOURNEY_STEPS = ourJourney.milestones.map((item, i) => ({
  ...item,
  n: String(i + 1).padStart(2, '0'),
  side: i % 2 === 0 ? 'left' : 'right',
  top: `${6 + i * 11}%`,
}));

export default function JourneyTimeline() {
  const ref = useRef(null);
  const pathRef = useRef(null);
  const reduce = useReducedMotion();
  const lite = useLiteMotion();
  const [length, setLength] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  const offset = useTransform(scrollYProgress, [0, 1], [length, 0]);

  useEffect(() => {
    if (pathRef.current) setLength(pathRef.current.getTotalLength());
  }, []);

  return (
    <section id="our-journey" className="about__journey">
      <Reveal className="about__section-eyebrow about__serif">
        <span className="about__section-eyebrow-dot" />
        {ourJourney.eyebrow}
      </Reveal>
      <Reveal>
        <h2 className="about__journey-title about__section-display">{ourJourney.title}</h2>
      </Reveal>
      <Reveal>
        <p className="about__journey-subtitle">{ourJourney.subtitle}</p>
      </Reveal>
      <Reveal className="about__journey-intro">
        <p>{ourJourney.intro}</p>
      </Reveal>

      <div className="about__journey-mobile">
        {JOURNEY_STEPS.map((step, i) => (
          <Reveal key={step.title + step.year} delay={i * 0.05}>
            <div className="about__journey-mobile-item">
              <span className="about__journey-mobile-dot" />
              <div className="about__journey-year">{step.year}</div>
              <h3 className="about__journey-item-title">{step.title}</h3>
              <p className="about__journey-item-text">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div ref={ref} className="about__journey-desktop">
        <svg
          className="about__journey-path"
          viewBox="0 0 1000 1700"
          preserveAspectRatio="none"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <motion.path
            ref={pathRef}
            d="M 500 0 C 520 80, 540 140, 480 200 C 400 280, 600 340, 560 420 C 520 500, 380 520, 360 600 C 340 700, 600 720, 600 820 C 600 920, 360 940, 360 1040 C 360 1140, 620 1160, 580 1260 C 540 1360, 360 1380, 380 1480 C 400 1560, 540 1600, 520 1700"
            style={
              reduce || lite || length === 0
                ? undefined
                : { strokeDasharray: length, strokeDashoffset: offset }
            }
          />
        </svg>

        {JOURNEY_STEPS.map((step) => (
          <motion.div
            key={step.title + step.year}
            className={`about__journey-step about__journey-step--${step.side}`}
            style={{ top: step.top }}
            initial={reduce || lite ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about__journey-year">{step.year}</div>
            <div className="about__journey-step-head">
              <motion.span
                className="about__journey-step-dot"
                initial={reduce || lite ? false : { opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              />
              <h3 className="about__journey-item-title">{step.title}</h3>
            </div>
            <p className="about__journey-item-text">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
