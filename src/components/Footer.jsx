export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="plevid-footer">
      <div className="plevid-footer__inner">
        <div className="plevid-footer__label">
          <span className="plevid-footer__dot" />
          contact us.
        </div>
        <h2 className="plevid-footer__title">
          let&apos;s talk
          <br />
          light.
        </h2>

        <div className="plevid-footer__grid">
          <div>
            <div className="plevid-footer__col-label">01 — studio</div>
            <p className="plevid-footer__col-text">
              Enam Sambhav, C - 20, G Block Rd
              <br />
              G Block BKC, Bandra Kurla Complex
              <br />
              Bandra East, Mumbai, Maharashtra 400051
            </p>
          </div>
          <div>
            <div className="plevid-footer__col-label">02 — enquiries</div>
            <p className="plevid-footer__col-text">
              <a href="mailto:contact@plevid.com">contact@plevid.com</a>
            </p>
          </div>
          <div>
            <div className="plevid-footer__col-label">03 — direct</div>
            <p className="plevid-footer__col-text">
              <a href="tel:+918828181288">+91 88281 81288</a>
              <br />
              Mon — Sat, 10:00 — 19:00 IST
            </p>
          </div>
        </div>

        <div className="plevid-footer__bar">
          <img src="img/PLEVID.svg" alt="PLEVID" className="plevid-footer__logo" />
          <div>Mumbai • Bangalore • Guwahati</div>
          <div>© {year} Plevid Group</div>
        </div>
      </div>
    </footer>
  );
}
