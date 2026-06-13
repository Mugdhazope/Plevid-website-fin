const COL_LEFT = [
  { src: 'https://selemen.liqium.com/img/m6.jpg', h: 'h-sm' },
  { src: 'https://selemen.liqium.com/img/m2.jpg', h: 'h-lg' },
  { src: 'https://selemen.liqium.com/img/m4.jpg', h: 'h-md' },
  { src: 'https://selemen.liqium.com/img/m7.jpg', h: 'h-sm' },
  { src: 'https://selemen.liqium.com/img/j1.jpg', h: 'h-xl' },
  { src: 'https://selemen.liqium.com/img/m5.jpg', h: 'h-md' },
];

const COL_RIGHT = [
  { src: 'https://selemen.liqium.com/img/m1.jpg', h: 'h-md' },
  { src: 'https://selemen.liqium.com/img/m5.jpg', h: 'h-sm' },
  { src: 'https://selemen.liqium.com/img/m3.jpg', h: 'h-lg' },
  { src: 'https://selemen.liqium.com/img/j1.jpg', h: 'h-sm' },
  { src: 'https://selemen.liqium.com/img/m6.jpg', h: 'h-md' },
  { src: 'https://selemen.liqium.com/img/m2.jpg', h: 'h-xl' },
];

function RollColumn({ images, reverse }) {
  const track = [...images, ...images];

  return (
    <div className="page1-roll-col">
      <div className={`page1-roll-track${reverse ? ' page1-roll-track--reverse' : ''}`}>
        {track.map((image, index) => (
          <div key={`${image.src}-${index}`} className={`page1-roll-item ${image.h}`}>
            <img src={image.src} alt="" loading={index < 3 ? 'eager' : 'lazy'} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroLanding() {
  return (
    <div id="page1">
      <span id="about" className="plevid-anchor" aria-hidden="true" />

      <div className="page1-left">
        <div className="page1-meta page1-meta--tl">
          <span className="page1-meta__icon" aria-hidden="true" />
          brand+
        </div>

        <nav className="page1-meta page1-meta--tr" aria-label="Navigation">
          <a href="#process">residential+</a>
          <a href="#why">commercial+</a>
          <a href="#contact">collections+</a>
        </nav>

        <div id="heading" className="page1-brand">
          <h1 className="page1-brand__word">
            Plevid
            <span className="page1-brand__mark" aria-hidden="true">®</span>
          </h1>
        </div>

        <div className="page1-meta page1-meta--br">plevid 2025©</div>
      </div>

      <div className="page1-right">
        <div className="page1-roll-grid">
          <RollColumn images={COL_LEFT} />
          <RollColumn images={COL_RIGHT} reverse />
        </div>
      </div>
    </div>
  );
}
