import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useLiteMotion } from '../../hooks/useLiteMotion.js';
import Reveal from '../motion/Reveal.jsx';
import RevealLine from '../motion/RevealLine.jsx';
import RevealStagger from '../motion/RevealStagger.jsx';
import CountUp from '../motion/CountUp.jsx';
import JourneyTimeline from '../motion/JourneyTimeline.jsx';
import {
  aboutImages,
  ceoMessage,
  atAGlance,
  whyPlevid,
  globalPartnerships,
} from '../../data/aboutPage.js';
import './about-editorial.css';

const EASE = [0.22, 1, 0.36, 1];

function HeroImage({
  src,
  alt,
  caption,
  className,
  glowClass,
  scrollY,
  floatClass,
  mouseX,
  mouseY,
  parallaxStrength,
  reveal,
  lite,
  captionAlign = 'left',
  centered = false,
}) {
  const px = lite ? 0 : mouseX * parallaxStrength;
  const py = lite ? 0 : mouseY * parallaxStrength;
  const innerClass = `about__hero-inner${floatClass ? ` ${floatClass}` : ''}`;
  const centerX = centered ? '-50%' : undefined;

  const figureStyle = centered
    ? lite
      ? { x: centerX }
      : { x: centerX, y: scrollY, willChange: 'transform' }
    : lite
      ? undefined
      : { y: scrollY, willChange: 'transform' };

  const inner = (
    <>
      {!lite && <div aria-hidden className={`about__hero-glow ${glowClass}`} />}
      <div aria-hidden className="about__hero-shadow" />
      <div className="about__hero-media">
        <img src={src} alt={alt} loading="eager" decoding="async" />
      </div>
    </>
  );

  return (
    <motion.figure
      className={`about__hero-figure ${className}`}
      style={figureStyle}
      initial={
        lite
          ? { opacity: 0, x: centerX }
          : { opacity: 0, y: 18, x: centerX }
      }
      animate={
        lite
          ? { opacity: 1, x: centerX }
          : { opacity: 1, y: 0, x: centerX }
      }
      transition={{ duration: lite ? 0.6 : 1.1, ease: EASE, delay: reveal.delay }}
    >
      {lite ? (
        <div className={innerClass}>{inner}</div>
      ) : (
        <motion.div
          className={innerClass}
          style={{ x: px, y: py }}
          transition={{ type: 'spring', stiffness: 60, damping: 20 }}
        >
          {inner}
        </motion.div>
      )}
      {caption && (
        <figcaption
          className={`about__hero-caption about__serif${
            captionAlign === 'right' ? ' about__hero-caption--right' : ''
          }`}
        >
          — {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

function HeroImages() {
  const ref = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      setMouse({ x: nx, y: ny });
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const titleScale = useTransform(scrollYProgress, [0.15, 0.5], [0.68, 1], { clamp: true });
  const yLeftScroll = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yCenterScroll = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const yRightScroll = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <section ref={ref} id="about" className="about__hero">
      <div className="about__hero-stage">
        <HeroImage
          src={aboutImages.heroLeft}
          alt="Plevid architectural lighting detail"
          caption=""
          className="about__hero-figure--left about__hero-figure--grayscale"
          glowClass="about__hero-glow--warm"
          scrollY={yLeftScroll}
          floatClass="about__hero-inner--float-a"
          mouseX={mouse.x}
          mouseY={mouse.y}
          parallaxStrength={6}
          reveal={{ delay: 0.05 }}
          lite={false}
        />
        <HeroImage
          src={aboutImages.heroCenter}
          alt="Ayuska by Avadh — architectural lighting"
          caption=""
          className="about__hero-figure--center"
          glowClass="about__hero-glow--accent"
          scrollY={yCenterScroll}
          mouseX={mouse.x}
          mouseY={mouse.y}
          parallaxStrength={3}
          reveal={{ delay: 0.25 }}
          lite={false}
          centered
        />
        <HeroImage
          src={aboutImages.heroRight}
          alt="Plevid project lighting showcase"
          caption=""
          className="about__hero-figure--right"
          glowClass="about__hero-glow--gold"
          scrollY={yRightScroll}
          floatClass="about__hero-inner--float-b"
          mouseX={mouse.x}
          mouseY={mouse.y}
          parallaxStrength={7}
          reveal={{ delay: 0.45 }}
          lite={false}
          captionAlign="right"
        />
      </div>

      <motion.h1
        className="about__hero-title"
        style={{
          scale: titleScale,
          transformOrigin: '50% 50%',
          willChange: 'transform',
        }}
      >
        about plevid
      </motion.h1>
    </section>
  );
}

function HeroLite() {
  return (
    <section id="about" className="about__hero">
      <div className="about__hero-stage">
        <HeroImage
          src={aboutImages.heroLeft}
          alt="Plevid architectural lighting detail"
          caption="Mumbai, India"
          className="about__hero-figure--left about__hero-figure--grayscale"
          glowClass=""
          scrollY={0}
          floatClass="about__hero-inner--float-a"
          mouseX={0}
          mouseY={0}
          parallaxStrength={0}
          reveal={{ delay: 0.05 }}
          lite
        />
        <HeroImage
          src={aboutImages.heroCenter}
          alt="Ayuska by Avadh — architectural lighting"
          caption="Hospitality Project"
          className="about__hero-figure--center"
          glowClass=""
          scrollY={0}
          mouseX={0}
          mouseY={0}
          parallaxStrength={0}
          reveal={{ delay: 0.25 }}
          lite
          centered
        />
        <HeroImage
          src={aboutImages.heroRight}
          alt="Plevid project lighting showcase"
          caption="Custom Installation"
          className="about__hero-figure--right"
          glowClass=""
          scrollY={0}
          floatClass="about__hero-inner--float-b"
          mouseX={0}
          mouseY={0}
          parallaxStrength={0}
          reveal={{ delay: 0.45 }}
          lite
          captionAlign="right"
        />
      </div>

      <h1 className="about__hero-title">about plevid</h1>
    </section>
  );
}

function Hero() {
  const lite = useLiteMotion();
  return lite ? <HeroLite /> : <HeroImages />;
}

function CeoMessageSection() {
  const ref = useRef(null);
  const lite = useLiteMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [lite ? 0 : 30, lite ? 0 : -30]);

  return (
    <section id="ceo-message" className="about__ceo" ref={ref}>
      <Reveal className="about__section-eyebrow about__serif">
        <span className="about__section-eyebrow-dot" />
        {ceoMessage.eyebrow}
      </Reveal>

      <div className="about__ceo-grid">
        <div className="about__ceo-copy">
          <Reveal>
            <h2 className="about__ceo-title about__section-display">{ceoMessage.title}</h2>
          </Reveal>
          <Reveal className="about__ceo-body">
            {ceoMessage.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Reveal>
          <Reveal className="about__ceo-signature">
            <RevealLine className="about__ceo-signature-line" />
            <p className="about__ceo-signature-name">{ceoMessage.signature.name}</p>
            <p className="about__ceo-signature-role">{ceoMessage.signature.role}</p>
          </Reveal>
        </div>
        <Reveal className="about__ceo-media" delay={0.1}>
          <motion.img
            style={{ y: imageY }}
            src={aboutImages.ceoMessage}
            alt="Architectural lighting at night"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}

function AtAGlanceSection() {
  return (
    <section id="at-a-glance" className="about__glance">
      <Reveal className="about__section-eyebrow about__serif">
        <span className="about__section-eyebrow-dot" />
        {atAGlance.eyebrow}
      </Reveal>
      <Reveal>
        <h2 className="about__glance-title about__section-display">{atAGlance.title}</h2>
      </Reveal>
      <Reveal className="about__glance-intro">
        <p>{atAGlance.intro}</p>
      </Reveal>

      <div className="about__glance-layout">
        <div className="about__glance-facts">
          {atAGlance.facts.map((fact, i) => (
            <Reveal key={fact.label} delay={i * 0.06}>
              <div className="about__glance-fact">
                <div className="about__glance-fact-line" />
                <p className="about__glance-fact-label">{fact.label}</p>
                <p className="about__glance-fact-value">{fact.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <RevealStagger className="about__glance-projects" stagger={0.06}>
          {atAGlance.projects.map((item) => (
            <div key={item.city + item.project} className="about__glance-project">
              <span className="about__glance-project-city">{item.city}</span>
              <span className="about__glance-project-name">{item.project}</span>
            </div>
          ))}
        </RevealStagger>
      </div>

      <RevealStagger className="about__glance-stats" stagger={0.08}>
        {atAGlance.stats.map((stat) => (
          <div key={stat.label} className="about__glance-stat">
            <p className="about__glance-stat-value">
              <CountUp value={stat.value} />
            </p>
            <p className="about__glance-stat-label">{stat.label}</p>
            <p className="about__glance-stat-detail">{stat.detail}</p>
          </div>
        ))}
      </RevealStagger>
    </section>
  );
}

function WhyPlevidSection() {
  return (
    <section id="why-plevid" className="about__why">
      <Reveal>
        <h2 className="about__why-title about__section-display">{whyPlevid.title}</h2>
      </Reveal>

      <div className="about__why-layout">
        <Reveal className="about__why-copy">
          {whyPlevid.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </Reveal>

        <RevealStagger className="about__why-grid" stagger={0.08}>
          {whyPlevid.pillars.map((item) => (
            <div key={item.title} className="about__why-item">
              <h3 className="about__why-item-title">{item.title}</h3>
              <p className="about__why-item-text">{item.text}</p>
            </div>
          ))}
        </RevealStagger>
      </div>

      <Reveal className="about__why-footer">
        <p>{whyPlevid.footer}</p>
      </Reveal>
    </section>
  );
}

function GlobalPartnershipsSection() {
  return (
    <section id="global-partnerships" className="about__partners">
      <Reveal className="about__section-eyebrow about__serif">
        <span className="about__section-eyebrow-dot" />
        {globalPartnerships.eyebrow}
      </Reveal>
      <Reveal>
        <h2 className="about__partners-title about__section-display">{globalPartnerships.title}</h2>
      </Reveal>
      <Reveal className="about__partners-intro">
        <p>{globalPartnerships.intro}</p>
      </Reveal>

      <RevealStagger className="about__partners-grid" stagger={0.1}>
        {globalPartnerships.partners.map((partner) => (
          <article key={partner.name} className="about__partner-card">
            <div className="about__partner-head">
              <h3 className="about__partner-name">{partner.name}</h3>
              <span className="about__partner-country">{partner.country}</span>
            </div>
            <p className="about__partner-desc">{partner.description}</p>
            <p className="about__partner-apps">
              <strong>Core Applications:</strong> {partner.applications}
            </p>
          </article>
        ))}
      </RevealStagger>

      <Reveal className="about__partners-footer">
        <p className="about__partners-locations">{globalPartnerships.locations}</p>
        <p className="about__partners-tagline">{globalPartnerships.footer}</p>
      </Reveal>
    </section>
  );
}

export default function AboutEditorial() {
  const lite = useLiteMotion();

  return (
    <div className={`about${lite ? ' lite-motion' : ''}`}>
      <Hero />
      <CeoMessageSection />
      <AtAGlanceSection />
      <JourneyTimeline />
      <WhyPlevidSection />
      <GlobalPartnershipsSection />
    </div>
  );
}
