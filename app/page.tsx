'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getProducts, getCategories } from '../utils/api';
import ProductCard from '../components/ProductCard';
import { slideInFromLeft, slideInFromRight } from '../utils/motion';

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getProducts().then(setProducts);
    getCategories().then(setCategories);
  }, []);

  const filtered = products.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()) && (filter ? p.category === filter : true));

  return (
    <div className="px-6 py-10">
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4 mt-6">
        <motion.input
          variants={slideInFromLeft(0.2)}
          initial="hidden"
          animate="visible"
          className="w-full md:w-3/4 py-2 px-4 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6E8CFB]"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <motion.select variants={slideInFromRight(0.4)} initial="hidden" animate="visible" className="py-2 px-3 rounded-md bg-[#50589C] text-white cursor-pointer w-full md:w-1/4" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </motion.select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {filtered.length === 0 && <p className="text-center text-white mt-6">No products found.</p>}
    </div>
  );
}
