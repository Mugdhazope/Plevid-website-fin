import { useEffect, useRef } from 'react';
import { servicesDifferentiators } from '../../data/services.js';
import './services-differentiators.css';

export default function ServicesDifferentiators() {
  const rowsRef = useRef([]);

  useEffect(() => {
    const rows = rowsRef.current.filter(Boolean);
    if (!rows.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' },
    );

    rows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="svc-diff" aria-labelledby="svc-diff-heading">
      <div className="svc-diff__inner">
        <p id="svc-diff-heading" className="svc-section-label">
          {servicesDifferentiators.heading}
        </p>

        <div className="svc-diff__list">
          {servicesDifferentiators.items.map((item, index) => (
            <article
              key={item.id}
              ref={(el) => { rowsRef.current[index] = el; }}
              className="svc-diff__row"
            >
              <span className="svc-diff__number">{item.number}</span>
              <div className="svc-diff__content">
                <h2 className="svc-diff__title">
                  <span className="svc-diff__dot" aria-hidden="true" />
                  {item.title}
                </h2>
                <p className="svc-diff__desc">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
