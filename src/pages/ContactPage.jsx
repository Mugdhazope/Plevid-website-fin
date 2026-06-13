import PageShell from '../components/layout/PageShell.jsx';
import PageHero from '../components/pages/PageHero.jsx';
import ContactForm from '../components/pages/ContactForm.jsx';
import { contactDetails, studioAddress } from '../data/contact.js';

export default function ContactPage() {
  return (
    <PageShell showFooter={false}>
      <PageHero
        label="contact us"
        title="let's talk light"
        description="Reach out for consultations, project enquiries, or product specifications."
      />
      <section className="plevid-section">
        <div className="plevid-section__inner plevid-contact">
          <div className="plevid-contact__form-col">
            <h2 className="plevid-section__title">Send a message</h2>
            <ContactForm />
          </div>
          <div className="plevid-contact__details-col">
            <h2 className="plevid-section__title">Studio</h2>
            <address className="plevid-contact__address">
              {studioAddress.lines.map((line) => (
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
            <div className="plevid-contact__map">
              <iframe
                title="Plevid studio location"
                src={`https://maps.google.com/maps?q=${studioAddress.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
