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
import Header from '~/components/header/Header.vue'
import Footer from '~/components/Footer.vue'
import Modals from '~/components/Modals.vue'
import Top from '~/components/Top.vue'
import CustomerService from '~/components/CustomerService.vue'
export default {
  head() {
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
          href: `https://${request.ROOT_DAMAIN}${this.$route.path}`
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
    return {
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
<<<<<<< HEAD
=======
    console.log('default---mounted')
>>>>>>> c1ee39a1d4191918ddbee7709824cf4db2b853a2
    if (!this.$store.state.request) {
      this.$store.dispatch('getRequest', this.$axios)
    }
    if (this.$store.state.login_status && !this.$store.state.lsuser) {
      this.$store.dispatch('getLsuser', this)
      console.log('dafalut-mounted--', this.$store.state.lsuser)
    }
  },
  methods: {
    hideMenu() {
      $('#nav_collapse').animate({ left: '-100%' })
      $('.header').animate({ left: 0 })
      $('.header .navbar-expand-xl').removeClass('show')
      $('.wrapper-mask').addClass('hidden')
    }
  }
}
</script>
<style>
</style>
