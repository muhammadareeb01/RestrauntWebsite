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
  { day: 'Saturday', time: '10:00 AM – 11:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 9:00 PM' },
];

function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 2000);
  };

  const inputClass = (name) =>
    `w-full bg-white/4 border rounded-[16px] px-5 py-4 font-manrope text-[15px] text-[#FAFAFA] placeholder-[#7B7B7B] outline-none transition-all duration-300 ${
      focused === name
        ? 'border-[#E76F2F]/60 shadow-[0_0_0_3px_rgba(231,111,47,0.12)]'
        : 'border-white/8 hover:border-white/16'
    }`;

  return (
    <section className="bg-[#090909] py-28 overflow-hidden" id="contact">
      <div className="container mx-auto max-w-7xl px-6">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-[#E76F2F]/40" />
          <span className="section-label">Get In Touch</span>
          <div className="h-px w-12 bg-[#E76F2F]/40" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-sora font-bold text-[clamp(32px,4vw,48px)] text-center text-[#FAFAFA] mb-4 tracking-tight"
        >
          We would love to hear from you
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-manrope text-[16px] text-[#7B7B7B] text-center max-w-xl mx-auto mb-16"
        >
          Have a reservation request, feedback, or just want to say hi? We are always available.
        </motion.p>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">

          {/* Left: Contact Info */}
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
                className="gradient-border card-premium flex items-start gap-5 p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E76F2F]/12 border border-[#E76F2F]/20 flex items-center justify-center text-[#E76F2F] flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="font-manrope text-[12px] text-[#7B7B7B] font-semibold tracking-widest uppercase mb-1">{info.title}</p>
                  <p className="font-sora font-medium text-[16px] text-[#FAFAFA] mb-0.5">{info.value}</p>
                  <p className="font-manrope text-[13px] text-[#E76F2F]">{info.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Hours */}
            <div className="card-premium p-6">
              <h4 className="font-sora font-semibold text-[16px] text-[#FAFAFA] mb-4 flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E76F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Business Hours
              </h4>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center">
                    <span className="font-manrope text-[14px] text-[#A7A7A7]">{h.day}</span>
                    <span className="font-manrope text-[14px] font-semibold text-[#FAFAFA]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="card-premium p-8"
          >
            <h3 className="font-sora font-bold text-[24px] text-[#FAFAFA] mb-2 tracking-tight">Send us a message</h3>
            <p className="font-manrope text-[14px] text-[#7B7B7B] mb-8">We respond to all messages within 24 hours.</p>

            {sent ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#4ADE80]/12 border border-[#4ADE80]/30 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h4 className="font-sora font-bold text-[20px] text-[#FAFAFA]">Message Sent!</h4>
                <p className="font-manrope text-[14px] text-[#7B7B7B]">We will get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-manrope text-[13px] font-semibold text-[#A7A7A7] mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      required
                      className={inputClass('first')}
                      onFocus={() => setFocused('first')}
                      onBlur={() => setFocused('')}
                    />
                  </div>
                  <div>
                    <label className="block font-manrope text-[13px] font-semibold text-[#A7A7A7] mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      required
                      className={inputClass('last')}
                      onFocus={() => setFocused('last')}
                      onBlur={() => setFocused('')}
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-manrope text-[13px] font-semibold text-[#A7A7A7] mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    className={inputClass('email')}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                  />
                </div>
                <div>
                  <label className="block font-manrope text-[13px] font-semibold text-[#A7A7A7] mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us how we can help you…"
                    required
                    className={`${inputClass('msg')} resize-none`}
                    onFocus={() => setFocused('msg')}
                    onBlur={() => setFocused('')}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {sending ? (
                    <>
                      <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" strokeOpacity="0.3"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
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
