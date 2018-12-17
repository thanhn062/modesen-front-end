<template>
  <b-modal
    v-if="lsuid===''"
    id="mdLogin"
    hide-header
    hide-footer
    style="width: 600px, height: 680px">
    <iframe
      :src="'http://127.0.0.1:8000/accounts/login/?next=' + nextUrl"
      width="100%"
      height="100%"
      frameborder="0"/>
  </b-modal>
</template>
<script>
export default {
  props: {
    lsuid: {
      type: String,
      default: function() {
        return '123'
      }
    }
  },
  data() {
    return {
      nextUrl: this.$route.fullPath
    }
  },
  created() {
    console.log(this.nextUrl)
  }
}
</script>
<style lang="less">
.modal-content {
  // width: 600px;
  border-radius: 0;
}
#mdLogin {
  .modal-body {
    height: 680px;
  }
}
</style>
