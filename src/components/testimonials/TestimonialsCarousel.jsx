import { useCallback, useEffect, useRef, useState } from 'react';
import { testimonials } from '../../data/testimonials.js';
import './testimonials-carousel.css';

function getSnapOffsets(container) {
  const snaps = container.querySelectorAll('.t-carousel__snap');
  return Array.from(snaps).map((snap) => snap.offsetLeft - (container.clientWidth - snap.clientWidth) / 2);
}

export default function TestimonialsCarousel() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrollingRef = useRef(false);

  const updateActiveIndex = useCallback(() => {
    const container = carouselRef.current;
    if (!container) return;

    const offsets = getSnapOffsets(container);
    const scrollLeft = container.scrollLeft;
    let closest = 0;
    let minDistance = Infinity;

    offsets.forEach((offset, index) => {
      const distance = Math.abs(scrollLeft - offset);
      if (distance < minDistance) {
        minDistance = distance;
        closest = index;
      }
    });

    setActiveIndex(closest);
  }, []);

  const scrollToIndex = useCallback((index) => {
    const container = carouselRef.current;
    if (!container) return;

    const offsets = getSnapOffsets(container);
    const target = offsets[index];
    if (target === undefined) return;

    isScrollingRef.current = true;
    container.scrollTo({ left: target, behavior: 'smooth' });
    window.setTimeout(() => {
      isScrollingRef.current = false;
      updateActiveIndex();
    }, 500);
  }, [updateActiveIndex]);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return undefined;

    const onScroll = () => {
      if (!isScrollingRef.current) updateActiveIndex();
    };

    const onResize = () => updateActiveIndex();

    container.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    requestAnimationFrame(() => {
      scrollToIndex(0);
    });

    return () => {
      container.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [scrollToIndex, updateActiveIndex]);

  const goPrev = () => {
    scrollToIndex((activeIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goNext = () => {
    scrollToIndex((activeIndex + 1) % testimonials.length);
  };

  return (
    <section className="t-carousel-wrap" aria-label="Client testimonials">
      <div className="t-carousel__controls">
        <button
          type="button"
          className="t-carousel__nav t-carousel__nav--prev"
          aria-label="Previous testimonial"
          onClick={goPrev}
        >
          ‹
        </button>

        <div className="t-carousel__middle">
          <div ref={carouselRef} className="t-carousel">
            {testimonials.map((testimonial, index) => (
              <blockquote
                key={testimonial.id}
                className={`t-carousel__snap${index === 0 ? ' t-carousel__snap--start' : ''}`}
                aria-hidden={activeIndex !== index}
              />
            ))}
          </div>

          <div
            className="t-carousel__stage"
            aria-live="polite"
            aria-atomic="true"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`t-carousel__card${activeIndex === index ? ' is-active' : ''}`}
                aria-hidden={activeIndex !== index}
              >
                <p className="t-carousel__quote">&ldquo;{testimonial.quote}&rdquo;</p>
                <footer className="t-carousel__cite">
                  <cite>{testimonial.name}</cite>
                  <span>{testimonial.role}</span>
                </footer>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="t-carousel__nav t-carousel__nav--next"
          aria-label="Next testimonial"
          onClick={goNext}
        >
          ›
        </button>
      </div>

      <div className="t-carousel__dots" role="tablist" aria-label="Testimonial navigation">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            type="button"
            role="tab"
            className={`t-carousel__dot${activeIndex === index ? ' is-active' : ''}`}
            aria-label={`Show testimonial from ${testimonial.name}`}
            aria-selected={activeIndex === index}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
