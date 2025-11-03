'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Chrome,
  Facebook,
  Apple,
  Sparkles,
  ShoppingBag,
  User,
  UserPlus,
  Check,
} from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';
import { useCreateCustomer } from '@/app/api/apiClient';
import { toast } from 'sonner';


const SignUpPage = () => {
  const theme = useTheme();
  const createCustomer = useCreateCustomer();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await createCustomer(formData);
      console.log('Sign up submitted:', response);

      // Show success toast
      toast.success('Account created successfully!');

      // Clear form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
      setAcceptTerms(false);
    } catch (error: any) {
      // Show error toast
      const errorMessage = error?.response?.data?.message || error?.message || 'Failed to create account. Please try again.';
      toast.error(errorMessage);
      console.error('Sign up error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLogins = [
    {
      name: 'Google',
      icon: Chrome,
      color: 'hover:bg-red-50 border-red-200 hover:border-red-300',
      textColor: 'text-red-600',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'hover:bg-blue-50 border-blue-200 hover:border-blue-300',
      textColor: 'text-blue-600',
    },
    {
      name: 'Apple',
      icon: Apple,
      color: 'hover:bg-gray-50 border-gray-300 hover:border-gray-400',
      textColor: 'text-gray-900',
    },
  ];

  const benefits = [
    'Exclusive member-only discounts',
    'Early access to new collections',
    'Free shipping on all orders',
    'Personalized style recommendations',
  ];

  return (
    <div className="min-h-screen flex">
      {/* Right Side - Visual (Now on Left for contrast with Login) */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className={`hidden lg:flex lg:flex-1 ${theme.gradient.via} relative overflow-hidden`}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          {/* Floating Shoe - Different Position than Login */}
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -10, 0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-1/4 left-1/4"
          >
            <img
              src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=300&fit=crop"
              alt="Shoe"
              className="w-80 h-80 object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Animated Circles */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.5,
            }}
            className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/20 rounded-full blur-2xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-md"
          >
            <UserPlus className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-black mb-4">
              Join The Stepper Family
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Create your account and unlock exclusive benefits designed just for you.
            </p>
            
            {/* Benefits List */}
            <div className="space-y-4 text-left">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Left Side - Form (Now on Right, opposite of Login) */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2 mb-8">
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

          {/* Header */}
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-black text-gray-900 mb-2"
            >
              Create Account
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600"
            >
              Start your journey with premium footwear
            </motion.p>
          </div>

          {/* Social Signup Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-3 mb-8"
          >
            {socialLogins.map((social, index) => (
              <motion.button
                key={social.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center p-3.5 bg-white border-2 ${social.color} rounded-xl transition-all shadow-sm hover:shadow-md`}
                title={social.name}
              >
                <social.icon className={`w-5 h-5 ${social.textColor}`} />
              </motion.button>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-medium">
                Or sign up with email
              </span>
            </div>
          </motion.div>

          {/* Signup Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Name Fields - Side by Side */}
            <div className="grid grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                    className={`w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 ${theme.focus.ring} ${theme.focus.border} transition-all text-sm text-gray-900`}
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                    className={`w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 ${theme.focus.ring} ${theme.focus.border} transition-all text-sm text-gray-900`}
                  />
                </div>
              </div>
            </div>

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
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className={`w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 ${theme.focus.ring} ${theme.focus.border} transition-all text-gray-900`}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  required
                  className={`w-full pl-12 pr-12 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 ${theme.focus.ring} ${theme.focus.border} transition-all text-gray-900`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Must be at least 8 characters with letters and numbers
              </p>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  required
                  className={`w-4 h-4 ${theme.text[600]} border-gray-300 rounded focus:ring-2 ${theme.focus.ring}`}
                />
              </div>
              <label
                htmlFor="terms"
                className="ml-2 text-sm text-gray-700"
              >
                I agree to the{' '}
                <Link href="/terms" className={`font-semibold ${theme.text[600]} ${theme.hover.text500}`}>
                  Terms & Conditions
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className={`font-semibold ${theme.text[600]} ${theme.hover.text500}`}>
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading || !acceptTerms}
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
                  Creating account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Login Link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center text-gray-600"
          >
            Already have an account?{' '}
            <Link
              href="/login"
              className={`font-bold ${theme.text[600]} ${theme.hover.text500} transition-colors`}
            >
              Sign in
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUpPage;
