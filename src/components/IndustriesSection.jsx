import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const industries = [
  { id: 1, title: 'Banks & Finance', image: '/bento/STOREYS_Page_01_4K.jpg' },
  { id: 2, title: 'Pharmaceuticals', image: '/bento/STOREYS_Page_03_4K.jpg' },
  { id: 3, title: 'Corporate Offices', image: '/bento/STOREYS_Page_05_4K.jpg' },
  { id: 4, title: 'Hotels & Hospitality', image: '/bento/STOREYS_Page_07_4K.jpg' },
  { id: 5, title: 'Hospitals & Healthcare', image: '/bento/STOREYS_Page_09_4K.jpg' },
  { id: 6, title: 'Malls & Residences', image: '/bento/STOREYS_Page_11_4K.jpg' }
];

export default function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 2500); // Wait 2.5s before moving
    return () => clearInterval(timer);
  }, []);

  const getOffset = (index) => {
    let diff = index - activeIndex;
    if (diff > 3) diff -= industries.length;
    if (diff < -3) diff += industries.length;
    return diff;
  };

  return (
    <section className="w-full px-[2rem] lg:px-[8rem] py-[4rem] overflow-hidden bg-[var(--color-bg-grey)] relative">
      <div className="w-full mb-12 flex justify-start">
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
      </div>

      <div className="relative w-full h-[50vw] md:h-[35vw] lg:h-[30vw] min-h-[400px] flex items-center justify-center">
        {industries.map((item, index) => {
          const offset = getOffset(index);
          
          let x = "0%";
          let scale = 1;
          let opacity = 1;
          let zIndex = 10;
          
          if (offset === 1) {
            x = "60%";
            scale = 0.75;
            opacity = 0.5;
            zIndex = 5;
          } else if (offset === -1) {
            x = "-60%";
            scale = 0.75;
            opacity = 0.5;
            zIndex = 5;
          } else if (offset !== 0) {
            x = offset > 0 ? "100%" : "-100%";
            scale = 0.5;
            opacity = 0;
            zIndex = 0;
          }

          return (
            <motion.div
              key={item.id}
              initial={false}
              animate={{
                x,
                scale,
                opacity,
                zIndex
              }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="absolute w-[85%] md:w-[60%] lg:w-[50%] max-w-[800px] aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9] overflow-hidden shadow-2xl cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Text Square */}
              <motion.div 
                animate={{ opacity: offset === 0 ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="bg-white text-black p-4 md:p-6 lg:p-8 flex items-center justify-center aspect-square shadow-lg">
                  <h3 className="font-light text-xl md:text-2xl lg:text-3xl text-center tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
