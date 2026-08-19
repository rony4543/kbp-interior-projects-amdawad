import React, { useEffect } from 'react';
import { SectionHeading, CTAButton } from '../components/ui';

const sectorsData = [
  {
    title: 'Banks & Financial Institutions',
    desc: 'Branch interiors, head offices, guest houses, and airport lounges. Delivered for J&K Bank across Pan-India with 230,000+ sq. ft.',
    highlight: '230,000+ sq. ft.',
  },
  {
    title: 'Pharmaceutical & Corporate Offices',
    desc: 'Facility interiors from chairman\'s offices to conference rooms for Torrent, Lambda, and Intas Pharmaceuticals across Gujarat.',
    highlight: '85,000+ sq. ft.',
  },
  {
    title: 'Hotels & Hospitality',
    desc: 'Full hospitality fit-outs including guest areas, buffet areas, and residency interiors. Our largest single-sector engagement.',
    highlight: '375,000 sq. ft.',
  },
  {
    title: 'Hospitals & Healthcare Clinics',
    desc: 'Women\'s health centers and clinical interiors built to healthcare-grade specifications across Ahmedabad and Vadodara.',
    highlight: 'Multi-city',
  },
  {
    title: 'Malls, Retail & Salons',
    desc: 'Commercial retail spaces designed for high footfall, brand presence, and operational efficiency.',
    highlight: '95,000 sq. ft.',
  },
  {
    title: 'Residential Towers, Bungalows & Clubhouses',
    desc: 'Premium residential interiors for Lodha, L&T Realty, and Oberoi towers in Mumbai, plus private luxury bungalows.',
    highlight: '180,000+ sq. ft.',
  },
];

export default function SectorsPage() {
  useEffect(() => {
    document.title = 'Sectors We Serve | KBP Interior Projects Ahmedabad';
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
          Interiors for Every Industry, Built Around How You Actually Operate
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
          From regulated banking environments to luxury residential spaces, our turnkey approach adapts to each sector's specific requirements.
        </p>
      </section>

      {/* Sectors Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
          {sectorsData.map((sector, i) => (
            <div
              key={i}
              className="group"
              style={{
                backgroundColor: 'var(--color-bg-grey)',
                padding: '5rem 4rem',
                transition: 'background-color 0.4s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-black)';
                e.currentTarget.querySelector('.sector-title').style.color = 'var(--color-brand-red)';
                e.currentTarget.querySelector('.sector-desc').style.color = 'rgba(255,255,255,0.7)';
                e.currentTarget.querySelector('.sector-highlight').style.color = 'var(--color-white)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-bg-grey)';
                e.currentTarget.querySelector('.sector-title').style.color = 'var(--color-black)';
                e.currentTarget.querySelector('.sector-desc').style.color = 'var(--color-text-body)';
                e.currentTarget.querySelector('.sector-highlight').style.color = 'var(--color-brand-red)';
              }}
            >
              <p
                className="sector-highlight"
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-brand-red)',
                  marginBottom: '1.5rem',
                  transition: 'color 0.3s ease',
                }}
              >
                {sector.highlight}
              </p>
              <h2
                className="sector-title"
                style={{
                  fontSize: '2rem',
                  fontWeight: '300',
                  color: 'var(--color-black)',
                  marginBottom: '1.5rem',
                  paddingBottom: '0',
                  transition: 'color 0.3s ease',
                }}
              >
                {sector.title}
              </h2>
              <p
                className="sector-desc"
                style={{
                  fontSize: '1.3rem',
                  fontWeight: '300',
                  color: 'var(--color-text-body)',
                  lineHeight: '1.7',
                  marginBottom: '0',
                  transition: 'color 0.3s ease',
                }}
              >
                {sector.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-black)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2.4rem, 3.5vw, 3.2rem)', fontWeight: '300', color: 'var(--color-white)', marginBottom: '2rem', paddingBottom: '0' }}>
          Which Sector Is Your Project In?
        </h2>
        <CTAButton to="/contact" variant="light">Tell Us About It</CTAButton>
      </section>
    </main>
  );
}
