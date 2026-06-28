'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const menuData = [
  {
    category: 'Starters',
    items: [
      { id: 1,  name: 'Garlic Bread',    description: 'Freshly baked bread with garlic butter and herbs.',                                  price: '$6.99',  image: '/bread.png',     alt: 'Garlic Bread',    tag: 'Chef Pick'    },
      { id: 2,  name: 'Caesar Salad',    description: 'Crisp romaine lettuce, croutons, and parmesan with Caesar dressing.',               price: '$9.99',  image: '/salad.png',     alt: 'Caesar Salad',    tag: ''              },
      { id: 3,  name: 'Soup of the Day', description: "Chef's special soup made with fresh seasonal ingredients.",                          price: '$8.50',  image: '/soup.png',      alt: 'Soup of the Day', tag: 'Daily Special' },
      { id: 4,  name: 'Sandwich',        description: 'Classic sandwich with ham, cheese, lettuce, and tomato.',                           price: '$8.50',  image: '/sandwich.png',  alt: 'Sandwich',        tag: ''              },
    ],
  },
  {
    category: 'Main Courses',
    items: [
      { id: 5,  name: 'Grilled Chicken', description: 'Juicy grilled chicken breast served with roasted vegetables.',                      price: '$18.99', image: '/grill.png',     alt: 'Grilled Chicken', tag: 'Most Loved' },
      { id: 6,  name: 'Margherita Pizza',description: 'Classic pizza topped with fresh tomatoes, mozzarella, and basil.',                  price: '$16.99', image: '/pizza.png',     alt: 'Margherita Pizza',tag: ''           },
      { id: 7,  name: 'Steak & Fries',   description: 'Tender steak grilled to perfection, served with crispy fries.',                    price: '$24.99', image: '/steak.png',     alt: 'Steak and Fries', tag: 'Premium'    },
      { id: 8,  name: 'Burger & Fries',  description: 'Juicy patty with cheese, lettuce, and tomato with French fries.',                  price: '$10.99', image: '/burger.png',    alt: 'Burger and Fries',tag: ''           },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { id: 9,  name: 'Chocolate Cake',  description: 'Rich chocolate cake served with a side of whipped cream.',                         price: '$7.99',  image: '/cake.png',      alt: 'Chocolate Cake',  tag: 'House Fav' },
      { id: 10, name: 'Cheesecake',      description: 'Creamy cheesecake with graham cracker crust and strawberry topping.',              price: '$8.99',  image: '/cheesecake.png',alt: 'Cheesecake',      tag: ''          },
      { id: 11, name: 'Ice-Cream Sundae',description: 'Classic sundae with vanilla ice cream, chocolate sauce, and cherry.',              price: '$5.50',  image: '/ice-cream.png', alt: 'Ice-Cream Sundae',tag: ''          },
      { id: 12, name: 'Donut',           description: 'Artisan donut with assorted flavours and premium toppings.',                       price: '$3.50',  image: '/donut.png',     alt: 'Donut',           tag: ''          },
    ],
  },
];

const filterTabs = ['All', 'Starters', 'Main Courses', 'Desserts'];

function MenuCard({ item, index }) {
  return (
    <motion.div
      layout
      key={item.id}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -6, scale: 1.015 }}
      className="card-premium flex items-center gap-5 p-5 group cursor-pointer relative overflow-hidden"
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(231,111,47,0.06) 0%, transparent 60%)' }}
      />

      {/* Food image */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-[16px] overflow-hidden flex-shrink-0 shadow-md"
        style={{ background: 'var(--site-card)' }}>
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="96px"
          className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Name row */}
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <h3
            className="font-sora font-semibold text-[16px] leading-tight truncate"
            style={{ color: 'var(--site-text)' }}
          >
            {item.name}
          </h3>
          {item.tag && (
            <span
              className="flex-shrink-0 text-[10px] font-manrope font-bold px-2.5 py-1 rounded-full uppercase tracking-widest"
              style={{
                background: 'rgba(231,111,47,0.12)',
                color: 'var(--primary)',
                border: '1px solid rgba(231,111,47,0.25)',
              }}
            >
              {item.tag}
            </span>
          )}
        </div>

        {/* Description */}
        <p
          className="font-manrope text-[13px] leading-relaxed line-clamp-2 mb-3"
          style={{ color: 'var(--site-text3)' }}
        >
          {item.description}
        </p>

        {/* Price + Order */}
        <div className="flex items-center justify-between">
          <span
            className="font-sora font-bold text-[18px]"
            style={{ color: 'var(--primary)' }}
          >
            {item.price}
          </span>
          <motion.button
            whileHover={{ x: 3 }}
            className="flex items-center gap-1.5 font-manrope text-[13px] font-semibold transition-colors duration-300"
            style={{ color: 'var(--site-text2)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--site-text2)'}
          >
            Order
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function Menu() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredData = activeFilter === 'All'
    ? menuData
    : menuData.filter(s => s.category === activeFilter);

  return (
    <section className="py-28 overflow-hidden" style={{ background: 'var(--site-bg)' }} id="menu">
      <div className="container mx-auto max-w-7xl px-6">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12" style={{ background: 'rgba(231,111,47,0.4)' }} />
          <span className="section-label">Our Menu</span>
          <div className="h-px w-12" style={{ background: 'rgba(231,111,47,0.4)' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-sora font-bold text-[clamp(30px,4vw,46px)] text-center mb-4 tracking-tight"
          style={{ color: 'var(--site-text)', fontStyle: 'italic', letterSpacing: '-0.03em' }}
        >
          Handcrafted with{' '}
          <span className="text-gradient-orange">passion</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-manrope text-[15px] text-center max-w-xl mx-auto mb-14"
          style={{ color: 'var(--site-text3)' }}
        >
          Every dish is a celebration of flavour, crafted from locally sourced ingredients by our award-winning chefs.
        </motion.p>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {filterTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className="relative px-5 py-2.5 rounded-xl font-manrope font-semibold text-[14px] transition-all duration-300"
              style={{
                color: activeFilter === tab ? '#fff' : 'var(--site-text2)',
                background: activeFilter === tab ? 'none' : 'var(--site-card)',
                border: `1px solid ${activeFilter === tab ? 'transparent' : 'var(--site-border)'}`,
              }}
            >
              {activeFilter === tab && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-xl"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-accent))' }}
                  transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </motion.div>

        {/* Menu sections */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredData.map((section, si) => (
              <div key={section.category} className={si > 0 ? 'mt-14' : ''}>
                {/* Category title */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-4 mb-7"
                >
                  <h2
                    className="font-sora font-bold text-[20px] whitespace-nowrap"
                    style={{ color: 'var(--site-text)', fontStyle: 'italic' }}
                  >
                    {section.category}
                  </h2>
                  <div
                    className="h-px flex-1"
                    style={{ background: 'linear-gradient(90deg, rgba(231,111,47,0.4), transparent)' }}
                  />
                </motion.div>

                {/* 2-col card grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item, idx) => (
                    <MenuCard key={item.id} item={item} index={idx} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Menu;
