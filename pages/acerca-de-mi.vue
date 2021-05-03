<template>
  <section>
    <article>
      <div class="mb-10 article" v-html="$prismic.asHtml(about.content)"></div>
    </article>
  </section>
</template>

<script>
import mixins from '../plugins/mixins'
export default {
  mixins: [mixins],
  async asyncData({ $prismic, error }) {
    try {
      const about = (await $prismic.api.getSingle('about')).data
      return {
        about,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Página no encontrada' })
    }
  },
  head() {
    return {
      title: 'Acerca de mi',
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://carlosmeneses.com' + this.$route.path,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Acerca de mi',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.truncate(this.$prismic.asText(this.about.content), 250),
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'Acerca de mi',
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.truncate(this.$prismic.asText(this.about.content), 250),
        },
      ],
    }
  },
}
</script>
