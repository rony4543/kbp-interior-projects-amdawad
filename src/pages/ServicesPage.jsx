import React, { useEffect } from 'react';
import { SectionHeading, CTAButton, FAQSection } from '../components/ui';

const servicesList = [
  {
    title: 'Design & Build',
    desc: 'Our in-house design team plans space utilization to balance an elegant finish with budget and function. The design you approve is the design you get, without change-order surprises.',
  },
  {
    title: 'Interior Fit-Out',
    desc: 'Full interior execution led by our Senior Architect and design team, tailored to each client\'s brand, operations, and long-term use. From corporate offices to luxury residences.',
  },
  {
    title: 'Civil Construction',
    desc: 'Structural and interior civil work handled by our own Civil Engineering team, using quality-checked materials built for long-term durability, not just a good first impression.',
  },
  {
    title: 'Electrical Contracting',
    desc: 'Erection, installation, and maintenance of electrical systems by our Specialist Electrical Engineering team, following strict quality and safety protocols on every project.',
  },
  {
    title: 'Plumbing & Sanitary Systems',
    desc: 'End-to-end plumbing from water supply to sewage systems, supervised by our Senior Mechanical Engineer, including upgrades to existing infrastructure and long-term guaranteed workmanship.',
  },
  {
    title: 'HVAC & Mechanical Systems',
    desc: 'Heating, cooling, refrigeration, piping, and sensor-based automation, installed and maintained by our Mechanical Engineering specialists for consistent year-round performance.',
  },
  {
    title: 'Networking, Automation & Security',
    desc: 'IT infrastructure, automation systems, and complete security and safety solutions, delivered by our Specialist IT Engineering team for a fully connected, protected space.',
  },
  {
    title: 'Custom Furniture Manufacturing',
    desc: 'Modular, customized, and solid wood furniture produced at our own 16,500 sq. ft. factory in Bhiwandi, giving us control over quality, cost, and turnaround that outsourced vendors cannot match.',
  },
  {
    title: 'Specialist Decorative Finishes',
    desc: 'Our DP Division brings craft techniques rarely offered by standard contractors: Gold & Silver Gilding, Relief Work, Trompe L\'Oeil Paintings, Faux Effect Painting & Stencilling, and Broken Colour & Shading Finishes.',
  },
];

const servicesFaqs = [
  {
    q: 'Does KBP handle both design and construction, or just one?',
    a: 'Both. KBP is a full turnkey contractor. Our in-house teams handle design, civil, electrical, plumbing, HVAC, networking, and furniture manufacturing under a single project contract.',
  },
  {
    q: 'Can KBP execute specialist decorative finishes like gilding?',
    a: 'Yes. Our DP Division specializes in gold and silver gilding, Trompe L\'Oeil painting, faux finishes, and relief work for high-end hospitality and residential interiors.',
  },
  {
    q: 'Is furniture made in-house or outsourced?',
    a: 'In-house. KBP manufactures modular, customized, and solid wood furniture at its own factory in Bhiwandi, Thane.',
  },
];

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Interior Design, Civil, MEP & Furniture Services | KBP Interior Projects';
  }, []);

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
          Every Trade Your Project Needs, Under One Contract
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
          We don't subcontract the core of your project out to strangers. Our own architects, engineers, and craftsmen deliver it, start to finish.
        </p>
      </section>

      {/* Services List */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="space-y-0">
          {servicesList.map((service, i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-12 gap-[2rem] lg:gap-[4rem]"
              style={{
                padding: '4rem 0',
                borderBottom: i < servicesList.length - 1 ? '1px solid var(--color-border)' : 'none',
              }}
            >
              <div className="lg:col-span-1">
                <span
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: '300',
                    color: 'var(--color-text-light)',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="lg:col-span-4">
                <h2
                  style={{
                    fontSize: '2rem',
                    fontWeight: '300',
                    color: 'var(--color-black)',
                    paddingBottom: '0',
                  }}
                >
                  {service.title}
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: '300',
                    color: 'var(--color-text-body)',
                    lineHeight: '1.8',
                    marginBottom: '0',
                  }}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-grey)' }}>
        <SectionHeading title="Frequently Asked Questions" />
        <div className="max-w-[80rem]">
          <FAQSection items={servicesFaqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-black)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2.4rem, 3.5vw, 3.2rem)', fontWeight: '300', color: 'var(--color-white)', marginBottom: '2rem', paddingBottom: '0' }}>
          Need a Scope Discussion?
        </h2>
        <CTAButton to="/contact" variant="light">Request a Quote</CTAButton>
      </section>
    </main>
  );
}
