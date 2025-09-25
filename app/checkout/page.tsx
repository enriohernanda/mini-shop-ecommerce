'use client';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CardContext';
import { motion } from 'framer-motion';
import { slideInFromTop, slideInFromBottom } from '../../utils/motion';

export default function CheckoutPage() {
  const cartCtx = useContext(CartContext);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  if (!cartCtx) return null;

  const total = cartCtx.cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartCtx.cart.length === 0) {
      setStatus('error');
      return;
    }
    cartCtx.clearCart();
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="text-2xl font-bold text-green-600 bg-white rounded-lg shadow-md shadow-[#636CCB]/40 p-6 text-center">✅ Order placed successfully 🎉</div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="text-2xl font-bold text-red-600 bg-white rounded-lg shadow-md shadow-[#636CCB]/40 p-6 text-center">❌ Failed to place order. Your cart is empty!</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <motion.h1 variants={slideInFromTop} initial="hidden" animate="visible" className="text-2xl font-bold text-white mb-6">
        Checkout
      </motion.h1>

      <motion.form variants={slideInFromBottom} initial="hidden" animate="visible" onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md shadow-[#636CCB]/40 w-full max-w-md">
        <input type="text" placeholder="Name" className="border border-[#3C467B] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#6E8CFB]" required />
        <input type="email" placeholder="Email" className="border border-[#3C467B] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#6E8CFB]" required />
        <textarea placeholder="Address" className="border border-[#3C467B] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#6E8CFB]" required />
        <p className="font-semibold text-[#3c467b]">Total: ${total.toFixed(2)}</p>
        <button type="submit" className="bg-[#6E8CFB] text-white px-4 py-2 rounded hover:bg-[#50589C] transition cursor-pointer font-semibold">
          Place Order
        </button>
      </motion.form>
    </div>
  );
}
