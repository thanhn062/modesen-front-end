<template>
  <div class="root-container">
    <Header v-if="!$store.state.appSource"/>
    <main class="main-container">
      <nuxt/>
    </main>
    <div v-if="show">
      <Footer v-if="!$store.state.appSource"/>
      <div
        class="wrapper-mask hidden"
        @click="hideMenu"/>
      <Modals/>
      <Top/>
      <CustomerService
        v-if="!$store.state.appSource && $store.state.request && $store.state.request.RCOUNTRY ==='cn'" />
    </div>
    <Storefav
      v-if="!$store.state.login_status"/>
  </div>
</template>
<script>
import '~/assets/js/main.js'
import Header from '~/components/header/Header.vue'
import Storefav from '~/components/Storefav.vue'
export default {
  components: {
    Header,
    Footer: () => import('~/components/Footer.vue'),
    Modals: () => import('~/components/Modals.vue'),
    Top: () => import('~/components/Top.vue'),
    CustomerService: () => import('~/components/CustomerService.vue'),
    Storefav
  },
  data() {
    return {
      messaging: null,
      show: false
    }
  },
  mounted() {
    if ($(window).width() < 1200) {
      window.addEventListener('touchstart', () => {
        if (!this.show) {
          this.show = true
        }
        this.loadJs()
      })
    } else {
      window.addEventListener('mousemove', () => {
        if (!this.show) {
          this.show = true
        }
        this.loadJs()
      })
    }
    window.addEventListener('load', event => {
      //ga
      if (!this.$store.state.lsuser || !this.$store.state.lsuser.is_staff) {
        if (this.$store.state.lsuser) {
          this.$ga.page({
            pageview: this.$route.fullPath,
            userId: this.$store.state.lsuser.uid
          })
        }
        window.addEventListener('load', event => {
          ga(tracker => {
            let gcid = tracker.get('clientId')
            this.$cookies.set('gcid', gcid, {
              expires: new Date(date.setDate(date.getDate() + 60)),
              path: '/'
            })
          })
        })
        this.$ga.set('dimension1', this.$cookies.get('gcid'))
        this.$ga.set('dimension2', this.$cookies.get(this.gconfig.LSUID))
      } else {
        this.$ga.event()
      }
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
    },
    loadJs() {
      if (this.$store.state.eventTimes === 1) return
      this.$store.commit('setClickTimes', 1)
      if (this.$store.state.request) {
        // baidu
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
        }
        // facebook
        if (
          this.$store.state.request.RCOUNTRY != 'cn' &&
          (!this.$store.state.lsuser || !this.$store.state.lsuser.is_staff)
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
            let nohm = document.createElement('noscript')
            nohm.innerHTML = `<img height='1' width='1' style='display:none' src='https://www.facebook.com/tr?id=148244878887970&ev=PageView&noscript=1'/>`
            s.parentNode.insertBefore(nohm, b.getElementsByTagName(e)[1])
          })(
            window,
            document,
            'script',
            'https://connect.facebook.net/en_US/fbevents.js'
          )
          fbq('init', '148244878887970')
          fbq('track', 'PageView')
          // FB share
          if (this.$store.state.request.COUNTRY != 'cn') {
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
          // <![CDATA[
          let googledatajs = document.createElement('script')
          googledatajs.innerHTML = `
            let google_conversion_id = 993189995
            let google_custom_params = window.google_tag_params
            let google_remarketing_only = true`
          document.getElementsByTagName('head')[0].appendChild(googledatajs)
          let googleadserviceshm = document.createElement('script')
          googleadserviceshm.src =
            '//www.googleadservices.com/pagead/conversion.js'
          googleadserviceshm.type = 'text/javascript'
          let nofbhm = document.createElement('noscript')
          nofbhm.innerHTML = `<div style="display:inline;">
            <img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/993189995/?value=0&amp;guid=ON&amp;script=0"/>
            </div>`
          document
            .getElementsByTagName('head')[0]
            .appendChild(googleadserviceshm)
          document.getElementsByTagName('head')[0].appendChild(nofbhm)
        }
      }
      // sw
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then(
          function(registration) {
            // Registration was successful
            console.log(
              'ServiceWorker registration successful with scope: ',
              registration.scope
            )
          },
          function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err)
          }
        )
      }
      // firebase
      if (this.$store.state.login_status) {
        var firebase = require('firebase')
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
      }
      // SteelHouse Tracking Pixel
      this.$store.state.loadjjs
    }
  }
}
</script>
<style>
</style>
