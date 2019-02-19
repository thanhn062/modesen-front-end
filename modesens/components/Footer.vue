<template>
  <footer>
    <div class="container footer-content">
      <div class="footer-wrap">
        <div class="wrap-item">
          <h6 class="footer-title">{{ $t('Footer.classtitle1') }}</h6>
          <div class="p">
            <ul class="contact">
              <li><a href="/loyalty/">{{ $t('Footer.loyaltyProgram') }}</a></li>
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
          <div class="p">
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
          <div class="p">
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
                v-b-modal.app-entrance
                v-if="isPC"
                href="javascript:;">
                <img src="https://mds0.com/static/img/20181127add_app.svg">
                <span>{{ $t('Footer.ModeSensApp') }}</span>
              </a>
              <a
                v-else
                href="https://itunes.apple.com/app/id976201094"
                target="_blank">
                <img src="https://mds0.com/static/img/20190107Mobileios.svg">
              </a>
            </li>
            <li class="install-box"><a
              :href="isPC ? 'javascript:;' : 'https://modesens.com/s/android_cn/'"
              @click="isPC ? 'myInstallChromeExtention' : ''">
              <img :src="isPC ? 'https://mds0.com/static/img/20181127add_browse.svg' : 'https://mds0.com/static/img/20190107Mobileandroid.svg'">
              <span v-if="isPC">{{ $t('Footer.Addtobrowser') }}</span>
            </a></li>
          </ul>
        </div>
        <div
          v-if="lsuser"
          style="min-width: 300px;"
          class="wrap-item">
          <h6 class="footer-title">{{ $t('Footer.classtitle5') }}</h6>
          <div>{{ $t('Footer.class5desc') }}</div>
          <input
            v-modal="shareEmail"
            id="iemail"
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
          <b-form
            id="footer_form"
            @submit="newsSubmit">
            <b-form-group>
              <b-form-input
                :placeholder="$t('common.emailaddress')"
                v-model="newsEmail"
                type="email"/>
            </b-form-group>
            <b-form-group>
              <b-form-radio-group
                v-model="selectedSex"
                name="sexoptions">
                <b-form-radio value="f">{{ $t('Footer.Womens') }}</b-form-radio>
                <b-form-radio value="m">{{ $t('Footer.Mens') }}</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
            <b-button
              :disabled="disabledstatus"
              type="submit"
              variant="default"
              style="width: 100%;">{{ $t('common.SUBMIT') }}</b-button>
          </b-form>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-logo-con">
          <img
            src="/img/20180905footer_logo.svg"
            class="footer-logo">
          <span v-if="$i18n.country === 'cn'">© 2018, 尚睿科技（北京）有限公司<br>京 ICP 备 16029930号</span>
          <span v-else>© 2018, ModeSens Inc</span>
        </div>
        <div class="footer-svg-con">
          <a
            href="https://www.pinterest.com/modesens/"
            target="_blank"><img
              src="/img/20181008footer-pit.svg"
              class="footer-mini-img"
              style="width: 30px;margin-right: 20px;"></a>
          <a
            href="https://twitter.com/modesens"
            target="_blank"><img
              src="/img/20181008footer-tt.svg"
              class="footer-mini-img"
              style="width: 30px;margin-right: 10px;"></a>
          <a
            href="https://www.instagram.com/modesens/"
            target="_blank"><img
              src="/img/footer-p.svg"
              class="footer-mini-img"></a>
          <a
            href="https://www.facebook.com/modesens"
            target="_blank"><img
              src="/img/footer-fb.svg"
              class="footer-mini-img"></a>
          <a
            href="https://weibo.com/5365182498/profile?topnav=1&wvr=6&is_all=1"
            target="_blank"><img
              src="/img/footer-wb.svg"
              class="footer-mini-img"></a>
          <a href="javascript:;"><img
            src="/img/footer-wx.svg"
            class="footer-mini-img"></a>
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
          <img src="https://mds0.com/static/img/20190103ios_QR_code.png">
          <a
            href="https://itunes.apple.com/app/id976201094"
            target="_blank">
            <button class="btn-theme">
              <img src="https://mds0.com/static/img/20181127ioslogo.svg">
              {{ $t('common.IOSApp') }}
            </button>
          </a>
        </div>
        <div class="app-box">
          <img
            v-if="$i18n.country === 'cn'"
            src="https://mds0.com/static/img/20181229android_QR_code_cn.png">
          <img
            v-else
            src="https://mds0.com/static/img/20181229android_QR_code_gconfig.png">
          <a
            href="https://modesens.com/s/android_cn/"
            target="_blank">
            <button class="btn-theme">
              <img src="https://mds0.com/static/img/20181127androidlogo.svg">
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
  props: {
    isPC: {
      type: Boolean,
      default: () => true
    }
  },
  data() {
    return {
      lsuser: false,
      newsEmail: '',
      shareEmail: '',
      emailSubStatus: 0, //0注册 1登录
      selectedSex: 'f',
      disabledstatus: false
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
      installChromeExtention()
    },
    hideAppEntranceModal() {
      this.$refs.appentranceModal.hide()
    }
  }
}
</script>
<style lang="less">
@import '../assets/css/components/footer.less';
</style>
