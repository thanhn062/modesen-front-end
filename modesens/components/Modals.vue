<template>
  <div>
    <!-- 登录modal -->
    <b-modal
      v-if="$store.state.login_status===false"
      id="mdLogin"
      ref="mdLogin"
      hide-header
      hide-footer
      style="width: 600px,height: 680px">
      <button
        class="close"
        @click="hideLoginModal"><img src="/img/close.svg"></button>
      <iframe
        :src="'/vue/accounts/login/?next=' + $route.fullPath"
        width="100%"
        height="100%"
        frameborder="0"/>
    </b-modal>
    <!-- 客服 -->
    <b-modal
      id="service-modal"
      ref="cuModalCn"
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
    <!-- Connect Us -->
    <b-modal
      id="cumodal"
      ref="cuModal"
      :title="$t('common.ContactUs')"
      :ok-title="hereHasClick ? $t('common.Submit') : $t('common.Close')"
      ok-only
      @ok="contactSubmit"
      @hidden="cumodalHide">
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
              <label for="contact-company">{{ $t('Modals.YourCompanyName') }}</label><br>
              <input
                id="contact-company"
                v-model="company"
                name="company"
                type="text">
            </div>
            <div>
              <label for="contact-name">{{ $t('Modals.YourName') }}</label><br>
              <input
                id="contact-name"
                v-model="name"
                name="name"
                type="text">
            </div>
            <div>
              <label for="contact-url">{{ $t('common.URL') }}</label><br>
              <input
                id="contact-url"
                v-model="url"
                name="url"
                type="text">
            </div>
            <div>
              <label for="contact-email">{{ $t('common.Email') }}</label><br>
              <input
                id="contact-email"
                v-model="email"
                name="email"
                type="text">
            </div>
            <div>
              <label for="contact-intro">{{ $t('common.Introduction') }}</label><br>
              <textarea
                id="contact-intro"
                v-model="introduction"
                name="intro"/>
            </div>
          </form>
        </div>
      </div>
    </b-modal>
    <!-- Feedback -->
    <b-modal
      id="FbModal"
      ref="FbModal"
      :title="$t('Footer.feedback')"
      :ok-title="$t('FbModal.Sendmessage')"
      :cancel-title="$t('common.Close')"
      @ok="sendFeedback">
      <div>{{ $t('FbModal.desc1') }}</div>
      <br>
      <div v-if="isSendFeedback===false">
        <div>{{ $t('FbModal.desc2') }}</div>
        <br>
        <form role="form">
          <div class="form-group">
            <input
              :placeholder="$t('FbModal.inputtxt')"
              v-model="contactEmail"
              type="email"
              class="form-control">
          </div>
          <div class="form-group">
            <textarea
              :placeholder="$t('FbModal.textareatxt')"
              v-model="contactMsg"
              class="form-control"/>
          </div>
        </form>
      </div>
      <div
        v-else
        id="fbsuceed"
        class="fb-thanks">{{ $t('FbModal.desc3') }}</div>
    </b-modal>
    <!-- China notice modal -->
    <b-modal
      id="noticemodal1"
      ok-only>
      <h3>Coming soon for China. Please stay in tune.</h3>
    </b-modal>
    <!-- sign out modal -->
    <b-modal
      id="signoutmodal"
      :title="$t('common.SeeYouSoon')"
      :ok-title="$t('common.SignOut')"
      size="sm"
      ok-only
      @ok="signout">
      <img
        :src="gconfig.LOGO_ASSISTRANT_ZH"
        :alt="$t('common.ModeSens')">
    </b-modal>
    <!-- notice -->
    <b-modal
      v-if="$store.state.login_status"
      id="noticeproductmd"
      hide-header
      hide-footer
      @shown="showNoticemd">
      <iframe
        src="https://modesens.com/notice/product/"
        width="100%"
        height="100%"
        frameborder="0"/>
    </b-modal>
    <b-modal
      v-if="$store.state.login_status"
      id="noticeusermd"
      hide-header
      hide-footer
      @shown="showNoticemd">
      <iframe
        src="https://modesens.com/notice/me/"
        width="100%"
        height="100%"
        frameborder="0"/>
    </b-modal>
    <b-modal
      id="spmodal"
      :title="$t('Modals.Pleasesignin')"
      :ok-title="$t('common.SignUp')"
      :cancel-title="$t('common.Login')"
      @ok="gotoSignup"
      @cancel="openLoginModal">
      <div style="fontSize: 24px;">{{ $t('Modals.Notamemberyet') }}<span id="spmsg">{{ $t('Modals.JoinModeSens') }}</span></div>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hereHasClick: false,
      company: '',
      name: '',
      url: '',
      email: '',
      introduction: '',
      isSendFeedback: false,
      contactEmail: '',
      contactMsg: ''
    }
  },
  computed: {
    mdLoginShow() {
      return this.$store.state.mdLoginShow
    }
  },
  methods: {
    openLoginModal(evt) {
      evt.preventDefault()
      this.$refs.mdLogin.show()
    },
    hideLoginModal() {
      this.$refs.mdLogin.hide()
    },
    hereClick() {
      this.hereHasClick = !this.hereHasClick
    },
    cumodalHide() {
      this.hereHasClick = false
    },
    async contactSubmit(evt) {
      if (this.hereHasClick) {
        // if (this.company) {
        //   $('#contact-company').css('border-color', '#8E8E8E')
        // } else {
        //   $('#contact-company').css('border-color', 'red')
        //   return
        // }
        // if (this.name) {
        //   $('#contact-name').css('border-color', '#8E8E8E')
        // } else {
        //   $('#contact-name').css('border-color', 'red')
        //   return
        // }
        // if (this.url) {
        //   $('#contact-url').css('border-color', '#8E8E8E')
        // } else {
        //   $('#contact-url').css('border-color', 'red')
        //   return
        // }
        // if (this.email) {
        //   $('#contact-email').css('border-color', '#8E8E8E')
        // } else {
        //   $('#contact-email').css('border-color', 'red')
        //   return
        // }
        this.introduction = this.introduction.trim()
        // var data = `company=${this.company}&name=${this.name}&url=${
        //   this.url
        // }&email=${this.email}&intro=${this.introduction}`
        let data = new Object()
        data.company = this.company
        data.name = this.name
        data.url = this.url
        data.email = this.email
        data.intro = this.introduction
        let obj = await this.$axios.post('/customeremail/', data)
        if (obj.result !== 'success') {
          evt.preventDefault()
        }
      }
    },
    async sendFeedback(evt) {
      evt.preventDefault()
      if (!this.contactMsg) {
        alert(this.$t('FbModal.aletmsg'))
        return
      }
      let data = new Object()
      data.from_href = window.location.href
      data.contact = this.contactEmail
      data.content = this.contactMsg
      let obj = await this.$axios.post('/feedback/', data)
      this.isSendFeedback = true
      setTimeout(() => {
        this.$refs.FbModal.hide()
        this.contactMsg = ''
        this.isSendFeedback = false
      }, 3000)
    },
    async signout() {
      this.$cookies.remove(this.gconfig.ACCESS_TOKEN)
      this.$localStorage.remove(this.gconfig.USERINFO)
      this.$store.commit('modifyLoginStatus')
      this.$store.commit('removeLsuser')
      this.$store.state.login_status = false
      window.open('/', '_self')
    },
    gotoSignup(evt) {
      evt.preventDefault()
      window.open('/accounts/signup/?next=' + this.$route.fullPath, '_blank')
    },
    showNoticemd(evt) {
      console.log(434434)
      console.log($(evt.target).find('.modal-dialog'))
      // console.log($('#noticeproductmd').next('.modal-backdrop').css({ top: $('.header').height() }))
      let headerH = $('.header').height()
      $(evt.target)
        .next('.modal-backdrop')
        .css({ top: headerH })
      $(evt.target)
        .find('.modal-dialog')
        .css({
          marginTop: headerH,
          height: $(window).height() - headerH - 10
        })
      $(evt.target)
        .find('.modal-body')
        .css({ padding: 0 })
    }
  }
}
</script>
<style lang="less">
@import '../assets/css/common.less';
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
#cumodal {
  text-align: left;
  .modal-body {
    a {
      text-decoration: underline;
    }
  }
  .btn-primary {
    color: #333;
    background-color: @btnFontColor;
    border-color: @borderColor;
    &:hover {
      color: @btnFontColor;
      background-color: @btnBgColor;
      border-color: @btnBgColor;
    }
  }
  form {
    margin-top: @descSpace-s;
    div {
      float: left;
      width: 45%;
      box-sizing: border-box;
      &:nth-of-type(2n) {
        margin-left: 10%;
      }
      &:nth-of-type(5) {
        width: 100%;
      }
    }
    label {
      font-weight: 700;
    }
    input {
      width: 100%;
      margin-bottom: 10px;
      border: @border;
    }
    textarea {
      width: 100%;
      margin-bottom: 10px;
      border: @border;
    }
  }
}
#FbModal {
  .btn-secondary {
    color: #333;
    background-color: @btnFontColor;
    border-color: @borderColor;
    &:hover {
      color: @btnFontColor;
      background-color: @btnBgColor;
      border-color: @btnBgColor;
    }
  }
  .fb-thanks {
    padding: 30px 15px;
    font-size: 18px;
    height: 186px;
    text-align: center;
  }
}
#signoutmodal {
  text-align: center;
  img {
    width: 300px;
  }
}
#noticeproductmd,
#noticeusermd {
  .modal-dialog {
    margin-right: 0;
  }
}
</style>
