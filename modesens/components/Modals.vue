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
    <b-modal
      id="cumodal"
      :title="$t('common.ContactUs')"
      @hidden="cumodalHide()">
      <div>
        <div v-if="hereHasClick === false">
          <div class="control-label">{{ $t('cuModal.desc1') }}</div>
          <br>
          <div>
            {{ $t('cuModal.desc2') }}<br>
            <span v-if="$i18n.locale==='zh'">访问我们的<a href="/faq/">帮助中心</a>，在那里你可以找到常见问题解决方案，以及客服中心联络方式信息。</span>
            <span v-else>Visit our <a href="/faq/">Help Center</a> where you can find frequently asked questions, as well as Customer Care contact information.</span>
          </div>
          <br>
          <div>
            {{ $t('cuModal.desc3') }}
            <span v-if="$i18n.locale === 'zh'">在<a
              href="javascript:;"
              @click="hereClick">这里</a>提交你的请求</span>
            <span v-else>Submit your request <a
              href="javascript:;"
              @click="hereClick">here</a>.</span>
          </div>
          <br>
          <div>
            {{ $t('cuModal.desc4') }}
            <a href="mailto:info@modesens.com">press@modesens.com.</a>
          </div>
          <br>
          <div>ModeSens Inc.<br>815 Brazos St., Ste. 500<br>Austin, TX 78701<br>USA</div>
        </div>
        <div v-else>
          <div>{{ $t('cuModal.desc3') }}{{ $t('cuModal.desc5') }}</div>
          <form>
            <div>
              <label for="contact-company">{{ $t('common.YourCompanyName') }}</label><br>
              <input
                id="contact-company"
                name="company"
                type="text">
            </div>
            <div>
              <label for="contact-name">{{ $t('common.YourName') }}</label><br>
              <input
                id="contact-name"
                name="name"
                type="text">
            </div>
            <div>
              <label for="contact-url">{{ $t('common.URL') }}</label><br>
              <input
                id="contact-url"
                name="url"
                type="text">
            </div>
            <div>
              <label for="contact-email">{{ $t('common.Email') }}</label><br>
              <input
                id="contact-email"
                name="email"
                type="text">
            </div>
            <div>
              <label for="contact-intro">{{ $t('common.Introduction') }}</label><br>
              <textarea
                id="contact-intro"
                name="intro"/>
            </div>
          </form>
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
  data() {
    return {
      hereHasClick: false
    }
  },
  methods: {
    hideLoginModal() {
      this.$refs.mdLogin.hide()
    },
    hereClick() {
      this.hereHasClick = !this.hereHasClick
    },
    cumodalHide() {
      this.hereHasClick = false
    }
  }
}
</script>
<style lang="less">
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
#cumodal {
  .modal-body {
    a {
      text-decoration: underline;
    }
  }
}
</style>
