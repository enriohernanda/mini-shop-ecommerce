'use client';

import { createContext, useState, useEffect, ReactNode } from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type CartContextType = {
  cart: Product[];
  addToCart: (p: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  // ambil dari localStorage
  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) setCart(JSON.parse(saved));
  }, []);

  // simpan ke localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => setCart([...cart, product]);
  const removeFromCart = (id: number) => setCart(cart.filter((item) => item.id !== id));
  const clearCart = () => setCart([]);

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>;
}
