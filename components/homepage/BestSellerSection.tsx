'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ShoppingCart,
  Heart,
  Star,
  Eye,
  X,
  Award,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice: number | null;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  colors: string[];
  stock: number | null;
  description: string;
  features: string[];
}

const BestSellerSection = () => {
  const theme = useTheme();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const bestSellers: Product[] = [
    {
      id: 1,
      name: 'CloudWalk Pro Elite',
      brand: 'Nike',
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.9,
      reviews: 2847,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
      ],
      colors: ['#000000', '#FFFFFF', '#FF6B6B', '#4ECDC4'],
      stock: 12,
      description: 'Experience ultimate comfort with our revolutionary CloudWalk technology. Perfect for all-day wear.',
      features: ['CloudWalk cushioning', 'Breathable mesh', 'Anti-slip sole', 'Lightweight design'],
    },
    {
      id: 2,
      name: 'Street Runner Max',
      brand: 'Adidas',
      price: 179.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 1923,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&h=600&fit=crop',
      ],
      colors: ['#2C3E50', '#E74C3C', '#3498DB'],
      stock: null,
      description: 'Urban style meets performance. Designed for the modern street athlete.',
      features: ['Boost technology', 'Premium leather', 'Reinforced heel', 'Flex grooves'],
    },
    {
      id: 3,
      name: 'Velocity Sport X',
      brand: 'Puma',
      price: 159.99,
      originalPrice: 189.99,
      rating: 4.7,
      reviews: 1654,
      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop',
      ],
      colors: ['#FFFFFF', '#000000', '#F39C12'],
      stock: 8,
      description: 'Engineered for speed and agility. Unleash your athletic potential.',
      features: ['Speed sole', 'Aerodynamic design', 'Memory foam', 'Quick lace system'],
    },
    {
      id: 4,
      name: 'Comfort Stride 360',
      brand: 'New Balance',
      price: 169.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 3214,
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=600&h=600&fit=crop',
      ],
      colors: ['#95A5A6', '#34495E', '#16A085', '#E67E22'],
      stock: 5,
      description: 'All-day comfort meets timeless style. Your feet will thank you.',
      features: ['360° comfort', 'Orthopedic support', 'Moisture-wicking', 'Durable outsole'],
    },
    {
      id: 5,
      name: 'TrailBlazer Summit',
      brand: 'Reebok',
      price: 189.99,
      originalPrice: 229.99,
      rating: 4.6,
      reviews: 987,
      image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1614252368099-9418c8ae2d10?w=600&h=600&fit=crop',
      ],
      colors: ['#8B4513', '#2C3E50', '#27AE60'],
      stock: null,
      description: 'Conquer any terrain with confidence. Built for adventure seekers.',
      features: ['All-terrain grip', 'Waterproof', 'Ankle support', 'Rock plate protection'],
    },
    {
      id: 6,
      name: 'Classic Heritage Low',
      brand: 'Vans',
      price: 89.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 4521,
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=600&fit=crop',
      ],
      colors: ['#000000', '#FFFFFF', '#E74C3C', '#3498DB', '#F1C40F'],
      stock: 15,
      description: 'Timeless design that never goes out of style. A wardrobe essential.',
      features: ['Canvas upper', 'Vulcanized sole', 'Padded collar', 'Iconic stripe'],
    },
  ];

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? `fill-yellow-400 text-yellow-400`
                : i < rating
                ? `fill-yellow-400 text-yellow-400 opacity-50`
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const calculateDiscount = (price: number, originalPrice: number | null) => {
    if (!originalPrice) return null;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white">
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
            <div className={`p-2 ${theme.bg[100]} rounded-lg`}>
              <Award className={`w-6 h-6 ${theme.text[600]}`} />
            </div>
            <span className={`text-sm font-bold uppercase tracking-wider ${theme.text[600]}`}>
              Customer Favorites
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Best Sellers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who chose these top-rated favorites
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {bestSellers.map((product, index) => {
            const discount = calculateDiscount(product.price, product.originalPrice);
            const isInWishlist = wishlist.includes(product.id);
            const isLowStock = product.stock !== null && product.stock <= 10;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative h-80 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Bestseller Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 ${theme.gradient.primary} rounded-full text-white text-xs font-bold shadow-lg`}>
                      <Award className="w-3.5 h-3.5" />
                      Bestseller
                    </div>
                  </div>

                  {/* Discount Badge */}
                  {discount && (
                    <div className="absolute top-4 right-4">
                      <div className="px-2.5 py-1 bg-green-500 rounded-full text-white text-xs font-bold shadow-lg">
                        -{discount}%
                      </div>
                    </div>
                  )}

                  {/* Low Stock Indicator */}
                  {isLowStock && (
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500 rounded-full text-white text-xs font-bold shadow-lg">
                        <Zap className="w-3.5 h-3.5" />
                        Only {product.stock} left!
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Quick View */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedProduct(product)}
                      className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all"
                      title="Quick View"
                    >
                      <Eye className="w-5 h-5 text-gray-700" />
                    </motion.button>

                    {/* Wishlist */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleWishlist(product.id)}
                      className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all"
                      title={isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    >
                      <Heart
                        className={`w-5 h-5 transition-colors ${
                          isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-700'
                        }`}
                      />
                    </motion.button>
                  </div>

                  {/* Add to Cart Button - Appears on Hover */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                <div className="p-6">
                  {/* Brand */}
                  <p className={`text-sm font-semibold ${theme.text[600]} mb-1`}>
                    {product.brand}
                  </p>

                  {/* Product Name */}
                  <h3 className="text-xl font-black text-gray-900 mb-3 line-clamp-1">
                    {product.name}
                  </h3>

                  {/* Rating & Reviews */}
                  <div className="flex items-center gap-2 mb-4">
                    {renderStars(product.rating)}
                    <span className="text-sm font-bold text-gray-900">
                      {product.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({product.reviews.toLocaleString()} reviews)
                    </span>
                  </div>

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
                    <span className="text-xs text-gray-500 font-semibold">
                      Colors:
                    </span>
                    <div className="flex gap-1.5">
                      {product.colors.slice(0, 4).map((color, i) => (
                        <motion.button
                          key={i}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-5 h-5 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-all shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                      {product.colors.length > 4 && (
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-200 text-xs font-bold text-gray-600">
                          +{product.colors.length - 4}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/best-sellers">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group inline-flex items-center gap-3 px-8 py-4 ${theme.gradient.primary} text-white rounded-xl font-bold text-lg shadow-lg ${theme.shadow[500]} ${theme.hover.shadow} transition-all`}
            >
              View All Best Sellers
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Images */}
                <div className="space-y-4">
                  <div className="relative h-96 bg-gray-100 rounded-xl overflow-hidden">
                    <img
                      src={selectedProduct.images[0]}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedProduct.images.slice(1).map((img, i) => (
                      <div key={i} className="h-32 bg-gray-100 rounded-lg overflow-hidden">
                        <img src={img} alt={`${selectedProduct.name} ${i + 2}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${theme.gradient.primary} rounded-full text-white text-xs font-bold mb-4 self-start`}>
                    <Award className="w-3.5 h-3.5" />
                    Bestseller
                  </div>

                  <p className={`text-sm font-semibold ${theme.text[600]} mb-2`}>
                    {selectedProduct.brand}
                  </p>

                  <h2 className="text-3xl font-black text-gray-900 mb-4">
                    {selectedProduct.name}
                  </h2>

                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-6">
                    {renderStars(selectedProduct.rating)}
                    <span className="text-lg font-bold">{selectedProduct.rating}</span>
                    <span className="text-gray-500">
                      ({selectedProduct.reviews.toLocaleString()} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl font-black text-gray-900">
                      ${selectedProduct.price}
                    </span>
                    {selectedProduct.originalPrice && (
                      <span className="text-xl text-gray-400 line-through">
                        ${selectedProduct.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">{selectedProduct.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600">
                          <TrendingUp className={`w-4 h-4 ${theme.text[600]}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Colors */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Available Colors:</h4>
                    <div className="flex gap-2">
                      {selectedProduct.colors.map((color, i) => (
                        <button
                          key={i}
                          className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-gray-500 transition-all shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Stock */}
                  {selectedProduct.stock && selectedProduct.stock <= 10 && (
                    <div className="flex items-center gap-2 mb-6 text-red-600 font-semibold">
                      <Zap className="w-5 h-5" />
                      Only {selectedProduct.stock} left in stock!
                    </div>
                  )}

                  {/* Actions */}
                  <div className="mt-auto space-y-3">
                    <button
                      className={`w-full flex items-center justify-center gap-2 px-6 py-4 ${theme.gradient.primary} text-white rounded-xl font-bold text-lg shadow-lg ${theme.hover.shadow} transition-all`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 px-6 py-4 border-2 border-gray-300 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all">
                      <Heart className="w-5 h-5" />
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BestSellerSection;
