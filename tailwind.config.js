export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-brand-dark',
    'bg-brand-dark/10',
    'text-brand-stone',
    'text-brand-gold',
    'border-brand-gold',
    'bg-brand-gold',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0a0a0a',
        'brand-charcoal': '#1a1a1a',
        'brand-gold': '#D4AF37',
        'brand-gold-light': '#F4E5B8',
        'brand-stone': '#E6E6E6',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
