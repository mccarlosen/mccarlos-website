module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    mode: 'all',
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
  },
  // whitelist: ['mode-dark'],
  darkMode: 'class',
  theme: {
    darkSelector: '.dark',
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: '3.5em',
    },
    extend: {
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      lineHeight: {
        12: '3rem',
      },
      colors: {
        'color-1': '#0A1612',
        'color-2': '#1A2930',
        'color-3': '#F7CE3E',
        'color-4': '#C5C1C0',
        'color-5': '#FFFFFF',
        'color-6': '#FF0000',
        'color-7': '#E90000',
        'color-8': '#FFF7D1',
      },
    },
    fontFamily: {
      saira: ['Saira', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
    ],
    borderColor: ['dark', 'dark-disabled', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder'],
  },
  plugins: [require('tailwindcss-dark-mode')()],
}
