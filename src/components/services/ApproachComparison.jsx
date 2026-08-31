import './approach-comparison.css';

export default function ApproachComparison({ heading, intro, mistakes, approach, footer }) {
  return (
    <section className="approach-compare">
      <p className="approach-compare__label">Common Industry Challenges</p>
      <h2 className="approach-compare__title">{heading}</h2>
      <p className="approach-compare__intro">{intro}</p>

      <div className="approach-compare__grid">
        <div className="approach-compare__col approach-compare__col--mistakes">
          <h3 className="approach-compare__col-title">Common Mistakes</h3>
          <ul className="approach-compare__list">
            {mistakes.map((item) => (
              <li key={item} className="approach-compare__item approach-compare__item--x">
                <span aria-hidden="true">×</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="approach-compare__col approach-compare__col--approach">
          <h3 className="approach-compare__col-title">The Plevid Approach</h3>
          <ul className="approach-compare__list">
            {approach.map((item) => (
              <li key={item} className="approach-compare__item approach-compare__item--check">
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="approach-compare__footer">{footer}</p>
    </section>
  );
}
