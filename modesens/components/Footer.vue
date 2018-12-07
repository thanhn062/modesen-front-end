<template>
  <footer>
    <div class="container footer-content">
      <div class="footer-wrap">
        <div class="wrap-item">
          <h6 class="footer-title">{{ $t('CUSTOMER CARE') }}</h6>
          <div class="p">
            <ul class="list-unstyled contact">
              <li><a href="/faq/">{{ $t('Help Center') }}</a></li>
              <li><a>{{ $t('Contact Us') }}</a></li>
              <li><a>{{ $t('Feedback') }}</a></li>
            </ul>
          </div>
        </div>
        <div class="wrap-item">
          <h6 class="footer-title">{{ $t('INFORMATION') }}</h6>
          <div class="p">
            <ul class="list-unstyled contact">
              <li><a href="/about/">{{ $t('About Us') }}</a></li>
              <li><a href="/influencer/">{{ $t('Influencer Program') }}</a></li>
              <li><a 
                :onclick="clickVal">{{ $t('Invite Friends') }}</a></li>
              <li><a href="/stores/">{{ $t('Partner Stores') }}</a></li>
            </ul>
          </div>
        </div>
        <div class="wrap-item">
          <h6 class="footer-title">{{ $t('LEGAL') }}</h6>
          <div class="p">
            <ul class="list-unstyled contact">
              <li><a href="/legal/">{{ $t('Terms Of Use') }}</a></li>
              <li><a href="/privacy/">{{ $t('Privacy Policy') }}</a></li>
            </ul>
          </div>
        </div>
        <div class="wrap-item">
          <h6 class="footer-title">{{ $t('CONNECT WITH US') }}</h6>
          <ul class="list-unstyled contact">
            <li>
              <a
                href="https://itunes.apple.com/app/modesens-the-premier-shopping-assistant/id976201094?mt=8"
                target="_blank">
                <img
                  class="footer-connect-img"
                  src="~/static/img/download-on-the-app-store.png">
              </a>
            </li>
            <li><a><img
              class="footer-connect-img"
              src="~/static/img/add-to-chrome.png"></a></li>
          </ul>
        </div>
        <div
          v-if="lsuser"
          style="min-width: 300px;"
          class="wrap-item">
          <h6 class="footer-title">{{ $t('SHARE THE LOVE') }}</h6>
          <div>{{ $t('Your friends will thank you - more than once') }}</div>
          <input
            id="iemail"
            :placeholder="$t('Enter email addresses separated by commas')"
            class="form-control footer-email"
            name="iemail">
          <input
            :value="$t('Invite Friends')"
            class="btn btn-default"
            type="button"
            style="width: 100%;margin-top: 30px;">
        </div>
        <div
          v-else
          class="wrap-item">
          <h6 class="footer-title">{{ $t('NEWSLETTER SIGN UP') }}</h6>
          <form id="footer_form">
            <input
              :placeholder="$t('Email Address')"
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
                <label for="footer_female">{{ $t("Women's") }}</label>
              </div>
              <div>
                <input
                  id="footer_male"
                  name="gender"
                  type="radio"
                  value="m"
                  class="form-control">
                <label for="footer_male">{{ $t("Men's") }}</label>
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
          <a href="https://www.pinterest.com/modesens/"><img
            class="footer-mini-img"
            src="~/static/img/20181008footer-pit.svg"
            style="width: 30px;margin-right: 20px;"></a>
          <a href="https://twitter.com/modesens"><img
            class="footer-mini-img"
            src="~/static/img/20181008footer-tt.svg"
            style="width: 30px;margin-right: 10px;"></a>
          <a href="https://www.instagram.com/modesens/"><img
            class="footer-mini-img"
            src="~/static/img/footer-p.svg"></a>
          <a href="https://www.facebook.com/modesens"><img
            class="footer-mini-img"
            src="~/static/img/footer-fb.svg"></a>
          <a href="https://weibo.com/5365182498/profile?topnav=1&wvr=6&is_all=1"><img
            class="footer-mini-img"
            src="~/static/img/footer-wb.svg"></a>
          <a href="javascript:;"><img
            class="footer-mini-img"
            src="~/static/img/footer-wx.svg"></a>
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
.footer-content {
  border-top: 0.5px solid #929292;
}
.footer-wrap {
  display: flex;
  justify-content: space-between;
}
</style>
