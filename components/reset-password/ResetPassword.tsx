'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShoppingBag,
  Shield,
  CheckCircle2,
  KeyRound,
  AlertCircle,
} from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';

const ResetPassword = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Calculate password strength
    if (name === 'password') {
      let strength = 0;
      if (value.length >= 8) strength++;
      if (value.match(/[a-z]/) && value.match(/[A-Z]/)) strength++;
      if (value.match(/[0-9]/)) strength++;
      if (value.match(/[^a-zA-Z0-9]/)) strength++;
      setPasswordStrength(strength);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  const getStrengthColor = () => {
    if (passwordStrength === 0) return 'bg-gray-200';
    if (passwordStrength === 1) return 'bg-red-500';
    if (passwordStrength === 2) return 'bg-orange-500';
    if (passwordStrength === 3) return 'bg-yellow-500';
    return theme.bg[500];
  };

  const getStrengthText = () => {
    if (passwordStrength === 0) return '';
    if (passwordStrength === 1) return 'Weak';
    if (passwordStrength === 2) return 'Fair';
    if (passwordStrength === 3) return 'Good';
    return 'Strong';
  };

  const passwordsMatch = formData.password && formData.confirmPassword && formData.password === formData.confirmPassword;
  const passwordsDontMatch = formData.confirmPassword && formData.password !== formData.confirmPassword;

  return (
    <div className="min-h-screen flex relative overflow-hidden bg-linear-to-br from-gray-50 via-white to-gray-50">
      {/* Left Decorative Panel - Different from Forgot Password */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex flex-1 relative"
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-100/30 to-transparent">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className={`absolute top-1/4 left-1/4 w-96 h-96 ${theme.bg[100]} opacity-40 rounded-full blur-3xl`}
          />
        </div>

        {/* Floating Icon - Shield with Lock */}
        <div className="relative z-10 flex items-center justify-center w-full">
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 8, 0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative"
          >
            <div className={`w-36 h-36 ${theme.gradient.via} rounded-3xl flex items-center justify-center shadow-2xl ${theme.shadow[500]}`}>
              <div className="relative">
                <Shield className="w-20 h-20 text-white" />
                <Lock className="w-8 h-8 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
            {/* Glow Effect */}
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className={`absolute inset-0 ${theme.gradient.via} rounded-3xl blur-3xl`}
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
            {!isSuccess ? (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`w-16 h-16 mx-auto mb-4 ${theme.gradient.primary} rounded-2xl flex items-center justify-center shadow-lg ${theme.shadow[500]}`}
                  >
                    <Lock className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl font-black text-gray-900 mb-2"
                  >
                    Reset Password
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600"
                  >
                    Create a strong new password for your account
                  </motion.p>
                </div>

                {/* Reset Form */}
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* New Password Field */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      New Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter new password"
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
                    
                    {/* Password Strength Indicator */}
                    {formData.password && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-semibold text-gray-600">
                            Password Strength
                          </span>
                          <span className={`text-xs font-bold ${passwordStrength >= 3 ? theme.text[600] : 'text-gray-500'}`}>
                            {getStrengthText()}
                          </span>
                        </div>
                        <div className="flex gap-1.5">
                          {[1, 2, 3, 4].map((level) => (
                            <div
                              key={level}
                              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                                level <= passwordStrength ? getStrengthColor() : 'bg-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Confirm Password Field */}
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm new password"
                        required
                        className={`w-full pl-12 pr-12 py-3.5 border-2 ${
                          passwordsDontMatch
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                            : passwordsMatch
                            ? `${theme.border[500]} focus:${theme.border[500]} ${theme.focus.ring}`
                            : 'border-gray-200'
                        } rounded-xl focus:outline-none focus:ring-2 transition-all`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    
                    {/* Password Match Indicator */}
                    {formData.confirmPassword && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2"
                      >
                        {passwordsMatch ? (
                          <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="text-xs font-semibold">Passwords match</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-red-600">
                            <AlertCircle className="w-4 h-4" />
                            <span className="text-xs font-semibold">Passwords don't match</span>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>

                  {/* Password Requirements */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Password must contain:</p>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className={`w-1 h-1 rounded-full ${formData.password.length >= 8 ? theme.bg[500] : 'bg-gray-300'}`} />
                        At least 8 characters
                      </li>
                      <li className="flex items-center gap-2">
                        <div className={`w-1 h-1 rounded-full ${formData.password.match(/[a-z]/) && formData.password.match(/[A-Z]/) ? theme.bg[500] : 'bg-gray-300'}`} />
                        Both uppercase and lowercase letters
                      </li>
                      <li className="flex items-center gap-2">
                        <div className={`w-1 h-1 rounded-full ${formData.password.match(/[0-9]/) ? theme.bg[500] : 'bg-gray-300'}`} />
                        At least one number
                      </li>
                      <li className="flex items-center gap-2">
                        <div className={`w-1 h-1 rounded-full ${formData.password.match(/[^a-zA-Z0-9]/) ? theme.bg[500] : 'bg-gray-300'}`} />
                        At least one special character
                      </li>
                    </ul>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading || !passwordsMatch || passwordStrength < 2}
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
                        Resetting...
                      </>
                    ) : (
                      <>
                        Reset Password
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
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
                  className={`w-24 h-24 mx-auto mb-6 ${theme.gradient.primary} rounded-full flex items-center justify-center shadow-xl ${theme.shadow[500]}`}
                >
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-black text-gray-900 mb-3"
                >
                  Password Reset Successful!
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 mb-8"
                >
                  Your password has been successfully reset. You can now sign in with your new password.
                </motion.p>

                {/* Success Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-3"
                >
                  <Link
                    href="/login"
                    className={`block w-full px-6 py-4 ${theme.gradient.primary} text-white rounded-xl font-bold text-lg shadow-lg ${theme.shadow[500]} ${theme.hover.shadow} transition-all text-center`}
                  >
                    Sign In Now
                  </Link>

                  <Link
                    href="/"
                    className="block w-full px-6 py-3.5 bg-white border-2 border-gray-300 hover:border-gray-400 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-all text-center"
                  >
                    Back to Home
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Right Decorative Panel - Different from Forgot Password */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex flex-1 relative"
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-bl from-purple-100/30 to-transparent">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.5,
            }}
            className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${theme.bg[100]} opacity-40 rounded-full blur-3xl`}
          />
        </div>

        {/* Floating Icon - Key */}
        <div className="relative z-10 flex items-center justify-center w-full">
          <motion.div
            animate={{
              y: [0, 25, 0],
              rotate: [0, -8, 0, 8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.7,
            }}
            className="relative"
          >
            <div className={`w-36 h-36 ${theme.gradient.br} rounded-3xl flex items-center justify-center shadow-2xl ${theme.shadow[500]}`}>
              <KeyRound className="w-20 h-20 text-white" />
            </div>
            {/* Glow Effect */}
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.7,
              }}
              className={`absolute inset-0 ${theme.gradient.br} rounded-3xl blur-3xl`}
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
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          className={`absolute top-20 right-40 w-32 h-32 border-2 ${theme.border[500]} opacity-20 rounded-full`}
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'linear',
          }}
          className={`absolute bottom-40 left-40 w-32 h-32 border-2 ${theme.border[500]} opacity-20 rounded-full`}
        />
      </div>
    </div>
  );
};

export default ResetPassword;
