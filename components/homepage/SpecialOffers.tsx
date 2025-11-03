'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Copy, Check, Zap, Tag, Clock } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';

const SpecialOffers = () => {
  const theme = useTheme();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [copied, setCopied] = useState(false);

  // Countdown timer - Set to 3 days from now
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const endDate = new Date(now + 3 * 24 * 60 * 60 * 1000).getTime(); // 3 days from now
      const difference = endDate - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('SHOE20');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Promotional Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl shadow-2xl"
        >
          {/* Split Design - Image + Content */}
          <div className="grid lg:grid-cols-2 min-h-[500px]">
            {/* Left Side - Promotional Content */}
            <div className={`relative ${theme.gradient.primary} p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-white overflow-hidden`}>
              {/* Animated Background Elements */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6"
                >
                  <Zap className="w-4 h-4" />
                  Limited Time Offer
                </motion.div>

                {/* Main Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight"
                >
                  Flash Sale!
                  <br />
                  20% Off Everything
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-lg sm:text-xl text-white/90 mb-8 max-w-md"
                >
                  Don't miss out! Save big on all your favorite styles. Limited stock available.
                </motion.p>

                {/* Countdown Timer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase tracking-wider">
                      Offer Ends In
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-3 sm:gap-4">
                    {timeUnits.map((unit, index) => (
                      <motion.div
                        key={unit.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="bg-white/20 backdrop-blur-md rounded-xl p-3 sm:p-4 text-center"
                      >
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1">
                          {unit.value.toString().padStart(2, '0')}
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-white/80">
                          {unit.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Coupon Code */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-5 h-5" />
                    <span className="text-sm font-bold">Use Promo Code</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-white/20 backdrop-blur-md rounded-xl px-6 py-4 border-2 border-white/30">
                      <span className="text-2xl font-black tracking-wider">SHOE20</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={copyToClipboard}
                      className="p-4 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl border-2 border-white/30 transition-all"
                      title="Copy code"
                    >
                      {copied ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        <Copy className="w-6 h-6" />
                      )}
                    </motion.button>
                  </div>
                  {copied && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm font-semibold mt-2"
                    >
                      ✓ Code copied to clipboard!
                    </motion.p>
                  )}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                >
                  <Link href="/sale">
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
                    >
                      Shop Sale Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Right Side - Product Image */}
            <div className="relative hidden lg:block overflow-hidden">
              {/* Background Image */}
              <motion.img
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop"
                alt="Sale shoes"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 ${theme.gradient.primary} opacity-20`} />

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-1/4 right-1/4"
              >
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                  <div className="text-5xl font-black text-gray-900 mb-1">20%</div>
                  <div className="text-sm font-bold text-gray-600">OFF</div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute bottom-1/3 left-1/4"
              >
                <div className="bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-2xl">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-black text-gray-900">HOT DEAL</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
        </motion.div>

        {/* Additional Small Offer Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
          {[
            { title: 'Free Shipping', desc: 'On orders over $100', icon: '🚚' },
            { title: 'Easy Returns', desc: '30-day return policy', icon: '🔄' },
            { title: 'Secure Payment', desc: '100% protected checkout', icon: '🔒' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-black text-gray-900 mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffers;
