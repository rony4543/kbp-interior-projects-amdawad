import React, { useEffect, useState } from 'react';
import { CTAButton } from '../components/ui';

const partnershipTypes = [
  'Architect or Interior Designer',
  'Developer or Real Estate Partner',
  'Corporate or Institutional Partner',
  'Vendor or Material Partner',
  'Other',
];

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    partnershipType: '',
    city: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Partner with KBP Interior Projects';
  }, []);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '1.2rem 0',
    fontSize: '1.5rem',
    fontFamily: 'var(--font-primary)',
    fontWeight: '300',
    border: 'none',
    borderBottom: '1px solid var(--color-border)',
    backgroundColor: 'transparent',
    color: 'var(--color-black)',
    outline: 'none',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '1.1rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.14em',
    color: 'var(--color-text-light)',
    marginBottom: '0.8rem',
  };

  return (
    <main>
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="mx-auto w-full max-w-[78rem]">
          <div className="mb-[5rem]">
            <p style={{ fontSize: '1.1rem', fontWeight: '700', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-brand-red)', marginBottom: '1.5rem' }}>
              Professional collaboration
            </p>
            <h1 style={{ fontSize: 'clamp(3.2rem, 5vw, 5.4rem)', fontWeight: '300', color: 'var(--color-black)', lineHeight: '1.12', maxWidth: '70rem', marginBottom: '2rem' }}>
              Let&apos;s build exceptional spaces together.
            </h1>
            <p style={{ fontSize: '1.5rem', fontWeight: '300', color: 'var(--color-text-light)', lineHeight: '1.7', maxWidth: '62rem' }}>
              Partner with KBP Interior Projects for interior execution, custom furniture manufacturing, site coordination, and complete project delivery. Share your details and tell us how we can work together.
            </p>
          </div>

          {submitted ? (
            <div style={{ padding: '4rem', backgroundColor: 'var(--color-bg-grey)', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.4rem', fontWeight: '300', color: 'var(--color-brand-red)', marginBottom: '1.5rem' }}>Thank You</h2>
              <p style={{ fontSize: '1.4rem', fontWeight: '300', color: 'var(--color-text-body)' }}>We have received your partnership enquiry and will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-[3.5rem]">
              <div>
                <label htmlFor="partner-name" style={labelStyle}>01 / Full Name *</label>
                <input id="partner-name" type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="e.g. Rahul Sharma" style={inputStyle} />
              </div>
              <div>
                <label htmlFor="partner-company" style={labelStyle}>02 / Company or Studio Name *</label>
                <input id="partner-company" type="text" name="company" required value={formData.company} onChange={handleChange} placeholder="e.g. Studio Design Works" style={inputStyle} />
              </div>
              <div>
                <label htmlFor="partner-phone" style={labelStyle}>03 / Mobile Number *</label>
                <input id="partner-phone" type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" style={inputStyle} />
              </div>
              <div>
                <label htmlFor="partner-email" style={labelStyle}>04 / Email Address *</label>
                <input id="partner-email" type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="rahul@example.com" style={inputStyle} />
              </div>
              <div>
                <label htmlFor="partnership-type" style={labelStyle}>05 / How Would You Like to Partner? *</label>
                <select id="partnership-type" name="partnershipType" required value={formData.partnershipType} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                  <option value="">Select partnership type</option>
                  {partnershipTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="partner-city" style={labelStyle}>06 / City and Organisation Details</label>
                <input id="partner-city" type="text" name="city" value={formData.city} onChange={handleChange} placeholder="e.g. Ahmedabad, Gujarat" style={inputStyle} />
              </div>
              <div>
                <label htmlFor="partner-details" style={labelStyle}>07 / Tell Us About Your Partnership</label>
                <textarea id="partner-details" name="details" rows={4} value={formData.details} onChange={handleChange} placeholder="Briefly describe your work, requirements, or partnership opportunity." style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <CTAButton type="submit">Submit Partnership Enquiry</CTAButton>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
