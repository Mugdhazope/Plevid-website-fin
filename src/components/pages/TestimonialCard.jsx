export default function TestimonialCard({ testimonial }) {
  return (
    <blockquote className="plevid-card plevid-card--testimonial">
      <p className="plevid-card__quote">&ldquo;{testimonial.quote}&rdquo;</p>
      <footer className="plevid-card__author">
        <cite>{testimonial.name}</cite>
        <span>{testimonial.role}</span>
      </footer>
    </blockquote>
  );
}
