'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function Hero() {
  const [isClient, setIsClient] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => { setIsClient(true); }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    mouseX.set(x * 20);
    mouseY.set(y * 20);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  if (!isClient) return (
    <div className="min-h-screen bg-[#090909] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div
      className="relative min-h-screen bg-[#090909] overflow-hidden flex items-center pt-24"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[20%] w-[500px] h-[500px] rounded-full bg-[#E76F2F]/6 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-[#C65D26]/4 blur-[100px]" />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[78vh]">

          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-3 px-4 py-2.5 glass rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="badge-ping absolute inline-flex h-full w-full rounded-full bg-[#E76F2F] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E76F2F]" />
                </span>
                <span className="font-manrope font-semibold text-[13px] text-[#A7A7A7] tracking-widest uppercase">
                  100% Fresh &amp; Delicious
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-1">
              <h1 className="font-sora font-extrabold text-[clamp(44px,6vw,76px)] leading-[0.95] tracking-[-0.03em] text-[#FAFAFA]">
                Taste the
              </h1>
              <h1 className="font-sora font-extrabold text-[clamp(44px,6vw,76px)] leading-[0.95] tracking-[-0.03em] text-gradient-orange">
                Future
              </h1>
              <h1 className="font-sora font-extrabold text-[clamp(44px,6vw,76px)] leading-[0.95] tracking-[-0.03em] text-[#FAFAFA]">
                of Food
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="font-manrope text-[17px] font-medium text-[#A7A7A7] leading-relaxed max-w-[520px] mx-auto lg:mx-0"
            >
              Experience culinary excellence with our chef-crafted dishes,
              delivered fresh to your doorstep in New York City.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="#menu" className="btn-primary inline-flex items-center justify-center gap-2">
                <span>Explore Menu</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </Link>
              <Link href="#about" className="btn-glass inline-flex items-center justify-center gap-2">
                <span>Our Story</span>
              </Link>
            </motion.div>

            {/* Statistics */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-10 pt-4"
            >
              {[
                { target: 1000, suffix: '+', label: 'Happy Guests' },
                { target: 50, suffix: '+', label: 'Menu Items' },
                { target: 49, suffix: '', label: 'Rating 4.9★', display: '4.9★' },
              ].map((stat, i) => (
                <React.Fragment key={stat.label}>
                  {i > 0 && <div className="w-px h-10 bg-white/8" />}
                  <div className="text-center lg:text-left">
                    <div className="stat-number">
                      {stat.display || <AnimatedCounter target={stat.target} suffix={stat.suffix} />}
                    </div>
                    <div className="stat-label font-manrope">{stat.label}</div>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Food image with 3D parallax */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            {/* Ambient glow ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full bg-[#E76F2F]/10 blur-[80px] animate-pulse-glow" />

            {/* Floating decorative chips */}
            <motion.div
              animate={{ y: [-6, 6, -6], rotate: [-2, 2, -2] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 lg:top-8 lg:left-0 glass rounded-2xl px-4 py-3 z-20 shadow-card"
            >
              <p className="font-sora font-semibold text-sm text-[#FAFAFA]">⭐ 4.9 Rated</p>
              <p className="font-manrope text-xs text-[#7B7B7B]">by 1000+ guests</p>
            </motion.div>

            <motion.div
              animate={{ y: [6, -8, 6], rotate: [1, -1, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-8 -right-4 lg:bottom-12 lg:-right-2 glass rounded-2xl px-4 py-3 z-20 shadow-card"
            >
              <p className="font-sora font-semibold text-sm text-[#FAFAFA]">🚀 Fast Delivery</p>
              <p className="font-manrope text-xs text-[#7B7B7B]">Under 30 min</p>
            </motion.div>

            {/* Main image */}
            <motion.div
              style={{ x: springX, y: springY }}
              className="relative z-10"
            >
              <motion.div
                animate={{ y: [-12, 8, -12] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="relative">
                  <Image
                    src="/hero.png"
                    alt="Delicious food"
                    width={620}
                    height={560}
                    className="w-[340px] sm:w-[420px] lg:w-[520px] h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-manrope text-xs text-[#7B7B7B] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/12 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-[#E76F2F] rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
