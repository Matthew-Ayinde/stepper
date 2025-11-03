'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, X, Check, Sparkles } from 'lucide-react';
import { useThemeStore } from '@/store/themeStore';

type AccentColor = 'blue' | 'purple' | 'red' | 'green' | 'orange' | 'pink' | 'indigo' | 'teal' | 'emerald' | 'violet' | 'fuchsia' | 'rose' | 'cyan' | 'amber';

interface ColorOption {
  name: AccentColor;
  displayName: string;
  preview: string;
  gradient: string;
}

const ThemePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { accentColor, setAccentColor } = useThemeStore();

  const colors: ColorOption[] = [
    {
      name: 'blue',
      displayName: 'Blue',
      preview: 'bg-blue-600',
      gradient: 'bg-linear-to-r from-blue-600 to-blue-400',
    },
    {
      name: 'purple',
      displayName: 'Purple',
      preview: 'bg-purple-600',
      gradient: 'bg-linear-to-r from-purple-600 to-purple-400',
    },
    {
      name: 'red',
      displayName: 'Red',
      preview: 'bg-red-600',
      gradient: 'bg-linear-to-r from-red-600 to-red-400',
    },
    {
      name: 'green',
      displayName: 'Green',
      preview: 'bg-green-600',
      gradient: 'bg-linear-to-r from-green-600 to-green-400',
    },
    {
      name: 'orange',
      displayName: 'Orange',
      preview: 'bg-orange-600',
      gradient: 'bg-linear-to-r from-orange-600 to-orange-400',
    },
    {
      name: 'pink',
      displayName: 'Pink',
      preview: 'bg-pink-600',
      gradient: 'bg-linear-to-r from-pink-600 to-pink-400',
    },
    {
      name: 'indigo',
      displayName: 'Indigo',
      preview: 'bg-indigo-600',
      gradient: 'bg-linear-to-r from-indigo-600 to-indigo-400',
    },
    {
      name: 'teal',
      displayName: 'Teal',
      preview: 'bg-teal-600',
      gradient: 'bg-linear-to-r from-teal-600 to-teal-400',
    },
    {
      name: 'emerald',
      displayName: 'Emerald',
      preview: 'bg-emerald-600',
      gradient: 'bg-linear-to-r from-emerald-600 to-emerald-400',
    },
    {
      name: 'violet',
      displayName: 'Violet',
      preview: 'bg-violet-600',
      gradient: 'bg-linear-to-r from-violet-600 to-violet-400',
    },
    {
      name: 'fuchsia',
      displayName: 'Fuchsia',
      preview: 'bg-fuchsia-600',
      gradient: 'bg-linear-to-r from-fuchsia-600 to-fuchsia-400',
    },
    {
      name: 'rose',
      displayName: 'Rose',
      preview: 'bg-rose-600',
      gradient: 'bg-linear-to-r from-rose-600 to-rose-400',
    },
    {
      name: 'cyan',
      displayName: 'Cyan',
      preview: 'bg-cyan-600',
      gradient: 'bg-linear-to-r from-cyan-600 to-cyan-400',
    },
    {
      name: 'amber',
      displayName: 'Amber',
      preview: 'bg-amber-600',
      gradient: 'bg-linear-to-r from-amber-600 to-amber-400',
    },
  ];

  const handleColorChange = (color: AccentColor) => {
    setAccentColor(color);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Theme Picker Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-white rounded-full shadow-2xl border-2 border-gray-100 hover:shadow-xl transition-all"
        title="Change Theme Color"
      >
        <Palette className="w-6 h-6 text-gray-700" />
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.button>

      {/* Theme Picker Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl max-h-[80vh] overflow-y-auto"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 m-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        Choose Your Theme
                      </h2>
                      <p className="text-sm text-gray-500">
                        Select an accent color for your store
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>

                {/* Color Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {colors.map((color, index) => (
                    <motion.button
                      key={color.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleColorChange(color.name)}
                      className={`relative p-4 rounded-xl border-2 transition-all ${
                        accentColor === color.name
                          ? 'border-gray-800 shadow-lg'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {/* Color Preview */}
                      <div
                        className={`w-full h-20 rounded-lg ${color.gradient} mb-3 shadow-md`}
                      />

                      {/* Color Name */}
                      <p className="text-sm font-semibold text-gray-700">
                        {color.displayName}
                      </p>

                      {/* Selected Indicator */}
                      {accentColor === color.name && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-2 right-2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center"
                        >
                          <Check className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Instructions */}
                <div className="mt-6 p-4 bg-linear-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                    Theme Applied Instantly! ✨
                  </h3>
                  <p className="text-sm text-gray-600">
                    Your theme changes are saved automatically and will persist across sessions. 
                    Click any color above to instantly transform your entire store!
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemePicker;
