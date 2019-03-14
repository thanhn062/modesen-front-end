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
    if (this.$store.state.request) {
      // if ($route.fullPath.match(/\/us\/en\//)) {
      link.push({
        rel: 'canonical',
        href: `https://modesens.com${this.$store.state.request.CANONICAL_URL}`
      })
      // }
    }
    return {
      meta: [
        {
          name: 'apple-itunes-app',
          content:
            'app-id=976201094, app-argument=https://modesens.com' +
            this.$route.fullPath
        }
      ],
      link
      // link: [
      //   { rel: 'canonical', href: 'https://modesens.com' },
      //   {
      //     rel: 'alternate',
      //     href: 'https://modesens.com',
      //     hreflang: 'x-default'
      //   }
      // ]
    }
  },
  components: {
    Header,
    Footer,
    Modals
  },
  created() {
    // console.log(this.$route)
  },
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
