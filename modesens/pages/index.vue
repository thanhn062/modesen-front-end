<template>
  <section class="container">
    <div>
      <nuxt-link
        v-for="locale in $i18n.locales"
        v-if="locale.code !== $i18n.locale"
        :key="locale.code"
        :to="switchLocalePath($i18n.country, locale.code)">{{ locale.name }}</nuxt-link>
      <div><nuxt-link to="/loyalty/">membership-intro</nuxt-link></div>
      <div><nuxt-link to="/account/loyalty/">membership</nuxt-link></div>
      <!-- {{ COUNTRIES }} -->
    </div>
  </section>
</template>
<script>
export default {
  // async asyncData({ $axios }) {
  //   let { COUNTRIES } = await $axios.post('/config/', {
  //     secretkey: process.env.secretKey
  //   })
  //   return { COUNTRIES }
  // }
}
</script>
<style>
</style>
