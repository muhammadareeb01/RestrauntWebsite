'use client';
import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'Home',    href: '#home' },
  { label: 'About',   href: '#about' },
  { label: 'Menu',    href: '#menu' },
  { label: 'Contact', href: '#contact' },
];

const contactInfo = [
  { icon: '📍', text: '123 Culinary Ave, New York, NY 10001' },
  { icon: '📞', text: '+1 (555) 123-4567' },
  { icon: '✉️', text: 'hello@hungry.com' },
  { icon: '🕒', text: 'Mon–Sun: 9 AM – 11 PM' },
];

const socials = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'Twitter/X',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
];

/* Shared smooth-scroll helper — 90px offset for fixed navbar */
const scrollTo = (e, href) => {
  e.preventDefault();
  const id  = href.replace('#', '');
  const el  = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
};

function Footer() {
  return (
    <footer style={{ background: 'var(--site-bg2)', borderTop: '1px solid var(--site-border)' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--primary)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                  <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
                </svg>
              </div>
              <span className="font-sora font-bold text-xl tracking-tight" style={{ color: 'var(--site-text)' }}>Hungry</span>
            </div>
            <p className="font-manrope text-[14px] leading-relaxed" style={{ color: 'var(--site-text2)' }}>
              Crafting unforgettable dining experiences with locally sourced ingredients and exceptional hospitality.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{ background: 'var(--site-card)', border: '1px solid var(--site-border)', color: 'var(--site-text2)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--site-text2)'; e.currentTarget.style.borderColor = 'var(--site-border)'; }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-sora font-semibold text-[15px]" style={{ color: 'var(--site-text)' }}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={e => scrollTo(e, l.href)}
                    className="font-manrope text-[14px] transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                    style={{ color: 'var(--site-text2)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--site-text2)'}
                  >
                    <span className="w-1 h-1 rounded-full transition-all group-hover:w-3" style={{ background: 'var(--primary)' }} />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="font-sora font-semibold text-[15px]" style={{ color: 'var(--site-text)' }}>Contact</h4>
            <ul className="space-y-3">
              {contactInfo.map(c => (
                <li key={c.text} className="flex items-start gap-2.5">
                  <span className="text-[15px] mt-0.5 flex-shrink-0">{c.icon}</span>
                  <span className="font-manrope text-[14px] leading-relaxed" style={{ color: 'var(--site-text2)' }}>{c.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-5">
            <h4 className="font-sora font-semibold text-[15px]" style={{ color: 'var(--site-text)' }}>Opening Hours</h4>
            <div className="space-y-3">
              {[
                { day: 'Mon – Fri', time: '11AM – 10PM' },
                { day: 'Saturday',  time: '10AM – 11PM' },
                { day: 'Sunday',    time: '10AM – 9PM' },
              ].map(h => (
                <div key={h.day} className="flex justify-between items-center gap-4">
                  <span className="font-manrope text-[14px]" style={{ color: 'var(--site-text2)' }}>{h.day}</span>
                  <span className="font-sora font-semibold text-[13px]" style={{ color: 'var(--primary)' }}>{h.time}</span>
                </div>
              ))}
            </div>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)' }}>
              <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
              <span className="font-manrope text-[12px] font-semibold text-[#4ADE80]">Currently Open</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-line mb-7" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-manrope text-[13px]" style={{ color: 'var(--site-text3)' }}>
            © 2025 Hungry. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map(t => (
              <a
                key={t}
                href="#"
                className="font-manrope text-[13px] transition-colors duration-200"
                style={{ color: 'var(--site-text3)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--site-text3)'}
              >
                {t}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;