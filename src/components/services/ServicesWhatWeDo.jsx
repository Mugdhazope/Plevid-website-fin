import { useEffect, useRef } from 'react';
import { servicesWhatWeDo } from '../../data/services.js';
import './services-what-we-do.css';

const LAYOUT_BY_ID = {
  'system-selection': 'svc-bento__card--col-7',
  simulations: 'svc-bento__card--col-5',
  mockup: 'svc-bento__card--full',
  coordination: 'svc-bento__card--col-6',
  compliance: 'svc-bento__card--col-6',
};

export default function ServicesWhatWeDo() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="svc-bento" aria-labelledby="svc-bento-heading">
      <div className="svc-bento__inner">
        <p id="svc-bento-heading" className="svc-section-label">
          {servicesWhatWeDo.heading}
        </p>

        <div className="svc-bento__grid">
          {servicesWhatWeDo.items.map((item, index) => (
            <article
              key={item.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className={`svc-bento__card ${LAYOUT_BY_ID[item.id] ?? ''}`}
            >
              <span className="svc-bento__number">{item.number}</span>
              <h2 className="svc-bento__title">{item.title}</h2>
              <p className="svc-bento__desc">{item.description}</p>

              {item.points.length > 0 && (
                <div className="svc-bento__pills">
                  {item.points.map((point) => (
                    <span key={point} className="svc-bento__pill">
                      {point}
                    </span>
                  ))}
                </div>
              )}

              {item.footer && (
                <p className="svc-bento__footer">{item.footer}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
