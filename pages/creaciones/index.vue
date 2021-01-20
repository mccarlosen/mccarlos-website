<template>
  <div>
    <div v-for="(c, id) in creations.data.body" :key="id" class="mb-12">
      <h2 class="font-saira font-bold text-2xl mb-10">
        {{ c.primary.title[0].text }}
      </h2>
      <div v-for="(item, index) in c.items" :key="index" class="mb-8 md:flex">
        <div class="w-full mb-4 md:w-2/5 md:mr-4 lg:mr-8">
          <img
            class="object-cover object-center inset-0 border border-gray-200 rounded-md shadow-md w-full h-full"
            :src="item.image.url"
            :alt="item.image.alt"
          />
        </div>
        <div class="flex flex-col md:w-3/5">
          <div
            class="text-2xl font-saira font-medium leading-8 mb-4 lg:text-3xl lg:leading-10"
          >
            {{ item.title[0].text }}
          </div>
          <div
            class="post-details font-light"
            v-html="$prismic.asHtml(item.description)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    try {
      const creations = await $prismic.api.getSingle('creation')
      return {
        creations,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Página no encontrada' })
    }
  },
  head() {
    return {
      title: 'Carlos Meneses - Creaciones',
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://carlosmeneses.com' + this.$route.path,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Carlos Meneses - Creaciones',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Estas son algunas de mis creaciones y proyectos en los que trabajado hasta ahora.',
        },
      ],
    }
  },
}
</script>
