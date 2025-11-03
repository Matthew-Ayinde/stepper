'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  ArrowRight,
  ArrowLeft,
  ShoppingBag,
  Shield,
  KeyRound,
  CheckCircle2,
} from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';

const ForgotPassword = () => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const handleResend = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex relative overflow-hidden bg-linear-to-br from-gray-50 via-white to-gray-50">
      {/* Left Decorative Panel */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex flex-1 relative"
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-100/50 to-transparent">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className={`absolute top-1/3 left-1/3 w-96 h-96 ${theme.bg[100]} opacity-30 rounded-full blur-3xl`}
          />
        </div>

        {/* Floating Icon */}
        <div className="relative z-10 flex items-center justify-center w-full">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative"
          >
            <div className={`w-32 h-32 ${theme.gradient.br} rounded-3xl flex items-center justify-center shadow-2xl ${theme.shadow[500]}`}>
              <KeyRound className="w-16 h-16 text-white" />
            </div>
            {/* Glow Effect */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className={`absolute inset-0 ${theme.gradient.br} rounded-3xl blur-2xl`}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Center Form Section */}
      <div className="flex-1 flex items-center justify-center p-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center justify-center gap-2 mb-8">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className={`w-12 h-12 ${theme.gradient.br} rounded-xl flex items-center justify-center shadow-lg ${theme.shadow[500]}`}>
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
            </motion.div>
            <span className={`text-2xl font-black ${theme.gradient.text}`}>
              STEPPER
            </span>
          </Link>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`w-16 h-16 mx-auto mb-4 ${theme.gradient.primary} rounded-2xl flex items-center justify-center shadow-lg ${theme.shadow[500]}`}
                  >
                    <KeyRound className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl font-black text-gray-900 mb-2"
                  >
                    Forgot Password?
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600"
                  >
                    No worries! Enter your email and we'll send you reset instructions.
                  </motion.p>
                </div>

                {/* Reset Form */}
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                        className={`w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 ${theme.focus.ring} ${theme.focus.border} transition-all`}
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
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Reset Link
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </motion.form>

                {/* Back to Login */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-6 text-center"
                >
                  <Link
                    href="/login"
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${theme.text[600]} ${theme.hover.text500} transition-colors`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Login
                  </Link>
                </motion.div>
              </>
            ) : (
              // Success State
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-4"
              >
                {/* Success Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className={`w-20 h-20 mx-auto mb-6 ${theme.gradient.primary} rounded-full flex items-center justify-center shadow-xl ${theme.shadow[500]}`}
                >
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-black text-gray-900 mb-3"
                >
                  Check Your Email!
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 mb-2"
                >
                  We've sent password reset instructions to:
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className={`font-bold ${theme.text[600]} mb-6`}
                >
                  {email}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gray-50 rounded-xl p-4 mb-6"
                >
                  <div className="flex items-start gap-3 text-left">
                    <Shield className={`w-5 h-5 ${theme.text[600]} shrink-0 mt-0.5`} />
                    <div className="text-sm text-gray-600">
                      <p className="font-semibold mb-1">Security Notice</p>
                      <p>The link will expire in 30 minutes. If you didn't request this, please ignore this email.</p>
                    </div>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-3"
                >
                  <Link
                    href="/login"
                    className={`block w-full px-6 py-3.5 ${theme.gradient.primary} text-white rounded-xl font-bold shadow-lg ${theme.shadow[500]} ${theme.hover.shadow} transition-all text-center`}
                  >
                    Back to Login
                  </Link>

                  <button
                    onClick={handleResend}
                    disabled={isLoading}
                    className={`w-full px-6 py-3.5 bg-white border-2 border-gray-300 hover:border-gray-400 rounded-xl font-semibold ${theme.text[600]} hover:bg-gray-50 transition-all disabled:opacity-50`}
                  >
                    {isLoading ? 'Sending...' : 'Resend Email'}
                  </button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>

          {/* Help Text */}
          {!isSubmitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 text-center text-sm text-gray-500"
            >
              Need help?{' '}
              <Link
                href="/contact"
                className={`font-semibold ${theme.text[600]} ${theme.hover.text500} transition-colors`}
              >
                Contact Support
              </Link>
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Right Decorative Panel */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex flex-1 relative"
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-bl from-gray-100/50 to-transparent">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className={`absolute top-1/2 right-1/3 w-96 h-96 ${theme.bg[100]} opacity-30 rounded-full blur-3xl`}
          />
        </div>

        {/* Floating Icon */}
        <div className="relative z-10 flex items-center justify-center w-full">
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="relative"
          >
            <div className={`w-32 h-32 ${theme.gradient.br} rounded-3xl flex items-center justify-center shadow-2xl ${theme.shadow[500]}`}>
              <Shield className="w-16 h-16 text-white" />
            </div>
            {/* Glow Effect */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className={`absolute inset-0 ${theme.gradient.br} rounded-3xl blur-2xl`}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-20 -right-20 w-40 h-40 border-2 border-gray-200/50 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-20 -left-20 w-40 h-40 border-2 border-gray-200/50 rounded-full"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
