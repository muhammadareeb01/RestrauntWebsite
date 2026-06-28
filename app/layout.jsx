import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Provider from './Provider';
import {} from 'next/font/google';

const lexend = localFont({
  src: './fonts/Lexend-VariableFont_wght.ttf',
  variable: '--font-inter',
  weight: '100 700',
});

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Hungry',
  description: 'Restaurant App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
