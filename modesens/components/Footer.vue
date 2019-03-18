<template>
  <footer>
    <div class="container footer-content">
      <div class="footer-wrap">
        <div class="wrap-item">
          <h6 class="footer-title">{{ $t('Footer.classtitle1') }}</h6>
          <div>
            <ul class="contact">
              <li><nuxt-link to="/loyalty/">{{ $t('Footer.loyaltyProgram') }}</nuxt-link></li>
              <li><a href="/faq/">{{ $t('Footer.helpcenter') }}</a></li>
              <li><a
                v-b-modal.cumodal
                href="javascript:;">{{ $t('common.ContactUs') }}</a></li>
              <li><a
                v-b-modal.FbModal
                href="javascript:;">{{ $t('Footer.feedback') }}</a></li>
            </ul>
          </div>
        </div>
        <div class="wrap-item">
          <h6 class="footer-title">{{ $t('Footer.classtitle2') }}</h6>
          <div>
            <ul class="contact">
              <li><a href="/about/">{{ $t('Footer.aboutus') }}</a></li>
              <li><a href="/influencer/">{{ $t('Footer.influencerpro') }}</a></li>
              <li>
                <a
                  v-if="lsuser"
                  href="/invite/">{{ $t('Footer.invitefd') }}</a>
                <a
                  v-b-modal.inviteModal
                  v-else
                  href="javascript:;">{{ $t('Footer.invitefd') }}</a>
              </li>
              <li><a href="/stores/">{{ $t('Footer.partnerstores') }}</a></li>
            </ul>
          </div>
        </div>
        <div class="wrap-item">
          <h6 class="footer-title">{{ $t('Footer.classtitle3') }}</h6>
          <div>
            <ul class="contact">
              <li><a href="/legal/">{{ $t('Footer.termsofuse') }}</a></li>
              <li><a href="/privacy/">{{ $t('Footer.privacypolicy') }}</a></li>
            </ul>
          </div>
        </div>
        <div class="wrap-item">
          <h6 class="footer-title">{{ $t('Footer.classtitle4') }}</h6>
          <ul class="contact">
            <li class="install-box">
              <a
                class="ios-app"
                href="javascript:;"
                @click="iosappClick">
                <i class="iosimg"/>
                <span>{{ $t('Footer.ModeSensApp') }}</span>
              </a>
            </li>
            <li class="install-box"><a
              class="android-app"
              href="javascript:;"
              @click="myInstallChromeExtention">
              <i class="androidimg"/>
              <span>{{ $t('Footer.Addtobrowser') }}</span>
            </a></li>
          </ul>
        </div>
        <div
          v-if="lsuser"
          class="wrap-item"
          style="width: 300px">
          <h6 class="footer-title">{{ $t('Footer.classtitle5') }}</h6>
          <div>{{ $t('Footer.class5desc') }}</div>
          <input
            id="iemail"
            v-model="shareEmail"
            :placeholder="$t('Footer.placeholder1')"
            class="form-control footer-email"
            name="iemail">
          <input
            :value="$t('Footer.invitefd')"
            class="btn btn-default"
            type="button"
            style="width: 100%;margin-top: 30px;"
            @click="shareInvite">
        </div>
        <div
          v-else
          class="wrap-item">
          <h6 class="footer-title">{{ $t('Footer.classtitle6') }}</h6>
          <form
            id="footer-form"
            @submit="newsSubmit">
            <input
              :placeholder="$t('common.emailaddress')"
              v-model="newsEmail"
              class="signup-email"
              type="email">
            <div class="d-flex justify-content-start">
              <div
                class="sexbox"
                @click="selectedSex='f'">
                <i :class="selectedSex==='f' ? 'sex-check' : 'sex-uncheck'"/><span>{{ $t('Footer.Womens') }}</span>
              </div>
              <div
                class="sexbox"
                @click="selectedSex='m'">
                <i :class="selectedSex==='m' ? 'sex-check' : 'sex-uncheck'"/><span>{{ $t('Footer.Mens') }}</span>
              </div>
            </div>
            <button
              :disabled="disabledstatus"
              type="submit"
              class="btn btn-default"
              style="width: 100%;">{{ $t('common.SUBMIT') }}</button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-logo-con">
          <img
            v-lazy="'/img/20180905footer_logo.svg'"
            class="footer-logo"
            alt="">
          <span v-if="$i18n.country === 'cn'">© 2018, 尚睿科技（北京）有限公司<br>京 ICP 备 16029930号</span>
          <span v-else>© 2018, ModeSens Inc</span>
        </div>
        <div class="footer-svg-con">
          <a
            href="https://www.pinterest.com/modesens/"
            target="_blank"><img
              v-lazy="'/img/20181008footer-pit.svg'"
              class="footer-mini-img"
              style="width: 30px;margin-right: 20px;"
              alt=""></a>
          <a
            href="https://twitter.com/modesens"
            target="_blank"><img
              v-lazy="'/img/20181008footer-tt.svg'"
              class="footer-mini-img"
              style="width: 30px;margin-right: 10px;"
              alt=""></a>
          <a
            href="https://www.instagram.com/modesens/"
            target="_blank"><img
              v-lazy="'/img/footer-p.svg'"
              class="footer-mini-img"
              alt=""></a>
          <a
            href="https://www.facebook.com/modesens"
            target="_blank"><img
              v-lazy="'/img/footer-fb.svg'"
              class="footer-mini-img"
              alt=""></a>
          <a
            href="https://weibo.com/5365182498/profile?topnav=1&wvr=6&is_all=1"
            target="_blank"><img
              v-lazy="'/img/footer-wb.svg'"
              class="footer-mini-img"
              alt=""></a>
          <a href="javascript:;"><img
            v-lazy="'/img/footer-wx.svg'"
            class="footer-mini-img"
            alt=""></a>
        </div>
      </div>
    </div>
    <!-- invite -->
    <b-modal
      v-if="!lsuser"
      id="inviteModal"
      :title="$t('Footer.inviteTitle')">
      <h3>{{ $t('Footer.inviteMsg') }}</h3>
      <div
        slot="modal-footer"
        class="w-100 invite-footer">
        <button
          v-b-modal.mdLogin
          class="btn btn-secondary">{{ $t('common.Login') }}</button>
        <button class="btn btn-primary btn-signup">{{ $t('common.SignUp') }}</button>
      </div>
    </b-modal>
    <!-- 订阅modal -->
    <b-modal
      ref="emailsubModal"
      :title="$t('Footer.emailSubTitle')">
      <div>{{ emailSubStatus ? $t('Footer.emailSubDesc1') : $t('Footer.emailSubDesc0') }}</div>
      <div slot="modal-footer">
        <button
          v-b-modal.mdLogin
          v-if="emailSubStatus"
          class="btn btn-primary">{{ $t('common.LogInNow') }}</button>
        <button
          v-else
          class="btn btn-primary btn-signup">{{ $t('common.CreateAnAccount') }}</button>
      </div>
    </b-modal>
    <!-- app install entrance modal -->
    <b-modal
      id="app-entrance"
      ref="appentranceModal"
      hide-header
      hide-footer>
      <button
        class="close"
        @click="hideAppEntranceModal">X</button>
      <div class="apptitle">{{ $t('common.DownloadApp') }}</div>
      <div class="applistbox">
        <div class="app-box">
          <img
            v-lazy="'https://mds0.com/static/img/20190103ios_QR_code.png'"
            alt="">
          <a
            href="https://itunes.apple.com/app/id976201094"
            target="_blank">
            <button class="btn-theme">
              <img
                v-lazy="'https://mds0.com/static/img/20181127ioslogo.svg'"
                alt="">
              {{ $t('common.IOSApp') }}
            </button>
          </a>
        </div>
        <div class="app-box">
          <img
            v-lazy="'https://mds0.com/static/img/20181229android_QR_code_cn.png'"
            v-if="$i18n.country === 'cn'"
            alt="">
          <img
            v-lazy="'https://mds0.com/static/img/20181229android_QR_code_gconfig.png'"
            v-else
            alt="">
          <a
            href="https://modesens.com/s/android_cn/"
            target="_blank">
            <button class="btn-theme">
              <img
                v-lazy="'https://mds0.com/static/img/20181127androidlogo.svg'"
                alt="">
              {{ $t('common.AndroidApp') }}
            </button>
          </a>
        </div>
      </div>
    </b-modal>
  </footer>
</template>
<script>
import { installChromeExtention } from '~/assets/js/utils/utils.js'
export default {
  data() {
    return {
      newsEmail: '',
      shareEmail: '',
      emailSubStatus: 0, //0注册 1登录
      selectedSex: 'f',
      disabledstatus: false
    }
  },
  computed: {
    lsuser() {
      return this.$store.state.lsuser
    }
  },
  methods: {
    async newsSubmit(evt) {
      evt.preventDefault()
      let reg = /^\w+([-.]\w+)*@[A-Za-z0-9]+([.-][A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
      if (this.newsEmail == '' || reg.test(this.newsEmail) == false) {
        alert(this.$t('Footer.newsAlert'))
      } else {
        let data = {}
        data.email = this.newsEmail
        data.gender = this.selectedSex
        this.disabledstatus = true
        let obj = await this.$axios.post('/accounts/emailsubscribe/', data)
        this.disabledstatus = false
        if (obj.error) {
          if (obj.error === 'Account exists') {
            this.emailSubStatus = 1
          }
        } else {
          this.emailSubStatus = 0
        }
        this.$refs.emailsubModal.show()
      }
    },
    async shareInvite() {
      console.log(333333)
      var emails = this.shareEmail.trim()
      let toinvite = []
      $.each(emails.split(','), function(index, value) {
        if (validEmail(value.trim())) {
          toinvite.push(value.trim())
        }
      })
      if (toinvite.length == 0) {
        alert(this.$t('Footer.validemails'))
        return
      }
      if (toinvite.length > 10) {
        alert(this.$t('Footer.invitefriends'))
        return
      }
      let data = new Object()
      data.emails = toinvite.join(',')
      data.message = ''
      let obj = await this.$axios.post('/invite/', data)
      alert(this.shareEmail + this.$t(' is(are) invited'))
    },
    myInstallChromeExtention() {
      if ($(document).width() > 1199) {
        installChromeExtention()
      } else {
        window.open('https://modesens.com/s/android_cn/', '_blank')
      }
    },
    hideAppEntranceModal() {
      this.$refs.appentranceModal.hide()
    },
    iosappClick() {
      if ($(document).width() > 1199) {
        this.$root.$emit('bv::show::modal', 'app-entrance')
      } else {
        window.open('https://itunes.apple.com/app/id976201094', '_blank')
      }
    }
  }
}
</script>
<style lang="less">
@import '../assets/css/components/footer.less';
</style>
