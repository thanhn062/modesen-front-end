<template>
  <div class="root-container">
    <Header :lsuid="lsuid"/>
    <main class="main-container">
      <nuxt/>
    </main>
    <Footer :isPC="isPC"/>
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
  data() {
    return {
      // headerHeight: '50px 0',
      lsuid: '',
      isPC: true
    }
  },
  created() {
    console.log(555555, 'default-created')
  },
  mounted() {
    // this.headerHeight = $('header').height() + 'px 0'
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
