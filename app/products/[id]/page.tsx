'use client';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'next/navigation';
import { getProductById } from '../../../utils/api';
import { CartContext } from '../../../context/CardContext';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, zoomIn } from '../../../utils/motion';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    if (id) getProductById(String(id)).then(setProduct);
  }, [id]);

  if (!product) return <p className="p-6 text-center text-lg">Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div variants={zoomIn} initial="hidden" animate="visible" className="max-w-4xl w-full bg-[#50589C] rounded-xl shadow-lg shadow-[#636CCB]/50 p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Product Image */}
        <motion.div variants={slideInFromLeft(0.2)} initial="hidden" animate="visible" className="flex justify-center items-center">
          <img src={product.image} alt={product.title} className="h-64 object-contain" />
        </motion.div>

        {/* Right: Product Info */}
        <motion.div variants={slideInFromRight(0.3)} initial="hidden" animate="visible" className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-4 text-white">{product.title}</h1>
            <p className="text-white mb-4">{product.description}</p>
            <p className="text-2xl font-extrabold text-[#6E8CFB] bg-white p-2 rounded w-fit">${product.price}</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 12px #6E8CFB' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => cartCtx?.addToCart(product)}
            className="mt-6 bg-[#6E8CFB] text-white px-6 py-3 rounded-lg font-semibold transition cursor-pointer"
          >
            Add to Cart
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
