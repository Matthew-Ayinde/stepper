'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingCart,
  Search,
  Menu,
  X,
  Home,
  Grid3x3,
  Star,
  Sparkles,
  Tag,
  Mail,
  Info,
  User,
  Heart,
  Package,
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/hooks/useTheme';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [cartCount] = useState(3);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // Get dynamic theme colors
  const theme = useTheme();

  // Navigation links with icons
  const navLinks = [
    { name: 'Home', href: '/', icon: Home, id: 'home' },
    { name: 'Categories', href: '/categories', icon: Grid3x3, id: 'categories' },
    { name: 'Featured', href: '/featured', icon: Star, id: 'featured' },
    { name: 'New Arrivals', href: '/new-arrivals', icon: Sparkles, id: 'new' },
    { name: 'Brands', href: '/brands', icon: Package, id: 'brands' },
    { name: 'Sale', href: '/sale', icon: Tag, id: 'sale' },
    { name: 'About', href: '/about', icon: Info, id: 'about' },
    { name: 'Contact', href: '/contact', icon: Mail, id: 'contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? `bg-white/95 backdrop-blur-md shadow-lg ${theme.shadow[100]}`
            : 'bg-white'
        }`}
      >
        {/* Top Bar - Promo Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`${theme.gradient.via} text-white text-center py-2 px-4 text-sm font-medium`}
        >
          <motion.p
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Free Shipping on Orders Over $50 | New Arrivals Daily
            <Sparkles className="w-4 h-4" />
          </motion.p>
        </motion.div>

        {/* Main Navbar */}
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className={`w-12 h-12 ${theme.gradient.br} rounded-xl flex items-center justify-center shadow-lg ${theme.shadow[500]}`}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-7 h-7 text-white"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                    <circle cx="8" cy="9" r="1.5" fill="white" />
                    <circle cx="16" cy="15" r="1.5" fill="white" />
                  </svg>
                </div>
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </motion.div>
              <div className="flex flex-col">
                <span className={`text-2xl font-black ${theme.gradient.text}`}>
                  STEPPER
                </span>
                <span className="text-[10px] text-gray-500 -mt-1 tracking-widest font-semibold">
                  PREMIUM FOOTWEAR
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setActiveLink(link.id)}
                  className="relative group px-3 py-2"
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-1.5"
                  >
                    <link.icon className={`w-4 h-4 ${theme.text[600]} ${theme.hover.text500} transition-colors`} />
                    <span className={`text-sm font-semibold text-gray-700 ${theme.hover.text600} transition-colors`}>
                      {link.name}
                    </span>
                  </motion.div>
                  {activeLink === link.id && (
                    <motion.div
                      layoutId="activeLink"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${theme.gradient.primary}`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${theme.gradient.primary} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}
                  />
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Search Bar */}
              <div className="hidden md:flex items-center">
                <AnimatePresence>
                  {isSearchOpen ? (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 200, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      className="relative"
                    >
                      <input
                        type="text"
                        placeholder="Search shoes..."
                        className={`w-full pl-4 pr-10 py-2 border-2 ${theme.border[500]} rounded-full text-sm focus:outline-none focus:ring-2 ${theme.focus.ring}`}
                        autoFocus
                      />
                      <button
                        onClick={() => setIsSearchOpen(false)}
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                      >
                        <X className="w-4 h-4 text-gray-400" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsSearchOpen(true)}
                      className={`p-2.5 rounded-full ${theme.bg[50]} ${theme.text[600]} ${theme.hover.bg100} transition-colors`}
                    >
                      <Search className="w-5 h-5" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              {/* Wishlist */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`hidden md:block p-2.5 rounded-full ${theme.bg[50]} ${theme.text[600]} ${theme.hover.bg100} transition-colors relative`}
              >
                <Heart className="w-5 h-5" />
              </motion.button>

              {/* Account */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`hidden md:block p-2.5 rounded-full ${theme.bg[50]} ${theme.text[600]} ${theme.hover.bg100} transition-colors`}
              >
                <User className="w-5 h-5" />
              </motion.button>

              {/* Cart */}
              <Link href="/cart">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2.5 ${theme.gradient.primary} text-white rounded-full font-semibold shadow-lg ${theme.shadow[500]} ${theme.hover.shadow} transition-all flex items-center gap-2`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span className="hidden sm:inline text-sm">Cart</span>
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`absolute -top-1 -right-1 w-6 h-6 bg-white ${theme.text[600]} rounded-full text-xs font-bold flex items-center justify-center shadow-md`}
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </motion.button>
              </Link>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-lg ${theme.bg[50]} ${theme.text[600]}`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                {/* Mobile Search */}
                <div className="mb-4 md:hidden">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search shoes..."
                      className={`w-full pl-10 pr-4 py-2.5 border-2 ${theme.border[100]} rounded-full text-sm focus:outline-none ${theme.focus.border}`}
                    />
                  </div>
                </div>

                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => {
                        setActiveLink(link.id);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        activeLink === link.id
                          ? `${theme.gradient.primary} text-white shadow-lg ${theme.shadow[500]}`
                          : `text-gray-700 ${theme.hover.bg50}`
                      }`}
                    >
                      <link.icon className="w-5 h-5" />
                      <span className="font-semibold">{link.name}</span>
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Actions */}
                <div className="flex gap-2 pt-4 border-t border-gray-100 mt-4 md:hidden">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 ${theme.bg[50]} ${theme.text[600]} rounded-xl font-semibold ${theme.hover.bg100} transition-colors`}
                  >
                    <Heart className="w-5 h-5" />
                    Wishlist
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 ${theme.bg[50]} ${theme.text[600]} rounded-xl font-semibold ${theme.hover.bg100} transition-colors`}
                  >
                    <User className="w-5 h-5" />
                    Account
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-28 md:block hidden" />
      <div className="h-32 block md:hidden" />
    </>
  );
};

export default Navbar;
