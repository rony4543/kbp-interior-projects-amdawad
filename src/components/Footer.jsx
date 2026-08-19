import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: 'var(--color-black)',
        color: 'var(--color-white)',
        fontFamily: 'var(--font-primary)',
        fontWeight: 'var(--font-weight-light)',
      }}
    >
      <div className="px-[4rem] lg:px-[8rem] py-[6rem] lg:py-[8rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[4rem]">
          {/* Column 1: Brand */}
          <div>
            <img
              src="/logo.png"
              alt="KBP Interior Projects"
              className="h-[6rem] w-auto object-contain mb-[2rem] brightness-0 invert"
            />
            <p style={{ fontSize: '1.3rem', lineHeight: '1.8', opacity: 0.7 }}>
              Turnkey interior contractor in Ahmedabad delivering design, civil, MEP, and furniture manufacturing under one roof.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '2rem',
              }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-[1rem]">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Projects', path: '/projects' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    style={{ fontSize: '1.3rem', opacity: 0.7, transition: 'opacity 0.3s' }}
                    onMouseEnter={(e) => (e.target.style.opacity = 1)}
                    onMouseLeave={(e) => (e.target.style.opacity = 0.7)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Ahmedabad Office */}
          <div>
            <h4
              style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '2rem',
              }}
            >
              Ahmedabad Office
            </h4>
            <p style={{ fontSize: '1.3rem', lineHeight: '2', opacity: 0.7 }}>
              24, GF, The Orchid Shopping Mall,<br />
              Near Goberdhan Party Plot,<br />
              Shilaj Road, Thaltej,<br />
              Ahmedabad 380059
            </p>
            <div className="mt-[1.5rem]" style={{ fontSize: '1.3rem', opacity: 0.7 }}>
              <p>+91 7802000567</p>
              <p>+91 9898087683</p>
              <p>kbpinteriorprojects@gmail.com</p>
            </div>
          </div>

          {/* Column 4: Factory */}
          <div>
            <h4
              style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '2rem',
              }}
            >
              Factory
            </h4>
            <p style={{ fontSize: '1.3rem', lineHeight: '2', opacity: 0.7 }}>
              Unit No. F-10/1,<br />
              Bhumi World Industrial Park,<br />
              Pimplas, Mumbai-Nashik Highway,<br />
              Kalyan, Thane 421302,<br />
              Maharashtra
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="px-[4rem] lg:px-[8rem] py-[2rem] flex flex-col md:flex-row justify-between items-center gap-[1rem]"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          fontSize: '1.2rem',
          opacity: 0.5,
        }}
      >
        <p>2025 KBP Interior Projects. All rights reserved.</p>
        <p>CPWD Licensed Composite Contractor</p>
      </div>
    </footer>
  );
}
