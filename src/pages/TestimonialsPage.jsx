import PageShell from '../components/layout/PageShell.jsx';
import PageHero from '../components/pages/PageHero.jsx';
import TestimonialsCarousel from '../components/testimonials/TestimonialsCarousel.jsx';

export default function TestimonialsPage() {
  return (
    <PageShell>
      <PageHero
        label="testimonials"
        title="trusted by architects & homeowners"
        description="Client feedback from projects across residential, hospitality, and commercial spaces."
      />
      <TestimonialsCarousel />
    </PageShell>
  );
}
