<template>
  <b-modal
    id="mdLogin"
    hide-header
    hide-footer
    style="width: 600px, height: 680px">
    <iframe
      :src="'https://modesens.com/accounts/login/?next=' + nextUrl"
      width="100%"
      height="100%"
      frameborder="0"/>
  </b-modal>
</template>
<script>
export default {
  data() {
    return {
      nextUrl: this.$route.fullPath
    }
  }
}
</script>
<style lang="less">
.modal-content {
  width: 600px;
  border-radius: 0;
}
#mdLogin {
  .modal-body {
    height: 680px;
  }
}
</style>
