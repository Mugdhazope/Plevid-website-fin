import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { seasonalEditions, seasonalIntro } from '../../data/seasonalEdition.js';
import './seasonal-edition.css';

gsap.registerPlugin(ScrollTrigger);

export default function SeasonalEditionScroll() {
  const rootRef = useRef(null);
  const panesContainerRef = useRef(null);
  const titleRef = useRef(null);
  const asideRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const panesContainer = panesContainerRef.current;
    if (!root || !panesContainer) return undefined;

    const panes = gsap.utils.toArray('.seasonal-edition__pane', root);
    const containerWidth = panesContainer.offsetWidth;
    const themes = seasonalEditions.map((edition) => edition.theme);
    const thresholds = new Array(panes.length)
      .fill(0)
      .map((_, i) => parseFloat(((1 / panes.length) * i).toFixed(2)));

    let activeThemeIndex = 0;
    let scrollTriggerInstance = null;

    gsap.set(panes, {
      width: containerWidth / panes.length,
    });

    const paneWidth = panes[0].offsetWidth;

    const updateTheme = (themeIndex) => {
      const theme = themes[themeIndex];
      const edition = seasonalEditions[themeIndex];

      gsap.to(root, {
        '--seasonal-main-bg': theme.mainBg,
        '--seasonal-sub-bg': theme.subBg,
        '--seasonal-title': theme.title,
        '--seasonal-text': theme.text,
        duration: 1,
        ease: 'power2.out',
      });

      if (titleRef.current && edition) {
        gsap.to([titleRef.current, asideRef.current], {
          opacity: 0,
          duration: 0.25,
          ease: 'power2.in',
          onComplete: () => {
            if (titleRef.current) {
              titleRef.current.textContent = edition.title;
            }
            if (asideRef.current) {
              asideRef.current.textContent = edition.description;
            }
            gsap.to([titleRef.current, asideRef.current], {
              opacity: 1,
              duration: 0.45,
              ease: 'power2.out',
            });
          },
        });
      }
    };

    const tween = gsap.to(panes, {
      x: -paneWidth * (panes.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: panesContainer,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = parseFloat(self.progress.toFixed(2));
          const themeIndex = thresholds.findLastIndex((threshold) => progress >= threshold);
          if (themeIndex === activeThemeIndex) return;
          activeThemeIndex = themeIndex;
          updateTheme(themeIndex);
        },
        end: () => `+=${containerWidth}`,
      },
    });

    scrollTriggerInstance = tween.scrollTrigger;

    return () => {
      tween.kill();
      scrollTriggerInstance?.kill();
    };
  }, []);

  return (
    <div ref={rootRef} className="seasonal-edition">
      <svg
        className="seasonal-edition__bg"
        width="100%"
        viewBox="0 0 1920 1300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <rect width="1920" height="1300" fill="url(#seasonal-gradient)" />
        <defs>
          <linearGradient
            id="seasonal-gradient"
            x1="1300.54"
            y1="201.621"
            x2="959.727"
            y2="841.863"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.15" stopColor="var(--seasonal-sub-bg)" stopOpacity="1" />
            <stop offset="0.85" stopColor="var(--seasonal-main-bg)" />
          </linearGradient>
        </defs>
      </svg>

      <section className="seasonal-edition__content">
        <p className="seasonal-edition__label">
          <span className="seasonal-edition__dot" aria-hidden="true" />
          {seasonalIntro.label}
        </p>
        <h1 ref={titleRef} className="seasonal-edition__title">
          {seasonalEditions[0].title}
        </h1>
        <p className="seasonal-edition__lead">{seasonalIntro.lead}</p>
        <p ref={asideRef} className="seasonal-edition__aside">{seasonalEditions[0].description}</p>
        <p className="seasonal-edition__footnote">{seasonalIntro.footnote}</p>
      </section>

      <section ref={panesContainerRef} className="seasonal-edition__panes">
        {seasonalEditions.map((edition) => (
          <div
            key={edition.id}
            className={`seasonal-edition__pane${edition.id === 'riviera-edition' ? ' seasonal-edition__pane--horizontal' : ''}`}
          >
            <div className="seasonal-edition__media">
              <img
                className="seasonal-edition__pane-image"
                src={edition.image}
                alt={edition.title}
              />
              <a
                href={edition.pdfUrl}
                className="seasonal-edition__watch"
                aria-label={`Watch ${edition.title} catalogue`}
              >
                watch
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
