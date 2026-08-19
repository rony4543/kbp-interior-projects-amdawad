import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className="w-full bg-white border-t border-[var(--color-border)] py-[6rem] lg:py-[8rem] px-[2rem] lg:px-[8rem]"
      style={{
        fontFamily: 'var(--font-primary)',
      }}
    >
      <div className="w-full max-w-[140rem] mx-auto flex justify-start lg:justify-end">
        {/* Footer Content Block: Aligned on right side on desktop, left side on mobile, with internal left alignment */}
        <div className="flex flex-col items-start text-left">
          {/* Bold Company Name */}
          <Link
            to="/"
            className="inline-block mb-[1rem] group"
            aria-label="KBP Interior Projects Home"
          >
            <span
              className="block text-[2rem] lg:text-[2.4rem] font-black uppercase tracking-tight text-[var(--color-black)] group-hover:text-[var(--color-brand-red)] transition-colors duration-200"
              style={{
                fontWeight: 900,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              KBP INTERIOR PROJECTS
            </span>
          </Link>

          {/* Copyright */}
          <p
            className="font-light text-[var(--color-black)] mb-[0.8rem]"
            style={{
              fontSize: 'clamp(1.3rem, 1.4vw, 1.4rem)',
              lineHeight: '1.6',
            }}
          >
            Copyright 2026 KBP Interior Projects
          </p>

          {/* Privacy Policies & Legal Links */}
          <div
            className="flex flex-wrap items-center gap-x-[1.8rem] gap-y-[0.6rem] text-[1.25rem] lg:text-[1.35rem] font-light text-[var(--color-black)] mb-[1.6rem]"
          >
            <Link
              to="/contact"
              className="underline hover:text-[var(--color-brand-red)] hover:no-underline transition-colors duration-200"
            >
              Privacy center
            </Link>
            <Link
              to="/contact"
              className="underline hover:text-[var(--color-brand-red)] hover:no-underline transition-colors duration-200"
            >
              Privacy policy
            </Link>
            <Link
              to="/contact"
              className="underline hover:text-[var(--color-brand-red)] hover:no-underline transition-colors duration-200"
            >
              Cookie policy
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-[1.5rem] text-[var(--color-black)] mb-[1.2rem]">
            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[var(--color-black)] hover:text-[var(--color-brand-red)] transition-all duration-300 transform hover:scale-110"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[var(--color-black)] hover:text-[var(--color-brand-red)] transition-all duration-300 transform hover:scale-110"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </a>

            {/* Pinterest */}
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="text-[var(--color-black)] hover:text-[var(--color-brand-red)] transition-all duration-300 transform hover:scale-110"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.056.235-.195.285-.451.171-1.686-.786-2.739-3.255-2.739-5.241 0-4.267 3.099-8.188 8.946-8.188 4.697 0 8.347 3.348 8.347 7.822 0 4.667-2.943 8.423-7.027 8.423-1.372 0-2.662-.713-3.104-1.557l-.845 3.224c-.307 1.175-1.139 2.648-1.698 3.541 1.258.388 2.597.599 3.985.599 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--color-black)] hover:text-[var(--color-brand-red)] transition-all duration-300 transform hover:scale-110"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          {/* Bottom Information Note */}
          <p
            className="text-[1.15rem] font-light text-[var(--color-text-light)] tracking-wide"
            style={{ lineHeight: '1.6' }}
          >
            CPWD Licensed Composite Contractor • Turnkey Interior Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
