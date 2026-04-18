export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-brand-navy',
    'text-brand-gray',
    'text-brand-blue',
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0F172A',
        'brand-blue': '#0077B6',
        'brand-lightBlue': '#00B4D8',
        'brand-gray': '#F8FAFC',
      },
      fontFamily: {
        serif: ['"Tajawal"', 'serif'],
        sans: ['"Tajawal"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
