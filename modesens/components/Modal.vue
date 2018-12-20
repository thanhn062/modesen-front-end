<template>
  <div>
    <b-modal
      v-if="lsuid===''"
      id="mdLogin"
      ref="mdLogin"
      hide-header
      hide-footer
      style="width: 600px,height: 680px">
      <button
        class="close closebtn"
        @click="hideLoginModal"><img src="/img/close.svg"></button>
      <iframe
        :src="BASE_URL+'/accounts/login/?next=/loyalty/'"
        width="100%"
        height="100%"
        frameborder="0"/>
    </b-modal>
  </div>
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
  created() {},
  methods: {
    hideLoginModal() {
      this.$refs.mdLogin.hide()
    }
  }
}
</script>
<style lang="less">
.modal-content {
  // width: 600px;
  border-radius: 0;
}
#mdLogin {
  button {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  .modal-body {
    height: 680px;
  }
}
</style>
