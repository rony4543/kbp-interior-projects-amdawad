import React from 'react';
import { Link } from 'react-router-dom';

export function CTAButton({ children, to, variant = 'dark', type, onClick, className = '' }) {
  const baseStyles = {
    display: 'inline-block',
    padding: '1rem 3rem',
    fontSize: '1.3rem',
    fontWeight: '700',
    fontFamily: 'var(--font-primary)',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    border: '2px solid var(--color-black)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'center',
  };

  const variants = {
    dark: {
      backgroundColor: 'var(--color-black)',
      color: 'var(--color-white)',
    },
    light: {
      backgroundColor: 'var(--color-white)',
      color: 'var(--color-black)',
    },
    red: {
      backgroundColor: 'var(--color-brand-red)',
      color: 'var(--color-white)',
      borderColor: 'var(--color-brand-red)',
    },
  };

  const hoverVariants = {
    dark: {
      backgroundColor: 'var(--color-bg-grey)',
      color: 'var(--color-black)',
    },
    light: {
      backgroundColor: 'var(--color-black)',
      color: 'var(--color-white)',
    },
    red: {
      backgroundColor: 'var(--color-black)',
      color: 'var(--color-white)',
      borderColor: 'var(--color-black)',
    },
  };

  const handleMouseEnter = (e) => {
    const hover = hoverVariants[variant];
    Object.keys(hover).forEach((key) => {
      e.target.style[key] = hover[key];
    });
  };

  const handleMouseLeave = (e) => {
    const base = variants[variant];
    Object.keys(base).forEach((key) => {
      e.target.style[key] = base[key];
    });
    e.target.style.border = `2px solid ${variant === 'red' ? 'var(--color-brand-red)' : 'var(--color-black)'}`;
  };

  const combinedStyles = { ...baseStyles, ...variants[variant] };

  if (type === 'submit' || !to) {
    return (
      <button
        type={type || 'button'}
        onClick={onClick}
        className={className}
        style={combinedStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      to={to}
      className={className}
      style={combinedStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </Link>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'left', titleColor }) {
  return (
    <div style={{ textAlign: align, marginBottom: '4rem' }}>
      {eyebrow && (
        <p
          style={{
            fontSize: '1.1rem',
            fontWeight: '700',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-brand-red)',
            marginBottom: '1.5rem',
          }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        style={{
          fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
          fontWeight: '300',
          color: titleColor || 'var(--color-black)',
          lineHeight: '1.2',
          paddingBottom: '0.5em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: '1.4rem',
            fontWeight: '300',
            color: 'var(--color-text-light)',
            lineHeight: '1.8',
            maxWidth: align === 'center' ? '60rem' : 'none',
            margin: align === 'center' ? '0 auto' : '0',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function FAQSection({ items }) {
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <button
            className="w-full flex justify-between items-center cursor-pointer"
            style={{
              padding: '2rem 0',
              fontSize: '1.5rem',
              fontWeight: '400',
              fontFamily: 'var(--font-primary)',
              textAlign: 'left',
              background: 'none',
              border: 'none',
              color: 'var(--color-black)',
            }}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span style={{ paddingRight: '2rem' }}>{item.q}</span>
            <span
              style={{
                fontSize: '2rem',
                fontWeight: '300',
                transition: 'transform 0.3s ease',
                transform: openIndex === index ? 'rotate(45deg)' : 'none',
                flexShrink: 0,
              }}
            >
              +
            </span>
          </button>
          <div
            style={{
              maxHeight: openIndex === index ? '30rem' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.4s ease, opacity 0.3s ease',
              opacity: openIndex === index ? 1 : 0,
            }}
          >
            <p
              style={{
                fontSize: '1.3rem',
                fontWeight: '300',
                lineHeight: '1.8',
                color: 'var(--color-text-light)',
                paddingBottom: '2rem',
              }}
            >
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
