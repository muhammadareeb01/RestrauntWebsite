'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === 'system' ? systemTheme : theme;
  const isDark  = current === 'dark';

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1,   y: 0  }}
      transition={{ duration: 0.4, delay: 0.8 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-2xl shadow-lg flex items-center justify-center transition-colors duration-300"
      style={{
        background: 'var(--primary)',
        border: '1px solid rgba(255,255,255,0.15)',
        boxShadow: '0 8px 32px rgba(231,111,47,0.35)',
      }}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          /* Sun icon — click to go light */
          <motion.svg
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0,   opacity: 1 }}
            exit={{    rotate:  90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="#fff" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1"  x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22"   x2="5.64"  y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1"  y1="12" x2="3"  y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
            <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
          </motion.svg>
        ) : (
          /* Moon icon — click to go dark */
          <motion.svg
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0,  opacity: 1 }}
            exit={{    rotate:-90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="#fff" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
