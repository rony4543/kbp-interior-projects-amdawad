import React from 'react';
import { SectionHeading } from './ui';

const images = Array.from({ length: 6 }, (_, i) => `/bento/STOREYS_Page_${String(i + 1).padStart(2, '0')}_4K.jpg`);

const clientLogos = [
  '/clients/01_mahindra_1600-BCnEcui2.webp',
  '/clients/02_hyundai_1600-CNCNJytX.webp',
  '/clients/03_karcher_1600-BsDtqlfL.webp',
  '/clients/04_torrent_pharma_1600-jRwbXnrQ.webp',
  '/clients/05_intas_pharmaceuticals_1600-NosQ5amc.webp',
  '/clients/06_nimaaya_womens_centre_for_health_1600-Ck78Cec5.webp',
  '/clients/07_lambda_therapeutic_research_1600-B6JQ1qVB.webp',
  '/clients/08_huber_and_holly_1600-DuokA837.webp',
  '/clients/09_zaveri_realty_1600-BA1i_xW5.webp',
  '/clients/10_hn_safal_1600-QtP0EaQ4.webp',
];

// A perfect 6-item bento grid layout to fill a 4-column grid evenly
const getSpan = (index) => {
  const pattern = [
    'md:col-span-2 md:row-span-2 col-span-2 row-span-2', // 0: Top Left Large
    'md:col-span-1 md:row-span-1 col-span-1 row-span-1', // 1: Top Right Small 1
    'md:col-span-1 md:row-span-1 col-span-1 row-span-1', // 2: Top Right Small 2
    'md:col-span-2 md:row-span-1 col-span-2 row-span-1', // 3: Middle Right Wide
    'md:col-span-2 md:row-span-1 col-span-2 row-span-1', // 4: Bottom Left Wide 1
    'md:col-span-2 md:row-span-1 col-span-2 row-span-1', // 5: Bottom Right Wide 2
  ];
  return pattern[index % pattern.length];
};

export default function BentoGridSection() {
  return (
    <section className="w-full px-[2rem] lg:px-[8rem] py-[4rem] overflow-hidden" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="w-full">
        <h2
          style={{
            fontSize: 'clamp(2.8rem, 4vw, 4.2rem)',
            fontWeight: '300',
            color: 'var(--color-brand-red)',
            marginBottom: '3rem',
            textAlign: 'left',
            lineHeight: '1.2'
          }}
        >
          Spaces We Have Crafted
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1rem] md:gap-[1.5rem] auto-rows-[15rem] md:auto-rows-[25rem]">
          {images.map((src, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden group ${getSpan(i)} rounded-sm`}
              style={{ backgroundColor: 'var(--color-black)' }}
            >
              <img 
                src={src} 
                alt={`KBP Interior Project ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>
        <div className="mt-[8rem]">
          <h3
            style={{
              fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
              fontWeight: '300',
              color: 'var(--color-brand-red)',
              marginBottom: '3rem',
              textAlign: 'left',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            Clients We Work With
          </h3>
          
          <style>{`
            @keyframes scrollMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
            .custom-marquee {
              animation: scrollMarquee 40s linear infinite;
              display: flex;
              flex-shrink: 0;
            }
          `}</style>
          <div className="w-full overflow-hidden relative border-y border-[var(--color-border)] py-[3rem] flex flex-nowrap">
            {/* Fade effect on edges */}
            <div className="absolute inset-y-0 left-0 w-[3rem] lg:w-[10rem] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-[3rem] lg:w-[10rem] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            {/* First set of logos */}
            <div className="custom-marquee">
              {clientLogos.map((logo, index) => (
                <img
                  key={`logo-1-${index}`}
                  src={logo}
                  alt="Client Logo"
                  className="h-[3.5rem] md:h-[5rem] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mx-[2rem] md:mx-[3.5rem] shrink-0"
                  loading="lazy"
                />
              ))}
            </div>
            {/* Second set of logos for seamless loop */}
            <div className="custom-marquee" aria-hidden="true">
              {clientLogos.map((logo, index) => (
                <img
                  key={`logo-2-${index}`}
                  src={logo}
                  alt="Client Logo"
                  className="h-[3.5rem] md:h-[5rem] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mx-[2rem] md:mx-[3.5rem] shrink-0"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
