import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="plevid-contact-form__success">
        Thank you — we&apos;ll be in touch shortly.
      </p>
    );
  }

  return (
    <form className="plevid-contact-form" onSubmit={handleSubmit}>
      <div className="plevid-contact-form__row">
        <label htmlFor="contact-name">
          Name
          <input id="contact-name" name="name" type="text" required autoComplete="name" />
        </label>
        <label htmlFor="contact-email">
          Email
          <input id="contact-email" name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <label htmlFor="contact-phone">
        Phone
        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" />
      </label>
      <label htmlFor="contact-message">
        Message
        <textarea id="contact-message" name="message" rows={5} required />
      </label>
      <button type="submit" className="plevid-contact-form__submit">
        Send enquiry
      </button>
    </form>
  );
}
