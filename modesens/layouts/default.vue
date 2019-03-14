<template>
  <div class="root-container">
    <Header/>
    <main class="main-container">
      <nuxt/>
    </main>
    <Footer/>
    <div
      class="wrapper-mask hidden"
      @click="hideMenu"/>
    <Modals/>
  </div>
</template>
<script>
import '~/assets/js/main.js'
import Header from '~/components/header/Header.vue'
import Footer from '~/components/Footer.vue'
import Modals from '~/components/Modals.vue'
export default {
  head() {
    let link = []
    let meta = []
    let path = this.$route.path
    let request = this.$store.state.request
    if (request) {
      if (path.indexOf('/us/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.com${this.$route.path}`
        })
      } else if (path.indexOf('/uk/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.uk${this.$route.path}`
        })
      } else if (path.indexOf('/ca/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.ca${this.$route.path}`
        })
      } else if (path.indexOf('/cn/zh/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.cn${this.$route.path}`
        })
      } else if (path.indexOf('/uk/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.uk${this.$route.path}`
        })
      } else if (path.indexOf('/au/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.au${this.$route.path}`
        })
      } else if (path.indexOf('/fr/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.fr${this.$route.path}`
        })
      } else if (path.indexOf('/de/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.de${this.$route.path}`
        })
      } else if (path.indexOf('/it/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.it${this.$route.path}`
        })
      } else if (path.indexOf('/jp/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.jp${this.$route.path}`
        })
      } else if (path.indexOf('/kr/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.kr${this.$route.path}`
        })
      } else if (path.indexOf('/nl/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.nl${this.$route.path}`
        })
      } else if (path.indexOf('/ru/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.ru${this.$route.path}`
        })
      } else if (path.indexOf('/es/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.es${this.$route.path}`
        })
      } else if (path.indexOf('/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.com${this.$route.path}`
        })
      } else if (path.indexOf('/zh/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.cn${this.$route.path}`
        })
      } else {
        link.push({
          rel: 'canonical',
          href: `https://${request.ROOT_DAMAIN}${this.$route.path}`
        })
      }
    }
    // 搜索页防爬处理
    // meta.push({
    //   name: 'robots',
    //   content: 'noindex'
    // })
    meta.push({
      name: 'apple-itunes-app',
      content: `app-id=976201094, app-argument=https://modesens.com${path}`
    })
    return {
      link,
      meta
    }
  },
  components: {
    Header,
    Footer,
    Modals
  },
  created() {
    console.log(this.$route)
  },
  mounted() {},
  methods: {
    hideMenu() {
      $('#nav_collapse').animate({ left: '-100%' })
      $('.header').animate({ left: 0 })
      $('.header .navbar-expand-xl').removeClass('show')
      $('.wrapper-mask').addClass('hidden')
    }
  }
}
</script>
<style>
</style>
