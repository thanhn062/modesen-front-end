<template>
  <div class="root-container">
    <Header/>
    <main class="main-container">
      <nuxt/>
    </main>
    <Footer/>
    <div
      class="wrapper-mask hidden"
      @click="hideMenu"/>
    <Modals/>
    <Top/>
    <CustomerService
      v-if="$store.state.request && $store.state.request.RCOUNTRY ==='cn'" />
  </div>
</template>
<script>
import '~/assets/js/main.js'
// import '~/assets/js/endhelper.js'
import Header from '~/components/header/Header.vue'
import Footer from '~/components/Footer.vue'
import Modals from '~/components/Modals.vue'
import Top from '~/components/Top.vue'
import CustomerService from '~/components/CustomerService.vue'
export default {
  metaInfo() {
    let htmlAttrs = null
    let link = []
    let meta = []
    let path = this.$route.path
    let request = this.$store.state.request
    if (request) {
      if (path.indexOf('/us/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.com${this.$route.path}`
        })
      } else if (path.indexOf('/uk/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.uk${this.$route.path}`
        })
      } else if (path.indexOf('/ca/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.ca${this.$route.path}`
        })
      } else if (path.indexOf('/cn/zh/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.cn${this.$route.path}`
        })
      } else if (path.indexOf('/uk/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.uk${this.$route.path}`
        })
      } else if (path.indexOf('/au/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.au${this.$route.path}`
        })
      } else if (path.indexOf('/fr/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.fr${this.$route.path}`
        })
      } else if (path.indexOf('/de/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.de${this.$route.path}`
        })
      } else if (path.indexOf('/it/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.it${this.$route.path}`
        })
      } else if (path.indexOf('/jp/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.jp${this.$route.path}`
        })
      } else if (path.indexOf('/kr/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.kr${this.$route.path}`
        })
      } else if (path.indexOf('/nl/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.nl${this.$route.path}`
        })
      } else if (path.indexOf('/ru/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.ru${this.$route.path}`
        })
      } else if (path.indexOf('/es/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.es${this.$route.path}`
        })
      } else if (path.indexOf('/en/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.com${this.$route.path}`
        })
      } else if (path.indexOf('/zh/') > -1) {
        link.push({
          rel: 'canonical',
          href: `https://modesens.cn${this.$route.path}`
        })
      } else {
        link.push({
          rel: 'canonical',
          href: `https://${request.ROOT_DOMAIN}${this.$route.path}`
        })
      }
      if (
        !request.BLOCK_INTL &&
        request.RCOUNTRY !== 'cn' &&
        this.$route.fullPath.indexOf('en') === -1 &&
        this.$route.fullPath.indexOf('zh') === -1
      ) {
        let alternateAry = [
          { href: 'https://modesens.com', lang: 'x-default' },
          { href: 'https://modesens.uk', lang: 'en-gb' },
          { href: 'https://modesens.ca', lang: 'en-ca' },
          { href: 'https://modesens.com', lang: 'en' },
          { href: 'https://modesens.cn', lang: 'zh' },
          { href: 'https://modesens.com', lang: 'en-us' },
          { href: 'https://modesens.com.au', lang: 'en-au' },
          { href: 'https://modesens.cn', lang: 'zh-cn' },
          { href: 'https://modesens.fr', lang: 'en-fr' },
          { href: 'https://modesens.de', lang: 'en-de' },
          { href: 'https://modesens.it', lang: 'en-it' },
          { href: 'https://modesens.jp', lang: 'en-jp' },
          { href: 'https://modesens.kr', lang: 'en-kr' },
          { href: 'https://modesens.nl', lang: 'en-nl' },
          { href: 'https://modesens.ru', lang: 'en-ru' },
          { href: 'https://modesens.es', lang: 'en-es' }
        ]
        alternateAry.map(item => {
          link.push({
            rel: 'alternate',
            href: `${item.href}${request.CANONICAL_URL}`,
            hreflang: `${item.lang}`
          })
        })
      }
    }

    // 搜索页防爬处理
    // meta.push({
    //   name: 'robots',
    //   content: 'noindex'
    // })
    meta.push({
      name: 'apple-itunes-app',
      content: `app-id=976201094, app-argument=https://modesens.com${path}`
    })
    if (path.indexOf('/zh/') > -1) {
      htmlAttrs = { lang: 'zh-cn' }
    } else {
      htmlAttrs = { lang: 'en-us' }
    }
    return {
      htmlAttrs,
      link,
      meta
    }
  },
  components: {
    Header,
    Footer,
    Modals,
    Top,
    CustomerService
  },
  data() {
    return {
      messaging: null
    }
  },
  computed: {
    listenstage() {
      return this.$store.state.request
    }
  },
  watch: {
    listenstage: function(ov, nv) {
      if (this.$store.state.request.RCOUNTRY == 'cn') {
        let hm = document.createElement('script')
        hm.src = 'https://hm.baidu.com/hm.js?5d6195861bd1dc57fe4981c6ed078dd4'
        let s = document.getElementsByTagName('script')[0]
        s.parentNode.insertBefore(hm, s)
        /* 每次路由变更时进行pv统计 */
        this.$router.afterEach((to, from) => {
          /* 告诉增加一个PV */
          try {
            window._hmt = window._hmt || []
            window._hmt.push(['_trackPageview', to.fullPath])
          } catch (e) {}
        })
      } else if (
        this.$store.state.request.RCOUNTRY != 'cn' &&
        !this.$store.state.login_status
      ) {
        // Facebook Pixel Code
        ;((f, b, e, v, n, t, s) => {
          if (f.fbq) return
          n = f.fbq = function() {
            n.callMethod
              ? n.callMethod.apply(n, arguments)
              : n.queue.push(arguments)
          }
          // _fbq is a flag to determine inited or not
          if (!f._fbq) f._fbq = n
          // fbq.push is itself
          n.push = n
          n.loaded = !0
          n.version = '2.0'
          // fbq.queue
          n.queue = []
          t = b.createElement(e)
          t.async = !0
          t.src = v
          s = b.getElementsByTagName(e)[0]
          s.parentNode.insertBefore(t, s)
        })(
          window,
          document,
          'script',
          'https://connect.facebook.net/en_US/fbevents.js'
        )
        fbq('init', '148244878887970')
        fbq('track', 'PageView')
        let nohm = document.createElement('noscript')
        nohm.innerHTML = `<img height='1' width='1' style='display:none' src='https://www.facebook.com/tr?id=148244878887970&ev=PageView&noscript=1'/>`
        // FB share
        ;((d, s, id) => {
          var js,
            fjs = d.getElementsByTagName(s)[0]
          if (d.getElementById(id)) return
          js = d.createElement(s)
          js.id = id
          js.src =
            '//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=115187351888718&version=v2.2'
          fjs.parentNode.insertBefore(js, fjs)
        })(document, 'script', 'facebook-jssdk')
      }
    }
  },
  created() {},
  mounted() {
    if (!this.$store.state.request) {
      this.$store.dispatch('getRequest', this.$axios)
    }
    if (this.$store.state.login_status && !this.$store.state.lsuser) {
      this.$store.dispatch('getLsuser', this)
    }

    firebase.initializeApp({
      apiKey: 'AIzaSyCgiJcGjK2JNt_o6UOEcPPUP2GvBjpsm80',
      databaseURL: 'https://sonorous-veld-95923.firebaseio.com',
      storageBucket: 'sonorous-veld-95923.appspot.com',
      authDomain: 'sonorous-veld-95923.firebaseapp.com',
      messagingSenderId: '985405782985',
      projectId: 'sonorous-veld-95923'
    })
    this.messaging = firebase.messaging()
    this.messaging.usePublicVapidKey(
      'BD4iDfxlD_FalzscVlfjiw4fN3YKp6X2u2DxbsLiRzUT6scSBAxvHlzH4ctfnYV--joqcjWh4M4_SDRZ3pOcuVQ'
    )
    this.messaging
      .getToken()
      .then(currentToken => {
        if (currentToken) {
          this.sendTokenToServer(currentToken)
        } else {
          console.log(
            'No Instance ID token available. Request permission to generate one.'
          )
          setTimeout(() => {
            if (
              $('#modesensinstalled')[0] ||
              this.$cookies.get('modelinkmodal')
            ) {
              if (!this.$cookies.get('ms_notification')) {
                this.$root.$emit('bv::show::modal', 'fcmmodal')
                ga('send', 'event', 'FCM', 'FCMModalShow')
                this.$cookies.set('ms_notification', true, 1)
              }
            }
          }, 15000)
        }
      })
      .catch(function(err) {
        console.log('An error occurred while retrieving token. ', err)
        ga('send', 'event', 'FCM', 'GetTokenError', err)
      })
    this.messaging.onTokenRefresh(function() {
      this.messaging
        .getToken()
        .then(refreshedToken => {
          console.log('Token refreshed.')
          this.sendTokenToServer(refreshedToken)
          ga('send', 'event', 'FCM', 'TokenRefreshed')
        })
        .catch(function(err) {
          console.log('Unable to retrieve refreshed token ', err)
          ga('send', 'event', 'FCM', 'TokenRefreshedError', err)
        })
    })
    this.messaging.onMessage(function(payload) {
      console.log('Message received. ', payload)
    })
  },
  methods: {
    hideMenu() {
      $('#nav_collapse').animate({ left: '-100%' })
      $('.header').animate({ left: 0 })
      $('.header .navbar-expand-xl').removeClass('show')
      $('.wrapper-mask').addClass('hidden')
    },
    sendTokenToServer(token) {
      console.log(token)
      let old_token = this.$cookies.get('ms_notification')
      let lsuid = this.$cookies.get(this.gconfig.LSUID)
      this.$cookies.set('ms_notification', token + lsuid, 1)
      if (old_token === token + lsuid) {
        return
      }
      let data = {}
      data.device_typ = 'FCM'
      data.device_registration_id = token
      this.$axios.post('/adddevice/', data)
    },
    requestFCMToken() {
      this.messaging
        .requestPermission()
        .then(function() {
          console.log('Notification permission granted.')
          ga('send', 'event', 'FCM', 'RequestPermissionGranted')
          this.messaging
            .getToken()
            .then(function(currentToken) {
              if (currentToken) {
                this.sendTokenToServer(currentToken)
              } else {
                console.log(
                  'No Instance ID token available. Request permission to generate one.'
                )
              }
            })
            .catch(function(err) {
              console.log('An error occurred while retrieving token. ', err)
              ga('send', 'event', 'FCM', 'GetTokenError', err)
            })
        })
        .catch(function(err) {
          console.log('Unable to get permission to notify.', err)
          ga('send', 'event', 'FCM', 'RequestPermissionError', err)
          this.$cookies.set('ms_notification', true, 1)
        })
    }
  }
}
</script>
<style>
</style>
