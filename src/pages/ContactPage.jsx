import React, { useEffect, useState } from 'react';
import { SectionHeading, CTAButton, FAQSection } from '../components/ui';

const projectTypes = [
  'Banking', 'Pharma/Corporate', 'Hospitality', 'Healthcare',
  'Retail', 'Residential', 'Bungalow', 'Other',
];

const contactFaqs = [
  {
    q: 'Where is KBP Interior Projects located?',
    a: 'KBP\'s main office is in Thaltej, Ahmedabad, with a company-owned factory in Bhiwandi (Thane), Maharashtra.',
  },
  {
    q: 'How do I request a quote from KBP?',
    a: 'Fill out the project request form on this page with your project type, city, and approximate area, or call +91 7802000567 directly.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '',
    projectType: '', city: '', details: '', area: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact KBP Interior Projects | Ahmedabad Office';
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '1.2rem 1.5rem',
    fontSize: '1.3rem',
    fontFamily: 'var(--font-primary)',
    fontWeight: '300',
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-black)',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '1.1rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--color-text-light)',
    marginBottom: '0.8rem',
  };

  return (
    <main>
      {/* Hero */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-grey)' }}>
        <h1
          style={{
            fontSize: 'clamp(2.8rem, 4vw, 4.2rem)',
            fontWeight: '300',
            color: 'var(--color-brand-red)',
            lineHeight: '1.2',
            maxWidth: '60rem',
            marginBottom: '2rem',
          }}
        >
          Let's Talk About Your Project
        </h1>
        <p
          style={{
            fontSize: '1.5rem',
            fontWeight: '300',
            color: 'var(--color-text-body)',
            maxWidth: '60rem',
            lineHeight: '1.7',
          }}
        >
          Tell us the scope. We will respond with next steps, not a sales pitch.
        </p>
      </section>

      {/* Form + Details */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[6rem]">
          {/* Form */}
          <div className="lg:col-span-7">
            <SectionHeading title="Request a Quote" />

            {submitted ? (
              <div style={{ padding: '4rem', backgroundColor: 'var(--color-bg-grey)', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: '300', color: 'var(--color-brand-red)', marginBottom: '1.5rem' }}>
                  Thank You
                </h3>
                <p style={{ fontSize: '1.4rem', fontWeight: '300', color: 'var(--color-text-body)' }}>
                  We have received your inquiry and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-[2.5rem]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[2.5rem]">
                  <div>
                    <label style={labelStyle}>Name</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-black)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Company</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-black)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[2.5rem]">
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-black)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-black)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[2.5rem]">
                  <div>
                    <label style={labelStyle}>Project Type</label>
                    <select name="projectType" required value={formData.projectType} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-black)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                    >
                      <option value="">Select type</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>City</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-black)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Approx. Area (sq. ft.)</label>
                  <input type="text" name="area" value={formData.area} onChange={handleChange} style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-black)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Project Details</label>
                  <textarea name="details" rows={5} value={formData.details} onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-black)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                  />
                </div>
                <CTAButton type="submit">Request a Quote</CTAButton>
              </form>
            )}
          </div>

          {/* Office Details */}
          <div className="lg:col-span-5">
            <SectionHeading title="Office Details" />

            <div className="mb-[4rem]">
              <h4 style={{ fontSize: '1.4rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
                Ahmedabad Office
              </h4>
              <p style={{ fontSize: '1.3rem', fontWeight: '300', lineHeight: '2', color: 'var(--color-text-body)' }}>
                24, GF, The Orchid Shopping Mall,<br />
                Near Goberdhan Party Plot,<br />
                Shilaj Road, Thaltej,<br />
                Ahmedabad 380059
              </p>
              <div className="mt-[1.5rem]" style={{ fontSize: '1.3rem', fontWeight: '300', color: 'var(--color-text-body)' }}>
                <p style={{ marginBottom: '0.5rem' }}>Phone: +91 7802000567 / +91 9898087683</p>
                <p>Email: kbpinteriorprojects@gmail.com</p>
              </div>
            </div>

            <div className="mb-[4rem]">
              <h4 style={{ fontSize: '1.4rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
                Factory
              </h4>
              <p style={{ fontSize: '1.3rem', fontWeight: '300', lineHeight: '2', color: 'var(--color-text-body)' }}>
                Unit No. F-10/1,<br />
                Bhumi World Industrial Park,<br />
                Pimplas, Mumbai-Nashik Highway,<br />
                Kalyan, Thane 421302,<br />
                Maharashtra
              </p>
            </div>

            {/* Map Embed */}
            <div style={{ width: '100%', height: '25rem', backgroundColor: 'var(--color-bg-grey)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5!2d72.49!3d23.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAzJzAwLjAiTiA3MsKwMjknMjQuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KBP Interior Projects Ahmedabad Office Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-grey)' }}>
        <SectionHeading title="Frequently Asked Questions" />
        <div className="max-w-[80rem]">
          <FAQSection items={contactFaqs} />
        </div>
      </section>
    </main>
  );
}
