import React, { useEffect, useState } from 'react';
import { SectionHeading, CTAButton, FAQSection } from '../components/ui';

const allProjects = [
  {
    title: 'J&K Bank',
    sector: 'Banking',
    scope: 'Branch interiors, special branches, guest houses, and an airport lounge',
    area: '230,000 sq. ft. (branches) + 26,000 sq. ft. (special) + 60,000 sq. ft. (guest houses) + 1,500 sq. ft. (lounge)',
    trades: 'Interior, civil, electrical, plumbing, HVAC, security systems',
  },
  {
    title: 'Torrent Pharmaceuticals',
    sector: 'Pharma & Corporate',
    scope: 'Corporate and facility interiors including chairman\'s office, conference rooms, and washrooms',
    area: 'Multi-site: Chhatral, Bhat, Dahej (Bharuch)',
    trades: 'Full turnkey fit-out',
  },
  {
    title: 'Eastin Hotel & Hospitality Group',
    sector: 'Hospitality',
    scope: 'Guest areas, buffet area, The Park Residency',
    area: '375,000 sq. ft.',
    trades: 'Interior, civil, MEP, furniture, decorative finishes',
  },
  {
    title: 'Nimaya Healthcare Centers',
    sector: 'Healthcare',
    scope: 'Women\'s health center interiors across two cities',
    area: 'Ahmedabad & Vadodara',
    trades: 'Interior, civil, electrical, plumbing',
  },
  {
    title: 'Zaveri Corporate Head Quarters',
    sector: 'Pharma & Corporate',
    scope: 'Corporate head office fit-out',
    area: '45,000 sq. ft.',
    trades: 'Full turnkey fit-out',
  },
  {
    title: 'Premium Residential Towers',
    sector: 'Residential',
    scope: 'Lodha Bellissimo, Lodha Frionza, L&T Crescent Bay, Oberoi Garden City',
    area: '155,000+ sq. ft.',
    trades: 'Interior, furniture manufacturing',
  },
  {
    title: 'Luxury Bungalows',
    sector: 'Residential',
    scope: 'Private residence interiors',
    area: '25,000 sq. ft.',
    trades: 'Full turnkey with decorative finishes',
  },
];

const filters = ['All', 'Banking', 'Pharma & Corporate', 'Hospitality', 'Healthcare', 'Residential'];

const summaryTable = [
  { sector: 'Banking', client: 'J&K Bank (Pan-India)', area: '230,000 sq. ft.' },
  { sector: 'Pharma/Corporate', client: 'Torrent, Lambda, Intas', area: '85,000 sq. ft.' },
  { sector: 'Hospitality', client: 'Eastin Hotel & Group', area: '375,000 sq. ft.' },
  { sector: 'Retail', client: 'Malls & Salons', area: '95,000 sq. ft.' },
  { sector: 'Residential', client: 'Towers (Mumbai)', area: '155,000 sq. ft.' },
  { sector: 'Bungalows', client: 'Private Residences', area: '25,000 sq. ft.' },
  { sector: 'Corporate HQ', client: 'Zaveri Corporate House', area: '45,000 sq. ft.' },
];

const projectsFaqs = [
  {
    q: 'What is the largest project KBP has completed?',
    a: 'KBP\'s largest single-group engagement is its hospitality sector work, totaling approximately 375,000 sq. ft., alongside a 230,000 sq. ft. Pan-India banking branch rollout for J&K Bank.',
  },
  {
    q: 'Has KBP worked with pharmaceutical companies?',
    a: 'Yes. KBP has delivered facility interiors for Torrent Pharmaceuticals, Lambda Pharmaceuticals, and Intas Pharmaceuticals across multiple Gujarat locations including Chhatral, Bhat, and Dahej.',
  },
  {
    q: 'Does KBP handle luxury residential and bungalow interiors?',
    a: 'Yes. KBP has completed premium residential towers in Mumbai (Lodha, L&T Realty, Oberoi) and luxury bungalow projects totaling 25,000+ sq. ft.',
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    document.title = 'Our Projects & Case Studies | KBP Interior Projects Ahmedabad';
  }, []);

  const filtered = activeFilter === 'All'
    ? allProjects
    : allProjects.filter((p) => p.sector === activeFilter);

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
          Projects Delivered Across Every Sector We Serve
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
          Real scope, real square footage, real clients. See the work behind the numbers.
        </p>
      </section>

      {/* Filter Bar */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '2rem 4rem', borderBottom: '1px solid var(--color-border)' }}
        className="lg:px-[8rem]"
      >
        <div className="flex flex-wrap gap-[1rem]">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: '0.8rem 2rem',
                fontSize: '1.2rem',
                fontWeight: activeFilter === f ? '700' : '400',
                fontFamily: 'var(--font-primary)',
                color: activeFilter === f ? 'var(--color-white)' : 'var(--color-black)',
                backgroundColor: activeFilter === f ? 'var(--color-black)' : 'transparent',
                border: '1px solid var(--color-black)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="space-y-0">
          {filtered.map((project, i) => (
            <div
              key={i}
              style={{
                padding: '4rem 0',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2rem] lg:gap-[4rem]">
                <div className="lg:col-span-5">
                  <span
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-brand-red)',
                      display: 'block',
                      marginBottom: '1rem',
                    }}
                  >
                    {project.sector}
                  </span>
                  <h2
                    style={{
                      fontSize: '2.2rem',
                      fontWeight: '300',
                      color: 'var(--color-black)',
                      paddingBottom: '0',
                    }}
                  >
                    {project.title}
                  </h2>
                </div>
                <div className="lg:col-span-7">
                  <p style={{ fontSize: '1.4rem', fontWeight: '300', color: 'var(--color-text-body)', lineHeight: '1.8', marginBottom: '1rem' }}>
                    {project.scope}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
                    <div>
                      <span style={{ fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-light)', display: 'block', marginBottom: '0.5rem' }}>Area</span>
                      <span style={{ fontSize: '1.3rem', fontWeight: '300', color: 'var(--color-black)' }}>{project.area}</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-light)', display: 'block', marginBottom: '0.5rem' }}>Trades</span>
                      <span style={{ fontSize: '1.3rem', fontWeight: '300', color: 'var(--color-black)' }}>{project.trades}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary Table */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-grey)' }}>
        <SectionHeading title="Project Summary" />
        <div className="overflow-x-auto">
          <table className="w-full" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-black)' }}>
                {['Sector', 'Representative Client', 'Area Completed'].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: '1.5rem 2rem',
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      textAlign: 'left',
                      color: 'var(--color-black)',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {summaryTable.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '1.5rem 2rem', fontSize: '1.3rem', fontWeight: '300' }}>{row.sector}</td>
                  <td style={{ padding: '1.5rem 2rem', fontSize: '1.3rem', fontWeight: '300' }}>{row.client}</td>
                  <td style={{ padding: '1.5rem 2rem', fontSize: '1.3rem', fontWeight: '300' }}>{row.area}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <SectionHeading title="Frequently Asked Questions" />
        <div className="max-w-[80rem]">
          <FAQSection items={projectsFaqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-black)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2.4rem, 3.5vw, 3.2rem)', fontWeight: '300', color: 'var(--color-white)', marginBottom: '2rem', paddingBottom: '0' }}>
          Have a Similar Project in Mind?
        </h2>
        <CTAButton to="/contact" variant="light">Request a Quote</CTAButton>
      </section>
    </main>
  );
}
