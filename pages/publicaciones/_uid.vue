<template>
  <div class="post-details pb-24">
    <div class="font-saira font-medium leading-9 text-3xl mb-3 lg:leading-10">
      {{ post.data.title[0].text }}
    </div>
    <div class="font-saira font-light text-gray-600 mt-1 mb-8">
      {{ post.data.date | formatDate }} -
      <NuxtLink
        class="hover:underline"
        :to="`/categorias/${post.data.category.uid}`"
        >#{{ post.data.category.slug }}</NuxtLink
      >
    </div>

    <!-- content post -->
    <div class="content-post" v-html="$prismic.asHtml(post.data.content)"></div>
  </div>
</template>

<script>
import mixins from '~/plugins/mixins'
export default {
  mixins: [mixins],
  async asyncData({ $prismic, error, params }) {
    try {
      const post = await $prismic.api.getByUID('post', params.uid)
      return {
        post,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Página no encontrada' })
    }
  },
}
</script>
