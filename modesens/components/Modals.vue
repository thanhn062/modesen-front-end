<template>
  <div>
    <!-- 登录modal -->
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
    <!-- Connect Us -->
    <b-modal
      id="cumodal"
      :title="$t('common.ContactUs')"
      :ok-title="hereHasClick ? $t('Submit') : $t('Close')"
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
              <label for="contact-company">{{ $t('common.YourCompanyName') }}</label><br>
              <input
                id="contact-company"
                v-model="company"
                name="company"
                type="text">
            </div>
            <div>
              <label for="contact-name">{{ $t('common.YourName') }}</label><br>
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
      :ok-title="$t('Sendmessage')"
      :cancel-title="$t('Close')"
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
  methods: {
    hideLoginModal() {
      this.$refs.mdLogin.hide()
    },
    hereClick() {
      this.hereHasClick = !this.hereHasClick
    },
    cumodalHide() {
      this.hereHasClick = false
    },
    contactSubmit(evt) {
      if (this.hereHasClick) {
        evt.preventDefault()
        if (this.company) {
          $('#contact-company').css('border-color', '#8E8E8E')
        } else {
          $('#contact-company').css('border-color', 'red')
          return
        }
        if (this.name) {
          $('#contact-name').css('border-color', '#8E8E8E')
        } else {
          $('#contact-name').css('border-color', 'red')
          return
        }
        if (this.url) {
          $('#contact-url').css('border-color', '#8E8E8E')
        } else {
          $('#contact-url').css('border-color', 'red')
          return
        }
        if (this.email) {
          $('#contact-email').css('border-color', '#8E8E8E')
        } else {
          $('#contact-email').css('border-color', 'red')
          return
        }
        this.introduction = this.introduction.trim()
        // var data = `company=${this.company}&name=${this.name}&url=${
        //   this.url
        // }&email=${this.email}&intro=${this.introduction}`
        let data = {}
        data.company = this.company
        data.name = this.name
        data.url = this.url
        data.email = this.email
        data.intro = this.introduction
        console.log(data)
        this.$axios.post('/customeremail/', data)
      }
    },
    sendFeedback(evt) {
      evt.preventDefault()
      if (!this.contactMsg) {
        alert(this.$t('FbModal.aletmsg'))
        return
      }
      let data = new Object()
      data.from_href = window.location.href
      data.contact = this.contactEmail
      data.content = this.contactMsg
      this.$axios.post('/feedback/', data)
      this.isSendFeedback = true
      setTimeout(() => {
        this.$refs.FbModal.hide()
        this.contactMsg = ''
        this.isSendFeedback = false
      }, 3000)
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
#cumodal {
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
</style>
