import React from 'react';
import { Link } from 'react-router-dom';

export default function SquareButton({
  children = 'START A PROJECT',
  to = '/contact',
  href,
  onClick,
  arrow = true,
  variant = 'solid', // 'solid' | 'box' | 'outline'
  className = '',
  style = {},
}) {
  if (variant === 'box') {
    const boxContent = (
      <div
        className={`relative inline-flex flex-col justify-between p-6 sm:p-7 w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] bg-black text-white transition-all duration-300 ease-out hover:bg-[var(--color-brand-red)] group cursor-pointer ${className}`}
        style={{ borderRadius: '0px', ...style }}
      >
        <div className="flex justify-end w-full">
          {arrow && (
            <span
              className="text-2xl transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
              aria-hidden="true"
            >
              ↗
            </span>
          )}
        </div>
        <div className="flex flex-col text-left">
          <span
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '1.3rem',
              fontWeight: '700',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              lineHeight: '1.3',
              color: 'var(--color-white)',
            }}
          >
            {children}
          </span>
        </div>
      </div>
    );

    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
          {boxContent}
        </a>
      );
    }

    if (onClick || !to) {
      return (
        <button type="button" onClick={onClick} className="inline-block bg-transparent border-0 p-0 cursor-pointer">
          {boxContent}
        </button>
      );
    }

    return (
      <Link to={to} className="inline-block">
        {boxContent}
      </Link>
    );
  }

  // Default: Solid square-edged black button with white text and ↗
  const isOutline = variant === 'outline';
  const buttonContent = (
    <span
      className={`group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 transition-all duration-300 ease-out cursor-pointer ${
        isOutline
          ? 'bg-transparent text-black border-2 border-black hover:bg-black hover:text-white'
          : 'bg-black text-white hover:bg-[var(--color-brand-red)]'
      } ${className}`}
      style={{
        borderRadius: '0px',
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '1.25rem',
          fontWeight: '700',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        {children}
      </span>
      {arrow && (
        <span
          className="inline-block text-[1.4rem] leading-none transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
          aria-hidden="true"
        >
          ↗
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {buttonContent}
      </a>
    );
  }

  if (onClick || !to) {
    return (
      <button type="button" onClick={onClick} className="inline-block bg-transparent border-0 p-0 cursor-pointer">
        {buttonContent}
      </button>
    );
  }

  return (
    <Link to={to} className="inline-block">
      {buttonContent}
    </Link>
  );
}
