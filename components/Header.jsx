'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { title: 'Home',    href: '#home' },
  { title: 'About',   href: '#about' },
  { title: 'Menu',    href: '#menu' },
  { title: 'Contact', href: '#contact' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  /* ── Keep navbar solid on scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Smooth scroll helper — accounts for fixed navbar height ── */
  const handleNav = (e, href) => {
    e.preventDefault();
    e.stopPropagation();

    const id = href.replace('#', '');
    const el = document.getElementById(id);

    if (el) {
      const NAVBAR_HEIGHT = 90; // px — matches scroll-margin-top in globals.css
      const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    setActiveLink(navLinks.find(l => l.href === href)?.title ?? '');
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* ── Main bar ── */}
      <motion.div
        animate={{
          paddingLeft:  scrolled ? '20px' : '28px',
          paddingRight: scrolled ? '20px' : '28px',
          paddingTop:   scrolled ? '10px' : '14px',
          paddingBottom:scrolled ? '10px' : '14px',
        }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        /* Always solid — NOT transparent on scroll */
        className="glass-nav rounded-2xl w-full max-w-6xl flex items-center justify-between"
      >
        {/* Logo */}
        <a href="#home" onClick={e => handleNav(e, '#home')} className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-accent)] flex items-center justify-center shadow-orange-glow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
              <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
            </svg>
          </div>
          <span className="font-sora font-bold text-xl text-site-primary tracking-tight">Hungry</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.title}
              href={link.href}
              onClick={e => handleNav(e, link.href)}
              className={`relative px-4 py-2 rounded-xl font-manrope font-medium text-[15px] transition-colors duration-300 cursor-pointer select-none
                ${activeLink === link.title ? 'text-site-primary' : 'text-site-secondary hover:text-site-primary'}`}
            >
              {activeLink === link.title && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute inset-0 rounded-xl"
                  style={{ background: 'var(--site-card)', border: '1px solid var(--site-border)' }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{link.title}</span>
            </a>
          ))}
        </nav>

        {/* Right: CTA only */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#menu"
            onClick={e => handleNav(e, '#menu')}
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>Reserve Table</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.svg key="close"
                  initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.2 }}
                  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </motion.svg>
              ) : (
                <motion.svg key="open"
                  initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.2 }}
                  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-[calc(100%-4px)] left-4 right-4 mt-1 glass-nav rounded-2xl p-3 flex flex-col gap-1 shadow-card"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.title}
                href={link.href}
                onClick={e => handleNav(e, link.href)}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="block px-4 py-3 rounded-xl text-site-secondary hover:text-site-primary font-manrope font-medium text-[15px] transition-all cursor-pointer"
                style={{ '--tw-bg-opacity': 1 }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--site-card)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                {link.title}
              </motion.a>
            ))}
            <div className="mt-2 pt-3" style={{ borderTop: '1px solid var(--site-border)' }}>
              <a
                href="#menu"
                onClick={e => handleNav(e, '#menu')}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <span>Reserve Table</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
