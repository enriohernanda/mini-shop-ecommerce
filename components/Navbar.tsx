'use client';
import Link from 'next/link';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CardContext';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { slideInFromTop } from '../utils/motion';

export default function Navbar() {
  const cartCtx = useContext(CartContext);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <motion.nav
      variants={slideInFromTop}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 transition-all ${scrolled ? 'bg-[#6E8CFB] shadow-lg py-3' : 'bg-transparent py-6 px-10'} text-white flex justify-between items-center px-10`}
    >
      {/* Title */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link href="/" className="font-bold text-lg tracking-wide">
          Mini Shop
        </Link>
      </motion.div>

      {/* Links */}
      <div className="flex gap-4">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link className="hover:bg-[#636CCB] font-medium px-2 py-1 rounded transition-colors" href="/">
            Products
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link className="hover:bg-[#636CCB] font-medium px-2 py-1 rounded transition-colors" href="/cart">
            Cart ({cartCtx?.cart.length || 0})
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}
