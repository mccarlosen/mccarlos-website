<template>
  <section>
    <article>
      <div class="mb-10 article" v-html="$prismic.asHtml(about.content)"></div>
    </article>
  </section>
</template>

<script>
export default {
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
}
</script>
