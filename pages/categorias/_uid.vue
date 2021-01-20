<template>
  <div class="post-list">
    <div class="text-gray-600 font-saira font-bold text-2xl mb-6">
      Categoría: <span class="font-medium uppercase">{{ category }}</span>
    </div>

    <div v-if="!posts.results.length" class="font-light text-gray-600">
      No hay publicaciones en esta categoría
    </div>

    <div v-for="(post, index) in posts.results" :key="index" class="post mb-6">
      <div class="font-saira font-light text-base text-gray-600 mb-1">
        {{ post.data.date | formatDate }}
      </div>
      <div class="post-title">
        <div
          class="font-saira font-medium leading-9 hover:underline text-3xl mb-3 lg:leading-10"
        >
          <NuxtLink :to="`/publicaciones/${post.uid}`">
            {{ post.data.title[0].text }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from '~/plugins/mixins'
export default {
  mixins: [mixins],
  async asyncData({ $prismic, error, params }) {
    try {
      const posts = await $prismic.api.query([
        $prismic.predicates.at('document.tags', [params.uid]),
      ])
      return {
        category: params.uid,
        posts,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Página no encontrada' })
    }
  },
  head() {
    return {
      title: 'Carlos Meneses - Categoría: ' + this.category,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://carlosmeneses.com' + this.$route.path,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Carlos Meneses - Categoría: ' + this.category,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Estos son mis artículos publicados en la categoría de ' +
            this.category,
        },
      ],
    }
  },
}
</script>
