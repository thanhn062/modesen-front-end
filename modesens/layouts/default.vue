<template>
  <div class="root-container">
    <Header
      v-if="hasHeader"
      :lsuid="lsuid"/>
    <main class="main-container">
      <nuxt/>
    </main>
    <Footer
      v-if="hasFooter"
      :isPC="isPC"/>
    <div
      class="wrapper-mask hidden"
      @click="hideMenu"/>
    <Modals :lsuid="lsuid"/>
  </div>
</template>
<script>
import '~/assets/js/main.js'
import Header from '~/components/header/Header.vue'
import Footer from '~/components/Footer.vue'
import Modals from '~/components/Modals.vue'
export default {
  // middleware: 'countries',
  components: {
    Header,
    Footer,
    Modals
  },
  create() {
    let url = this.$route.fullPath
    if (url.match(/\/accounts\/login\//)) {
      hasHeader = false
      hasFooter = false
    }
    console.log(url)
  },
  data() {
    return {
      hasHeader: true,
      hasFooter: true,
      headerHeight: '50px 0',
      lsuid: '',
      isPC: true
    }
  },
  mounted() {
    this.headerHeight = $('header').height() + 'px 0'
    if ($(window).width() < 1200) {
      this.isPC = false
    }
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
