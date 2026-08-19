import React from 'react';
import { SectionHeading } from './ui';

const images = Array.from({ length: 6 }, (_, i) => `/bento/STOREYS_Page_${String(i + 1).padStart(2, '0')}_4K.jpg`);

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
      </div>
    </section>
  );
}
