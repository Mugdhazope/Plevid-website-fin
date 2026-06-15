import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import Lenis from 'lenis';
import { ProjectItem } from './ProjectItem.js';
import { isInViewport, preloadImages } from './projectsViewUtils.js';
import './on-scroll-view-switch.css';

gsap.registerPlugin(ScrollTrigger, Flip);

function padNumber(index) {
  return String(index + 1).padStart(2, '0');
}

function getDOMElements(items) {
  const inViewportItems = items.filter((item) => isInViewport(item.DOM.el));
  const outViewportItems = items.filter((item) => !inViewportItems.includes(item));

  return {
    allImages: items.map((item) => item.DOM.image),
    allImagesInner: items.map((item) => item.DOM.imageInner),
    inViewportItems,
    outViewportItems,
    inViewportImagesInner: inViewportItems.map((item) => item.DOM.imageInner),
    outViewportImagesInner: outViewportItems.map((item) => item.DOM.imageInner),
    inViewportDescription: inViewportItems.map((item) => item.DOM.description),
    outViewportDescription: outViewportItems.map((item) => item.DOM.description),
    inViewportTitlesInner: inViewportItems.map((item) => item.DOM.titleInner),
    outViewportTitlesInner: outViewportItems.map((item) => item.DOM.titleInner),
    inViewportNumbersInner: inViewportItems.map((item) => item.DOM.numberInner),
    outViewportNumbersInner: outViewportItems.map((item) => item.DOM.numberInner),
  };
}

export default function OnScrollViewSwitch({ projects }) {
  const rootRef = useRef(null);
  const gridRef = useRef(null);
  const headingRef = useRef(null);
  const headingMainRef = useRef(null);
  const gridButtonRef = useRef(null);
  const listButtonRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const items = [...root.querySelectorAll('.osvs-item')].map((el) => new ProjectItem(el));
    const grid = gridRef.current;
    const heading = { el: headingRef.current, main: headingMainRef.current };
    const switchCtrl = {
      grid: gridButtonRef.current,
      list: listButtonRef.current,
    };

    let lenis = null;
    let rafId = null;
    let createdTriggers = [];

    const captureNewTriggers = (countBefore) => {
      createdTriggers = ScrollTrigger.getAll().slice(countBefore);
    };

    const initSmoothScrolling = () => {
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      lenis.on('scroll', ScrollTrigger.update);

      const scrollFn = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(scrollFn);
      };
      rafId = requestAnimationFrame(scrollFn);
    };

    const animateOnScroll = () => {
      const triggerCountBefore = ScrollTrigger.getAll().length;

      for (const item of items) {
        gsap.set(item.DOM.imageInner, { transformOrigin: '50% 0%' });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: item.DOM.el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });

        timeline
          .addLabel('start', 0)
          .to(item.DOM.imageInner, {
            ease: 'none',
            scaleY: 2.4,
            scaleX: 1.2,
            opacity: 0,
          }, 'start')
          .to([item.DOM.title, item.DOM.number], {
            ease: 'none',
            yPercent: -150,
          }, 'start')
          .to([item.DOM.titleInner, item.DOM.numberInner], {
            scrollTrigger: {
              trigger: item.DOM.el,
              start: 'top bottom',
              end: 'top 20%',
              scrub: true,
            },
            ease: 'expo.in',
            yPercent: -100,
          }, 'start');
      }

      gsap.to(heading.main, {
        scrollTrigger: {
          start: 0,
          end: 'max',
          scrub: true,
        },
        ease: 'none',
        x: () => {
          const windowWidth = window.innerWidth;
          return -heading.main.offsetWidth - (13.25 * windowWidth / 100 + 25 * windowWidth / 100 + windowWidth / 100) + windowWidth;
        },
      });

      captureNewTriggers(triggerCountBefore);
    };

    const showGrid = () => {
      document.body.classList.add('osvs-grid-open');
      lenis?.stop();

      const DOM = getDOMElements(items);
      ScrollTrigger.getAll().forEach((trigger) => trigger.disable(false));

      const flipstate = Flip.getState(DOM.allImages);
      grid.append(...DOM.allImages);

      const staggerConfig = {
        grid: 'auto',
        from: DOM.inViewportItems.length ? items.indexOf(DOM.inViewportItems[0]) : 0,
        amount: 0.06,
      };

      Flip.from(flipstate, {
        duration: 0.7,
        ease: 'power3.inOut',
        scale: true,
        stagger: staggerConfig,
      })
        .to(DOM.inViewportImagesInner, {
          duration: 0.7,
          ease: 'power3.inOut',
          scaleX: 1,
          scaleY: 1,
          opacity: 1,
          stagger: staggerConfig,
        }, 0)
        .set(DOM.outViewportImagesInner, {
          scaleX: 1,
          scaleY: 1,
          opacity: 1,
        }, 0)
        .to([DOM.inViewportTitlesInner, DOM.inViewportNumbersInner], {
          duration: 0.4,
          ease: 'power3.inOut',
          yPercent: -100,
          opacity: 0,
        }, 0)
        .to(DOM.inViewportDescription, {
          duration: 0.4,
          ease: 'power3.inOut',
          opacity: 0,
        }, 0)
        .set([DOM.outViewportTitlesInner, DOM.outViewportNumbersInner, DOM.outViewportDescription], {
          opacity: 0,
        }, 0)
        .to(heading.el, {
          duration: 0.7,
          ease: 'power3.inOut',
          yPercent: -100,
          x: -100,
        }, 0);
    };

    const hideGrid = () => {
      document.body.classList.remove('osvs-grid-open');
      lenis?.start();

      const DOM = getDOMElements(items);
      const flipstate = Flip.getState([DOM.allImages, DOM.allImagesInner], { props: 'opacity' });

      DOM.allImages.forEach((image, pos) => {
        items[pos].DOM.imageWrap.appendChild(image);
      });

      ScrollTrigger.getAll().forEach((trigger) => trigger.enable(false));

      Flip.from(flipstate, {
        duration: 0.7,
        ease: 'power3.inOut',
        scale: true,
      })
        .to([DOM.inViewportTitlesInner, DOM.inViewportNumbersInner, DOM.inViewportDescription], {
          duration: 0.4,
          ease: 'power3.inOut',
          startAt: { opacity: 0 },
          opacity: 1,
        }, 0)
        .set([DOM.outViewportTitlesInner, DOM.outViewportNumbersInner, DOM.outViewportDescription], {
          opacity: 1,
        }, 0)
        .to(heading.el, {
          duration: 0.7,
          ease: 'power3.inOut',
          yPercent: 0,
          x: 0,
        }, 0);
    };

    const onShowGrid = () => {
      switchCtrl.grid.classList.add('osvs-switch__button--current');
      switchCtrl.list.classList.remove('osvs-switch__button--current');
      showGrid();
    };

    const onHideGrid = () => {
      switchCtrl.list.classList.add('osvs-switch__button--current');
      switchCtrl.grid.classList.remove('osvs-switch__button--current');
      hideGrid();
    };

    let cancelled = false;

    preloadImages('.osvs-item__image-inner', root).then(() => {
      if (cancelled) return;

      root.classList.remove('osvs-loading');
      initSmoothScrolling();
      animateOnScroll();
      ScrollTrigger.refresh();

      switchCtrl.grid?.addEventListener('click', onShowGrid);
      switchCtrl.list?.addEventListener('click', onHideGrid);
    });

    return () => {
      cancelled = true;
      document.body.classList.remove('osvs-grid-open');

      switchCtrl.grid?.removeEventListener('click', onShowGrid);
      switchCtrl.list?.removeEventListener('click', onHideGrid);

      if (rafId) cancelAnimationFrame(rafId);
      lenis?.destroy();
      createdTriggers.forEach((trigger) => trigger.kill());
    };
  }, [projects]);

  const headingText = 'PROJECTS * PLEVID * PROJECTS * PLEVID * PROJECTS * PLEVID * PROJECTS';

  return (
    <div ref={rootRef} className="projects-view-switch osvs-loading">
      <div ref={headingRef} className="osvs-heading">
        <h2 ref={headingMainRef} className="osvs-heading__main">{headingText}</h2>
        <span className="osvs-heading__sub">completed & ongoing</span>
      </div>

      <div className="osvs-switch">
        <button
          ref={gridButtonRef}
          type="button"
          className="osvs-unbutton osvs-switch__button"
          aria-label="Grid view"
        >
          <svg width="18" height="18" viewBox="0 0 45 45" aria-hidden="true">
            <rect x="0" y="0" width="20" height="20" />
            <rect x="25" y="0" width="20" height="20" />
            <rect x="0" y="25" width="20" height="20" />
            <rect x="25" y="25" width="20" height="20" />
          </svg>
        </button>
        <button
          ref={listButtonRef}
          type="button"
          className="osvs-unbutton osvs-switch__button osvs-switch__button--current"
          aria-label="List view"
        >
          <svg width="18" height="18" viewBox="0 0 43 43" aria-hidden="true">
            <rect x="0" y="0" width="11" height="11" />
            <rect x="16" y="0" width="25" height="11" />
            <rect x="16" y="16" width="25" height="11" />
            <rect x="16" y="32" width="25" height="11" />
            <rect x="0" y="16" width="11" height="11" />
            <rect x="0" y="32" width="11" height="11" />
          </svg>
        </button>
      </div>

      <div className="osvs-content">
        {projects.map((project, index) => (
          <figure key={project.id} className="osvs-item">
            <figcaption className="osvs-item__caption">
              <span className="osvs-item__caption-number osvs-oh">
                <span className="osvs-oh__inner">{padNumber(index)}</span>
              </span>
              <h2 className="osvs-item__caption-title osvs-oh">
                <span className="osvs-oh__inner">{project.title}</span>
              </h2>
              <p className="osvs-item__caption-description">
                {project.description}
                {' '}
                <span>{project.location} · {project.status}</span>
              </p>
            </figcaption>
            <div className="osvs-item__image-wrap">
              <div className="osvs-item__image">
                <div
                  className="osvs-item__image-inner"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              </div>
            </div>
          </figure>
        ))}
      </div>

      <div ref={gridRef} className="osvs-grid" />
    </div>
  );
}
