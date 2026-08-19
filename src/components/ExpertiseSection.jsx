import React from 'react';
import { motion } from 'framer-motion';
import turnkeyImg from '../assets/expertise/turnkey.png';
import furnitureImg from '../assets/expertise/furniture.jpg';
import residentialImg from '../assets/expertise/residential.webp';
import hospitalityImg from '../assets/expertise/hospitality.jpg';

const capabilities = [
  {
    id: '01',
    title: 'Turnkey Interior Projects',
    image: turnkeyImg,
  },
  {
    id: '02',
    title: 'Custom Furniture\nManufacturing',
    image: furnitureImg,
  },
  {
    id: '03',
    title: 'Residential Interiors',
    image: residentialImg,
  },
  {
    id: '04',
    title: 'Hospitality & Healthcare\nInteriors',
    image: hospitalityImg,
  }
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-white py-24 w-full relative">
      {/* Our Capabilities heading */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1400px] mx-auto px-6 lg:px-16 mb-16 flex justify-start"
      >
        <h2 className="font-[300] text-[clamp(2.8rem,4vw,4.2rem)] leading-[1.2] text-[var(--color-brand-red)] text-left">
          Our Capabilities
        </h2>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9] rounded-[24px] overflow-hidden group border border-white/10"
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.title.replace('\n', ' ')}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[0.16,1,0.3,1] group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-700"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <span className="font-light text-white/70 text-lg tracking-widest">
                  {item.id}
                </span>
                
                <h3 className="font-light text-white text-3xl md:text-4xl lg:text-4xl text-center tracking-wide leading-snug absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6 whitespace-pre-line">
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
