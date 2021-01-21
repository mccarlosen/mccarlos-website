<template>
  <div class="h-full w-full font-body">
    <div class="container pb-24 pt-12 px-8 lg:px-24 xl:px-40 2xl:px-84">
      <header
        class="flex flex-col justify-between items-center mb-16 md:flex-row"
        :class="{ 'md:mb-24 lg:mb-32': !showLogo, 'lg:mb-16': showLogo }"
      >
        <!-- nav -->
        <nav
          :class="[
            'w-full flex items-center justify-end text-lg text-color-1 font-saira tracking-tighter mb-8 md:w-auto md:mb-0 dark:text-white',
            { 'justify-between': showLogo },
          ]"
        >
          <NuxtLink to="/">
            <img
              v-if="showLogo"
              src="../assets/images/logo-carlos-meneses-iniciales.svg"
              alt="Logo Iniciales Carlos Meneses"
              class="w-20 mr-5 md:mr-3 lg:mr-5 xl:mr-6 2xl:mr-7"
            />
          </NuxtLink>
          <div class="items-center hidden md:flex">
            <NuxtLink
              class="rounded-full transition duration-200 ease-in-out hover:bg-color-4 px-4 py-1 mr-4 md:mr-3"
              exact-active-class="active-link"
              to="/"
              >Inicio</NuxtLink
            >
            <NuxtLink
              class="rounded-full transition duration-200 ease-in-out hover:bg-color-4 px-4 py-1 mr-4 md:mr-3"
              exact-active-class="active-link"
              to="/acerca-de-mi"
              >Acerca de mi</NuxtLink
            >
            <NuxtLink
              class="rounded-full transition duration-200 ease-in-out hover:bg-color-4 px-4 py-1 mr-4 md:mr-3"
              exact-active-class="active-link"
              to="/publicaciones"
              >Posts</NuxtLink
            >
            <NuxtLink
              class="rounded-full transition duration-200 ease-in-out hover:bg-color-4 px-4 py-1"
              exact-active-class="active-link"
              to="/creaciones"
              >Creaciones</NuxtLink
            >
          </div>
          <div
            id="icon-open-menu"
            :class="['fixed z-20 md:hidden', { open: openMenu }]"
            @click="toggleOpen"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        <!-- redes -->
        <div class="flex">
          <a
            class="bg-color-1 rounded-full p-2 mr-4"
            target="_blank"
            rel="noopener"
            title="Mi perfil de linkedin"
            href="https://www.linkedin.com/in/mccarlos"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
          <a
            class="bg-color-1 rounded-full p-2 mr-4"
            target="_blank"
            rel="noopener"
            title="Mi perfil de twitter"
            href="https://twitter.com/mccarlosen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
          </a>
          <a
            class="bg-color-1 rounded-full p-2"
            target="_blank"
            rel="noopener"
            title="Mi perfil de github"
            href="https://github.com/mccarlosen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
        </div>
        <!-- drawer sidebar -->
        <div
          v-show="openMenu"
          class="z-10 fixed inset-0 transition-opacity"
          @click="toggleOpen"
        >
          <div tabindex="0" class="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </header>
      <div class="content">
        <Nuxt />
      </div>
      <aside
        :class="[
          'transform top-0 left-0 w-64 bg-white dark:bg-gray-700 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 shadow-md',
          { 'translate-x-0': openMenu, '-translate-x-full': !openMenu },
        ]"
      >
        <div
          class="px-10 py-10 flex flex-col font-saira tracking-tighter dark:text-white"
        >
          <NuxtLink to="/">
            <img
              v-if="showLogo"
              src="../assets/images/logo-carlos-meneses-iniciales.svg"
              alt="Logo Iniciales Carlos Meneses"
              class="w-20 mb-5"
            />
          </NuxtLink>
          <NuxtLink
            class="w-full rounded-full transition duration-200 ease-in-out hover:bg-color-4 px-4 py-1 mb-4"
            exact-active-class="active-link"
            to="/"
            >Inicio</NuxtLink
          >
          <NuxtLink
            class="w-full rounded-full transition duration-200 ease-in-out hover:bg-color-4 px-4 py-1 mb-4"
            exact-active-class="active-link"
            to="/acerca-de-mi"
            >Acerca de mi</NuxtLink
          >
          <NuxtLink
            class="w-full rounded-full transition duration-200 ease-in-out hover:bg-color-4 px-4 py-1 mb-4"
            exact-active-class="active-link"
            to="/publicaciones"
            >Posts</NuxtLink
          >
          <NuxtLink
            class="w-full rounded-full transition duration-200 ease-in-out hover:bg-color-4 px-4 py-1"
            exact-active-class="active-link"
            to="/creaciones"
            >Creaciones</NuxtLink
          >
        </div>
      </aside>
    </div>
    <div
      class="fixed bottom-0 w-full h-12 bg-gray-100 dark:bg-gray-700 border-t border-gray-300 dark:border-gray-700 shadow"
    >
      <!-- footer -->
      <div class="h-12 flex justify-end items-center px-4">
        <!-- <a
          href="/cv.pdf"
          target="_blank"
          class="rounded-full border border-color-2 text-color-1 text-xs dark:border-gray-500 dark:text-white focus:outline-none hover:bg-gray-300 dark-hover:bg-gray-900 px-3 py-1 mr-6"
        >
          Descargar CV
        </a> -->
        <button
          v-if="!darkMode"
          title="Modo nocturno"
          class="focus:outline-none"
          @click.prevent="toggleDarkMode"
        >
          <svg
            height="24"
            viewBox="-12 0 448 448.04455"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m224.023438 448.03125c85.714843.902344 164.011718-48.488281 200.117187-126.230469-22.722656 9.914063-47.332031 14.769531-72.117187 14.230469-97.15625-.109375-175.890626-78.84375-176-176 .972656-65.71875 37.234374-125.832031 94.910156-157.351562-15.554688-1.980469-31.230469-2.867188-46.910156-2.648438-123.714844 0-224.0000005 100.289062-224.0000005 224 0 123.714844 100.2851565 224 224.0000005 224zm0 0"
            />
          </svg>
        </button>
        <button
          v-else
          title="Modo luz"
          class="focus:outline-none"
          @click.prevent="toggleDarkMode"
        >
          <svg
            fill="#ffffff"
            height="24"
            viewBox="0 0 480 480"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m368 240c0 70.691406-57.308594 128-128 128s-128-57.308594-128-128 57.308594-128 128-128 128 57.308594 128 128zm0 0"
            />
            <path
              d="m248 472v-64c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v64c0 4.417969 3.582031 8 8 8s8-3.582031 8-8zm0 0"
            />
            <path
              d="m240 80c4.417969 0 8-3.582031 8-8v-64c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v64c0 4.417969 3.582031 8 8 8zm0 0"
            />
            <path
              d="m114.34375 125.65625c3.140625 3.03125 8.128906 2.988281 11.214844-.097656 3.085937-3.085938 3.128906-8.074219.097656-11.214844l-48-48c-3.140625-3.03125-8.128906-2.988281-11.214844.097656-3.085937 3.085938-3.128906 8.074219-.097656 11.214844zm0 0"
            />
            <path
              d="m365.65625 354.34375c-3.140625-3.03125-8.128906-2.988281-11.214844.097656-3.085937 3.085938-3.128906 8.074219-.097656 11.214844l48 48c3.140625 3.03125 8.128906 2.988281 11.214844-.097656 3.085937-3.085938 3.128906-8.074219.097656-11.214844zm0 0"
            />
            <path
              d="m360 128c2.121094 0 4.15625-.84375 5.65625-2.34375l48-48c3.03125-3.140625 2.988281-8.128906-.097656-11.214844-3.085938-3.085937-8.074219-3.128906-11.214844-.097656l-48 48c-2.285156 2.289062-2.972656 5.730469-1.734375 8.71875s4.15625 4.9375 7.390625 4.9375zm0 0"
            />
            <path
              d="m472 232h-64c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h64c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8zm0 0"
            />
            <path
              d="m8 248h64c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-64c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8zm0 0"
            />
            <path
              d="m77.65625 413.65625 48-48c3.03125-3.140625 2.988281-8.128906-.097656-11.214844-3.085938-3.085937-8.074219-3.128906-11.214844-.097656l-48 48c-2.078125 2.007812-2.914062 4.984375-2.179688 7.78125.730469 2.796875 2.914063 4.980469 5.710938 5.710938 2.796875.734374 5.773438-.101563 7.78125-2.179688zm0 0"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
      showLogo: false,
      openMenu: false,
    }
  },
  watch: {
    $route() {
      this.showLogo = false
      this.openMenu = false
      if (this.$route.path !== '/') {
        this.showLogo = true
      }
    },
    openMenu: {
      immediate: true,
      handler(openMenu) {
        if (process.client) {
          if (openMenu) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  mounted() {
    // check theme
    if (
      localStorage.theme === 'mode-dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: mode-dark)').matches)
    ) {
      this.darkMode = true
      document.querySelector('html').classList.add('mode-dark')
      document.querySelector('body').classList.add('bg-white')
      document.querySelector('body').classList.add('dark:bg-gray-800')
      document.querySelector('body').classList.add('dark:text-white')
    } else {
      this.darkMode = false
      document.querySelector('html').classList.remove('mode-dark')
    }
    // check principal route
    if (this.$route.path !== '/') {
      this.showLogo = true
    }
  },
  methods: {
    toggleOpen() {
      this.openMenu = !this.openMenu
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      if (this.darkMode) {
        document.querySelector('html').classList.add('mode-dark')
        document.querySelector('body').classList.add('bg-white')
        document.querySelector('body').classList.add('dark:bg-gray-800')
        document.querySelector('body').classList.add('dark:text-white')
        localStorage.setItem('theme', 'mode-dark')
      } else {
        document.querySelector('html').classList.remove('mode-dark')
        localStorage.removeItem('theme')
      }
    },
  },
}
</script>
