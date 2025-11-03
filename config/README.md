# 🎨 Theme Configuration Guide

## ⚡ Instant Theme Switching

Your Stepper e-commerce platform now features **live theme switching**! No more manual file editing required.

## How to Change Your Theme

### Method 1: Using the Theme Picker (Recommended) ✨

1. **Look for the floating palette icon** in the bottom-right corner of any page
2. **Click it** to open the theme picker
3. **Click any color** you like
4. **That's it!** Your entire site updates instantly

The theme is automatically saved and will persist even after you refresh or close the browser.

### Method 2: Manual Configuration (Advanced)

If you prefer to set a default theme in code, edit `config/theme.ts`:

```typescript
// Line 24 - This is now just a fallback
export const ACCENT_COLOR: AccentColor = 'blue';
```

Note: The theme picker will override this value once a user selects a color.

## Available Colors

Change `ACCENT_COLOR` to any of these values:

### Popular Choices
- `'blue'` ← Current default - Professional & trustworthy
- `'purple'` - Luxurious & creative
- `'red'` - Bold & energetic
- `'green'` - Fresh & natural
- `'orange'` - Warm & friendly
- `'pink'` - Modern & playful
- `'indigo'` - Professional & deep
- `'teal'` - Calm & sophisticated

### All Available Colors
- `'emerald'` - Vibrant green, eco-friendly
- `'violet'` - Rich purple, elegant
- `'fuchsia'` - Bright pink, eye-catching
- `'rose'` - Soft pink, feminine
- `'cyan'` - Bright blue, tech-forward
- `'amber'` - Warm orange/yellow, energetic

## Step-by-Step Guide

### 1. Open the theme file
Navigate to `config/theme.ts`

### 2. Change the accent color
Find line 24 and change the value:

```typescript
// From this:
export const ACCENT_COLOR: AccentColor = 'blue';

// To this (example - purple theme):
export const ACCENT_COLOR: AccentColor = 'purple';
```

### 3. Save and see the magic! ✨
Your changes apply **instantly** to:
- ✅ Logo and branding gradients
- ✅ Navigation links (text & icons)
- ✅ Active link indicators
- ✅ Buttons and CTAs
- ✅ Hover effects
- ✅ Focus states
- ✅ Shadows and glows
- ✅ Search bars
- ✅ Mobile menu
- ✅ Cart badge
- ✅ All interactive elements

## Example Theme Transformations

### 💜 Purple Theme (Luxury Brand)
```typescript
export const ACCENT_COLOR: AccentColor = 'purple';
```
Perfect for premium, high-end footwear brands. Creates a sophisticated, luxury feel.

### 🧡 Orange Theme (Athletic & Sporty)
```typescript
export const ACCENT_COLOR: AccentColor = 'orange';
```
Energetic and dynamic, ideal for sports shoes and athletic brands.

### 💚 Emerald Theme (Eco-Friendly)
```typescript
export const ACCENT_COLOR: AccentColor = 'emerald';
```
Natural and sustainable vibe, great for eco-conscious shoe brands.

### 🌸 Rose Theme (Fashion Forward)
```typescript
export const ACCENT_COLOR: AccentColor = 'rose';
```
Soft, trendy, and stylish - perfect for fashion-forward women's footwear.

### 🔴 Red Theme (Bold & Powerful)
```typescript
export const ACCENT_COLOR: AccentColor = 'red';
```
Strong, attention-grabbing, ideal for sale campaigns and bold brands.

## Advanced Usage

### Using Theme Colors in New Components

When creating new components, import the theme object:

```typescript
import { theme } from '@/config/theme';

export function MyComponent() {
  return (
    <div className={`${theme.bg[600]} text-white p-4`}>
      <h2 className={theme.gradient.text}>Gradient Text</h2>
      <button className={`${theme.bg[500]} ${theme.hover.bg100} px-4 py-2`}>
        Click Me
      </button>
    </div>
  );
}
```

### Available Theme Properties

```typescript
theme.bg[50]          // Light background
theme.bg[100]         // Lighter background
theme.bg[400]         // Medium background
theme.bg[500]         // Primary background
theme.bg[600]         // Dark background

theme.text[500]       // Light text
theme.text[600]       // Primary text

theme.border[100]     // Light border
theme.border[500]     // Primary border

theme.shadow[100]     // Light shadow
theme.shadow[500]     // Medium shadow
theme.shadow.xl       // Heavy shadow

theme.gradient.primary   // Main gradient (left to right)
theme.gradient.br        // Diagonal gradient (bottom-right)
theme.gradient.via       // Three-color gradient
theme.gradient.text      // Gradient text effect

theme.hover.bg50      // Hover: lightest background
theme.hover.bg100     // Hover: light background
theme.hover.text500   // Hover: light text
theme.hover.text600   // Hover: primary text
theme.hover.shadow    // Hover: shadow effect

theme.focus.border    // Focus: border style
theme.focus.ring      // Focus: ring effect
```

## Troubleshooting

### ❓ Colors not changing after editing theme.ts?

**Solution:** Make sure you:
1. Saved the file (Ctrl+S / Cmd+S)
2. Used one of the exact color names listed above
3. The development server is running (`npm run dev`)
4. Clear your browser cache (Ctrl+Shift+R / Cmd+Shift+R)

### ❓ Can I add custom colors?

**Solution:** Yes! Edit the `colorClasses` object in `theme.ts` and add your custom color following the same pattern as existing colors.

### ❓ Some colors look different than expected?

This is normal - each Tailwind color has unique shades. Try different colors to find the perfect match for your brand!

## Pro Tips 💡

1. **Brand Consistency**: Match your accent color to your brand's primary color
2. **Contrast**: Test your color choice for readability and accessibility
3. **Preview**: Try a few colors to see which works best with white backgrounds
4. **Seasonal Themes**: Change colors for special events or seasons!

---

## Need Help?

The theme system is designed to be simple and foolproof. If you encounter issues:
- Double-check the spelling of your color name
- Ensure you're editing the correct file: `config/theme.ts`
- Make sure your dev server is running

Enjoy your beautifully themed Stepper store! 🚀👟
