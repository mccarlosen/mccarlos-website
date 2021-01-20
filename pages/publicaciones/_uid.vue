<template>
  <div class="post-details">
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
  head() {
    return {
      title: 'Carlos Meneses - ' + this.post.data.title[0].text,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://carlosmeneses.com' + this.$route.path,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Carlos Meneses - ' + this.post.data.title[0].text,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.truncate(
            this.$prismic.asText(this.post.data.content),
            250
          ),
        },
      ],
    }
  },
}
</script>
