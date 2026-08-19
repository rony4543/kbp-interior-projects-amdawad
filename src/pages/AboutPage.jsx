import React, { useEffect } from 'react';
import { SectionHeading, CTAButton, FAQSection } from '../components/ui';

const capabilities = [
  '240 to 260 in-house staff: architects, designers, engineers, craftsmen, and site teams',
  '1,000,000+ sq. ft. delivered across banking, pharma, hospitality, healthcare, retail, and residential sectors',
  'In-house factory in Bhiwandi (Thane) producing custom and modular furniture at scale',
  'CPWD-licensed composite contractor, recognized Pan-India',
  'Full in-house departments: Design, Project Operations, Business Development, HR & Admin, Finance',
];

const reasons = [
  { title: 'Experience', desc: '23+ years leading turnkey projects across commercial and residential spaces.' },
  { title: 'One Team, One Accountability', desc: 'Design, civil, electrical, plumbing, HVAC and furniture under a single contract.' },
  { title: 'Value Without Compromise', desc: 'Factory-direct furniture sourcing keeps pricing competitive without cutting quality.' },
  { title: 'Consistency at Scale', desc: 'From a 1,500 sq. ft. airport lounge to a 375,000 sq. ft. hospitality rollout, the same process and standards apply.' },
];

const aboutFaqs = [
  {
    q: 'How long has KBP Interior Projects been operating?',
    a: 'The company\'s roots trace back to before India\'s independence, with the current turnkey interior operation built up over more than two decades under Founder Kishor Parmar.',
  },
  {
    q: 'Is KBP Interior Projects licensed?',
    a: 'Yes. KBP is a CPWD-recognized composite contractor, licensed to operate Pan-India.',
  },
  {
    q: 'Who founded KBP Interior Projects?',
    a: 'KBP Interior Projects is led by Founder Kishor Parmar, who established the company\'s Mumbai-based turnkey operations in 2000 after training under his father\'s interior contracting practice.',
  },
];

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About KBP Interior Projects | Turnkey Interior Contractor Since Pre-1947';
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
          Interiors Built on Decades of Craft, Scaled for Today's Projects
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
          What started as a family furniture contracting practice before India's independence is now a full-scale turnkey interior company serving Gujarat's biggest names.
        </p>
      </section>

      {/* Our Story */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <SectionHeading title="From Calcutta's Secretariat to Gujarat's Skyline" />
        <div className="max-w-[80rem]">
          <p style={{ fontSize: '1.4rem', fontWeight: '300', color: 'var(--color-text-body)', lineHeight: '1.8' }}>
            Our roots go back to before 1947, when our family first took on turnkey contracting work for the British Government in Calcutta. Work still standing today in the Secretariat Building (Writers' Building) of the West Bengal State Government. After independence, the practice continued serving private clients in Calcutta, then expanded to Mumbai in 1996, and grew into the full-scale turnkey interior company operating today.
          </p>
          <p style={{ fontSize: '1.4rem', fontWeight: '300', color: 'var(--color-text-body)', lineHeight: '1.8' }}>
            That history matters less as nostalgia and more as proof: we have been solving the same core problem, getting complex interior projects delivered right, on time, for three generations.
          </p>
        </div>
      </section>

      {/* What We Do Today */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-grey)' }}>
        <SectionHeading title="A Full-Scale Turnkey Operation" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] max-w-[90rem]">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              style={{
                padding: '2.5rem 3rem',
                backgroundColor: 'var(--color-white)',
                fontSize: '1.4rem',
                fontWeight: '300',
                color: 'var(--color-text-body)',
                lineHeight: '1.7',
              }}
            >
              {cap}
            </div>
          ))}
        </div>
      </section>

      {/* Founder's Note */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <SectionHeading title="A Note from Our Founder" />
        <div className="max-w-[70rem]" style={{ paddingLeft: '3rem', borderLeft: '3px solid var(--color-brand-red)' }}>
          <p
            style={{
              fontSize: '1.6rem',
              fontWeight: '300',
              color: 'var(--color-text-body)',
              lineHeight: '1.8',
              fontStyle: 'italic',
              marginBottom: '2rem',
            }}
          >
            "I joined this work under my father's training, then moved to Mumbai in 1996 to grow it further. From 2000, I built our turnkey practice into what it is today: a team our clients trust to deliver, project after project."
          </p>
          <p
            style={{
              fontSize: '1.3rem',
              fontWeight: '700',
              color: 'var(--color-black)',
            }}
          >
            Kishor Parmar, Founder
          </p>
        </div>
      </section>

      {/* Why Clients Choose KBP */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-grey)' }}>
        <SectionHeading title="Why Clients Work With Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
          {reasons.map((reason, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'var(--color-white)',
                padding: '4rem 3rem',
              }}
            >
              <h3 style={{ fontSize: '1.8rem', fontWeight: '300', color: 'var(--color-brand-red)', marginBottom: '1.5rem' }}>
                {reason.title}
              </h3>
              <p style={{ fontSize: '1.3rem', fontWeight: '300', color: 'var(--color-text-body)', lineHeight: '1.7', marginBottom: '0' }}>
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <SectionHeading title="Frequently Asked Questions" />
        <div className="max-w-[80rem]">
          <FAQSection items={aboutFaqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-black)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2.4rem, 3.5vw, 3.2rem)', fontWeight: '300', color: 'var(--color-white)', marginBottom: '2rem', paddingBottom: '0' }}>
          Ready to Start Your Project?
        </h2>
        <CTAButton to="/contact" variant="light">Request a Quote</CTAButton>
      </section>
    </main>
  );
}
