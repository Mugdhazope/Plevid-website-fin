import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { useLiteMotion } from '../../hooks/useLiteMotion.js';
import {
  aboutImages,
  aboutStatement,
  aboutCopy,
  aboutProcessSteps,
  aboutWhyItems,
} from '../../data/aboutPage.js';
import './about-editorial.css';

const EASE = [0.22, 1, 0.36, 1];

function Reveal({ children, className, delay = 0, y = 30 }) {
  const lite = useLiteMotion();

  if (lite) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

function CursorLight() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const SIZE = 560;
  const HALF = SIZE / 2;

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const el = ref.current;
    if (!el) return undefined;

    setActive(true);
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let x = tx;
    let y = ty;
    let raf = 0;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.transform = `translate3d(${x - HALF}px, ${y - HALF}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
    };
  }, [HALF]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="about__cursor-light"
      style={{ opacity: active ? 0.5 : 0 }}
    />
  );
}

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
          alt="Architectural wall light"
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
          alt="Luxury lobby lighting installation"
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
          alt="Architectural spotlight detail"
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
        about us
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
          alt="Architectural wall light"
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
          alt="Luxury lobby lighting installation"
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
          alt="Architectural spotlight detail"
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

      <h1 className="about__hero-title">about us</h1>
    </section>
  );
}

function Hero() {
  const lite = useLiteMotion();
  return lite ? <HeroLite /> : <HeroImages />;
}

function Word({ children, progress, index, total }) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.12, 1]);

  return (
    <motion.span style={{ opacity }} className="about__statement-word">
      {children}
    </motion.span>
  );
}

function RevealStatementFull({ text }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'start 0.25'] });
  const words = text.split(' ');

  return (
    <h2 ref={ref} className="about__statement">
      {words.map((word, i) => (
        <Word key={word + i} progress={scrollYProgress} index={i} total={words.length}>
          {word}
        </Word>
      ))}
    </h2>
  );
}

function RevealStatement({ text }) {
  const lite = useLiteMotion();
  if (lite) {
    return (
      <Reveal>
        <h2 className="about__statement">{text}</h2>
      </Reveal>
    );
  }
  return <RevealStatementFull text={text} />;
}

function ProcessTimeline() {
  const ref = useRef(null);
  const pathRef = useRef(null);
  const reduce = useReducedMotion();
  const [length, setLength] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  const offset = useTransform(scrollYProgress, [0, 1], [length, 0]);

  useEffect(() => {
    if (pathRef.current) setLength(pathRef.current.getTotalLength());
  }, []);

  return (
    <section id="process" className="about__process">
      <Reveal className="about__section-eyebrow about__serif">
        <span className="about__section-eyebrow-dot" />
        process.
      </Reveal>

      <div className="about__process-mobile">
        {aboutProcessSteps.map((step) => (
          <Reveal key={step.n}>
            <div className="about__process-mobile-item">
              <span className="about__process-mobile-dot" />
              <div className={`about__process-num about__serif`}>{step.n}.</div>
              <h3 className="about__process-title">{step.title}</h3>
              <p className="about__process-text">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div ref={ref} className="about__process-desktop">
        <svg
          className="about__process-path"
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
              reduce || length === 0
                ? undefined
                : { strokeDasharray: length, strokeDashoffset: offset }
            }
          />
        </svg>

        {aboutProcessSteps.map((step) => (
          <motion.div
            key={step.n}
            className={`about__process-step about__process-step--${step.side}`}
            style={{ top: step.top }}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <div className={`about__process-num about__serif`}>{step.n}.</div>
            <div className="about__process-step-head">
              <motion.span
                className="about__process-step-dot"
                initial={reduce ? false : { opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, ease: EASE, delay: 0.1 }}
              />
              <h3 className="about__process-title">{step.title}</h3>
            </div>
            <p className="about__process-text">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function AboutEditorial() {
  const lite = useLiteMotion();

  return (
    <div className={`about${lite ? ' lite-motion' : ''}`}>
      {!lite && <CursorLight />}
      <Hero />

      <section className="about__intro">
        <Reveal>
          <div className="about__intro-marker">
            <div className="about__intro-plus">+</div>
            <div className="about__intro-line" />
            <p className="about__intro-location">
              Based in Mumbai.
              <br />
              Lighting across India.
            </p>
          </div>
        </Reveal>

        <RevealStatement text={aboutStatement} />

        <Reveal className="about__intro-copy">
          <div className="about__intro-copy-inner">
            {aboutCopy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <ProcessTimeline />

      <section id="why" className="about__why">
        <Reveal>
          <h2 className="about__why-title">why plevid.</h2>
        </Reveal>

        <div className="about__why-grid">
          {aboutWhyItems.map((item, i) => (
            <Reveal key={item.n} delay={i * 0.08}>
              <div className="about__why-item">
                <div className={`about__why-item-num about__serif`}>{item.n}</div>
                <h3 className="about__why-item-title">{item.title}</h3>
                <p className="about__why-item-text">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about__manifesto">
        <Reveal y={24}>
          <h2 className="about__manifesto-line">
            we don&apos;t
            <br />
            sell lights.
          </h2>
        </Reveal>
        <Reveal y={24}>
          <h2 className="about__manifesto-line about__manifesto-line--muted">
            we shape
            <br />
            <span className="about__manifesto-accent">experiences.</span>
          </h2>
        </Reveal>
      </section>
    </div>
  );
}
