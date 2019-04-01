<template>
  <div>
    <!-- 登录modal -->
    <b-modal
      v-if="!$store.state.login_status"
      id="mdLogin"
      ref="loginmd"
      hide-header
      hide-footer
      style="width: 600px,height: 680px"
      @show="mdLoginshown">
      <button
        class="close"
        @click="hideLoginModal"><img
          v-lazy="'/img/close.svg'"
          alt=""></button>
      <iframe
        width="100%"
        height="100%"
        frameborder="0"/>
    </b-modal>
    <!-- 客服 -->
    <b-modal
      id="service-modal"
      ref="cuModalCn"
      hide-header
      hide-footer>
      <div class="customer_service_head">
        <img
          v-lazy="'/img/20190122customer_service.png'"
          alt="">
      </div>
      <div class="customer_service_body">
        <p>{{ $t('service.help') }}<br>{{ $t('service.WeChat') }}</p>
        <div class="customer_service_body_qrcode">
          <img
            v-lazy="'/img/20190122customer_service_qrcode.png'"
            alt="">
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
        v-lazy="gconfig.LOGO_ASSISTRANT_ZH"
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
        src="/notice/product/"
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
        src="/notice/me/"
        width="100%"
        height="100%"
        frameborder="0"/>
    </b-modal>
    <b-modal
      v-if="!$store.state.login_status"
      id="spmodal"
      :title="$t('Modals.Pleasesignin')"
      :ok-title="$t('common.SignUp')"
      :cancel-title="$t('common.Login')"
      @ok="gotoSignup"
      @cancel="openLoginModal">
      <div style="fontSize: 24px;">{{ $t('Modals.Notamemberyet') }}<span id="spmsg">{{ $t('Modals.JoinModeSens') }}</span></div>
    </b-modal>
    <!-- membership -->
    <b-modal
      id="membershipMd"
      hide-header
      hide-footer>
      <button
        class="close"
        @click="hideMembershipModal"><img
          v-lazy="'/img/close.svg'"
          alt=""></button>
      <div class="membership-desc">{{ $t('Modals.MakeModeSens') }}</div>
      <div class="membership-btn"><a href="/accounts/signup/?next=/">
        <button class="btn btn-primary">{{ $t('Modals.StartEarningToday') }}</button>
      </a></div>
    </b-modal>
    <b-modal
      id="abtestbassistant"
      size="lg"
      hide-header
      hide-footer>
      <button
        class="close"
        @click="hideModelinkModal"><img
          v-lazy="'/img/close.svg'"
          alt=""></button>  
      <div class="ass-head">
        <div>
          <img
            v-lazy="'/img/20180930modesenslogo.png'"
            class="modesens-logo"
            alt="">
          <div class="smart-shopping">
            <div class="meetS">Meet your premier fashion shopping assistant</div>
            <p>Automatically find and compare prices, availabilities and coupons from 160+ fashion stores.</p>
          </div>
        </div>
        <div class="browser-logo">
          <div class="browser">
            <InstallBtn/>
            <div
              class="browser-share"
              @click="modelinkshare">
              <img
                v-lazy="'/img/prd_share1_360.png'"
                alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="ass-content">
        <b-carousel
          id="carousel1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#fff"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd">
          <b-carousel-slide>
            <img
              v-lazy="'/img/20180928availability.png'"
              slot="img"
              alt="">
          </b-carousel-slide>
          <b-carousel-slide>
            <img
              v-lazy="'/img/20180928Coupon_1.png'"
              slot="img"
              alt="">
          </b-carousel-slide>
          <b-carousel-slide>
            <img
              v-lazy="'/img/20180928assistant2_1.png'"
              slot="img"
              alt="">
          </b-carousel-slide>
          <b-carousel-slide>
            <img
              v-lazy="'/img/20180928add_to_collection_720.png'"
              slot="img"
              alt="">
          </b-carousel-slide>
          <b-carousel-slide>
            <img
              v-lazy="'/img/20180928want1.png'"
              slot="img"
              alt="">
          </b-carousel-slide>
          <b-carousel-slide
            img-blank
            img-alt="Blank image">
            <div class="description-plug-in">
              <h5>NEVER OVERPAY AGAIN</h5>
              <p class="modesens-shopping">★ ModeSens Shopping Assistant helps you save time and money by finding the lowest price and availabilities for a product when you shop for fashion online. Simply install the extension and view a product page to to find all information from all other stores carrying the same product.</p>
              <h5 class="find-items">FIND ITEM AVAILABILITY ACROSS THE WEB</h5>
              <p class="modesens-shopping">
                ★ Stay informed on what stores carry your size for an item by saving the item to your ModeSens Shopping Assistant
              </p>
              <h5>AUTOMATICALLY FIND COUPON CODES</h5>
              <p class="modesens-shopping">
                ★ Click on the ModeSens button to find the latest coupons and offers from stores such as NET-A-PORTER, Barney’s, Bloomingdale’s, Farfetch, LUISAVIAROMA, East Dane, Neiman Marcus, Nordstrom, REVOLVE, Sak’s and 160+ more.
              </p>
              <h5>EXCLUSIVE ACCESS</h5>
              <p class="modesens-shopping">★ Exclusive access to special offers and coupons only available via ModeSens Shopping Assistant.</p>
            </div>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </b-modal>
    <b-modal
      id="shmodal"
      :title="$t('Modals.SharewithFriends')"
      hide-footer>
      <div class="mshare">
        <span
          :title="$t('Modals.ShareFacebook')"
          class="mfb"
          @click="share('fb')">FB</span>
        <span
          :title="$t('Modals.ShareTwitter')"
          class="mtw"
          @click="share('tw')">TW</span>
        <span
          :title="$t('Modals.SharePt')"
          class="mpi"
          @click="share('pi')">PI</span>
        <span
          :title="$t('Modals.ShareGoole')"
          class="mgg"
          @click="share('gg')">GG</span>
        <span
          :title="$t('Modals.ShareTr')"
          class="mtb"
          @click="share('tb')">TB</span>
        <span
          :title="$t('Modals.ShareReddit')"
          class="mrd"
          @click="share('rd')">RD</span>
        <span
          :title="$t('Modals.ShareLinkedin')"
          class="mli"
          @click="share('li')">LI</span>
        <span
          :title="$t('Modals.ShareWeibo')"
          class="mwb"
          @click="share('wb')">WB</span>
        <span
          :title="$t('Modals.ShareUrl')"
          class="mlk"
          @click="share('lk')">LK</span>
        <span
          :title="$t('Modals.ShareQr')"
          class="mqr"
          @click="share('fb')">QR</span>
      </div>
    </b-modal>
    <b-modal
      id="fcmmodal"
      :title="$t('Modals.StayInTheKnow')"
      :ok-title="$t('Modals.DonLetMeMissOut')"
      :cancel-title="$t('Modals.AskMeLater')"
      @ok="requestFCMToken">
      <div class="desc">{{ $t('Modals.fcdesc') }}</div>
    </b-modal>
  </div>
</template>
<script>
import InstallBtn from '~/components/extention/InstallBtn'
import { ssshare } from '~/assets/js/utils/share.js'
export default {
  components: {
    InstallBtn
  },
  data() {
    return {
      loginnext: '',
      hereHasClick: false,
      company: '',
      name: '',
      url: '',
      email: '',
      introduction: '',
      isSendFeedback: false,
      contactEmail: '',
      contactMsg: '',
      frommodelinkshare: false,
      ssurl: '',
      ssurls: '',
      sstitle: '',
      ssdesp: '',
      ssimg: '',
      slide: 0,
      sliding: null
    }
  },
  computed: {
    mdLoginShow() {
      return this.$store.state.mdLoginShow
    }
  },
  mounted() {
    // this.showMemberShip()
    this.showModelink()
    // this.showFcmodal()
  },
  methods: {
    mdLoginshown() {
      $('#mdLogin iframe').attr(
        'src',
        '/accounts/login/?next=' + this.$route.fullPath
      )
    },
    openLoginModal(evt) {
      evt.preventDefault()
      this.$refs.loginmd.show()
    },
    hideLoginModal() {
      this.$refs.loginmd.hide()
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
      this.$cookies.remove(this.gconfig.LSUID)
      this.$store.commit('logout')
      this.$store.commit('removeLsuser')
      window.open('/', '_self')
    },
    gotoSignup(evt) {
      evt.preventDefault()
      window.open('/accounts/signup/?next=' + this.$route.fullPath, '_blank')
    },
    showNoticemd(evt) {
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
    },
    showMemberShip() {
      if (
        !this.$store.state.login_status &&
        !this.$localStorage.get('membershipModal')
      ) {
        setTimeout(() => {
          this.$root.$emit('bv::show::modal', 'membershipMd')
          this.$localStorage.set('membershipModal', 1, 24)
        }, 4000)
      }
    },
    hideMembershipModal() {
      this.$root.$emit('bv::hide::modal', 'membershipMd')
    },
    hideModelinkModal() {
      this.$root.$emit('bv::hide::modal', 'abtestbassistant')
    },
    modelinkshare() {
      this.frommodelinkshare = true
      if (!this.ssurl) {
        this.ssurl = location.href
      }
      // this.shareumds();
      this.$root.$emit('bv::show::modal', 'shmodal')
    },
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    showModelink() {
      if (
        (this.$store.state.login_status &&
          this.$i18n.locale !== 'zh' &&
          !$('#modesensinstalled')[0] &&
          $(window).width() > 1199 &&
          $('#paypal-button').length <= 0) ||
        location.href.indexOf('frommodelinkfrommodelink=1') > -1
      ) {
        if (this.$cookies.get('modelinkmodal') == '1') {
          setTimeout(() => {
            this.$root.$emit('bv::show::modal', 'abtestbassistant')
            this.$cookies.set('modelinkmodal', 2, 1)
          }, 0)
        } else if (this.$cookies.get('modelinkmodal') != '2') {
          this.$cookies.set('modelinkmodal', 1, 1)
        }
      }
    },
    share(target) {
      ssshare(
        this.$store.state.lsuser.uid,
        target,
        1,
        this.ssurl,
        this.ssurls,
        this.sstitle,
        this.ssdesp,
        this.ssimg
      )
    },
    // showFcmodal() {
    //   if (
    //     this.$store.state.login_status &&
    //     this.$cookies.get('modelinkmodal') &&
    //     !this.$cookies.get('ms_notification')
    //   ) {
    //     setTimeout(() => {
    //       this.$root.$emit('bv::show::modal', 'fcmmodal')
    //       ga('send', 'event', 'FCM', 'FCMModalShow')
    //       this.$cookies.set('ms_notification', true, 1)
    //     }, 15000)
    //   }
    // },
    requestFCMToken() {
      this.$partent.requestFCMToken
      // ga('send', 'event', 'Modal-fcmmodal', 'Yes')
      // this.$cookies.set('ms_notification', true, 1)
    }
  }
}
</script>
<style lang="less">
@import '../assets/css/components/modals.less';
</style>
