/**
 * Theme Configuration for Stepper E-commerce Platform
 * 
 * ⚡ CHANGE THE ACCENT COLOR HERE TO APPLY IT ACROSS THE ENTIRE APPLICATION
 * 
 * Available color options:
 * - 'blue' (default)
 * - 'purple'
 * - 'red'
 * - 'green'
 * - 'orange'
 * - 'pink'
 * - 'indigo'
 * - 'teal'
 * - 'emerald'
 * - 'violet'
 * - 'fuchsia'
 * - 'rose'
 * - 'cyan'
 * - 'amber'
 */

// 🎨 CHANGE THIS VALUE TO CHANGE YOUR THEME COLOR
type AccentColor = 'blue' | 'purple' | 'red' | 'green' | 'orange' | 'pink' | 'indigo' | 'teal' | 'emerald' | 'violet' | 'fuchsia' | 'rose' | 'cyan' | 'amber';

export const ACCENT_COLOR: AccentColor = 'pink';

// Color class mapper - Tailwind requires complete class names for purging
const colorClasses = {
  blue: {
    bg: {
      50: 'bg-blue-50',
      100: 'bg-blue-100',
      400: 'bg-blue-400',
      500: 'bg-blue-500',
      600: 'bg-blue-600',
    },
    text: {
      500: 'text-blue-500',
      600: 'text-blue-600',
    },
    border: {
      100: 'border-blue-100',
      500: 'border-blue-500',
    },
    shadow: {
      100: 'shadow-blue-100/50',
      500: 'shadow-blue-500/30',
      xl: 'shadow-blue-500/40',
    },
    gradient: {
      primary: 'bg-linear-to-r from-blue-600 to-blue-500',
      br: 'bg-linear-to-br from-blue-600 to-blue-400',
      via: 'bg-linear-to-r from-blue-600 via-blue-500 to-blue-600',
      text: 'bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent',
    },
    hover: {
      bg50: 'hover:bg-blue-50',
      bg100: 'hover:bg-blue-100',
      text500: 'hover:text-blue-500',
      text600: 'hover:text-blue-600',
      shadow: 'hover:shadow-blue-500/40',
    },
    focus: {
      border: 'focus:border-blue-500',
      ring: 'focus:ring-blue-400',
    },
  },
  purple: {
    bg: {
      50: 'bg-purple-50',
      100: 'bg-purple-100',
      400: 'bg-purple-400',
      500: 'bg-purple-500',
      600: 'bg-purple-600',
    },
    text: {
      500: 'text-purple-500',
      600: 'text-purple-600',
    },
    border: {
      100: 'border-purple-100',
      500: 'border-purple-500',
    },
    shadow: {
      100: 'shadow-purple-100/50',
      500: 'shadow-purple-500/30',
      xl: 'shadow-purple-500/40',
    },
    gradient: {
      primary: 'bg-linear-to-r from-purple-600 to-purple-500',
      br: 'bg-linear-to-br from-purple-600 to-purple-400',
      via: 'bg-linear-to-r from-purple-600 via-purple-500 to-purple-600',
      text: 'bg-linear-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent',
    },
    hover: {
      bg50: 'hover:bg-purple-50',
      bg100: 'hover:bg-purple-100',
      text500: 'hover:text-purple-500',
      text600: 'hover:text-purple-600',
      shadow: 'hover:shadow-purple-500/40',
    },
    focus: {
      border: 'focus:border-purple-500',
      ring: 'focus:ring-purple-400',
    },
  },
  red: {
    bg: {
      50: 'bg-red-50',
      100: 'bg-red-100',
      400: 'bg-red-400',
      500: 'bg-red-500',
      600: 'bg-red-600',
    },
    text: {
      500: 'text-red-500',
      600: 'text-red-600',
    },
    border: {
      100: 'border-red-100',
      500: 'border-red-500',
    },
    shadow: {
      100: 'shadow-red-100/50',
      500: 'shadow-red-500/30',
      xl: 'shadow-red-500/40',
    },
    gradient: {
      primary: 'bg-linear-to-r from-red-600 to-red-500',
      br: 'bg-linear-to-br from-red-600 to-red-400',
      via: 'bg-linear-to-r from-red-600 via-red-500 to-red-600',
      text: 'bg-linear-to-r from-red-600 to-red-400 bg-clip-text text-transparent',
    },
    hover: {
      bg50: 'hover:bg-red-50',
      bg100: 'hover:bg-red-100',
      text500: 'hover:text-red-500',
      text600: 'hover:text-red-600',
      shadow: 'hover:shadow-red-500/40',
    },
    focus: {
      border: 'focus:border-red-500',
      ring: 'focus:ring-red-400',
    },
  },
  green: {
    bg: {
      50: 'bg-green-50',
      100: 'bg-green-100',
      400: 'bg-green-400',
      500: 'bg-green-500',
      600: 'bg-green-600',
    },
    text: {
      500: 'text-green-500',
      600: 'text-green-600',
    },
    border: {
      100: 'border-green-100',
      500: 'border-green-500',
    },
    shadow: {
      100: 'shadow-green-100/50',
      500: 'shadow-green-500/30',
      xl: 'shadow-green-500/40',
    },
    gradient: {
      primary: 'bg-linear-to-r from-green-600 to-green-500',
      br: 'bg-linear-to-br from-green-600 to-green-400',
      via: 'bg-linear-to-r from-green-600 via-green-500 to-green-600',
      text: 'bg-linear-to-r from-green-600 to-green-400 bg-clip-text text-transparent',
    },
    hover: {
      bg50: 'hover:bg-green-50',
      bg100: 'hover:bg-green-100',
      text500: 'hover:text-green-500',
      text600: 'hover:text-green-600',
      shadow: 'hover:shadow-green-500/40',
    },
    focus: {
      border: 'focus:border-green-500',
      ring: 'focus:ring-green-400',
    },
  },
  orange: {
    bg: {
      50: 'bg-orange-50',
      100: 'bg-orange-100',
      400: 'bg-orange-400',
      500: 'bg-orange-500',
      600: 'bg-orange-600',
    },
    text: {
      500: 'text-orange-500',
      600: 'text-orange-600',
    },
    border: {
      100: 'border-orange-100',
      500: 'border-orange-500',
    },
    shadow: {
      100: 'shadow-orange-100/50',
      500: 'shadow-orange-500/30',
      xl: 'shadow-orange-500/40',
    },
    gradient: {
      primary: 'bg-linear-to-r from-orange-600 to-orange-500',
      br: 'bg-linear-to-br from-orange-600 to-orange-400',
      via: 'bg-linear-to-r from-orange-600 via-orange-500 to-orange-600',
      text: 'bg-linear-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent',
    },
    hover: {
      bg50: 'hover:bg-orange-50',
      bg100: 'hover:bg-orange-100',
      text500: 'hover:text-orange-500',
      text600: 'hover:text-orange-600',
      shadow: 'hover:shadow-orange-500/40',
    },
    focus: {
      border: 'focus:border-orange-500',
      ring: 'focus:ring-orange-400',
    },
  },
  pink: {
    bg: {
      50: 'bg-pink-50',
      100: 'bg-pink-100',
      400: 'bg-pink-400',
      500: 'bg-pink-500',
      600: 'bg-pink-600',
    },
    text: {
      500: 'text-pink-500',
      600: 'text-pink-600',
    },
    border: {
      100: 'border-pink-100',
      500: 'border-pink-500',
    },
    shadow: {
      100: 'shadow-pink-100/50',
      500: 'shadow-pink-500/30',
      xl: 'shadow-pink-500/40',
    },
    gradient: {
      primary: 'bg-linear-to-r from-pink-600 to-pink-500',
      br: 'bg-linear-to-br from-pink-600 to-pink-400',
      via: 'bg-linear-to-r from-pink-600 via-pink-500 to-pink-600',
      text: 'bg-linear-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent',
    },
    hover: {
      bg50: 'hover:bg-pink-50',
      bg100: 'hover:bg-pink-100',
      text500: 'hover:text-pink-500',
      text600: 'hover:text-pink-600',
      shadow: 'hover:shadow-pink-500/40',
    },
    focus: {
      border: 'focus:border-pink-500',
      ring: 'focus:ring-pink-400',
    },
  },
  indigo: {
    bg: {
      50: 'bg-indigo-50',
      100: 'bg-indigo-100',
      400: 'bg-indigo-400',
      500: 'bg-indigo-500',
      600: 'bg-indigo-600',
    },
    text: {
      500: 'text-indigo-500',
      600: 'text-indigo-600',
    },
    border: {
      100: 'border-indigo-100',
      500: 'border-indigo-500',
    },
    shadow: {
      100: 'shadow-indigo-100/50',
      500: 'shadow-indigo-500/30',
      xl: 'shadow-indigo-500/40',
    },
    gradient: {
      primary: 'bg-linear-to-r from-indigo-600 to-indigo-500',
      br: 'bg-linear-to-br from-indigo-600 to-indigo-400',
      via: 'bg-linear-to-r from-indigo-600 via-indigo-500 to-indigo-600',
      text: 'bg-linear-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent',
    },
    hover: {
      bg50: 'hover:bg-indigo-50',
      bg100: 'hover:bg-indigo-100',
      text500: 'hover:text-indigo-500',
      text600: 'hover:text-indigo-600',
      shadow: 'hover:shadow-indigo-500/40',
    },
    focus: {
      border: 'focus:border-indigo-500',
      ring: 'focus:ring-indigo-400',
    },
  },
  teal: {
    bg: {
      50: 'bg-teal-50',
      100: 'bg-teal-100',
      400: 'bg-teal-400',
      500: 'bg-teal-500',
      600: 'bg-teal-600',
    },
    text: {
      500: 'text-teal-500',
      600: 'text-teal-600',
    },
    border: {
      100: 'border-teal-100',
      500: 'border-teal-500',
    },
    shadow: {
      100: 'shadow-teal-100/50',
      500: 'shadow-teal-500/30',
      xl: 'shadow-teal-500/40',
    },
    gradient: {
      primary: 'bg-linear-to-r from-teal-600 to-teal-500',
      br: 'bg-linear-to-br from-teal-600 to-teal-400',
      via: 'bg-linear-to-r from-teal-600 via-teal-500 to-teal-600',
      text: 'bg-linear-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent',
    },
    hover: {
      bg50: 'hover:bg-teal-50',
      bg100: 'hover:bg-teal-100',
      text500: 'hover:text-teal-500',
      text600: 'hover:text-teal-600',
      shadow: 'hover:shadow-teal-500/40',
    },
    focus: {
      border: 'focus:border-teal-500',
      ring: 'focus:ring-teal-400',
    },
  },
  emerald: {
    bg: {
      50: 'bg-emerald-50',
      100: 'bg-emerald-100',
      400: 'bg-emerald-400',
      500: 'bg-emerald-500',
      600: 'bg-emerald-600',
    },
    text: {
      500: 'text-emerald-500',
      600: 'text-emerald-600',
    },
    border: {
      100: 'border-emerald-100',
      500: 'border-emerald-500',
    },
    shadow: {
      100: 'shadow-emerald-100/50',
      500: 'shadow-emerald-500/30',
      xl: 'shadow-emerald-500/40',
    },
    gradient: {
      primary: 'bg-linear-to-r from-emerald-600 to-emerald-500',
      br: 'bg-linear-to-br from-emerald-600 to-emerald-400',
      via: 'bg-linear-to-r from-emerald-600 via-emerald-500 to-emerald-600',
      text: 'bg-linear-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent',
    },
    hover: {
      bg50: 'hover:bg-emerald-50',
      bg100: 'hover:bg-emerald-100',
      text500: 'hover:text-emerald-500',
      text600: 'hover:text-emerald-600',
      shadow: 'hover:shadow-emerald-500/40',
    },
    focus: {
      border: 'focus:border-emerald-500',
      ring: 'focus:ring-emerald-400',
    },
  },
  violet: {
    bg: {
      50: 'bg-violet-50',
      100: 'bg-violet-100',
      400: 'bg-violet-400',
      500: 'bg-violet-500',
      600: 'bg-violet-600',
    },
    text: {
      500: 'text-violet-500',
      600: 'text-violet-600',
    },
    border: {
      100: 'border-violet-100',
      500: 'border-violet-500',
    },
    shadow: {
      100: 'shadow-violet-100/50',
      500: 'shadow-violet-500/30',
      xl: 'shadow-violet-500/40',
    },
    gradient: {
      primary: 'bg-linear-to-r from-violet-600 to-violet-500',
      br: 'bg-linear-to-br from-violet-600 to-violet-400',
      via: 'bg-linear-to-r from-violet-600 via-violet-500 to-violet-600',
      text: 'bg-linear-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent',
    },
    hover: {
      bg50: 'hover:bg-violet-50',
      bg100: 'hover:bg-violet-100',
      text500: 'hover:text-violet-500',
      text600: 'hover:text-violet-600',
      shadow: 'hover:shadow-violet-500/40',
    },
    focus: {
      border: 'focus:border-violet-500',
      ring: 'focus:ring-violet-400',
    },
  },
  fuchsia: {
    bg: {
      50: 'bg-fuchsia-50',
      100: 'bg-fuchsia-100',
      400: 'bg-fuchsia-400',
      500: 'bg-fuchsia-500',
      600: 'bg-fuchsia-600',
    },
    text: {
      500: 'text-fuchsia-500',
      600: 'text-fuchsia-600',
    },
    border: {
      100: 'border-fuchsia-100',
      500: 'border-fuchsia-500',
    },
    shadow: {
      100: 'shadow-fuchsia-100/50',
      500: 'shadow-fuchsia-500/30',
      xl: 'shadow-fuchsia-500/40',
    },
    gradient: {
      primary: 'bg-linear-to-r from-fuchsia-600 to-fuchsia-500',
      br: 'bg-linear-to-br from-fuchsia-600 to-fuchsia-400',
      via: 'bg-linear-to-r from-fuchsia-600 via-fuchsia-500 to-fuchsia-600',
      text: 'bg-linear-to-r from-fuchsia-600 to-fuchsia-400 bg-clip-text text-transparent',
    },
    hover: {
      bg50: 'hover:bg-fuchsia-50',
      bg100: 'hover:bg-fuchsia-100',
      text500: 'hover:text-fuchsia-500',
      text600: 'hover:text-fuchsia-600',
      shadow: 'hover:shadow-fuchsia-500/40',
    },
    focus: {
      border: 'focus:border-fuchsia-500',
      ring: 'focus:ring-fuchsia-400',
    },
  },
  rose: {
    bg: {
      50: 'bg-rose-50',
      100: 'bg-rose-100',
      400: 'bg-rose-400',
      500: 'bg-rose-500',
      600: 'bg-rose-600',
    },
    text: {
      500: 'text-rose-500',
      600: 'text-rose-600',
    },
    border: {
      100: 'border-rose-100',
      500: 'border-rose-500',
    },
    shadow: {
      100: 'shadow-rose-100/50',
      500: 'shadow-rose-500/30',
      xl: 'shadow-rose-500/40',
    },
    gradient: {
      primary: 'bg-linear-to-r from-rose-600 to-rose-500',
      br: 'bg-linear-to-br from-rose-600 to-rose-400',
      via: 'bg-linear-to-r from-rose-600 via-rose-500 to-rose-600',
      text: 'bg-linear-to-r from-rose-600 to-rose-400 bg-clip-text text-transparent',
    },
    hover: {
      bg50: 'hover:bg-rose-50',
      bg100: 'hover:bg-rose-100',
      text500: 'hover:text-rose-500',
      text600: 'hover:text-rose-600',
      shadow: 'hover:shadow-rose-500/40',
    },
    focus: {
      border: 'focus:border-rose-500',
      ring: 'focus:ring-rose-400',
    },
  },
  cyan: {
    bg: {
      50: 'bg-cyan-50',
      100: 'bg-cyan-100',
      400: 'bg-cyan-400',
      500: 'bg-cyan-500',
      600: 'bg-cyan-600',
    },
    text: {
      500: 'text-cyan-500',
      600: 'text-cyan-600',
    },
    border: {
      100: 'border-cyan-100',
      500: 'border-cyan-500',
    },
    shadow: {
      100: 'shadow-cyan-100/50',
      500: 'shadow-cyan-500/30',
      xl: 'shadow-cyan-500/40',
    },
    gradient: {
      primary: 'bg-linear-to-r from-cyan-600 to-cyan-500',
      br: 'bg-linear-to-br from-cyan-600 to-cyan-400',
      via: 'bg-linear-to-r from-cyan-600 via-cyan-500 to-cyan-600',
      text: 'bg-linear-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent',
    },
    hover: {
      bg50: 'hover:bg-cyan-50',
      bg100: 'hover:bg-cyan-100',
      text500: 'hover:text-cyan-500',
      text600: 'hover:text-cyan-600',
      shadow: 'hover:shadow-cyan-500/40',
    },
    focus: {
      border: 'focus:border-cyan-500',
      ring: 'focus:ring-cyan-400',
    },
  },
  amber: {
    bg: {
      50: 'bg-amber-50',
      100: 'bg-amber-100',
      400: 'bg-amber-400',
      500: 'bg-amber-500',
      600: 'bg-amber-600',
    },
    text: {
      500: 'text-amber-500',
      600: 'text-amber-600',
    },
    border: {
      100: 'border-amber-100',
      500: 'border-amber-500',
    },
    shadow: {
      100: 'shadow-amber-100/50',
      500: 'shadow-amber-500/30',
      xl: 'shadow-amber-500/40',
    },
    gradient: {
      primary: 'bg-linear-to-r from-amber-600 to-amber-500',
      br: 'bg-linear-to-br from-amber-600 to-amber-400',
      via: 'bg-linear-to-r from-amber-600 via-amber-500 to-amber-600',
      text: 'bg-linear-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent',
    },
    hover: {
      bg50: 'hover:bg-amber-50',
      bg100: 'hover:bg-amber-100',
      text500: 'hover:text-amber-500',
      text600: 'hover:text-amber-600',
      shadow: 'hover:shadow-amber-500/40',
    },
    focus: {
      border: 'focus:border-amber-500',
      ring: 'focus:ring-amber-400',
    },
  },
};

// Export the current theme colors
export const theme = colorClasses[ACCENT_COLOR];

/**
 * USAGE:
 * import { theme } from '@/config/theme';
 * 
 * <div className={theme.bg[600]}>Background</div>
 * <span className={theme.text[600]}>Text color</span>
 * <div className={theme.gradient.primary}>Gradient</div>
 */
