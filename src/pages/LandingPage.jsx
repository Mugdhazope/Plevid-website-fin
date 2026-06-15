import SiteMenu from '../components/SiteMenu.jsx';
import Footer from '../components/Footer.jsx';
import HeroLanding from '../components/HeroLanding.jsx';

export default function LandingPage() {
  return (
    <>
      <SiteMenu />
      <div id="main">
      <HeroLanding />
      <div id="page2">
        <div id="down">
          <h4>© 2025 Plevid</h4>
          <h4>Our address: Mumbai, India</h4>
          <div id="line1"></div>
          <div id="line2"></div>
        </div>
        <h2>Over 20 collections of curated lighting</h2>
        <h1>Elevating Spaces</h1>
        <img src="https://selemen.liqium.com/img/j1.jpg" alt="" />
        <div id="line"></div>
      </div>
      <div id="page3">
        <div id="l1" className="line3"></div>
        <div id="line3-vt"></div>
        <div id="l2" className="line3"></div>
        <div id="left">
          <h3>01</h3>
          <h4>Combining craftsmanship and modern design to illuminate spaces</h4>
          <div className="over">
            <div className="igs">
              <h5>Residential</h5>
              <h2>Lighting</h2>
            </div>
          </div>
        </div>
        <div id="right">
          <h3>02</h3>
          <h4>Creating immersive experiences with premium lighting solutions</h4>
          <div className="over">
            <div className="igs">
              <h5>Commercial</h5>
              <h2>Installations</h2>
            </div>
          </div>
        </div>
      </div>
      <div id="page4">
        <div>
          <img src="https://selemen.liqium.com/img/80r.svg" alt="" />
        </div>
      </div>
      <div id="page5">
        <div id="pt1" className="pt">
          <div className="textt">
            <h1>Signature Collection #1</h1>
            <p>Elegant fixtures that transform interiors into works of art.</p>
          </div>
        </div>
        <div id="pt2" className="pt">
          <div className="textt">
            <h1>Illumination of Light</h1>
            <p>Custom designs tailored for luxury homes and projects.</p>
          </div>
        </div>
        <div id="pt3" className="pt">
          <div className="textt">
            <h1>Modern Classics</h1>
            <p>Timeless lighting pieces crafted with precision and care.</p>
          </div>
        </div>
      </div>
      <div id="page6">
        <div id="elem1">
          {/* <h4>All Residential</h4> */}
          {/* <h4>All Commercial</h4> */}
          <div id="line6"></div>
          <div id="line6-vt"></div>
        </div>
        <div id="elem2">
          <button>Request Consultation</button>
          <div id="line6-h"></div>
        </div>
        <div id="elem3">
          {/* <h4>We help you</h4>
          <h4>implement bespoke lighting solutions</h4> */}
          <div id="linee"></div>
        </div>
        <div id="para">
          <p>Plevid is a luxury lighting brand, sourcing premium designs from Italy. We create lighting experiences that enhance architecture, interiors, and mood with precision and elegance.</p>
        </div>
      </div>
      <div id="page9">
        <img id="ig91" data-scroll data-scroll-speed="5" src="https://selemen.liqium.com/img/lt1.jpg" alt="" />
        <img id="ig92" data-scroll data-scroll-speed="4" src="https://selemen.liqium.com/img/lt2.jpg" alt="" />
        <img id="ig93" data-scroll data-scroll-speed="4" src="https://selemen.liqium.com/img/lt3.jpg" alt="" />
        <div>
          <div className="over"></div>
          <h1>Plevid®</h1>
        </div>
        <div>
          <div className="over"></div>
          <h1>offers complete</h1>
        </div>
        <div>
          <div className="over"></div>
          <h1>lighting solutions</h1>
        </div>
        <div>
          <div className="over"></div>
          <h1>for interiors</h1>
        </div>
        <div>
          <div className="over"></div>
          <h1>and architecture</h1>
        </div>
        <div>
          <div className="over"></div>
          <h1>residential & commercial</h1>
        </div>
      </div>
      {/* page10 — Why Choose Plevid / Philosophy & Services
      <div id="page10">
        <span id="why" className="plevid-anchor" aria-hidden="true" />
        <h4>Why Choose Plevid</h4>
        <div id="philosophy-grid">
          <div id="li1"></div>
          <div id="li2"></div>
          <h4>Our Philosophy</h4>
          <h4>Our Services</h4>
        </div>
      </div>
      */}
      {/* page11 — Reliability & Craftsmanship
      <div id="page11">
        <span id="process" className="plevid-anchor" aria-hidden="true" />
        <h1>Reliability & Craftsmanship</h1>
        <p>Complete transparency and excellence in every project</p>
        <div id="ii1" data-scroll data-scroll-speed="2">
          <h4>01</h4>
          <h2>High-end design & technical precision in every installation</h2>
        </div>
        <div id="ii2" data-scroll data-scroll-speed="4">
          <h4>02</h4>
          <h2>Only premium materials and lighting technology</h2>
        </div>
        <div id="ii3" data-scroll data-scroll-speed="3">
          <h4>03</h4>
          <h2>Exquisite craftsmanship by skilled artisans</h2>
        </div>
      </div>
      */}
      <div id="page12">
        <span id="why" className="plevid-anchor" aria-hidden="true" />
        <span id="process" className="plevid-anchor" aria-hidden="true" />
        {/* <h1>Customizable Collections</h1> */}
        {/* <p>We help you bring your lighting vision to life, no matter the scale or style</p> */}
      </div>
      <div id="page7">
        <div id="slide7">
          <h1>Design by Origin4</h1>
          <h1>Design by Origin4</h1>
        </div>
      </div>
      <div id="page8">
        <img src="/img/plevvv.png" alt="Design by Origin4" />
      </div>
      <Footer />
      </div>
    </>
  );
}
