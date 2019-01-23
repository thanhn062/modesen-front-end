<template>
  <div>
    <Header :lsuid="lsuid"/>
    <main class="main-container"><nuxt/></main>
    <Footer :isPC="isPC"/>
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
  create() {},
  data() {
    return {
      headerHeight: '50px 0',
      lsuid: 'dd',
      isPC: true
    }
  },
  mounted() {
    this.headerHeight = $('header').height() + 'px 0'
    if ($(window).width() < 1200) {
      this.isPC = false
    }
  }
}
</script>
<style>
</style>
