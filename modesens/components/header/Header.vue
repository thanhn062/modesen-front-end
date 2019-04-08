<template>
  <header class="header">
    <!-- 弹窗链接 -->
    <div
      v-if="$i18n.locale!=='zh'"
      id="popLink"
      class="d-none d-flex justify-content-center align-items-center">
      <img
        v-lazy="'/img/20180929logo.svg'"
        alt="">
      <a
        href="/shopping-assistant/"
        data-ga-click="headerNav-Stores--">
        <span>Shop like a pro - Get your smart fashion <b>SHOPPING ASSISTANT</b></span>
      </a>
      <InstallBtn/>
    </div>
    <!-- 菜单nav -->
    <div class="nav-container">
      <b-navbar toggleable="xl">
        <b-navbar-toggle target="nav_collapse"/>
        <!-- logo位置 -->
        <b-navbar-brand
          href="/"
          data-ga-click="Nav-logo--">
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
          <NavMenu v-if="$store.state.deviceType==='pc'"/>
          <!-- 响应式 -->
          <NavCategory
            v-else
            :countries="COUNTRIES"
            :switchlocalcountry="i18nCookieChange"/>
          <!-- Right aligned nav items -->
          <b-navbar-nav
            v-if="$store.state.deviceType==='pc'"
            class="ml-auto">
            <!-- COUNTRIES -->
            <b-nav-item-dropdown
              class="country-select-container"
              right
              no-caret>
              <template slot="button-content">
                <i :class="'country-icon country-' + $i18n.country"/>
                <span
                  v-if="COUNTRIES"
                  class="country-selected">
                  {{ COUNTRIES[$i18n.country.toUpperCase()] ? COUNTRIES[$i18n.country.toUpperCase()][1] : '' }}
                </span>
              </template>
              <b-dropdown-item
                v-for="(opt,index) in COUNTRIES"
                :key="index"
                href="javascript:;"
                @click="i18nCookieChange(index.toLowerCase(), $i18n.locale)">
                <i :class="'country-icon country-' + index.toLowerCase()"/> {{ opt[4] }}
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- language -->
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
              <img
                v-lazy="'/img/20180905account_b.svg'"
                alt="">
            </a>
            <div
              v-if="$store.state.lsuser"
              class="d-flex justify-content-between align-items-center authInfo">
              <a
                v-b-modal.noticeproductmd
                href="javascript:;"
                @click="has_notice_p=false">
                <img
                  v-lazy="'/img/prd-update-20180504.svg'"
                  alt="">
                <span
                  v-if="has_notice_p && $store.state.lsuser.has_notice_p"
                  class="ncount"/>
              </a>
              <a
                v-b-modal.noticeusermd
                href="javascript:;"
                @click="has_notice_m=false">
                <img
                  v-lazy="'/img/social-update-20180504.svg'"
                  alt="">
                <span
                  v-if="has_notice_m && $store.state.lsuser.has_notice_m"
                  class="ncount"/>
              </a>
              <b-dropdown
                v-if="lsuser"
                variant="link"
                right
                no-caret>
                <template slot="text">
                  <UserIcon
                    :url="lsuser.icon"
                    :ismaster="false"
                    :isoffical="false"
                    style="width:20px;height:20px;"/>
                </template>
                <b-dropdown-item href="/account/loyalty/">{{ $t('nav.MyLoyalty') }}</b-dropdown-item>
                <b-dropdown-item :href="'/u/'+lsuser.username">{{ $t('nav.MyCloset') }}</b-dropdown-item>
                <b-dropdown-item href="/dashboard/">{{ $t('nav.MyDashboard') }}</b-dropdown-item>
                <b-dropdown-item href="/coupons/">{{ $t('nav.MyOffers') }}</b-dropdown-item>
                <b-dropdown-item href="/account/orders/">{{ $t('nav.MyOrders') }}</b-dropdown-item>
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
              data-ga-click="Header-searchIcon--"
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
                v-lazy="'/img/20180905search_b.svg'"
                class="search-icon"
                alt="">
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
                        target="_blank"
                        data-ga-click="HeaderSearch-userIcon--">
                        <UserIcon
                          :url="user.icon"
                          :ismaster="user.ismstar"
                          :isoffical="user.isofficial"
                          :cornericonstyle="'right:-6px;width:20px;height:20px;'"
                          style="width:44px;height:44px;"/>
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
                      :key="index">
                      <a
                        :href="'/store/'+merchant.url+'/'+gender+'/'"
                        :title="$t('nav.Shopproductsfrom')+merchant.name+$t('nav.shoppend')"
                        data-ga-click="HeaderSearch-merchantName--">{{ merchant.name }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-navbar>
    </div>
  </header>
</template>
<script>
import NavMenu from '~/components/header/NavMenu'
import NavCategory from '~/components/header/NavCategory'
import InstallBtn from '~/components/extention/InstallBtn'
import { getBrowse } from '~/assets/js/utils/utils.js'
import UserIcon from '~/components/UserIcon'
export default {
  components: {
    NavCategory,
    NavMenu,
    InstallBtn,
    UserIcon
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
      mybrowse: null,
      has_notice_p: true,
      has_notice_m: true
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
    this.getConfig()
    this.$nextTick(() => {
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
    })
  },
  methods: {
    async getConfig() {
      let { COUNTRIES } = await this.$axios.post('/config/', {
        secretkey: process.env.secretKey
      })
      this.COUNTRIES = COUNTRIES
    },
    i18nCookieChange(country, locale) {
      let date = new Date()
      this.$cookies.set(this.gconfig.countryKey, country, {
        expires: new Date(date.setDate(date.getDate() + 365)),
        path: '/'
      })
      this.$cookies.set(this.gconfig.localeKey, locale, {
        expires: new Date(date.setDate(date.getDate() + 365)),
        path: '/'
      })
      // let path = this.switchLocalePath(country, locale)
      // path = path.replace(/\/[a-z]{2}\/[a-z]{2}\//, '/')
      // window.open(path, '_self')
      window.open(this.$route.fullPath, '_self')
    },
    langChange(val) {
      this.i18nCookieChange(this.$i18n.country, val)
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
      }, 500)
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
    }
  }
}
</script>
<style lang="less">
@import '../../assets/css/components/header.less';
@import '../../assets/css/components/countries.less';
</style>
