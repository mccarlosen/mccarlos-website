<template>
  <div class="pb-48">
    <div v-for="(c, id) in creations.data.body" :key="id" class="mb-24">
      <h2 class="font-saira font-bold text-2xl mb-10">
        {{ c.primary.title[0].text }}
      </h2>
      <div v-for="(item, index) in c.items" :key="index" class="flex mb-8">
        <div class="w-1/4 mr-6">
          <img
            class="object-cover rounded-md shadow-md"
            :src="item.image.url"
            alt=""
          />
        </div>
        <div class="w-3/4 flex flex-col">
          <div class="text-2xl font-saira font-medium leading-7 mb-2">
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
}
</script>
