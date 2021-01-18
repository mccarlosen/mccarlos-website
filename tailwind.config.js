module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false,
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '800px',
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true,
      padding: '3.5em'
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
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
      }
    },
    fontFamily: {
      saira: ['Saira', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [],
}
