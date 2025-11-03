'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AccentColor = 'blue' | 'purple' | 'red' | 'green' | 'orange' | 'pink' | 'indigo' | 'teal' | 'emerald' | 'violet' | 'fuchsia' | 'rose' | 'cyan' | 'amber';

interface ThemeStore {
  accentColor: AccentColor;
  setAccentColor: (color: AccentColor) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      accentColor: 'blue',
      setAccentColor: (color) => set({ accentColor: color }),
    }),
    {
      name: 'stepper-theme',
    }
  )
);
