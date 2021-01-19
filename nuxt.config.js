/* eslint-disable */
export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: 'universal',

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'carlosmeneses.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/prismic',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],
  // Prismic
  prismic: {
    endpoint: 'https://mccarlos.cdn.prismic.io/api/v2',
    linkResolver: '~/plugins/link-resolver',
    htmlSerializer: '~/plugins/html-serializer',
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
