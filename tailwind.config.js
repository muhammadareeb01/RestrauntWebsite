/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#090909',
        foreground: '#FAFAFA',
        primary: '#E76F2F',
        'primary-hover': '#F38B4D',
        'primary-accent': '#C65D26',
        'bg-card': 'rgba(255,255,255,0.04)',
        'text-secondary': '#A7A7A7',
        'text-muted': '#7B7B7B',
        'border-subtle': 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '800' }],
        'section': ['42px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'card': '0 8px 32px rgba(0,0,0,0.3)',
        'card-hover': '0 24px 64px rgba(0,0,0,0.5), 0 0 40px rgba(231,111,47,0.08)',
        'orange-glow': '0 0 40px rgba(231,111,47,0.2)',
        'orange-glow-lg': '0 0 80px rgba(231,111,47,0.25)',
        'btn': '0 16px 48px rgba(231,111,47,0.35)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '22px',
        '4xl': '28px',
        '5xl': '32px',
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        '30': '120px',
      },
      animation: {
        'float-gentle': 'float-gentle 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
