'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ShoppingBag,
  Sparkles,
  Truck,
  Shield,
  RotateCcw,
  Award,
  TrendingUp,
  Search,
  ArrowRight,
} from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';

const HeroSection = () => {
  const theme = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Hero slides data
  const heroSlides = [
    {
      id: 1,
      headline: 'Step Into Style',
      subheadline: 'Premium footwear for every occasion',
      description: 'Discover the perfect blend of comfort and fashion',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&h=800&fit=crop',
      cta: 'Shop Now',
      badge: 'New Collection',
    },
    {
      id: 2,
      headline: 'Own your look',
      subheadline: 'Elevate your every step with confidence',
      description: 'From casual to formal, find your signature style',
      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1200&h=800&fit=crop',
      cta: 'Explore Now',
      badge: 'Limited Edition',
    },
    {
      id: 3,
      headline: 'Own every step',
      subheadline: 'Where comfort meets sophistication',
      description: 'Experience luxury footwear crafted for perfection',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1200&h=800&fit=crop',
      cta: 'Shop Collection',
      badge: 'Best Sellers',
    },
  ];

  // Trust indicators
  const trustBadges = [
    { icon: Truck, text: 'Free Shipping', subtext: 'On orders over $50' },
    { icon: Shield, text: 'Secure Checkout', subtext: '100% Protected' },
    { icon: RotateCcw, text: 'Easy Returns', subtext: '30-day guarantee' },
    { icon: Award, text: 'Premium Quality', subtext: 'Certified authentic' },
  ];

  // Auto-play slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const currentHero = heroSlides[currentSlide];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-8rem)] min-h-[600px] overflow-hidden bg-linear-to-br from-gray-50 to-gray-100">
        {/* Background Image Slideshow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${currentHero.image})`,
              }}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Floating Shoe Animation */}
        <motion.div
          className="absolute right-[10%] top-1/2 -translate-y-1/2 hidden lg:block"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="relative">
            <div className={`absolute inset-0 ${theme.bg[600]} opacity-20 blur-3xl rounded-full`} />
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop"
              alt="Featured Shoe"
              className="relative w-64 h-64 object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full lg:w-2/3 md:space-y-8 space-y-6">
            {/* Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${currentSlide}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className={`inline-flex items-center md:mt-0 lg:mt-0 mt-9 gap-2 px-4 py-2 ${theme.gradient.primary} text-white rounded-full text-sm font-semibold shadow-lg`}>
                  <Sparkles className="w-4 h-4" />
                  {currentHero.badge}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Headline */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`headline-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight"
              >
                {currentHero.headline.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="inline-block mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </AnimatePresence>

            {/* Subheadline */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`subheadline-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.5 }}
                className="text-xl sm:text-2xl text-gray-200 font-medium"
              >
                {currentHero.subheadline}
              </motion.p>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`description-${currentSlide}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.6 }}
                className="text-gray-300 text-lg max-w-xl"
              >
                {currentHero.description}
              </motion.p>
            </AnimatePresence>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="max-w-2xl"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for shoes, brands, or styles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/95 backdrop-blur-sm rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white shadow-xl"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 ${theme.gradient.primary} text-white rounded-full font-semibold`}
                >
                  Search
                </motion.button>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 md:mb-0 lg:mb-0 mb-10"
            >
              <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group px-8 lg:py-4 md:py-4 py-3 ${theme.gradient.primary} text-white rounded-full font-bold text-lg shadow-2xl ${theme.shadow[500]} ${theme.hover.shadow} flex items-center gap-2`}
                >
                  <ShoppingBag className="w-5 h-5" />
                  {currentHero.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <Link href="/new-arrivals">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 lg:py-4 md:py-4 py-3 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full font-bold text-lg shadow-xl hover:bg-white transition-all flex items-center gap-2"
                >
                  <TrendingUp className="w-5 h-5" />
                  New Arrivals
                </motion.button>
              </Link>

              <Link href="/sale">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 lg:py-4 md:py-4 py-3 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Sale
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute md:bottom-8 lg:bottom-8 bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group relative"
            >
              <div
                className={`w-12 h-1.5 rounded-full transition-all ${
                  currentSlide === index
                    ? 'bg-white'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
              {currentSlide === index && (
                <motion.div
                  layoutId="activeSlide"
                  className="absolute inset-0 bg-white rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 right-8 hidden lg:block"
        >
          <div className="flex flex-col items-center gap-2 text-white">
            <span className="text-sm font-medium">Scroll</span>
            <ChevronRight className="w-5 h-5 rotate-90" />
          </div>
        </motion.div>
      </section>

      {/* Trust Indicators Bar */}
      <section className="bg-white border-t border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className={`p-3 ${theme.bg[50]} rounded-xl ${theme.hover.bg100} transition-colors`}>
                  <badge.icon className={`w-6 h-6 ${theme.text[600]}`} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {badge.text}
                  </h4>
                  <p className="text-xs text-gray-500">{badge.subtext}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default HeroSection;
