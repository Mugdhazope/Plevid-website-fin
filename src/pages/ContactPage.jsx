import PageShell from '../components/layout/PageShell.jsx';
import PageHero from '../components/pages/PageHero.jsx';
import Reveal from '../components/motion/Reveal.jsx';
import RevealStagger from '../components/motion/RevealStagger.jsx';
import ContactForm from '../components/pages/ContactForm.jsx';
import {
  contactDetails,
  offices,
  qrLinks,
  certifications,
  compliance,
  sustainability,
} from '../data/contact.js';

export default function ContactPage() {
  return (
    <PageShell showFooter={false}>
      <Reveal>
        <PageHero
          label="contact us"
          title="let's create better spaces"
          description="Key contacts and pan-India presence across Mumbai, Bangalore, and Guwahati."
        />
      </Reveal>

      <section className="plevid-section">
        <div className="plevid-section__inner">
          <RevealStagger className="plevid-contact-quick" stagger={0.06}>
            <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}>{contactDetails.phone}</a>
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            <span>{contactDetails.website}</span>
            <span>{contactDetails.instagram}</span>
          </RevealStagger>
        </div>
      </section>

      <section className="plevid-section plevid-section--accent">
        <div className="plevid-section__inner">
          <RevealStagger className="plevid-grid plevid-grid--3" stagger={0.1}>
            {offices.map((office) => (
              <article key={office.id} className="plevid-card plevid-card--service plevid-card--interactive plevid-office-card">
                <h2 className="plevid-card__title">{office.label}</h2>
                <address className="plevid-contact__address">
                  {office.lines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </address>
              </article>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="plevid-section">
        <div className="plevid-section__inner plevid-contact">
          <Reveal className="plevid-contact__form-col">
            <h2 className="plevid-section__title">Send a message</h2>
            <ContactForm />
          </Reveal>
          <Reveal className="plevid-contact__details-col" delay={0.1}>
            <h2 className="plevid-section__title">Head Office</h2>
            <address className="plevid-contact__address">
              {offices[0].lines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
            <div className="plevid-contact__links">
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}>{contactDetails.phone}</a>
              <span>{contactDetails.hours}</span>
            </div>
            <Reveal className="plevid-contact__map" delay={0.15} y={20}>
              <iframe
                title="Plevid head office location"
                src={`https://maps.google.com/maps?q=${offices[0].mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </Reveal>
        </div>
      </section>

      <section className="plevid-section plevid-section--accent">
        <div className="plevid-section__inner">
          <RevealStagger className="plevid-grid plevid-grid--2 plevid-qr-grid" stagger={0.08}>
            {qrLinks.map((link) => (
              <div key={link.label} className="plevid-qr-placeholder plevid-card--interactive">
                <span className="plevid-qr-placeholder__box" aria-hidden="true" />
                <p className="plevid-card__meta">{link.label}</p>
                <p className="plevid-card__text">{link.value}</p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="plevid-section">
        <RevealStagger className="plevid-section__inner plevid-contact-footer-grid" stagger={0.1}>
          <div>
            <h3 className="plevid-section__title">{certifications.heading}</h3>
            <ul className="plevid-card__list">
              {certifications.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="plevid-section__title">{compliance.heading}</h3>
            <ul className="plevid-card__list">
              {compliance.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="plevid-section__title">{sustainability.heading}</h3>
            <ul className="plevid-card__list">
              {sustainability.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </RevealStagger>
      </section>
    </PageShell>
  );
}
