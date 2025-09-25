'use client';
import { useContext } from 'react';
import Link from 'next/link';
import { CartContext } from '../context/CardContext';
import { motion } from 'framer-motion';
import { zoomIn } from '../utils/motion';

export default function ProductCard({ product }: { product: any }) {
  const cartCtx = useContext(CartContext);

  return (
    <motion.div
      variants={zoomIn}
      initial="hidden"
      animate="visible"
      className={`
        p-6 sm:p-8 opacity-[0.95] rounded-xl shadow-lg shadow-[#636CCB]/60 
        bg-[#3c467b] backdrop-blur-md transition-transform duration-300 
        hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6E8CFB]/80
        w-full h-full min-h-[320px] flex flex-col justify-between
        max-w-[500px]
      `}
    >
      {/* Product Image */}
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-4" />

      {/* Details */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 line-clamp-2">{product.title}</h3>
        <p className="text-[#A5B4FC] font-semibold text-base md:text-lg">${product.price}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        <Link href={`/products/${product.id}`} className="w-1/2">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full px-3 py-2 bg-[#636CCB] text-white rounded text-sm hover:bg-[#50589C] transition cursor-pointer">
            Detail
          </motion.button>
        </Link>

        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => cartCtx?.addToCart(product)} className="w-1/2 px-3 py-2 bg-[#6E8CFB] text-white rounded text-sm hover:bg-[#50589C] transition cursor-pointer">
          Add
        </motion.button>
      </div>
    </motion.div>
  );
}
