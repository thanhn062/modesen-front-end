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
        src="/accounts/login/?next=/loyalty/"
        width="100%"
        height="100%"
        frameborder="0"/>
    </b-modal>
    <!-- 客服 -->
    <b-modal
      id="service-modal"
      size="sm"
      hide-header
      hide-footer>
      <div class="customer_service_head">
        <img src="/img/20190122customer_service.png">
      </div>
      <div class="customer_service_body">
        <p>{{ $t('service.help') }}<br>{{ $t('service.WeChat') }}</p>
        <div class="customer_service_body_qrcode">
          <img src="/img/20190122customer_service_qrcode.png">
        </div>
      </div>
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
  methods: {
    showLoginModal() {
      this.$refs.mdLogin.show()
    },
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
#service-modal {
  // width: 300px;
  padding-top: 40px;
  margin-top: 60px;
  .modal-body {
    padding: 0;
    border-radius: 0.3rem;
    background: #fff;
  }
  .modal-content {
    background: transparent;
    border: 0;
  }
  .customer_service {
    position: relative;
    width: 300px;
    border-radius: 6px;
    background: #fff;
  }
  .customer_service_head {
    position: absolute;
    left: 91px;
    top: -51px;
    width: 118px;
    height: 118px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .customer_service_body {
    position: relative;
    padding: 90px 52px 34px 52px;
    p {
      margin: 0 auto;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
    }
    .customer_service_body_qrcode {
      width: 142px;
      height: 149px;
      margin: 14px auto 0;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
