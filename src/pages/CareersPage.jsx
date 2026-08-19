import React, { useEffect } from 'react';
import { SectionHeading, CTAButton } from '../components/ui';

const reasons = [
  'Work across marquee clients: banking, pharma, hospitality, and luxury residential',
  'Learn from senior architects, engineers, and specialist craftsmen, including our rare DP Division decorative finishing team',
  'Real project ownership, from design to on-site execution',
  'Stability of a company with a multi-generational track record',
];

const departments = [
  { name: 'Design Department', roles: 'Architects, Designers, Draftsmen' },
  { name: 'Project Operations', roles: 'Project Managers, Site Supervisors, Site Workers' },
  { name: 'Business Development', roles: 'Client Relations, Proposal & Estimation' },
  { name: 'HR & Admin', roles: 'Human Resources, Office Administration' },
  { name: 'Finance & Accounts', roles: 'Financial Planning, Accounts Management' },
  { name: 'Factory & Production', roles: 'Bhiwandi Factory Team, CNC Operators, Craftsmen' },
];

export default function CareersPage() {
  useEffect(() => {
    document.title = 'Careers at KBP Interior Projects | Join Our Ahmedabad Team';
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
          Build Your Career With a Team That Builds at Scale
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
          240+ professionals, one growing turnkey company. See where you fit.
        </p>
      </section>

      {/* Why Join Us */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <SectionHeading title="Why Join Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] max-w-[90rem]">
          {reasons.map((reason, i) => (
            <div
              key={i}
              style={{
                padding: '3rem',
                backgroundColor: 'var(--color-bg-grey)',
                fontSize: '1.4rem',
                fontWeight: '300',
                color: 'var(--color-text-body)',
                lineHeight: '1.7',
              }}
            >
              {reason}
            </div>
          ))}
        </div>
      </section>

      {/* Departments */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-grey)' }}>
        <SectionHeading title="Departments Hiring" />
        <div className="space-y-0">
          {departments.map((dept, i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-12 gap-[1rem] lg:gap-[4rem]"
              style={{
                padding: '2.5rem 0',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <div className="lg:col-span-5">
                <h3 style={{ fontSize: '1.6rem', fontWeight: '400', color: 'var(--color-black)' }}>
                  {dept.name}
                </h3>
              </div>
              <div className="lg:col-span-7">
                <p style={{ fontSize: '1.3rem', fontWeight: '300', color: 'var(--color-text-light)', marginBottom: '0' }}>
                  {dept.roles}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-black)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2.4rem, 3.5vw, 3.2rem)', fontWeight: '300', color: 'var(--color-white)', marginBottom: '1.5rem', paddingBottom: '0' }}>
          Don't See Your Role Listed?
        </h2>
        <p style={{ fontSize: '1.4rem', fontWeight: '300', color: 'rgba(255,255,255,0.6)', marginBottom: '3rem', maxWidth: '50rem', margin: '0 auto 3rem' }}>
          We are always looking for skilled talent across design, engineering, and site execution. Send your profile and we will reach out when a fit opens up.
        </p>
        <CTAButton
          to="mailto:kbpinteriorprojects@gmail.com"
          variant="light"
        >
          Send Your Resume
        </CTAButton>
      </section>
    </main>
  );
}
