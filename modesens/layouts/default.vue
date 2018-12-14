<template>
  <div>
    <nuxt/>
    <Modal v-if="login"/>
  </div>
</template>
<script>
import '~/assets/js/main.js'
import Modal from '~/components/Modal.vue'
export default {
  components: {
    Modal
  },
  data() {
    return {
      login: false
    }
  }
}
</script>
<style>
</style>
