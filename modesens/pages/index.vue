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
      <!-- <b-btn @click="showMOdal">showmodal</b-btn> -->
      <!-- <b-modal v-show="mdLoginShow">
        <h3>lffffffffff</h3>
      </b-modal> -->
      <!-- {{ gconfig }} -->
      {{ $store.state.login_status }}
      <div
        v-click-outside="testoutside"
        style="width: 100px;height: 100px;border: 1px solid">
        dlfkjsldfjl
        <div>jjjjjjjj</div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    // let { COUNTRIES } = await $axios.post('/config/', {
    //   secretkey: process.env.secretKey
    // })
    // return { COUNTRIES }
    console.log(1111, 'index-asyncdata')
  },
  computed: {
    mdLoginShow() {
      return this.$store.state.mdLoginShow
    }
  },
  created() {
    console.log(2222, 'index-created')
  },
  methods: {
    showMOdal() {
      this.$store.commit('modifyMdLoginShow')
    },
    testoutside() {
      // console.log('999999999')
    }
  }
}
</script>
<style>
</style>
