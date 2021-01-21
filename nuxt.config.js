/* eslint-disable */
export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: 'universal', //'universal',

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Carlos Meneses - Desarrollador Web Full-Stack',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Carlos es un desarrollador web full-stack. Diseña y programa aplicaciones web con Laravel, Livewire, Vue, React.',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Carlos Meneses',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://carlosmeneses.com',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Carlos Meneses',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Carlos es un desarrollador web full-stack. Diseña y programa aplicaciones web con Laravel, Livewire, Vue, React.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://carlosmeneses.com/logo.jpg',
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Carlos Meneses',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content:
          'Carlos es un desarrollador web full-stack. Diseña y programa aplicaciones web con Laravel, Livewire, Vue, React.',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://carlosmeneses.com/logo.jpg',
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-ico', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&family=Saira:wght@100;200;300;400;500;600;700&display=swap',
      },
    ],
  },
  // Google Analytics
  googleAnalytics: {
    id: 'G-1LMPPWEYNE',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/sass/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://google-analytics.nuxtjs.org/setup
    '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/prismic'],
  // Prismic
  prismic: {
    endpoint: 'https://mccarlos.cdn.prismic.io/api/v2',
    linkResolver: '~/plugins/link-resolver',
    htmlSerializer: '~/plugins/html-serializer',
    preview: false,
  },

  generate: {
    fallback: '404.html',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  // server
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
}
