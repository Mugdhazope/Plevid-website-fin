import { useEffect, useRef } from 'react';

export default function ServicesTimeline({ heading, subheading, items }) {
  const containerRef = useRef(null);
  const indicatorRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportMid = scrollPosition + window.innerHeight / 2;

      itemsRef.current.forEach((item) => {
        if (!item) return;

        const rect = item.getBoundingClientRect();
        const itemTop = rect.top + scrollPosition;

        if (scrollPosition > itemTop - 200) {
          item.classList.add('is-inview');
        } else {
          item.classList.remove('is-inview');
        }

        const list = item.querySelector('.svc-timeline__list');
        if (!list) return;

        const itemBottom = itemTop + item.offsetHeight;

        if (viewportMid > itemTop && scrollPosition < itemBottom) {
          const parallaxOffset = (scrollPosition - itemTop) * 0.2;
          list.classList.add('is-visible');
          list.style.transform = `translateY(${parallaxOffset}px)`;
        } else {
          list.classList.remove('is-visible');
          list.style.transform = '';
        }
      });

      const activeItem = itemsRef.current.find((item) => item?.classList.contains('is-inview'));
      const container = containerRef.current;
      const indicator = indicatorRef.current;

      if (activeItem && container && indicator) {
        const activeTop = activeItem.getBoundingClientRect().top + scrollPosition;
        const containerHeight = container.offsetHeight;
        let offset = scrollPosition - activeTop + 150;
        offset = Math.min(containerHeight, Math.max(0, offset));
        indicator.style.transform = `translateY(${offset}px)`;
      } else if (indicator) {
        indicator.style.transform = 'translateY(0)';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items.length]);

  return (
    <section className="svc-timeline">
      <div className="svc-timeline__inner">
        <p className="svc-section-label">{heading}</p>
        {subheading && <h2 className="svc-timeline__subheading">{subheading}</h2>}

        <div ref={containerRef} className="svc-timeline__container" id={`timeline-${heading.replace(/\s+/g, '-').toLowerCase()}`}>
          <div className="svc-timeline__track">
            <div className="svc-timeline__indicator-wrap">
              <div ref={indicatorRef} className="svc-timeline__indicator" />
            </div>

            <div className="svc-timeline__items">
              {items.map((item, index) => (
                <article
                  key={item.id}
                  ref={(el) => { itemsRef.current[index] = el; }}
                  className="svc-timeline__item is-scroll-view"
                >
                  <span className="svc-timeline__number">{item.number}</span>
                  <h3 className="svc-timeline__title">{item.title}</h3>

                  <div className="svc-timeline__body">
                    <p className="svc-timeline__desc">{item.description}</p>
                    {item.footer && <p className="svc-timeline__footer">{item.footer}</p>}
                  </div>

                  {item.points.length > 0 && (
                    <div className="svc-timeline__list">
                      <ul>
                        {item.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
