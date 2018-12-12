<template>
  <footer>
    <div class="container footer-content">
      <div class="footer-wrap">
        <div class="wrap-item">
          <h6 class="footer-title">{{ $t('Footer.classtitle1') }}</h6>
          <div class="p">
            <ul class="list-unstyled contact">
              <li><nuxt-link to="/faq/">{{ $t('Footer.helpcenter') }}</nuxt-link></li>
              <!-- <li><nuxt-link>{{ $t('Footer.contactus') }}</nuxt-link></li>
              <li><nuxt-link>{{ $t('Footer.feedback') }}</nuxt-link></li> -->
            </ul>
          </div>
        </div>
        <div class="wrap-item">
          <h6 class="footer-title">{{ $t('Footer.classtitle2') }}</h6>
          <div class="p">
            <ul class="list-unstyled contact">
              <li><nuxt-link to="/about/">{{ $t('Footer.aboutus') }}</nuxt-link></li>
              <li><nuxt-link to="/influencer/">{{ $t('Footer.influencerpro') }}</nuxt-link></li>
              <!-- <li><nuxt-link 
                :onclick="clickVal">{{ $t('Footer.invitefd') }}</nuxt-link></li> -->
              <li><nuxt-link to="/stores/">{{ $t('Footer.partnerstores') }}</nuxt-link></li>
            </ul>
          </div>
        </div>
        <div class="wrap-item">
          <h6 class="footer-title">{{ $t('Footer.classtitle3') }}</h6>
          <div class="p">
            <ul class="list-unstyled contact">
              <li><nuxt-link to="/legal/">{{ $t('Footer.termsofuse') }}</nuxt-link></li>
              <li><nuxt-link to="/privacy/">{{ $t('Footer.privacypolicy') }}</nuxt-link></li>
            </ul>
          </div>
        </div>
        <div class="wrap-item">
          <h6 class="footer-title">{{ $t('Footer.classtitle4') }}</h6>
          <ul class="list-unstyled contact">
            <li>
              <!-- <div
                to="https://itunes.apple.com/app/modesens-the-premier-shopping-assistant/id976201094?mt=8"
                target="_blank">
                <img
                  class="footer-connect-img"
                  src="~/static/img/download-on-the-app-store.png">
              </div> -->
            </li>
            <!-- <li><nuxt-link><img
              class="footer-connect-img"
              src="~/static/img/add-to-chrome.png"></nuxt-link></li> -->
          </ul>
        </div>
        <div
          v-if="lsuser"
          style="min-width: 300px;"
          class="wrap-item">
          <h6 class="footer-title">{{ $t('Footer.classtitle5') }}</h6>
          <div>{{ $t('Footer.class5desc') }}</div>
          <input
            id="iemail"
            :placeholder="$t('Footer.placeholder')"
            class="form-control footer-email"
            name="iemail">
          <input
            :value="$t('Footer.invitefd')"
            class="btn btn-default"
            type="button"
            style="width: 100%;margin-top: 30px;">
        </div>
        <div
          v-else
          class="wrap-item">
          <h6 class="footer-title">{{ $t('Footer.classtitle6') }}</h6>
          <form id="footer_form">
            <input
              :placeholder="$t('emailaddress')"
              class="form-control footer-email"
              name="email">
            <div class="footer-sex">
              <div>
                <input
                  id="footer_female"
                  name="gender"
                  type="radio"
                  value="f"
                  class="form-control"
                  checked>
                <label for="footer_female">{{ $t('womens') }}</label>
              </div>
              <div>
                <input
                  id="footer_male"
                  name="gender"
                  type="radio"
                  value="m"
                  class="form-control">
                <label for="footer_male">{{ $t('mens') }}</label>
              </div>
            </div>
            <input
              :value="$t('SUBMIT')"
              class="btn btn-default"
              type="button"
              style="width: 100%;">
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <div
          class="footer-logo-con"
          style="float: left">
          <img
            class="footer-logo"
            src="~/static/img/20180905footer_logo.svg">
          <span>
            {{ rcountry ? '© 2018, 尚睿科技（北京）有限公司' : '© 2018, ModeSens Inc' }}
            <br>
            {{ rcountry ? '京 ICP 备 16029930号' : '' }}
          </span>
        </div>
        <div
          class="footer-svg-con"
          style="float: right;margin-right:-9px;">
          <nuxt-link to="https://www.pinterest.com/modesens/"><img
            class="footer-mini-img"
            src="~/static/img/20181008footer-pit.svg"
            style="width: 30px;margin-right: 20px;"></nuxt-link>
          <nuxt-link to="https://twitter.com/modesens"><img
            class="footer-mini-img"
            src="~/static/img/20181008footer-tt.svg"
            style="width: 30px;margin-right: 10px;"></nuxt-link>
          <nuxt-link to="https://www.instagram.com/modesens/"><img
            class="footer-mini-img"
            src="~/static/img/footer-p.svg"></nuxt-link>
          <nuxt-link to="https://www.facebook.com/modesens"><img
            class="footer-mini-img"
            src="~/static/img/footer-fb.svg"></nuxt-link>
          <nuxt-link to="https://weibo.com/5365182498/profile?topnav=1&wvr=6&is_all=1"><img
            class="footer-mini-img"
            src="~/static/img/footer-wb.svg"></nuxt-link>
          <nuxt-link to="javascript:;"><img
            class="footer-mini-img"
            src="~/static/img/footer-wx.svg"></nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      lsuser: false,
      rcountry: 'cn',
      clickVal: this.lsuer
        ? (window.location = '/invite/')
        : this.loginInviteFriends()
    }
  },
  mounted() {
    // console.log(this.STATIC_DOMAIN)
  },
  methods: {
    loginInviteFriends() {
      // console.log(1111222222)
    }
  }
}
</script>
<style>
.footer-wrap {
  display: flex;
  justify-content: space-between;
  padding-top: 44px;
  border-top: 0.5px solid #929292;
  padding-bottom: 50px;
}
.footer-title {
  font-size: 1.1em;
}
.footer-logo {
  width: 150px;
}
.footer-mini-img {
  width: 50px;
  cursor: pointer;
}
.footer-connect-img {
  width: 130px;
}
.footer-email {
  width: 100% !important;
  border: 0 !important;
  border-bottom: 0.5px solid #252525 !important;
  padding: 6px 0 !important;
}
.footer-sex {
  display: flex;
  margin: 10px 0;
}
.footer-sex label {
  margin-left: 25px;
  margin-right: 30px;
  padding-left: 0;
}
.footer-bottom {
  overflow: hidden;
  border-top: 0.5px solid #929292;
  padding-top: 28px;
  padding-bottom: 30px;
}
#footer_form {
  width: 100%;
}
.footer-logo-con img {
  width: 34px;
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
}
.footer-logo-con span {
  font-size: 12px;
  display: inline-block;
  vertical-align: middle;
}
#footer_female[type='radio'],
#footer_male[type='radio'] {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background: url('/static/img/login-icon/unchecked.svg');
  margin-top: 2px;
  margin-left: 0px;
  cursor: pointer;
  position: absolute;
  border: none;
}
#footer_female[type='radio'] {
  margin-left: 0;
}
#footer_female[type='radio']:checked,
#footer_male[type='radio']:checked {
  -webkit-appearance: none;
  background: url('/static/img/checked.svg');
}
#footer_female[type='radio']:focus,
#footer_male[type='radio']:focus {
  background: url('/static/img/checked.svg');
}
</style>
