import React from 'react';
import { motion } from 'framer-motion';
import SquareButton from './SquareButton';

export default function CallToAction({
  eyebrow = 'HAVE A SPACE IN MIND?',
  title = "Let's discuss the site, scope, and possibility.",
  buttonText = 'START A PROJECT',
  buttonTo = '/contact',
  buttonVariant = 'solid', // 'solid' | 'box' | 'outline'
  className = '',
  style = {},
}) {
  return (
    <section
      className={`w-full py-[8rem] lg:py-[11rem] px-[2rem] lg:px-[8rem] overflow-hidden flex flex-col items-center justify-center text-center ${className}`}
      style={{
        backgroundColor: 'var(--color-bg-grey)',
        ...style,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[75rem] mx-auto flex flex-col items-center"
      >
        {eyebrow && (
          <p
            className="uppercase"
            style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              letterSpacing: '0.18em',
              color: 'var(--color-text-light)',
              marginBottom: '2rem',
              lineHeight: '1.4',
            }}
          >
            {eyebrow}
          </p>
        )}

        <h2
          style={{
            fontSize: 'clamp(2.8rem, 4vw, 4.2rem)',
            fontWeight: '300',
            color: 'var(--color-brand-red)',
            lineHeight: '1.2',
            marginBottom: '3.5rem',
            paddingBottom: '0',
          }}
        >
          {title}
        </h2>

        <div>
          <SquareButton to={buttonTo} variant={buttonVariant}>
            {buttonText}
          </SquareButton>
        </div>
      </motion.div>
    </section>
  );
}

