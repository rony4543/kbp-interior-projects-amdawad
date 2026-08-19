import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  { id: '01', title: 'Banks & Finance', image: '/bento/STOREYS_Page_01_4K.jpg' },
  { id: '02', title: 'Pharmaceuticals', image: '/bento/STOREYS_Page_03_4K.jpg' },
  { id: '03', title: 'Corporate Offices', image: '/bento/STOREYS_Page_05_4K.jpg' },
  { id: '04', title: 'Hotels & Hospitality', image: '/bento/STOREYS_Page_07_4K.jpg' },
  { id: '05', title: 'Hospitals & Healthcare', image: '/bento/STOREYS_Page_09_4K.jpg' },
  { id: '06', title: 'Malls & Residences', image: '/bento/STOREYS_Page_11_4K.jpg' }
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="w-full px-[2rem] lg:px-[8rem] py-[4rem] overflow-hidden bg-[var(--color-bg-grey)] relative">
      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full mb-12 flex justify-start"
      >
        <h2 style={{
            fontSize: 'clamp(2.8rem, 4vw, 4.2rem)',
            fontWeight: '300',
            color: 'var(--color-brand-red)',
            marginBottom: '1rem',
            textAlign: 'left',
            lineHeight: '1.2'
          }}>
          Interiors For Every Industry
        </h2>
      </motion.div>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9] overflow-hidden group border border-white/10"
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[0.16,1,0.3,1] group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-700"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                <span className="font-light text-white/80 text-xl md:text-2xl tracking-widest">
                  {item.id}
                </span>
                
                <h3 className="font-light text-white text-4xl md:text-5xl lg:text-5xl text-center tracking-wide leading-snug absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6 whitespace-pre-line">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
