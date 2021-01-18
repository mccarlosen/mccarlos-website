<template>
  <div class="flex items-center pt-14">
    <div class="flex flex-col items-center mx-auto w-96">
      <img
        src="../assets/images/logo-carlos-meneses-iniciales.svg"
        alt="Logo Iniciales Carlos Meneses"
        class="mb-8"
      />
      <div class="text-left">
        <div class="font-saira font-medium text-2xl pl-1">Soy</div>
        <h1 class="font-saira font-semibold text-5xl leading-tight">
          {{ home.title[0].text }}
        </h1>
      </div>
      <span class="font-saira font-medium text-2xl mb-8">{{
        home.subtitle[0].text
      }}</span>
      <div class="flex font-saira font-medium mb-8">
        <NuxtLink
          v-for="(cat, id) in categories.results"
          :key="id"
          :to="`/categorias/${cat.uid}`"
          :class="[
            'block text-color-3 uppercase',
            { 'mr-4': id + 1 < categories.results.length },
          ]"
        >
          #{{ cat.data.text }}
        </NuxtLink>
      </div>
      <p class="text-center font-saira mb-10">
        {{ home.description[0].text }}
      </p>
      <NuxtLink
        to="/acerca-de-mi"
        class="flex justify-between items-center font-saira font-semibold text-color-5 bg-color-6 border border-color-7 rounded-full px-4 py-2"
      >
        Saber más &nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14.877"
          height="14.5"
          viewBox="0 0 14.877 14.5"
        >
          <path
            id="fecha_right"
            d="M6.325-12.654a.792.792,0,0,0,.013,1.139l4,3.812H.8a.8.8,0,0,0-.8.8v1.063a.8.8,0,0,0,.8.8h9.543l-4,3.812A.8.8,0,0,0,6.325-.1l.737.737a.794.794,0,0,0,1.126,0l6.455-6.455a.794.794,0,0,0,0-1.126L8.188-13.391a.794.794,0,0,0-1.126,0Z"
            transform="translate(0 13.625)"
            fill="#fff"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    try {
      const home = (await $prismic.api.getSingle('home')).data
      const categories = await $prismic.api.query([
        $prismic.predicates.at('document.type', 'category'),
      ])
      return {
        home,
        categories,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Página no encontrada' })
    }
  },
}
</script>
