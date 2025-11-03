'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';

const BrandSection = () => {
  const theme = useTheme();
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);

  const brands = [
    {
      id: 1,
      name: 'Nike',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
      productCount: 250,
      link: '/brands/nike',
      featured: true,
    },
    {
      id: 2,
      name: 'Adidas',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
      productCount: 220,
      link: '/brands/adidas',
      featured: true,
    },
    {
      id: 3,
      name: 'Puma',
      logo: 'https://upload.wikimedia.org/wikipedia/en/d/da/Puma_complete_logo.svg',
      productCount: 180,
      link: '/brands/puma',
      featured: true,
    },
    {
      id: 4,
      name: 'New Balance',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/New_Balance_logo.svg',
      productCount: 150,
      link: '/brands/new-balance',
      featured: false,
    },
    {
      id: 5,
      name: 'Reebok',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Reebok_logo.svg',
      productCount: 130,
      link: '/brands/reebok',
      featured: false,
    },
    {
      id: 6,
      name: 'Vans',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Vans-logo.svg',
      productCount: 160,
      link: '/brands/vans',
      featured: false,
    },
    {
      id: 7,
      name: 'Converse',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Converse_logo.svg',
      productCount: 140,
      link: '/brands/converse',
      featured: false,
    },
    {
      id: 8,
      name: 'Under Armour',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Under_armour_logo.svg',
      productCount: 120,
      link: '/brands/under-armour',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
            <CheckCircle2 className={`w-6 h-6 ${theme.text[600]}`} />
            <span className={`text-sm font-bold uppercase tracking-wider ${theme.text[600]}`}>
              Trusted Partners
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Shop by Brand
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover premium footwear from the world's leading brands
          </p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12"
        >
          {brands.map((brand) => {
            const isHovered = hoveredBrand === brand.id;

            return (
              <motion.div
                key={brand.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredBrand(brand.id)}
                onMouseLeave={() => setHoveredBrand(null)}
              >
                <Link href={brand.link}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group relative bg-white rounded-2xl border-2 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Content */}
                    <div className="relative p-8 flex flex-col items-center justify-center min-h-[180px]">
                      {/* Featured Badge */}
                      {brand.featured && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: 'spring' }}
                          className="absolute top-3 right-3"
                        >
                          <div className={`px-2 py-1 ${theme.bg[100]} ${theme.text[600]} rounded-full text-xs font-bold`}>
                            Featured
                          </div>
                        </motion.div>
                      )}

                      {/* Brand Logo */}
                      <div className="relative w-full h-20 mb-4 flex items-center justify-center">
                        <motion.img
                          src={brand.logo}
                          alt={brand.name}
                          className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                          animate={{
                            scale: isHovered ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      {/* Brand Name */}
                      <h3 className="text-lg font-black text-gray-900 mb-2 text-center">
                        {brand.name}
                      </h3>

                      {/* Product Count */}
                      <p className={`text-sm font-semibold ${theme.text[600]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        {brand.productCount}+ Products
                      </p>

                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
                        <motion.div
                          initial={{ x: '-100%' }}
                          animate={{
                            x: isHovered ? 0 : '-100%',
                          }}
                          transition={{ duration: 0.4 }}
                          className={`h-full ${theme.gradient.primary}`}
                        />
                      </div>

                      {/* Arrow Icon */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          x: isHovered ? 0 : -10,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-4 right-4"
                      >
                        <div className={`p-2 ${theme.bg[100]} rounded-full`}>
                          <ArrowRight className={`w-4 h-4 ${theme.text[600]}`} />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Brands Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link href="/brands">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group inline-flex items-center gap-3 px-8 py-4 border-2 ${theme.border[500]} ${theme.text[600]} rounded-xl font-bold text-lg hover:${theme.bg[50]} transition-all shadow-lg hover:shadow-xl`}
            >
              View All Brands
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Premium Brands', value: '20+' },
            { label: 'Total Products', value: '1,500+' },
            { label: 'Happy Customers', value: '50K+' },
            { label: 'Countries', value: '30+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="text-center"
            >
              <div className={`text-4xl font-black ${theme.gradient.text} mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandSection;
