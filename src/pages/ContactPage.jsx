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
      {/* Form */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="mx-auto w-full max-w-[78rem]">
          <div className="mb-[5rem]">
            <p style={{ fontSize: '1.1rem', fontWeight: '700', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-brand-red)', marginBottom: '1.5rem' }}>
              Professional collaboration
            </p>
            <h2 style={{ fontSize: 'clamp(3rem, 5vw, 5.2rem)', fontWeight: '300', color: 'var(--color-black)', lineHeight: '1.12', maxWidth: '70rem', marginBottom: '2rem' }}>
              Let&apos;s build exceptional spaces together.
            </h2>
            <p style={{ fontSize: '1.5rem', fontWeight: '300', color: 'var(--color-text-light)', lineHeight: '1.7', maxWidth: '62rem' }}>
              Partner with KBP for interior execution, custom furniture manufacturing, site coordination, and complete project delivery. Share your details, and our team will connect with you to understand your upcoming project.
            </p>
          </div>

          {submitted ? (
            <div style={{ padding: '4rem', backgroundColor: 'var(--color-bg-grey)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.4rem', fontWeight: '300', color: 'var(--color-brand-red)', marginBottom: '1.5rem' }}>Thank You</h3>
              <p style={{ fontSize: '1.4rem', fontWeight: '300', color: 'var(--color-text-body)' }}>We have received your inquiry and will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-[3.5rem]">
              <div>
                <label style={labelStyle}>01 / Full Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="e.g. Rahul Sharma" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>02 / Company or Studio Name</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="e.g. Studio Design Works" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>03 / Mobile Number *</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>04 / Email Address *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="rahul@example.com" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>05 / Project Type *</label>
                <select name="projectType" required value={formData.projectType} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                  <option value="">Select your project type</option>
                  {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>06 / City and Approx. Area</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="e.g. Ahmedabad, 10,000 sq. ft." style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>07 / Tell Us About Your Requirement</label>
                <textarea name="details" rows={4} value={formData.details} onChange={handleChange} placeholder="Briefly describe your project, required services, or partnership enquiry." style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <CTAButton type="submit">Submit Enquiry</CTAButton>
            </form>
          )}
        </div>
      </section>

      {/* Office Details */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-grey)' }}>
        <div className="mx-auto w-full max-w-[78rem]">
          <SectionHeading title="Office Details" />
          <div className="grid grid-cols-1 gap-[4rem] md:grid-cols-2">
            <div>
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

            <div>
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

            <div className="md:col-span-2" style={{ width: '100%', height: '25rem', backgroundColor: 'var(--color-white)' }}>
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
