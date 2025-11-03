'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';

const FeaturedCategories = () => {
  const theme = useTheme();

  const categories = [
    {
      id: 1,
      title: "Men's Shoes",
      description: 'Bold styles for every occasion',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop',
      items: '250+ styles',
      link: '/categories/mens',
    },
    {
      id: 2,
      title: "Women's Shoes",
      description: 'Elegance meets comfort',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=400&fit=crop',
      items: '300+ styles',
      link: '/categories/womens',
    },
    {
      id: 3,
      title: "Kids' Shoes",
      description: 'Fun and durable for active kids',
      image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&h=400&fit=crop',
      items: '150+ styles',
      link: '/categories/kids',
    },
    {
      id: 4,
      title: 'Athletic & Sports',
      description: 'Performance-driven footwear',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop',
      items: '200+ styles',
      link: '/categories/athletic',
    },
    {
      id: 5,
      title: 'Casual & Lifestyle',
      description: 'Everyday comfort, everyday style',
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=400&fit=crop',
      items: '180+ styles',
      link: '/categories/casual',
    },
    {
      id: 6,
      title: 'Formal & Dress',
      description: 'Sophisticated luxury footwear',
      image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&h=400&fit=crop',
      items: '120+ styles',
      link: '/categories/formal',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50 -mt-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className={`w-6 h-6 ${theme.text[600]}`} />
            <span className={`text-sm font-bold uppercase tracking-wider ${theme.text[600]}`}>
              Shop by Category
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Featured Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of premium footwear designed for every lifestyle and occasion
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="group"
            >
              <Link href={category.link}>
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden">
                    {/* Image */}
                    <motion.img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    {/* Accent Color Overlay on Hover */}
                    <motion.div
                      className={`absolute inset-0 ${theme.gradient.primary} opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-multiply`}
                    />

                    {/* Floating Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="absolute top-4 right-4"
                    >
                      <div className={`px-3 py-1.5 ${theme.gradient.primary} rounded-full text-white text-xs font-bold shadow-lg backdrop-blur-sm`}>
                        {category.items}
                      </div>
                    </motion.div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <motion.h3
                        className="text-2xl font-black mb-2 group-hover:-translate-y-1 transition-transform duration-300"
                      >
                        {category.title}
                      </motion.h3>
                      <motion.p
                        className="text-sm text-white/90 mb-4 group-hover:-translate-y-1 transition-transform duration-300 delay-75"
                      >
                        {category.description}
                      </motion.p>
                      
                      {/* CTA Button */}
                      <motion.div
                        className="flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span>Shop Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    className={`h-1 ${theme.gradient.primary} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Categories CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/categories">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group inline-flex items-center gap-3 px-8 py-4 border-2 ${theme.border[500]} ${theme.text[600]} rounded-xl font-bold text-lg hover:${theme.bg[50]} transition-all shadow-lg hover:shadow-xl`}
            >
              View All Categories
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
