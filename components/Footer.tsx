'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#6E8CFB] text-white w-full">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center md:justify-between gap-4">
        {/* Title */}
        <h2 className="text-lg font-bold tracking-wide">Mini Shop</h2>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link href="/cart" className="hover:text-gray-200 transition">
            Cart
          </Link>
          <Link href="/checkout" className="hover:text-gray-200 transition">
            Checkout
          </Link>
          <Link href="/products" className="hover:text-gray-200 transition">
            Products
          </Link>
        </nav>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20" />

      {/* Copyright */}
      <div className="text-center text-sm text-white/80 py-4">© 2025 Mini Shop</div>
    </footer>
  );
}
