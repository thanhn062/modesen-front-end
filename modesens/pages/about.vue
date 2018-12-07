<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        modesens
      </h1>
      <h2 class="subtitle">
        {{ $t('aboutpage.subtitle') }}
      </h2>
      <div class="links">
        <span>Current Country: {{ $i18n.country }}; Current Locale: {{ $i18n.locale }}</span><br>
        <nuxt-link
          v-for="locale in $i18n.locales"
          v-if="locale.code !== $i18n.locale"
          :key="locale.code"
          :to="switchLocalePath($i18n.country, locale.code)">{{ locale.name }}</nuxt-link><br>
        <nuxt-link
          to="/"
          class="button--green">To Home</nuxt-link>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
    <!-- <iframe
      src="https://modesens.com/accounts/login/"
      width="100%"
      height="300px"
      frameborder="0"/> -->
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from '~/plugins/axios'
export default {
  components: {
    Logo
  },
  mounted() {
    this.getDesigner()
  },
  methods: {
    async getDesigner() {
      var designer = 'GUCCI'
      let obj = await axios.post('/invited/', {
        offset: 0,
        amount: 10
      })
      console.log(obj)
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
