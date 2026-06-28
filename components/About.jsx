'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] } },
});

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Fresh Ingredients',
    desc: 'Locally sourced produce delivered to our kitchen every morning.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Expert Chefs',
    desc: 'Award-winning culinary professionals behind every dish.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Customer First',
    desc: 'Exceptional hospitality and personalised service always.',
  },
];

const timeline = [
  { year: '2023', event: 'Restaurant Founded', desc: 'Opened doors in New York City with a vision for premium dining.' },
  { year: '2024', event: 'Menu Expanded', desc: 'Added 30+ seasonal dishes and craft cocktail pairings.' },
  { year: '2025', event: '1000+ Happy Guests', desc: 'Rated 4.9 stars — a milestone built on love and food.' },
];

function About() {
  return (
    <section className="bg-[#090909] py-28 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-[#E76F2F]/40" />
          <span className="section-label">About Us</span>
          <div className="h-px w-12 bg-[#E76F2F]/40" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-sora font-bold text-[clamp(32px,4vw,48px)] text-center text-[#FAFAFA] mb-20 leading-tight tracking-tight max-w-2xl mx-auto"
        >
          Crafting unforgettable{' '}
          <span className="text-gradient-orange">dining experiences</span>
        </motion.h2>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            {/* Orange glow behind image */}
            <div className="absolute -inset-8 bg-[#E76F2F]/8 rounded-[40px] blur-2xl animate-pulse-glow" />
            {/* Decorative shapes */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl border border-[#E76F2F]/15 rotate-12" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-xl bg-[#E76F2F]/6" />

            <div className="relative rounded-[32px] overflow-hidden border border-white/8 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              <Image
                src="/restaurant.png"
                alt="Hungry Restaurant"
                width={640}
                height={500}
                className="w-full h-[420px] object-cover"
              />
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-sora font-bold text-[28px] text-[#FAFAFA] mb-4 tracking-tight">Our Story</h3>
              <p className="font-manrope text-[16px] text-[#A7A7A7] leading-[1.8]">
                Hungry was born from a love for great food and a desire to create an inclusive space
                where everyone feels welcome. Established in 2023, we have quickly become a favourite
                spot for locals and visitors alike. Our menu showcases a diverse range of culinary
                delights that cater to every palate.
              </p>
            </div>
            <div>
              <h3 className="font-sora font-bold text-[28px] text-[#FAFAFA] mb-4 tracking-tight">Our Team</h3>
              <p className="font-manrope text-[16px] text-[#A7A7A7] leading-[1.8]">
                Our talented chefs and friendly staff work tirelessly to ensure every guest has an
                extraordinary dining experience. We are committed to delivering top-quality service
                and making your visit to Hungry truly memorable.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4 pt-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp(0.3 + i * 0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  className="card-premium flex items-start gap-4 p-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E76F2F]/12 border border-[#E76F2F]/20 flex items-center justify-center text-[#E76F2F] flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-sora font-semibold text-[16px] text-[#FAFAFA] mb-1">{f.title}</h4>
                    <p className="font-manrope text-[14px] text-[#7B7B7B] leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="divider-line mb-24" />

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 bg-white/8" />
            <span className="section-label">Our Journey</span>
            <div className="h-px flex-1 bg-white/8" />
          </div>

          <div className="grid sm:grid-cols-3 gap-8 relative">
            {/* Connecting line on desktop */}
            <div className="hidden sm:block absolute top-[28px] left-[calc(16.666%+16px)] right-[calc(16.666%+16px)] h-px bg-gradient-to-r from-[#E76F2F]/20 via-[#E76F2F]/40 to-[#E76F2F]/20" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#E76F2F]/10 border border-[#E76F2F]/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-sora font-bold text-sm text-[#E76F2F]">{item.year}</span>
                  </div>
                  <h4 className="font-sora font-semibold text-[16px] text-[#FAFAFA]">{item.event}</h4>
                </div>
                <p className="font-manrope text-[14px] text-[#7B7B7B] leading-relaxed pl-[72px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
