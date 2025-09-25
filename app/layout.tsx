import './globals.css';
import Navbar from '../components/Navbar';
import { CartProvider } from '../context/CardContext';
import Footer from '@/components/Footer';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Mini Shop E-Commerce',
  description: 'Frontend shop demo',
  icons: {
    icon: '/minishop.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen flex flex-col`}>
        <CartProvider>
          <Navbar />
          <main className="p-4 flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
