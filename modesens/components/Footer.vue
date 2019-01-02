<template>
  <footer>
    <div class="container footer-content">
      <div class="footer-wrap">
        <div class="wrap-item">
          <h6 class="footer-title">{{ $t('Footer.classtitle1') }}</h6>
          <div class="p">
            <ul class="list-unstyled contact">
              <li><a href="/loyalty/">{{ $t('Footer.helpcenter') }}</a></li>
              <li><a href="/faq/">{{ $t('Footer.helpcenter') }}</a></li>
              <li><a href="javascript:;">{{ $t('Footer.contactus') }}</a></li>
              <li><a href="javascript:;">{{ $t('Footer.feedback') }}</a></li>
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
                  src="/img/download-on-the-app-store.png"
                  class="footer-connect-img">
              </div> -->
            </li>
            <!-- <li><nuxt-link><img
              src="/img/add-to-chrome.png"
              class="footer-connect-img"></nuxt-link></li> -->
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
            src="/img/20180905footer_logo.svg"
            class="footer-logo">
          <span v-if="$i18n.country === 'cn'">© 2018, 尚睿科技（北京）有限公司<br>京 ICP 备 16029930号</span>
          <span v-else>© 2018, ModeSens Inc</span>
        </div>
        <div
          class="footer-svg-con"
          style="float: right;margin-right:-9px;">
          <nuxt-link to="https://www.pinterest.com/modesens/"><img
            src="/img/20181008footer-pit.svg"
            class="footer-mini-img"
            style="width: 30px;margin-right: 20px;"></nuxt-link>
          <nuxt-link to="https://twitter.com/modesens"><img
            src="/img/20181008footer-tt.svg"
            class="footer-mini-img"
            style="width: 30px;margin-right: 10px;"></nuxt-link>
          <nuxt-link to="https://www.instagram.com/modesens/"><img
            src="/img/footer-p.svg"
            class="footer-mini-img"></nuxt-link>
          <nuxt-link to="https://www.facebook.com/modesens"><img
            src="/img/footer-fb.svg"
            class="footer-mini-img"></nuxt-link>
          <nuxt-link to="https://weibo.com/5365182498/profile?topnav=1&wvr=6&is_all=1"><img
            src="/img/footer-wb.svg"
            class="footer-mini-img"></nuxt-link>
          <nuxt-link to="javascript:;"><img
            src="/img/footer-wx.svg"
            class="footer-mini-img"></nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      lsuser: false
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="less">
@import '../assets/css/components/footer.less';
</style>
