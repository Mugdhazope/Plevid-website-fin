import PageShell from '../components/layout/PageShell.jsx';
import PageHero from '../components/pages/PageHero.jsx';
import TestimonialCard from '../components/pages/TestimonialCard.jsx';
import { testimonials } from '../data/testimonials.js';

export default function TestimonialsPage() {
  return (
    <PageShell>
      <PageHero
        label="testimonials"
        title="trusted by architects & homeowners"
        description="Client feedback from projects across residential, hospitality, and commercial spaces."
      />
      <section className="plevid-section">
        <div className="plevid-section__inner plevid-grid plevid-grid--2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
