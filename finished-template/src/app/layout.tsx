import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s - Next.js Blog Demo',
    default: 'Home - Next.js Blog Demo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <div className='container m-auto'>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
