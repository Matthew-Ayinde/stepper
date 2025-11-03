'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Gift, Zap, Bell, Shield, Check } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const NewsletterSection = () => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  const benefits = [
    {
      icon: Gift,
      title: '10% Off First Order',
      description: 'Instant discount on your first purchase',
    },
    {
      icon: Zap,
      title: 'Exclusive Deals',
      description: 'Members-only sales and promotions',
    },
    {
      icon: Bell,
      title: 'Early Access',
      description: 'Be first to shop new arrivals',
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Background */}
      <div className={`absolute inset-0 ${theme.gradient.primary}`} />
      
      {/* Background Pattern/Image */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&h=600&fit=crop')] bg-cover bg-center mix-blend-overlay" />
      </div>

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
          delay: 2,
        }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6"
            >
              <Mail className="w-4 h-4" />
              Join Our Community
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight"
            >
              Get 10% Off
              <br />
              Your First Order
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-white/90 mb-8 max-w-lg"
            >
              Join thousands of sneaker enthusiasts and never miss out on exclusive deals, new releases, and insider perks.
            </motion.p>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-4 mb-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-white/80 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Privacy Assurance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-2 text-white/80 text-sm"
            >
              <Shield className="w-4 h-4" />
              <span className="font-semibold">We respect your inbox. Unsubscribe anytime.</span>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
              {!isSubmitted ? (
                <>
                  {/* Form Header */}
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                      className={`w-16 h-16 mx-auto mb-4 ${theme.gradient.primary} rounded-2xl flex items-center justify-center shadow-lg ${theme.shadow[500]}`}
                    >
                      <Mail className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">
                      Subscribe & Save
                    </h3>
                    <p className="text-gray-600">
                      Enter your email to unlock your discount
                    </p>
                  </div>

                  {/* Email Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="newsletter-email"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          id="newsletter-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          required
                          className={`w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 ${theme.focus.ring} ${theme.focus.border} transition-all text-gray-900 placeholder:text-gray-400`}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group w-full flex items-center justify-center gap-2 px-6 py-4 ${theme.gradient.primary} text-white rounded-xl font-bold text-lg shadow-lg ${theme.shadow[500]} ${theme.hover.shadow} transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {isLoading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Get My 10% Discount
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </form>

                  {/* Terms */}
                  <p className="text-xs text-gray-500 text-center mt-6">
                    By subscribing, you agree to our{' '}
                    <a href="/privacy" className={`${theme.text[600]} hover:underline font-semibold`}>
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="/terms" className={`${theme.text[600]} hover:underline font-semibold`}>
                      Terms of Service
                    </a>
                  </p>
                </>
              ) : (
                // Success State
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-8"
                >
                  {/* Success Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className={`w-20 h-20 mx-auto mb-6 ${theme.gradient.primary} rounded-full flex items-center justify-center shadow-xl ${theme.shadow[500]}`}
                  >
                    <Check className="w-10 h-10 text-white" />
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-black text-gray-900 mb-3"
                  >
                    You're In! 🎉
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 mb-6"
                  >
                    Check your inbox for your exclusive 10% discount code!
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className={`p-4 ${theme.bg[50]} rounded-xl`}
                  >
                    <p className={`text-sm font-bold ${theme.text[600]} mb-1`}>
                      What's Next?
                    </p>
                    <p className="text-sm text-gray-600">
                      We've sent you a welcome email with your discount code and exclusive perks.
                    </p>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Subscribe another email
                  </motion.button>
                </motion.div>
              )}
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-6 -right-6 hidden lg:block"
            >
              <div className="bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-2">
                  <Gift className={`w-6 h-6 ${theme.text[600]}`} />
                  <div className="text-left">
                    <div className="text-xs text-gray-500 font-semibold">Save</div>
                    <div className="text-2xl font-black text-gray-900">10%</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 hidden lg:block"
            >
              <div className="bg-white rounded-2xl px-4 py-3 shadow-2xl">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-black text-gray-900">Instant Access</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
