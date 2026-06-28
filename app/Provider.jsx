'use client';
import React from 'react';
import { ThemeProvider } from 'next-themes';

function Provider({ children }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <div className="min-h-screen transition-colors duration-500 bg-[--site-bg] text-[--site-text]">
        {children}
      </div>
    </ThemeProvider>
  );
}

export default Provider;
