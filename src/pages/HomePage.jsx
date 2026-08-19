import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading, CTAButton, FAQSection } from '../components/ui';
import BentoGridSection from '../components/BentoGridSection';
import ExpertiseSection from '../components/ExpertiseSection';
import IndustriesSection from '../components/IndustriesSection';

const services = [
  { title: 'Interior Design & Build', desc: 'Concept to execution, in-house architects and designers.' },
  { title: 'Civil Work', desc: 'Structural and interior civil execution to specification.' },
  { title: 'Electrical & Plumbing', desc: 'Licensed engineering teams, full compliance.' },
  { title: 'HVAC & Networking', desc: 'Climate control, automation, and security systems.' },
  { title: 'Furniture Manufacturing', desc: 'Factory-made modular, custom, and solid wood furniture.' },
  { title: 'Decorative Finishes', desc: 'Gilding, faux finishes, and specialist painting.' },
];

const sectors = [
  'Banks & Financial Institutions',
  'Pharmaceutical & Corporate Offices',
  'Hotels & Hospitality',
  'Hospitals & Healthcare Clinics',
  'Malls, Retail & Salons',
  'Residential Towers, Bungalows & Clubhouses',
];

const caseStudies = [
  { title: 'J&K Bank', scope: '230,000 sq. ft. across Pan-India branches', sector: 'Banking' },
  { title: 'Torrent Pharmaceuticals', scope: 'Chhatral, Bhat & Dahej facilities', sector: 'Pharma' },
  { title: 'Eastin Hotel', scope: 'Full hospitality interior fit-out', sector: 'Hospitality' },
  { title: 'Lodha, L&T Realty & Oberoi', scope: 'Mumbai residential towers', sector: 'Residential' },
];

const clients = [
  'J&K Bank', 'Torrent Pharmaceuticals', 'Lambda Pharmaceuticals',
  'Intas Pharmaceuticals', 'Lodha', 'L&T Realty', 'Oberoi',
  'Eastin Hotel', 'Nimaya', 'Zaveri Corporate House',
];

const homeFaqs = [
  {
    q: 'What does a turnkey interior contractor do?',
    a: 'A turnkey interior contractor handles every stage of a fit-out including design, civil work, electrical, plumbing, HVAC, and furniture under a single contract, so the client does not need to hire and coordinate separate vendors.',
  },
  {
    q: 'Does KBP Interior Projects work outside Ahmedabad?',
    a: 'Yes. KBP is based in Ahmedabad and currently focuses on projects across Gujarat, alongside a long-standing execution base in Mumbai and Pan-India project history.',
  },
  {
    q: 'What industries does KBP specialize in?',
    a: 'KBP has delivered projects across banking, pharmaceutical and corporate offices, hospitality, healthcare, retail, and residential including bungalows and high-rise towers.',
  },
  {
    q: 'Does KBP manufacture its own furniture?',
    a: 'Yes. KBP operates a 16,500 sq. ft. company-owned factory near Mumbai producing modular, customized, and solid wood furniture for its turnkey projects.',
  },
];

const stats = [
  { number: '1,000,000+', label: 'sq. ft. delivered' },
  { number: '240+', label: 'In-house professionals' },
  { number: '16,500', label: 'sq. ft. factory' },
  { number: 'CPWD', label: 'Licensed Pan-India' },
];

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const nodeRef = useRef(null);
  
  // Match number with commas and possible suffix like '+'
  const match = String(value).match(/^([\d,]+)(.*)$/);
  const targetNum = match ? parseInt(match[1].replace(/,/g, ''), 10) : null;
  const suffix = match ? match[2] : '';

  useEffect(() => {
    if (!targetNum && targetNum !== 0) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp = null;
          const duration = 2000;
          
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            setCount(Math.floor(easeProgress * targetNum));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(targetNum);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );
    
    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    
    return () => observer.disconnect();
  }, [hasAnimated, targetNum]);

  if (!targetNum && targetNum !== 0) {
    return <span ref={nodeRef}>{value}</span>;
  }

  return (
    <span ref={nodeRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default function HomePage() {
  useEffect(() => {
    document.title = 'Turnkey Interior Contractor in Ahmedabad & Gujarat | KBP Interior Projects';
  }, []);

  return (
    <main>
      {/* Hero Image */}
      <section className="w-full">
        <div className="w-full px-[2rem] lg:px-[8rem] pt-[2rem]">
          <div className="w-full overflow-hidden">
            <img
              src="/project_page_03_4K.webp"
              alt="KBP Interior Projects premium interior design render showing modern furniture and finishes"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </section>

      {/* Hero Text */}
      <section className="w-full bg-white px-[2rem] lg:px-[8rem] py-[3rem] lg:py-[4rem]">
        <div className="flex flex-col items-start gap-[2.5rem]">
          <h1
            style={{
              fontSize: 'clamp(4rem, 6vw, 5.6rem)',
              fontWeight: '300',
              color: 'var(--color-brand-red)',
              lineHeight: '1.15',
            }}
          >
            From Design Intent<br />to Precisely Executed<br />Interiors
          </h1>
          <CTAButton to="/contact">
            Request a Quote
          </CTAButton>
        </div>
      </section>

      {/* Stats Strip */}
      <section
        className="w-full px-[2rem] lg:px-[8rem] py-[4rem]"
        style={{ backgroundColor: 'var(--color-white)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-[4rem] lg:gap-y-0 w-full">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col justify-center relative ${
                i === 0 ? 'text-left pr-[2rem] lg:pr-[4rem]' :
                i === 1 ? 'text-right lg:text-center pl-[2rem] lg:px-[4rem]' :
                i === 2 ? 'text-left lg:text-center pr-[2rem] lg:px-[4rem]' :
                'text-right pl-[2rem] lg:pl-[4rem]'
              }`}
            >
              <p
                style={{
                  fontSize: 'clamp(2.6rem, 6vw, 5rem)',
                  fontWeight: '300',
                  color: 'var(--color-brand-red)',
                  marginBottom: '0.8rem',
                  lineHeight: '1.2',
                }}
              >
                <AnimatedNumber value={stat.number} />
              </p>
              <p
                style={{
                  fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
                  fontWeight: '700',
                  color: 'var(--color-black)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  lineHeight: '1.4',
                }}
              >
                {stat.label}
              </p>
              
              {/* Desktop Border */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[1px]" style={{ backgroundColor: 'var(--color-border)' }} />
              )}
              {/* Mobile Border */}
              {(i === 0 || i === 2) && (
                <div className="lg:hidden absolute right-0 top-0 bottom-0 w-[1px]" style={{ backgroundColor: 'var(--color-border)' }} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bento Grid Gallery */}
      <BentoGridSection />

      {/* Expertise Section */}
      <ExpertiseSection />

      {/* Industries Showcase */}
      <IndustriesSection />

      {/* Services Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-grey)' }}>
        <SectionHeading title="What We Deliver" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {services.map((service, i) => (
            <Link
              to="/services"
              key={i}
              className="group"
              style={{
                backgroundColor: 'var(--color-white)',
                padding: '4rem 3rem',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-black)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-white)')}
            >
              <h3
                className="group-hover:text-white transition-colors duration-300"
                style={{
                  fontSize: '1.8rem',
                  fontWeight: '300',
                  marginBottom: '1.5rem',
                  color: 'var(--color-black)',
                }}
              >
                {service.title}
              </h3>
              <p
                className="group-hover:text-gray-300 transition-colors duration-300"
                style={{
                  fontSize: '1.3rem',
                  fontWeight: '300',
                  color: 'var(--color-text-light)',
                  lineHeight: '1.7',
                  marginBottom: '0',
                }}
              >
                {service.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Sectors */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <SectionHeading
          title="Interiors for Every Industry"
          subtitle="Built around how you actually operate."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
          {sectors.map((sector, i) => (
            <div
              key={i}
              style={{
                padding: '2.5rem 0',
                borderBottom: '1px solid var(--color-border)',
                fontSize: '1.5rem',
                fontWeight: '300',
                color: 'var(--color-black)',
              }}
            >
              {sector}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Teaser */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-grey)' }}>
        <SectionHeading title="Projects That Speak for Themselves" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
          {caseStudies.map((study, i) => (
            <Link
              to="/projects"
              key={i}
              style={{
                backgroundColor: 'var(--color-white)',
                padding: '4rem 3rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-black)'; e.currentTarget.querySelector('h3').style.color = '#fff'; e.currentTarget.querySelector('p').style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.querySelector('.sector-tag').style.color = 'var(--color-brand-red)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-white)'; e.currentTarget.querySelector('h3').style.color = 'var(--color-black)'; e.currentTarget.querySelector('p').style.color = 'var(--color-text-light)'; e.currentTarget.querySelector('.sector-tag').style.color = 'var(--color-brand-red)'; }}
            >
              <span
                className="sector-tag"
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
                {study.sector}
              </span>
              <h3
                style={{
                  fontSize: '2rem',
                  fontWeight: '300',
                  color: 'var(--color-black)',
                  marginBottom: '1rem',
                  transition: 'color 0.3s ease',
                }}
              >
                {study.title}
              </h3>
              <p
                style={{
                  fontSize: '1.3rem',
                  fontWeight: '300',
                  color: 'var(--color-text-light)',
                  marginBottom: '0',
                  transition: 'color 0.3s ease',
                }}
              >
                {study.scope}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-[4rem]">
          <CTAButton to="/projects">View All Projects</CTAButton>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <SectionHeading title="Trusted By" align="center" />
        <div className="flex flex-wrap justify-center gap-[3rem] lg:gap-[5rem]">
          {clients.map((client, i) => (
            <span
              key={i}
              style={{
                fontSize: '1.3rem',
                fontWeight: '300',
                color: 'var(--color-text-light)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              {client}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-grey)' }}>
        <SectionHeading title="Frequently Asked Questions" />
        <div className="max-w-[80rem]">
          <FAQSection items={homeFaqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="section-padding"
        style={{
          backgroundColor: 'var(--color-black)',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2.4rem, 3.5vw, 3.2rem)',
            fontWeight: '300',
            color: 'var(--color-white)',
            marginBottom: '1.5rem',
            paddingBottom: '0',
          }}
        >
          Have a Space That Needs to Work Harder?
        </h2>
        <p
          style={{
            fontSize: '1.4rem',
            fontWeight: '300',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '3rem',
          }}
        >
          Tell us your project scope. We will respond with a scoped quote, not a generic estimate.
        </p>
        <CTAButton to="/contact" variant="light">
          Request a Quote
        </CTAButton>
      </section>
    </main>
  );
}
