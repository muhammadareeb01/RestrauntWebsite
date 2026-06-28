'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import DarkmodeButton from './DarkmodeButton';

const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Menu', href: '#menu' },
  { title: 'Contact', href: '#contact' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 30);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        animate={{
          paddingLeft: scrolled ? '24px' : '32px',
          paddingRight: scrolled ? '24px' : '32px',
          paddingTop: scrolled ? '10px' : '14px',
          paddingBottom: scrolled ? '10px' : '14px',
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="glass-nav rounded-2xl w-full max-w-6xl flex items-center justify-between"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-accent flex items-center justify-center shadow-orange-glow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
            </svg>
          </div>
          <span className="font-sora font-bold text-xl text-[#FAFAFA] tracking-tight">
            Hungry
          </span>
        </Link>

        {/* Desktop Nav — centered */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              onClick={() => setActiveLink(link.title)}
              className={`relative px-4 py-2 rounded-xl font-manrope font-medium text-[15px] transition-colors duration-300 underline-grow
                ${activeLink === link.title
                  ? 'text-[#FAFAFA]'
                  : 'text-[#A7A7A7] hover:text-[#FAFAFA]'
                }`}
            >
              {link.title}
              {activeLink === link.title && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute inset-0 rounded-xl bg-white/6"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <DarkmodeButton />
          <Link href="#menu" className="btn-primary inline-flex items-center gap-2">
            <span>Reserve Table</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <DarkmodeButton />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.svg key="close" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.2 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></motion.svg>
              ) : (
                <motion.svg key="open" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.2 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-full left-4 right-4 mt-2 glass-nav rounded-2xl p-4 flex flex-col gap-1"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => { setActiveLink(link.title); setIsMenuOpen(false); }}
                  className="block px-4 py-3 rounded-xl text-[#A7A7A7] hover:text-[#FAFAFA] hover:bg-white/5 font-manrope font-medium text-[15px] transition-all"
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
            <div className="mt-2 pt-3 border-t border-white/8">
              <Link href="#menu" className="btn-primary w-full flex items-center justify-center gap-2">
                <span>Reserve Table</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
