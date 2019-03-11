<template>
  <header class="header">
    <!-- 弹窗链接 -->
    <div
      v-if="$i18n.locale!=='zh'"
      id="popLink"
      class="d-none d-flex justify-content-center align-items-center">
      <img v-lazy="'https://mds0.com/static/img/20180929logo.svg'">
      <a
        href="/shopping-assistant/"
        data-ga-click="headerNav-Stores"><span>Shop like a pro - Get your smart fashion <b>SHOPPING ASSISTANT</b></span></a>
      <div class="d-inline-block popBrowser">
        <div
          v-if="mybrowse==='Chrome'"
          class="modelinkbrowsebtn chrome-install-button"
          @click="installChromeExtention">
          <img v-lazy="gconfig.CHROME_LOGO">
          <span>{{ $t('nav.InstallNow') }}</span>
        </div>
        <div
          v-else-if="mybrowse==='QQBrowser'"
          class="modelinkbrowsebtn chrome-install-button"
          @click="installChromeExtention">
          <img v-lazy="gconfig.QQBROWSER_LOGO">
          <span>{{ $t('nav.InstallNow') }}</span>
        </div>
        <div
          v-else-if="mybrowse==='Opera'"
          class="modelinkbrowsebtn opera-install-button btn-primary"
          @click="installOperaExtention">
          <img v-lazy="gconfig.OPERA_LOGO">
          <span>{{ $t('nav.InstallNow') }}</span>
        </div>
        <div
          v-else-if="mybrowse==='FF'"
          class="modelinkbrowsebtn ff-install-button btn-primary"
          @click="installFFExtention">
          <img v-lazy="gconfig.FIREFOX_LOGO">
          <span>{{ $t('nav.InstallNow') }}</span>
        </div>
        <div
          v-else-if="mybrowse==='Safari'"
          class="modelinkbrowsebtn Safari-install-button btn-primary"
          @click="installSafariExtention">
          <a
            href="https://safari-extensions.apple.com/details/?id=com.modesens.shoppingassistant-6EL854LDB8"
            target="_blank">
            <img v-lazy="gconfig.SAFARI_LOGO">
            <span>{{ $t('nav.InstallNow') }}</span>
          </a>
        </div>
        <div
          v-else
          class="d-flex justify-content-start">
          <div
            class="modelinkbrowsebtnlogo"
            @click="modelinkGoToBrowse('Chrome')">
            <img v-lazy="gconfig.CHROME_LOGO">
          </div>
          <div
            class="modelinkbrowsebtnlogo"
            @click="modelinkGoToBrowse('Firefox')">
            <img v-lazy="gconfig.FIREFOX_LOGO">
          </div>
          <div
            class="modelinkbrowsebtnlogo"
            @click="modelinkGoToBrowse('Safari')">
            <img v-lazy="gconfig.SAFARI_LOGO">
          </div>
        </div>
      </div>
    </div>
    <!-- 菜单nav -->
    <div class="nav-container">
      <b-navbar toggleable="xl">
        <b-navbar-toggle
          target="nav_collapse"/>
        <!-- 名牌位置：logo -->
        <b-navbar-brand href="/">
          <!-- {{ $t('common.ModeSens') }} -->
          <img
            :src="gconfig.MS_LOGONEW"
            :alt="$t('common.ModeSens')">
        </b-navbar-brand>
        <!-- menu -->
        <b-collapse
          id="nav_collapse"
          is-nav>
          <!-- 菜单分类 -->
          <!-- pc端 -->
          <ThreeLevelMenu/>
          <!-- 响应式 -->
          <NavCategory/>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- COUNTRIES -->
            <b-nav-item-dropdown
              v-if="COUNTRIES"
              class="country-select-container"
              right
              no-caret>
              <template slot="button-content">
                <i :class="'country-icon country-' + $i18n.country"/>
                <span class="country-selected">{{ COUNTRIES[$i18n.country.toUpperCase()] ? COUNTRIES[$i18n.country.toUpperCase()][1] : '' }}</span>
                <span class="country-category">{{ $t('common.COUNTRY') }}</span>
                <img v-lazy="gconfig.SIDEBAR_MORE">
              </template>
              <b-dropdown-item
                v-for="(opt,index) in COUNTRIES"
                :key="index"
                :href="switchLocalePath(index.toLowerCase(), $i18n.locale)">
                <i :class="'country-icon country-' + index.toLowerCase()"/> {{ opt[4] }}
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- language -->
            <b-nav-item-dropdown
              class="language-dropdown"
              no-caret>
              <template slot="button-content">
                {{ $t('common.LANGUAGE') }}
                <img v-lazy="gconfig.SIDEBAR_MORE">
              </template>
              <b-dropdown-item
                v-for="locale in $i18n.locales"
                :key="locale.code"
                :value="locale.code">{{ locale.name }}</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-form-select
              v-model="langSelected"
              class="language-select-container"
              @change="langChange">
              <option
                v-for="locale in $i18n.locales"
                :key="locale.code"
                :value="locale.code">{{ locale.name }}</option>
            </b-form-select>
          </b-navbar-nav>
        </b-collapse>
        <div class="d-flex justify-content-between settingbox">
          <!-- 登录/注册 -->
          <div class="userInfo">
            <a
              v-b-modal.mdLogin
              v-if="!$store.state.login_status"
              href="javascript:;">
              <img v-lazy="'https://mds0.com/static/img/20180905account_b.svg'">
            </a>
            <div
              v-else
              class="d-flex justify-content-between align-items-center authInfo">
              <a
                v-b-modal.noticeproductmd
                href="javascript:;"><img v-lazy="'https://mds0.com/static/img/prd-update-20180504.svg'"></a>
              <a
                v-b-modal.noticeusermd
                href="javascript:;"><img v-lazy="'https://mds0.com/static/img/social-update-20180504.svg'"></a>
              <b-dropdown
                v-if="lsuser"
                variant="link"
                right
                no-caret>
                <template slot="text">
                  <a href="javascript:;"><img
                    v-lazy="lsuser.icon"
                    :alt="lsuser.username"></a>
                </template>
                <b-dropdown-item href="/account/loyalty/">{{ $t('nav.MyLoyalty') }}</b-dropdown-item>
                <b-dropdown-item :href="'/u/'+lsuser.username">{{ $t('nav.MyCloset') }}</b-dropdown-item>
                <b-dropdown-item href="/dashboard/">{{ $t('nav.MyDashboard') }}</b-dropdown-item>
                <b-dropdown-item href="/product/coupons/">{{ $t('nav.MyOffers') }}</b-dropdown-item>
                <b-dropdown-item
                  v-if="$i18n.country==='cn'"
                  :href="'https://pay.modesens.com/order/index/?t='+gconfig.PAY_HASH_TOKEN">{{ $t('nav.MyOrders') }}</b-dropdown-item>
                <b-dropdown-item href="/invite/">{{ $t('common.InviteFriends') }}</b-dropdown-item>
                <b-dropdown-item href="/accounts/profile/">{{ $t('common.Settings') }}</b-dropdown-item>
                <b-dropdown-divider/>
                <div v-if="lsuser.ispublisher">
                  <b-dropdown-item href="/reward/linkbuilder/">{{ $t('nav.InfluencerLinkBuilder') }}</b-dropdown-item>
                  <b-dropdown-item href="/reward/handbook/">{{ $t('nav.InfluencerHandbook') }}</b-dropdown-item>
                  <b-dropdown-item href="/reward/dashboard/">{{ $t('nav.InfluencerDashboard') }}</b-dropdown-item>
                  <b-dropdown-item href="/reward/referral/">{{ $t('nav.InfluencerReferral') }}</b-dropdown-item>
                  <b-dropdown-item href="/trending/">{{ $t('nav.FashionTrendingReport') }}</b-dropdown-item>
                  <b-dropdown-item
                    v-if="lsuser.ispubadmin"
                    href="/reward/admin/">{{ $t('nav.InfluencerAdmin') }}</b-dropdown-item>
                  <b-dropdown-divider/>
                </div>
                <b-dropdown-item v-b-modal.signoutmodal>{{ $t('common.SignOut') }}</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
          <!-- search -->
          <div class="search-container">
            <div
              class="search-btn"
              @click="openSearchInput">
              <div class="search-img"/>
              <span class="search-btn-txt">{{ $t('nav.SEARCH') }}</span>
            </div>
            <div
              v-click-outside="clickoutside"
              class="searchbox">
              <input
                v-model="searchTxt"
                type="text"
                @keyup="getHint2">
              <img
                v-lazy="'https://mds0.com/static/img/20180905search_b.svg'"
                class="search-icon">
              <div
                v-if="searchResult && (Object.keys(searchResult.words).length !== 0 || searchResult.designers || searchResult.users || searchResult.hashtags || searchResult.merchants)"
                class="searchres-box">
                <div
                  v-if="Object.keys(searchResult.words).length !== 0"
                  class="searchres-item">
                  <div class="searchres-title">{{ $t('nav.SearchProductbykeyword') }}</div>
                  <ul class="searchres-con">
                    <li
                      v-for="(word,index) in searchResult.words"
                      v-if="index < 10"
                      :key="index"
                      :title="$t('nav.Shop')+word">{{ word | capitalize }}</li>
                  </ul>
                </div>
                <div
                  v-if="searchResult.designers"
                  class="searchres-item">
                  <div class="searchres-title">{{ $t('nav.Designers') }}</div>
                  <ul class="searchres-con">
                    <li
                      v-for="(designer,index) in searchResult.designers"
                      :key="index"><a
                        :href="'/designer/'+designer.url+'/'+ gender+'/'"
                        :title="$t('nav.Shop')+designer.name">{{ designer.name }}</a>
                    </li>
                  </ul>
                </div>
                <div
                  v-if="searchResult.users"
                  class="searchres-item">
                  <div class="searchres-title">{{ $t('nav.User') }}</div>
                  <ul class="search-user-content">
                    <li
                      v-for="(user,index) in searchResult.users"
                      v-if="index < 6"
                      :key="index"
                      class="userbox">
                      <a
                        :href="'/u/'+user.username+'/'"
                        target="_blank">
                        <img
                          v-lazy="user.icon"
                          :title="$t('nav.Visit')+user.username.toLowerCase()+$t('nav.scloset')">
                        <span :class=" user.isofficial ? 'official-icon' : 'mstar-icon'"/>
                        <div class="user-name">{{ user.username.toLowerCase() }}</div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  v-if="searchResult.hashtags"
                  class="searchres-item">
                  <div class="searchres-title">{{ $t('nav.Look') }}</div>
                  <ul class="d-flex flex-wrap justify-content-start">
                    <li
                      v-for="(hashtag,index) in searchResult.hashtags"
                      v-if="index < 10"
                      :key="index"
                      :title="$t('nav.Searchlookstanged')+hashtag+$t('nav.searchend')"
                      class="momentbox">#{{ hashtag }}</li>
                  </ul>
                </div>
                <div
                  v-if="searchResult.merchants"
                  class="searchres-item">
                  <div class="searchres-title">{{ $t('nav.Store') }}</div>
                  <ul class="searchres-con">
                    <li
                      v-for="(merchant,index) in searchResult.merchants"
                      v-if="index < 6"
                      :key="index"><a
                        :href="'/store/'+merchant.url+'/'+gender+'/'"
                        :title="$t('nav.Shopproductsfrom')+merchant.name+$t('nav.shoppend')">{{ merchant.name }}</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-navbar>
    </div>
    <!-- <headerModals/> -->
  </header>
</template>
<script>
import ThreeLevelMenu from '~/components/header/ThreeLevelMenu'
import NavCategory from '~/components/header/NavCategory'
import { getBrowse } from '~/assets/js/utils/utils.js'
export default {
  components: {
    NavCategory,
    ThreeLevelMenu
  },
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  data() {
    return {
      langSelected: this.$i18n.locale,
      countryLower: this.$i18n.country,
      COUNTRIES: null,
      preIndexOver: -1,
      secondaryIndexOver: -1,
      searchTxt: '',
      searchResult: '',
      serachInputOpen: false,
      hint2Timeout: null,
      mybrowse: null
    }
  },
  computed: {
    lsuser() {
      return this.$store.state.lsuser
    },
    gender() {
      if (this.$store.state.gender === 'm') {
        return 'men'
      }
      return 'women'
    }
  },
  mounted() {
    console.log(3434343434)
    this.getConfig()
    this.mybrowse = getBrowse()
    $('.main-container').css('padding-top', $('.header').height())

    $('.navbar-toggler-icon').click(evt => {
      evt.preventDefault()
      evt.stopPropagation()
      let showStatus = $('.header .navbar-expand-xl').hasClass('show')
      if (showStatus) {
        $('.header .navbar-expand-xl').removeClass('show')
        $('.wrapper-mask').addClass('hidden')
      } else {
        $('.header .navbar-expand-xl').addClass('show')
        $('.wrapper-mask').removeClass('hidden')
      }
      $('#nav_collapse').animate({ left: showStatus ? '-100%' : 0 })
      $('.header').animate({ left: showStatus ? 0 : '80%' })
    })
  },
  methods: {
    async getConfig() {
      let { COUNTRIES } = await this.$axios.post('/config/', {
        secretkey: process.env.secretKey
      })
      this.COUNTRIES = COUNTRIES
    },
    langChange(val) {
      let path = this.switchLocalePath(this.$i18n.country, val)
      this.$router.replace(path)
      this.$nextTick(() =>
        $('.main-container').css('padding-top', $('header').height())
      )
    },
    getHint2() {
      clearTimeout(this.hint2Timeout)
      let data = {}
      data.txt = this.searchTxt
      data.amount = 10
      this.hint2Timeout = setTimeout(async () => {
        let { rhints } = await this.$axios.get('/hint2/', { params: data })
        this.searchResult = rhints
        if ($(document).width() < 1200) {
          this.serachInputOpen = true
          $('.searchbox').show()
        }
        this.$nextTick(() => {
          //获取search_box的max-height;
          var search_h = $(window).height() - 150
          $('.searchres-box').css('max-height', search_h)
        })
      }, 200)
    },
    openSearchInput() {
      if (this.serachInputOpen === true) {
        $('.searchbox').hide()
        this.serachInputOpen = false
        return
      }
      if ($(document).width() > 1199) {
        $('.search-icon').show()
        $('.searchbox input')
          .stop()
          .animate({ width: '600px' }, () => {
            $('.searchbox input').css({
              padding: '6px 12px',
              'box-shadow': '0 3px 10px 1px rgba(0, 0, 0, 0.4)'
            })
            this.serachInputOpen = true
          })
      }
      $('.searchbox input').focus()
      this.getHint2()
    },
    clickoutside(evt) {
      if ($(document).width() > 1199) {
        if (this.serachInputOpen === true) {
          this.serachInputOpen = false
          $('.search-icon').hide()
          $('.searchbox input')
            .stop()
            .animate({ width: '0' }, function() {
              $('.searchbox input').css({
                padding: '0px',
                'box-shadow': 'none'
              })
            })
          this.searchResult = ''
        }
      } else {
        if (evt.target === $('.search-btn > img')[0]) {
          return
        }
        if (this.serachInputOpen === true) {
          $('.searchbox').hide()
          this.serachInputOpen = false
        }
      }
    },
    installChromeExtention(evt) {
      ga('send', 'event', 'Test', 'Extention', 'Chrome')
      window.open(
        'https://chrome.google.com/webstore/detail/modesens-shopping-assista/cmfmhegpbogfmojekmidappigcfbgbcb',
        '_blank'
      )
      evt.stopPropagation()
    },
    installOperaExtention() {
      ga('send', 'event', 'Test', 'Extention', 'Opera')
      var id = 'efjhmecngnegjbeammojcaecfmjllpbk'
      opr.addons.installExtension(
        id,
        function() {
          $.each($('.opera-install-button'), function(i, e) {
            $(e).attr('onclick', "window.open('')")
            $(e)
              .find('span')
              .html(this.$t('Write Review'))
          })
          ga('send', 'event', 'Test', 'Extention', 'operaSuccess')
        },
        function(errorMessage) {
          alert('Error: ' + errorMessage)
          extentionErrorMsg = errorMessage
        }
      )
      event.stopPropagation()
    },
    installFFExtention() {
      ga('send', 'event', 'Test', 'Extention', 'Firefox')
      var params = {
        Foo: {
          URL: FIREFOX_INSTALL_XPI
        }
      }
      InstallTrigger.install(params)
      event.stopPropagation()
    },
    installSafariExtention() {
      ga('send', 'event', 'Test', 'Extention', 'Safari')
    },
    modelinkGoToBrowse(browse) {
      if (browse === 'Chrome') {
        window.open(
          'https://chrome.google.com/webstore/detail/modesens-shopping-assista/cmfmhegpbogfmojekmidappigcfbgbcb'
        )
      } else if (browse === 'Firefox') {
        window.open(
          'https://addons.mozilla.org/firefox/addon/modesens-shopping-assistant/'
        )
      } else if (browse === 'Safari') {
        window.open(
          'https://safari-extensions.apple.com/details/?id=com.modesens.shoppingassistant-6EL854LDB8'
        )
      }
    }
  }
}
</script>
<style lang="less">
@import '../../assets/css/components/header.less';
@import '../../assets/css/components/countries.less';
</style>
