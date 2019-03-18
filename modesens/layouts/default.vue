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
        var hm = document.createElement('script')
        hm.src = 'https://hm.baidu.com/hm.js?5d6195861bd1dc57fe4981c6ed078dd4'
        var s = document.getElementsByTagName('script')[0]
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
    }
  },
  created() {},
  mounted() {
    console.log(111111111, this.$store.state.lsuser)
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
