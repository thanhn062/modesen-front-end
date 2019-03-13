<template>
  <div class="root-container">
    <nuxt/>
    <Modals/>
  </div>
</template>
<script>
import Modals from '~/components/Modals.vue'
export default {
  components: {
    Modals
  }
}
</script>
<style lang="less" scoped>
</style>
