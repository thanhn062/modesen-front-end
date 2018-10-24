<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        modesens
      </h1>
      <h2 class="subtitle">
        ModeSens Frontend Nuxt Project<br>
        {{ $t('homepage.subtitle') }}
      </h2>
      <span>Current Country: {{ $i18n.country }}; Current Locale: {{ $i18n.locale }}</span><br>
      <nuxt-link
        v-for="locale in $i18n.locales"
        v-if="locale.code !== $i18n.locale"
        :key="locale.code"
        :to="switchLocalePath($i18n.country, locale.code)">{{ locale.name }}</nuxt-link>
      <div class="links">
        <nuxt-link
          to="/about/"
          class="button--green">{{ $t('about') }}</nuxt-link>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
        <nuxt-link :to="'/product/' + pid + '/'">To Product</nuxt-link>
        <nuxt-link to="/login/">Log In</nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      pid: '7582248'
    }
  }
}
</script>
<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
