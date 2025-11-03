'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Mail,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  MapPin,
  Phone,
  Globe,
  ChevronDown,
} from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';

const Footer = () => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const footerSections = {
    company: {
      title: 'Company Info',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press & Media', href: '/press' },
        { label: 'Our Stores', href: '/stores' },
        { label: 'Sustainability', href: '/sustainability' },
      ],
    },
    customerService: {
      title: 'Customer Service',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Shipping Info', href: '/shipping' },
        { label: 'Returns & Exchanges', href: '/returns' },
        { label: 'Size Guide', href: '/size-guide' },
        { label: 'Track Order', href: '/track-order' },
      ],
    },
    account: {
      title: 'Quick Links',
      links: [
        { label: 'My Account', href: '/account' },
        { label: 'Order History', href: '/orders' },
        { label: 'Wishlist', href: '/wishlist' },
        { label: 'Shopping Cart', href: '/cart' },
        { label: 'Gift Cards', href: '/gift-cards' },
        { label: 'Rewards Program', href: '/rewards' },
      ],
    },
    categories: {
      title: 'Shop Categories',
      links: [
        { label: "Men's Shoes", href: '/categories/mens' },
        { label: "Women's Shoes", href: '/categories/womens' },
        { label: "Kids' Shoes", href: '/categories/kids' },
        { label: 'Athletic & Sports', href: '/categories/athletic' },
        { label: 'Casual & Lifestyle', href: '/categories/casual' },
        { label: 'Formal & Dress', href: '/categories/formal' },
      ],
    },
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube', color: 'hover:bg-red-600' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-700' },
  ];

  const paymentMethods = [
    { name: 'Visa', logo: '💳' },
    { name: 'Mastercard', logo: '💳' },
    { name: 'PayPal', logo: '💰' },
    { name: 'Apple Pay', logo: '🍎' },
    { name: 'Google Pay', logo: '🔷' },
    { name: 'Amex', logo: '💳' },
  ];

  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];
  const currencies = ['USD', 'EUR', 'GBP', 'CAD', 'AUD'];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className={`w-10 h-10 ${theme.gradient.br} rounded-lg flex items-center justify-center shadow-lg`}>
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black text-white">STEPPER</span>
            </Link>

            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Your trusted destination for premium footwear. Step into style with our curated collection of shoes for every occasion.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>123 Shoe Street, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-gray-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-gray-500" />
                <span>support@stepper.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 bg-gray-800 rounded-lg ${social.color} transition-colors`}
                  title={social.label}
                >
                  <social.icon className="w-4 h-4 text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links Columns */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-white font-black text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`text-sm ${theme.hover.text500} transition-colors inline-block hover:translate-x-1 transform duration-200`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-12 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white font-black text-xl mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-400 text-sm">
                Subscribe to get exclusive deals, new arrivals, and insider news delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className={`w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 ${theme.focus.ring} ${theme.focus.border} text-white placeholder:text-gray-500 transition-all`}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 ${theme.gradient.primary} text-white rounded-xl font-bold shadow-lg ${theme.hover.shadow} transition-all`}
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 font-semibold">We Accept:</span>
              <div className="flex items-center gap-2">
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    className="px-3 py-2 bg-gray-900 rounded-lg border border-gray-800 flex items-center justify-center"
                    title={method.name}
                  >
                    <span className="text-lg">{method.logo}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Language & Currency Selector */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative group">
                <button className={`flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors`}>
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-semibold">{selectedLanguage}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute bottom-full mb-2 left-0 w-40 bg-gray-900 rounded-lg border border-gray-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-800 first:rounded-t-lg last:rounded-b-lg ${
                        selectedLanguage === lang ? `${theme.text[600]} font-semibold` : 'text-gray-400'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              {/* Currency Selector */}
              <div className="relative group">
                <button className={`flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors`}>
                  <span className="text-sm font-semibold">{selectedCurrency}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute bottom-full mb-2 left-0 w-32 bg-gray-900 rounded-lg border border-gray-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {currencies.map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setSelectedCurrency(curr)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-800 first:rounded-t-lg last:rounded-b-lg ${
                        selectedCurrency === curr ? `${theme.text[600]} font-semibold` : 'text-gray-400'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright & Legal */}
          <div className="mt-6 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Stepper. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className={`text-sm text-gray-500 ${theme.hover.text500} transition-colors`}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className={`text-sm text-gray-500 ${theme.hover.text500} transition-colors`}
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className={`text-sm text-gray-500 ${theme.hover.text500} transition-colors`}
              >
                Cookie Policy
              </Link>
              <Link
                href="/accessibility"
                className={`text-sm text-gray-500 ${theme.hover.text500} transition-colors`}
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
