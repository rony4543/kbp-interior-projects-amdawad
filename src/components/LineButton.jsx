import React from 'react';
import { Link } from 'react-router-dom';

export default function LineButton({
  children = 'START A PROJECT',
  to = '/contact',
  href,
  onClick,
  arrow = true,
  className = '',
  style = {},
}) {
  const content = (
    <span className="inline-flex items-center gap-2 relative group pb-1 cursor-pointer">
      <span
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '1.25rem',
          fontWeight: '700',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--color-black)',
          display: 'inline-block',
        }}
      >
        {children}
      </span>
      {arrow && (
        <span
          className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
          style={{
            fontSize: '1.4rem',
            fontWeight: '400',
            lineHeight: 1,
            color: 'var(--color-black)',
          }}
          aria-hidden="true"
        >
          ↗
        </span>
      )}
      <span
        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black transition-all duration-300 ease-out group-hover:h-[2px] group-hover:bg-[var(--color-brand-red)]"
        style={{ transformOrigin: 'left' }}
      />
    </span>
  );

  const containerClasses = `inline-block ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={containerClasses} style={style}>
        {content}
      </a>
    );
  }

  if (onClick || !to) {
    return (
      <button type="button" onClick={onClick} className={containerClasses} style={{ background: 'none', border: 'none', padding: 0, ...style }}>
        {content}
      </button>
    );
  }

  return (
    <Link to={to} className={containerClasses} style={style}>
      {content}
    </Link>
  );
}
