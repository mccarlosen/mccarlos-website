<template>
  <div class="post-list">
    <div v-for="(post, index) in posts.results" :key="index" class="post mb-6">
      <div class="font-saira font-light text-sm text-gray-500">
        {{ post.data.date | formatDate }} -
        <NuxtLink
          class="hover:underline"
          :to="`/categorias/${post.data.category.uid}`"
          >#{{ post.data.category.slug }}</NuxtLink
        >
      </div>
      <div class="post-title">
        <div
          class="font-saira font-bold leading-9 hover:underline text-2xl mb-3"
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
  async asyncData({ $prismic, error }) {
    try {
      const posts = await $prismic.api.query([
        $prismic.predicates.at('document.type', 'post'),
      ])
      return {
        posts,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Página no encontrada' })
    }
  },
}
</script>
