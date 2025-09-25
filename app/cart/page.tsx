'use client';
import { useContext } from 'react';
import { CartContext } from '../../context/CardContext';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slideInFromBottom } from '../../utils/motion';

export default function CartPage() {
  const cartCtx = useContext(CartContext);
  if (!cartCtx) return null;

  const total = cartCtx.cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <motion.h1 variants={slideInFromBottom} initial="hidden" animate="visible" className="text-2xl font-bold text-white mb-6 mt-10">
        Cart
      </motion.h1>

      {cartCtx.cart.length === 0 && <p className="text-black bg-white rounded-lg shadow-md shadow-[#636CCB]/40 p-4 max-w-2xl w-full text-center">No items in cart</p>}

      <div className="w-full max-w-2xl space-y-4">
        {cartCtx.cart.map((item) => (
          <motion.div key={item.id} variants={slideInFromBottom} initial="hidden" animate="visible" className="flex justify-between items-center bg-white rounded-lg shadow-md shadow-[#636CCB]/40 p-4">
            <div className="flex flex-col">
              <span className="font-medium text-[#3c467b]">{item.title}</span>
              <span className="text-[#6E8CFB] font-bold">${item.price}</span>
            </div>
            <button onClick={() => cartCtx.removeFromCart(item.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition cursor-pointer">
              Remove
            </button>
          </motion.div>
        ))}
      </div>

      {cartCtx.cart.length > 0 && (
        <>
          <p className="font-bold mt-6 text-lg text-white">Total: ${total.toFixed(2)}</p>
          <div className="flex gap-3 mt-4">
            <button onClick={cartCtx.clearCart} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition cursor-pointer">
              Clear
            </button>
            <Link href="/checkout" className="bg-[#6E8CFB] text-white px-4 py-2 rounded hover:bg-[#50589C] transition cursor-pointer">
              Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
