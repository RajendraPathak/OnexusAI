import { useState } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
};

const ContactForm: React.FC<Props> = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; mobile?: string; email?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const validate = () => {
    const e: typeof errors = {};
    if (!name.trim()) e.name = 'Name is required';
    if (!mobile.trim()) e.mobile = 'Mobile number is required';
    else if (!/^\+?\d{7,15}$/.test(mobile.trim())) e.mobile = 'Enter a valid mobile number';
    if (!email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = 'Enter a valid email';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      // placeholder for real API call
      await new Promise((res) => setTimeout(res, 800));
      console.log('Contact form submitted', { name, mobile, email });
      setSubmitted(true);
      // Show success message as requested
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    // Reset and close
    setName('');
    setMobile('');
    setEmail('');
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal contact-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal-close" onClick={handleClose} aria-label="Close">×</button>
        {!submitted ? (
          <>
            <div className="modal-grid">
              <div className="modal-left">
                <h3>Let's talk about your project</h3>
                <p>Share your details and our team will get back to you with the best next steps.</p>
                <div className="contact-note">
                  <strong>If you want to directly connect with us please reach us @</strong>
                  <a href="mailto:info@onexusglobal.com"> info@onexusglobal.com</a>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <label>
                  <span className="label">Full name</span>
                  <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Your full name" />
                  {errors.name && <div className="field-error">{errors.name}</div>}
                </label>

                <label>
                  <span className="label">Mobile number</span>
                  <input value={mobile} onChange={(e) => setMobile(e.target.value)} type="tel" name="mobile" placeholder="e.g. +1234567890" />
                  {errors.mobile && <div className="field-error">{errors.mobile}</div>}
                </label>

                <label>
                  <span className="label">Email</span>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="you@company.com" />
                  {errors.email && <div className="field-error">{errors.email}</div>}
                </label>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary" disabled={submitting}>{submitting ? 'Sending...' : 'Submit'}</button>
                  <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <div className="success-panel">
            <div className="success-emoji">✅</div>
            <h3>Thank you, our team will reach out, soon!</h3>
            <p>We've received your details. If you'd like to reach us directly, email <a href="mailto:info@onexusglobal.com">info@onexusglobal.com</a></p>
            <div className="form-actions">
              <button className="btn btn-primary" onClick={handleClose}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
