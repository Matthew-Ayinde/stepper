'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, Heart, TrendingUp, Flame } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';

const TrendingSection = () => {
  const theme = useTheme();
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const trendingProducts = [
    {
      id: 1,
      name: 'Air Max Velocity',
      brand: 'Nike',
      price: 189.99,
      originalPrice: 249.99,
      images: [
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
      ],
      colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'],
      badge: 'Hot',
      isNew: false,
    },
    {
      id: 2,
      name: 'Urban Street Runner',
      brand: 'Adidas',
      price: 159.99,
      originalPrice: null,
      images: [
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop',
      ],
      colors: ['#2C3E50', '#ECF0F1', '#E74C3C'],
      badge: 'New',
      isNew: true,
    },
    {
      id: 3,
      name: 'Classic Leather Low',
      brand: 'Puma',
      price: 129.99,
      originalPrice: 159.99,
      images: [
        'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop',
      ],
      colors: ['#FFFFFF', '#000000', '#3498DB'],
      badge: 'Hot',
      isNew: false,
    },
    {
      id: 4,
      name: 'Speed Racer Pro',
      brand: 'New Balance',
      price: 199.99,
      originalPrice: null,
      images: [
        'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=400&h=400&fit=crop',
      ],
      colors: ['#9B59B6', '#F39C12', '#16A085'],
      badge: 'New',
      isNew: true,
    },
    {
      id: 5,
      name: 'Comfort Cloud Elite',
      brand: 'Reebok',
      price: 139.99,
      originalPrice: 179.99,
      images: [
        'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1614252368099-9418c8ae2d10?w=400&h=400&fit=crop',
      ],
      colors: ['#34495E', '#95A5A6', '#E67E22'],
      badge: 'Hot',
      isNew: false,
    },
    {
      id: 6,
      name: 'Retro Wave 2024',
      brand: 'Vans',
      price: 89.99,
      originalPrice: null,
      images: [
        'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop',
      ],
      colors: ['#E74C3C', '#3498DB', '#F1C40F', '#2ECC71'],
      badge: 'New',
      isNew: true,
    },
  ];

  const calculateDiscount = (price: number, originalPrice: number | null) => {
    if (!originalPrice) return null;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 ${theme.bg[100]} rounded-lg`}>
                <TrendingUp className={`w-6 h-6 ${theme.text[600]}`} />
              </div>
              <span className={`text-sm font-bold uppercase tracking-wider ${theme.text[600]}`}>
                Latest Drops
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">
              Trending Now
            </h2>
            <p className="text-gray-600">
              Don't miss out on the hottest releases
            </p>
          </motion.div>

          {/* View All Button - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <Link href="/new-arrivals">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group flex items-center gap-2 px-6 py-3 border-2 ${theme.border[500]} ${theme.text[600]} rounded-xl font-bold hover:${theme.bg[50]} transition-all`}
              >
                View All
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scrollable Product Carousel */}
        <div className="relative">
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-6"
              style={{ minWidth: 'min-content' }}
            >
              {trendingProducts.map((product, index) => {
                const discount = calculateDiscount(product.price, product.originalPrice);
                const isHovered = hoveredProduct === product.id;

                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-shrink-0 w-[280px] sm:w-[320px]"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                      {/* Image Section */}
                      <div className="relative h-[280px] sm:h-[320px] bg-gray-100 overflow-hidden">
                        {/* Product Image */}
                        <motion.img
                          src={isHovered ? product.images[1] : product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          animate={{ scale: isHovered ? 1.1 : 1 }}
                          transition={{ duration: 0.4 }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Badge */}
                        <div className="absolute top-4 left-4">
                          {product.isNew ? (
                            <div className={`flex items-center gap-1.5 px-3 py-1.5 ${theme.gradient.primary} rounded-full text-white text-xs font-bold shadow-lg`}>
                              <TrendingUp className="w-3.5 h-3.5" />
                              {product.badge}
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-red-500 rounded-full text-white text-xs font-bold shadow-lg">
                              <Flame className="w-3.5 h-3.5" />
                              {product.badge}
                            </div>
                          )}
                        </div>

                        {/* Discount Badge */}
                        {discount && (
                          <div className="absolute top-4 right-4">
                            <div className="px-2.5 py-1 bg-green-500 rounded-full text-white text-xs font-bold shadow-lg">
                              -{discount}%
                            </div>
                          </div>
                        )}

                        {/* Wishlist Button */}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute bottom-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                        >
                          <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" />
                        </motion.button>

                        {/* Quick Add to Cart - Appears on Hover */}
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{
                            y: isHovered ? 0 : 20,
                            opacity: isHovered ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-4 left-4 right-4"
                        >
                          <button
                            className={`w-full flex items-center justify-center gap-2 px-4 py-3 ${theme.gradient.primary} text-white rounded-xl font-bold shadow-xl ${theme.hover.shadow} transition-all`}
                          >
                            <ShoppingCart className="w-4 h-4" />
                            Add to Cart
                          </button>
                        </motion.div>
                      </div>

                      {/* Product Info */}
                      <div className="p-5">
                        {/* Brand */}
                        <p className={`text-sm font-semibold ${theme.text[600]} mb-1`}>
                          {product.brand}
                        </p>

                        {/* Product Name */}
                        <h3 className="text-lg font-black text-gray-900 mb-3 line-clamp-1">
                          {product.name}
                        </h3>

                        {/* Price */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-2xl font-black text-gray-900">
                            ${product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>

                        {/* Color Options */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 font-semibold mr-1">
                            Colors:
                          </span>
                          <div className="flex gap-1.5">
                            {product.colors.map((color, i) => (
                              <motion.button
                                key={i}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-5 h-5 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-all shadow-sm"
                                style={{ backgroundColor: color }}
                                title={`Color ${i + 1}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all ${
                  i === 0 ? `w-8 ${theme.bg[500]}` : 'w-1 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Button - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:hidden text-center mt-8"
        >
          <Link href="/new-arrivals">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full flex items-center justify-center gap-2 px-6 py-4 border-2 ${theme.border[500]} ${theme.text[600]} rounded-xl font-bold hover:${theme.bg[50]} transition-all`}
            >
              View All New Arrivals
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TrendingSection;
