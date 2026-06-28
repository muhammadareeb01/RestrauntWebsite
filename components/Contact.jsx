'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Address',
    value: '123 Culinary Ave, New York, NY 10001, USA',
    sub: 'Get directions →',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.35 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: 'Phone',
    value: '+1 (555) 123-4567',
    sub: 'Mon–Sun 9AM–11PM',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: 'Email',
    value: 'hello@hungry.com',
    sub: 'Respond within 24h',
  },
];

const hours = [
  { day: 'Monday – Friday', time: '11:00 AM – 10:00 PM' },
  { day: 'Saturday',        time: '10:00 AM – 11:00 PM' },
  { day: 'Sunday',          time: '10:00 AM – 9:00 PM'  },
];

function Contact() {
  const [sending, setSending] = useState(false);
  const [sent,    setSent]    = useState(false);
  const [focused, setFocused] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 2000);
  };

  /* All colours via CSS variables — works in both light & dark */
  const inputStyle = (name) => ({
    width:        '100%',
    background:   'var(--site-card)',
    border:       `1px solid ${focused === name ? 'rgba(231,111,47,0.6)' : 'var(--site-border)'}`,
    borderRadius: '16px',
    padding:      '14px 18px',
    fontFamily:   'Manrope, sans-serif',
    fontSize:     '15px',
    color:        'var(--site-text)',
    outline:      'none',
    transition:   'all 300ms',
    boxShadow:    focused === name ? '0 0 0 3px rgba(231,111,47,0.12)' : 'none',
    resize:       'none',
  });

  return (
    <section
      className="py-28 overflow-hidden"
      style={{ background: 'var(--site-bg)' }}
      id="contact"
    >
      <div className="container mx-auto max-w-7xl px-6">

        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12" style={{ background: 'rgba(231,111,47,0.4)' }} />
          <span className="section-label">Get In Touch</span>
          <div className="h-px w-12" style={{ background: 'rgba(231,111,47,0.4)' }} />
        </motion.div>

        {/* ── Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-sora font-bold text-center mb-4 tracking-tight"
          style={{
            fontSize: 'clamp(30px, 4vw, 46px)',
            color: 'var(--site-text)',
            fontStyle: 'italic',
            letterSpacing: '-0.03em',
          }}
        >
          We would love to hear from you
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-manrope text-[16px] text-center max-w-xl mx-auto mb-16"
          style={{ color: 'var(--site-text3)' }}
        >
          Have a reservation request, feedback, or just want to say hi? We are always available.
        </motion.p>

        {/* ── Two-col grid ── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">

          {/* LEFT — contact cards + hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-5"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ x: 4 }}
                className="card-premium flex items-start gap-5 p-6"
                style={{ borderLeft: '2px solid rgba(231,111,47,0.3)' }}
              >
                {/* Icon circle */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(231,111,47,0.1)',
                    border: '1px solid rgba(231,111,47,0.2)',
                    color: 'var(--primary)',
                  }}
                >
                  {info.icon}
                </div>

                <div>
                  <p
                    className="font-manrope text-[11px] font-bold tracking-[0.15em] uppercase mb-1"
                    style={{ color: 'var(--site-text3)' }}
                  >
                    {info.title}
                  </p>
                  <p
                    className="font-sora font-semibold text-[15px] mb-0.5"
                    style={{ color: 'var(--site-text)' }}
                  >
                    {info.value}
                  </p>
                  <p
                    className="font-manrope text-[13px]"
                    style={{ color: 'var(--primary)' }}
                  >
                    {info.sub}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Business Hours card */}
            <div className="card-premium p-6">
              <h4
                className="font-sora font-semibold text-[15px] mb-4 flex items-center gap-2"
                style={{ color: 'var(--site-text)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                Business Hours
              </h4>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center">
                    <span
                      className="font-manrope text-[14px]"
                      style={{ color: 'var(--site-text2)' }}
                    >
                      {h.day}
                    </span>
                    <span
                      className="font-sora font-semibold text-[13px]"
                      style={{ color: 'var(--site-text)' }}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="card-premium p-8"
          >
            <h3
              className="font-sora font-bold text-[22px] mb-1.5"
              style={{ color: 'var(--site-text)', fontStyle: 'italic', letterSpacing: '-0.02em' }}
            >
              Send us a message
            </h3>
            <p
              className="font-manrope text-[14px] mb-8"
              style={{ color: 'var(--site-text3)' }}
            >
              We respond to all messages within 24 hours.
            </p>

            {sent ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h4 className="font-sora font-bold text-[20px]" style={{ color: 'var(--site-text)' }}>
                  Message Sent!
                </h4>
                <p className="font-manrope text-[14px]" style={{ color: 'var(--site-text3)' }}>
                  We will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block font-manrope text-[13px] font-semibold mb-2"
                      style={{ color: 'var(--site-text2)' }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      required
                      style={inputStyle('first')}
                      onFocus={() => setFocused('first')}
                      onBlur={() => setFocused('')}
                    />
                  </div>
                  <div>
                    <label
                      className="block font-manrope text-[13px] font-semibold mb-2"
                      style={{ color: 'var(--site-text2)' }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      required
                      style={inputStyle('last')}
                      onFocus={() => setFocused('last')}
                      onBlur={() => setFocused('')}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block font-manrope text-[13px] font-semibold mb-2"
                    style={{ color: 'var(--site-text2)' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    style={inputStyle('email')}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                  />
                </div>

                <div>
                  <label
                    className="block font-manrope text-[13px] font-semibold mb-2"
                    style={{ color: 'var(--site-text2)' }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us how we can help you…"
                    required
                    style={{ ...inputStyle('msg'), resize: 'none' }}
                    onFocus={() => setFocused('msg')}
                    onBlur={() => setFocused('')}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-3"
                  style={{ opacity: sending ? 0.7 : 1 }}
                >
                  {sending ? (
                    <>
                      <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.3"/><path d="M12 2a10 10 0 0 1 10 10"/>
                      </svg>
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
