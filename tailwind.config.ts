import type { Config } from 'tailwindcss';

/**
 * Royal Reality Groups — Brand Design Tokens
 *
 * Note: With Tailwind CSS v4, the primary source of truth for design tokens
 * is the @theme block in src/index.css. This config file serves as documentation
 * and provides backward-compatible token definitions.
 *
 * Color Palette:
 *   - Primary Gold: #D4AF37 (brand accent, CTAs, headings)
 *   - Gold Light: #F4E29A (hover states, highlights)
 *   - Gold Dark: #B8860B (active states, borders)
 *   - Dark Background: #1A1A2E (primary background)
 *   - Dark Lighter: #16213E (section alternation)
 *   - Dark Card: #0F3460 (card backgrounds)
 *   - Cream: #F5F5DC (light text, backgrounds)
 *
 * Typography:
 *   - Headings: Playfair Display (serif) — conveys luxury
 *   - Body: Inter (sans-serif) — clean readability
 *
 * Spacing:
 *   - Base unit: 4px (consistent with Tailwind default)
 *   - All spacing values are multiples of the 4px base unit
 */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#D4AF37',
          'gold-light': '#F4E29A',
          'gold-dark': '#B8860B',
          dark: '#1A1A2E',
          'dark-lighter': '#16213E',
          'dark-card': '#0F3460',
          cream: '#F5F5DC',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // Custom spacing tokens (base unit: 4px)
        '18': '4.5rem',  // 72px
        '22': '5.5rem',  // 88px
        '26': '6.5rem',  // 104px
        '30': '7.5rem',  // 120px
        '34': '8.5rem',  // 136px
        '38': '9.5rem',  // 152px
      },
    },
  },
  plugins: [],
} satisfies Config;
