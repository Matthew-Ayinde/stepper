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
} from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import axios from 'axios';
import { socketService } from '@/services/socket';
import { subscribeToPushNotifications } from '@/utils/pushNotifications';

const LoginPage = () => {
  const theme = useTheme();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      const { token, user } = response.data.data;

      if (token && user) {
        // Save token to localStorage
        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(user));

        toast.success('Login successful!', {
          description: 'Welcome back',
        });

        // Connect Socket.IO
        socketService.connect(token);

        // Subscribe to push notifications
        subscribeToPushNotifications(token).catch((err) => {
          console.error('Failed to subscribe to push:', err);
        });

        // Redirect to homepage
        router.push('/');
      }
    } catch (error: any) {
      console.error('Login failed:', error);
      toast.error('Login failed', {
        description: error.response?.data?.message || 'Invalid email or password',
      });
    } finally {
      setIsLoading(false);
    }
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

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-black text-gray-900 mb-2"
            >
              Welcome Back!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600"
            >
              Sign in to continue your shopping journey
            </motion.p>
          </div>

          {/* Social Login Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-3 mb-8"
          >
            {socialLogins.map((social, index) => (
              <motion.button
                key={social.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-white border-2 ${social.color} rounded-xl font-semibold transition-all shadow-sm hover:shadow-md`}
              >
                <social.icon className={`w-5 h-5 ${social.textColor}`} />
                <span className="text-gray-700">Continue with {social.name}</span>
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
                Or continue with email
              </span>
            </div>
          </motion.div>

          {/* Login Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-5"
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

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className={`text-sm font-semibold ${theme.text[600]} ${theme.hover.text500} transition-colors`}
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className={`w-full pl-12 pr-12 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 ${theme.focus.ring} ${theme.focus.border} transition-all`}
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
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className={`w-4 h-4 ${theme.text[600]} border-gray-300 rounded focus:ring-2 ${theme.focus.ring}`}
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm text-gray-700 font-medium"
              >
                Remember me for 30 days
              </label>
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
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Sign Up Link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center text-gray-600"
          >
            Don't have an account?{' '}
            <Link
              href="/sign-up"
              className={`font-bold ${theme.text[600]} ${theme.hover.text500} transition-colors`}
            >
              Sign up for free
            </Link>
          </motion.p>
        </motion.div>
      </div>

      {/* Right Side - Visual */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className={`hidden lg:flex lg:flex-1 ${theme.gradient.via} relative overflow-hidden`}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          {/* Floating Shoe */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 right-1/4"
          >
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop"
              alt="Shoe"
              className="w-80 h-80 object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Animated Circles */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/20 rounded-full blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-white/20 rounded-full blur-2xl"
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
            <Sparkles className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-black mb-4">
              Step Into Your Style
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Discover premium footwear that matches your unique personality.
              Join thousands of happy customers.
            </p>
            <div className="flex items-center justify-center gap-8">
              <div>
                <div className="text-3xl font-black">10K+</div>
                <div className="text-sm text-white/80">Happy Customers</div>
              </div>
              <div className="w-px h-12 bg-white/30" />
              <div>
                <div className="text-3xl font-black">500+</div>
                <div className="text-sm text-white/80">Shoe Styles</div>
              </div>
              <div className="w-px h-12 bg-white/30" />
              <div>
                <div className="text-3xl font-black">4.9★</div>
                <div className="text-sm text-white/80">Average Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
