import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Sectors', path: '/sectors' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="w-full bg-white" style={{ fontFamily: 'var(--font-primary)' }}>
      <div className="flex items-center justify-between px-[4rem] lg:px-[8rem] py-[2rem]">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="KBP Interior Projects Logo"
            className="h-[7rem] w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-[3.5rem]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative group"
              style={{
                fontSize: '1.6rem',
                fontWeight: location.pathname === link.path ? '500' : '400',
                color: location.pathname === link.path ? 'var(--color-brand-red)' : 'var(--color-black)',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => { if (location.pathname !== link.path) e.target.style.color = 'var(--color-brand-red)'; }}
              onMouseLeave={(e) => { if (location.pathname !== link.path) e.target.style.color = 'var(--color-black)'; }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-[4rem] h-[4rem]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span
            className="block w-[2.4rem] h-[2px] bg-black transition-all duration-300"
            style={{
              transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-[2.4rem] h-[2px] bg-black transition-all duration-300"
            style={{ opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block w-[2.4rem] h-[2px] bg-black transition-all duration-300"
            style={{
              transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-[2rem] border-b border-gray-100">
          <img
            src="/logo.png"
            alt="KBP Interior Projects Logo"
            className="h-[5rem] w-auto object-contain"
          />
          <button
            onClick={() => setMobileOpen(false)}
            className="w-[4rem] h-[4rem] flex items-center justify-center text-[2.4rem] text-gray-500"
            aria-label="Close navigation menu"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col p-[3rem] gap-[2.5rem] flex-grow overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: '1.8rem',
                fontWeight: location.pathname === link.path ? '500' : '400',
                color: location.pathname === link.path ? 'var(--color-brand-red)' : 'var(--color-black)',
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
