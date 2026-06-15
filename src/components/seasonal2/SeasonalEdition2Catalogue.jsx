import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { seasonalCatalogue2, seasonalCatalogue2Intro } from '../../data/seasonalEdition2.js';
import './seasonal-edition-2.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const INACTIVE_RATIO = 0.07;
const ACTIVE_RATIO = 0.72;
const ANIM_DURATION = 0.85;
const PANEL_COUNT = seasonalCatalogue2.length;

function getWidths() {
  const vw = window.innerWidth;
  return {
    inactive: vw * INACTIVE_RATIO,
    active: vw * ACTIVE_RATIO,
  };
}

function getProgressForIndex(index) {
  if (PANEL_COUNT <= 1) return 0;
  return index / (PANEL_COUNT - 1);
}

export default function SeasonalEdition2Catalogue() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef(null);
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  const panelsRef = useRef([]);
  const scrollTriggerRef = useRef(null);
  const activeIndexRef = useRef(0);
  const isProgrammaticScrollRef = useRef(false);

  const applyPanelState = useCallback((progress) => {
    const track = trackRef.current;
    const panels = panelsRef.current.filter(Boolean);
    if (!track || !panels.length) return;

    const { inactive, active } = getWidths();
    const segment = progress * (PANEL_COUNT - 1);
    const index = Math.min(PANEL_COUNT - 1, Math.floor(segment));
    const t = segment - index;
    const offset = (index + t) * inactive;

    const resolvedIndex = t >= 0.5 ? Math.min(index + 1, PANEL_COUNT - 1) : index;

    panels.forEach((panel, i) => {
      let width = inactive;

      if (i === index) {
        width = active + (inactive - active) * t;
      } else if (i === index + 1) {
        width = inactive + (active - inactive) * t;
      }

      const isActive = i === resolvedIndex;
      panel.classList.toggle('se2-panel--active', isActive);
      panel.classList.toggle('se2-panel--inactive', !isActive);

      gsap.set(panel, { width });

      const desc = panel.querySelector('.se2-panel__desc');
      if (!desc) return;

      if (i === index && t < 0.5) {
        gsap.set(desc, { opacity: Math.max(0, 1 - t * 2), y: 16 * t * 2 });
      } else if (i === index + 1 && t >= 0.5) {
        gsap.set(desc, { opacity: Math.min(1, (t - 0.5) * 2), y: 16 * (1 - (t - 0.5) * 2) });
      } else {
        gsap.set(desc, { opacity: 0, y: 16 });
      }
    });

    gsap.set(track, { x: -offset });

    if (resolvedIndex !== activeIndexRef.current) {
      activeIndexRef.current = resolvedIndex;
      setActiveIndex(resolvedIndex);
    }
  }, []);

  const goToPanel = useCallback((index) => {
    const st = scrollTriggerRef.current;
    if (!st) return;

    isProgrammaticScrollRef.current = true;
    const target = st.start + getProgressForIndex(index) * (st.end - st.start);

    gsap.to(window, {
      scrollTo: { y: target, autoKill: false },
      duration: ANIM_DURATION,
      ease: 'power3.inOut',
      onComplete: () => {
        isProgrammaticScrollRef.current = false;
        applyPanelState(getProgressForIndex(index));
      },
    });
  }, [applyPanelState]);

  useEffect(() => {
    const pin = pinRef.current;
    const panels = panelsRef.current.filter(Boolean);
    if (!pin || !panels.length) return undefined;

    applyPanelState(0);

    const scrollDistance = window.innerHeight * (PANEL_COUNT - 1);

    const tween = gsap.to(trackRef.current, {
      x: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: pin,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${scrollDistance}`,
        onUpdate: (self) => {
          if (isProgrammaticScrollRef.current) return;
          applyPanelState(self.progress);
        },
      },
    });

    scrollTriggerRef.current = tween.scrollTrigger;

    const onResize = () => {
      ScrollTrigger.refresh();
      if (scrollTriggerRef.current) {
        applyPanelState(scrollTriggerRef.current.progress);
      }
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      tween.kill();
      scrollTriggerRef.current?.kill();
      gsap.killTweensOf([trackRef.current, ...panels, window]);
    };
  }, [applyPanelState]);

  const handleNext = () => {
    goToPanel((activeIndex + 1) % PANEL_COUNT);
  };

  return (
    <div ref={rootRef} className="se2">
      <div ref={pinRef} className="se2-pin">
        <section className="se2-stage">
          <div ref={trackRef} className="se2-track">
            {seasonalCatalogue2.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => { panelsRef.current[index] = el; }}
                className={`se2-panel${index === 0 ? ' se2-panel--active' : ' se2-panel--inactive'}`}
              >
                <div className="se2-panel__media">
                  <img className="se2-panel__image" src={item.image} alt={item.title} />
                  <a
                    href={item.pdfUrl}
                    className="se2-watch"
                    aria-label={`Watch ${item.title} catalogue`}
                  >
                    watch
                  </a>
                </div>
                <div className="se2-panel__overlay">
                  <span className="se2-panel__letter" aria-hidden="true">{item.letter}</span>
                  <h2 className="se2-panel__title">{item.title}</h2>
                  <p className="se2-panel__desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="se2-catalogue">
          {seasonalCatalogue2.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`se2-catalogue__item${index === activeIndex ? ' se2-catalogue__item--active' : ''}`}
              onClick={() => goToPanel(index)}
            >
              <span className="se2-catalogue__dot" aria-hidden="true" />
              <span className="se2-catalogue__word">{item.title}</span>
              <span className="se2-catalogue__label">{item.catalogueLabel}</span>
            </button>
          ))}

          <span className="se2-scroll-hint">{seasonalCatalogue2Intro.scrollHint}</span>
          <button type="button" className="se2-next" onClick={handleNext}>
            {seasonalCatalogue2Intro.nextLabel}
          </button>
        </section>
      </div>
    </div>
  );
}
