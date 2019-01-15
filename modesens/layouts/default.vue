<template>
  <div>
    <Header/>
    <main :style="{'padding': headerHeight}"><nuxt/></main>
    <Footer/>
    <Modals :lsuid="lsuid"/>
  </div>
</template>
<script>
import '~/assets/js/main.js'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Modals from '~/components/Modals.vue'
export default {
  components: {
    Header,
    Footer,
    Modals
  },
  data() {
    return {
      headerHeight: '50px 0',
      lsuid: ''
    }
  },
  mounted() {
    this.headerHeight = $('header').height() + 'px 0'
  }
}
</script>
<style>
</style>
