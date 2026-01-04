"use client";

import React, { useState, useEffect } from "react";
import { ShoppingCart, Menu, X, ArrowRight, Trash2, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

// --- Mock Data for Cart ---
const INITIAL_CART_ITEMS = [
  {
    id: 1,
    name: "SEO Audit Package",
    category: "Service",
    price: 499,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop",
    quantity: 1,
  },
  {
    id: 2,
    name: "Premium Branding Kit",
    category: "Design",
    price: 1299,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=200&fit=crop",
    quantity: 1,
  },
];

// --- Animated Logo Component ---
const LogoIcon = () => (
  <motion.svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2"
    whileHover="hover"
  >
    <motion.path
      d="M20 10L30 15V25L20 30L10 25V15L20 10Z"
      fill="#CCFF00"
      transform="translate(-5, 0)"
      variants={{
        hover: {
          x: -2,
          y: -2,
          filter: "drop-shadow(0px 0px 8px rgba(204, 255, 0, 0.5))",
        },
      }}
      transition={{ type: "spring", stiffness: 300 }}
    />
    <motion.path
      d="M28 15L36 19V27L28 31L20 27V19L28 15Z"
      fill="#CCFF00"
      fillOpacity="0.8"
      variants={{
        hover: { x: 2, y: 2 },
      }}
      transition={{ type: "spring", stiffness: 300 }}
    />
  </motion.svg>
);

export function Navbar() {
  // State for Scroll, Hover, Mobile Menu, and Cart
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  // --- New Cart State ---
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(INITIAL_CART_ITEMS);
  const { scrollY } = useScroll();

  // Detect Scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Calculate Subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Remove Item Handler
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const navLinks = [
    { name: "About Us", href: "#about", active: true },
    { name: "Blog", href: "#blog", active: false },
    { name: "Projects", href: "#work", active: false },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050505]/90 backdrop-blur-lg border-b border-white/10 py-4"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* --- Logo Section --- */}
          <Link href="/" className="flex items-center gap-1 group cursor-pointer z-50">
            <LogoIcon />
            <span className="text-2xl font-bold text-white tracking-wide uppercase font-oswald group-hover:text-[#CCFF00] transition-colors">
              Mariq
            </span>
          </Link>

          {/* --- Desktop Links --- */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 rounded-full text-[15px] font-medium transition-colors"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      className="absolute inset-0 bg-white/10 rounded-full"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </AnimatePresence>
                <span className={`relative z-10 flex items-center gap-1.5 ${link.active ? "text-[#CCFF00]" : "text-gray-300 group-hover:text-white"}`}>
                  {link.active && <motion.span layoutId="activeDot" className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />}
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* --- Right Actions --- */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* CART ICON WITH CLICK EVENT */}
            <motion.button
              className="relative group text-white hover:text-[#CCFF00] transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCartOpen(true)} // Opens Cart
            >
              <ShoppingCart size={22} strokeWidth={2} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#CCFF00] text-[10px] font-bold text-black border-2 border-[#050505]">
                  {cartCount}
                </span>
              )}
            </motion.button>

            {/* Contact Button */}
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="relative overflow-hidden rounded-full px-8 py-6 text-base font-semibold bg-[#CCFF00] hover:bg-[#b3e600] text-black group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact us
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-white">
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- CART DRAWER OVERLAY --- */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#0A0A0A] border-l border-white/10 z-[70] shadow-2xl flex flex-col"
            >
              {/* Cart Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#121212]">
                <h2 className="text-xl font-oswald uppercase font-bold text-white flex items-center gap-2">
                  Your Cart <span className="text-[#CCFF00]">({cartCount})</span>
                </h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
                    <ShoppingCart size={48} className="mb-4 opacity-20" />
                    <p>Your cart is empty.</p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <motion.div 
                      key={item.id} 
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex gap-4 p-4 rounded-2xl bg-[#121212] border border-white/5"
                    >
                      {/* Product Image */}
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-800 shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>

                      {/* Info */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="text-white font-medium text-sm md:text-base leading-tight pr-2">{item.name}</h3>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-gray-500 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="text-gray-500 text-xs mt-1">{item.category}</p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-[#CCFF00] font-bold font-mono">${item.price}</span>
                          <div className="flex items-center gap-3 bg-black rounded-full px-2 py-1 border border-white/10">
                            <button className="text-gray-400 hover:text-white"><Minus size={12} /></button>
                            <span className="text-white text-xs">{item.quantity}</span>
                            <button className="text-gray-400 hover:text-white"><Plus size={12} /></button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Cart Footer */}
              <div className="p-6 border-t border-white/10 bg-[#121212] space-y-4">
                <div className="flex justify-between items-center text-gray-400 text-sm">
                  <span>Subtotal</span>
                  <span className="text-white font-mono">${subtotal}</span>
                </div>
                <div className="flex justify-between items-center text-gray-400 text-sm">
                  <span>Taxes (10%)</span>
                  <span className="text-white font-mono">${(subtotal * 0.1).toFixed(2)}</span>
                </div>
                <div className="h-px bg-white/10 my-2" />
                <div className="flex justify-between items-center text-xl font-bold text-white mb-4">
                  <span>Total</span>
                  <span className="text-[#CCFF00] font-mono">${(subtotal * 1.1).toFixed(2)}</span>
                </div>
                
                <Button className="w-full rounded-full bg-[#CCFF00] text-black font-bold py-6 text-lg hover:bg-[#b3e600] transition-all">
                  Checkout Now
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- Mobile Fullscreen Menu (Existing) --- */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#050505] pt-24 px-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`text-3xl font-bold ${link.active ? "text-[#CCFF00]" : "text-white"}`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <div className="h-px w-full bg-white/10 my-4" />
            <Button className="w-full rounded-full bg-[#CCFF00] text-black font-bold py-6 text-lg">
              Get in Touch
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}