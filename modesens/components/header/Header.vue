<template>
  <header class="header">
    <!-- 弹窗链接 -->
    <div
      v-if="$i18n.locale!=='zh'"
      id="popLink"
      class="d-none d-flex justify-content-center align-items-center">
      <img src="https://mds0.com/static/img/20180929logo.svg">
      <a
        href="/shopping-assistant/"
        data-ga-click="headerNav-Stores"><span>Shop like a pro - Get your smart fashion <b>SHOPPING ASSISTANT</b></span></a>
      <div class="d-inline-block popBrowser">安装按钮</div>
    </div>
    <!-- 菜单nav -->
    <div class="nav-container">
      <b-navbar toggleable="xl">
        <b-navbar-toggle
          target="nav_collapse"/>
        <!-- 名牌位置：logo -->
        <b-navbar-brand href="/">
          <!-- {{ $t('ModeSens') }} -->
          <img
            :src="gconfig.MS_LOGONEW"
            :alt="$t('ModeSens')">
        </b-navbar-brand>
        <!-- menu -->
        <b-collapse
          id="nav_collapse"
          is-nav>
          <!-- 菜单分类 -->
          <navCategory/>
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
                <span class="country-category">{{ $t('COUNTRY') }}</span>
                <img :src="gconfig.SIDEBAR_MORE">
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
                {{ $t('LANGUAGE') }}
                <img :src="gconfig.SIDEBAR_MORE">
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
        <div class="d-flex">
          <!-- 登录/注册 -->
          <div class="userInfo">
            <a
              v-b-modal.mdLogin
              v-if="$store.state.login_status===false"
              href="javascript:;">
              <img src="https://mds0.com/static/img/20180905account_b.svg">
            </a>
            <div
              v-else
              class="d-flex justify-content-between align-items-center authInfo">
              <a
                v-b-modal.noticeproductmd
                href="javascript:;"><img src="https://mds0.com/static/img/prd-update-20180504.svg"></a>
              <a
                v-b-modal.noticeusermd
                href="javascript:;"><img src="https://mds0.com/static/img/social-update-20180504.svg"></a>
              <b-dropdown
                v-if="lsuser"
                variant="link"
                right
                no-caret>
                <template slot="text">
                  <a href="javascript:;"><img
                    :src="lsuser.icon"
                    :alt="lsuser.username"></a>
                </template>
                <b-dropdown-item href="/account/loyalty/">{{ $t('MyLoyalty') }}</b-dropdown-item>
                <b-dropdown-item :href="'/u/'+lsuser.username">{{ $t('MyCloset') }}</b-dropdown-item>
                <b-dropdown-item href="/dashboard/">{{ $t('MyDashboard') }}</b-dropdown-item>
                <b-dropdown-item href="/product/coupons/">{{ $t('MyOffers') }}</b-dropdown-item>
                <b-dropdown-item
                  v-if="$i18n.country==='cn'"
                  :href="'https://pay.modesens.com/order/index/?t='+gconfig.PAY_HASH_TOKEN">{{ $t('MyOrders') }}</b-dropdown-item>
                <b-dropdown-item href="/invite/">{{ $t('InviteFriends') }}</b-dropdown-item>
                <b-dropdown-item href="/accounts/profile/">{{ $t('Settings') }}</b-dropdown-item>
                <b-dropdown-divider/>
                <div v-if="lsuser.ispublisher">
                  <b-dropdown-item href="/reward/linkbuilder/">{{ $t('InfluencerLinkBuilder') }}</b-dropdown-item>
                  <b-dropdown-item href="/reward/handbook/">{{ $t('InfluencerHandbook') }}</b-dropdown-item>
                  <b-dropdown-item href="/reward/dashboard/">{{ $t('InfluencerDashboard') }}</b-dropdown-item>
                  <b-dropdown-item href="/reward/referral/">{{ $t('InfluencerReferral') }}</b-dropdown-item>
                  <b-dropdown-item href="/trending/">{{ $t('FashionTrendingReport') }}</b-dropdown-item>
                  <b-dropdown-item
                    v-if="lsuser.ispubadmin"
                    href="/reward/admin/">{{ $t('Influencer Admin') }}</b-dropdown-item>
                  <b-dropdown-divider/>
                </div>
                <b-dropdown-item v-b-modal.signoutmodal>{{ $t('SignOut') }}</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
          <!-- search -->
          <div class="search-container">
            <div
              class="search-btn"
              @click="openSearchInput">
              <img
                src="https://mds0.com/static/img/20180905search_b.svg">
              <span class="search-btn-txt">SEARCH</span>
            </div>
            <div
              v-click-outside="clickoutside"
              class="searchbox">
              <input
                v-model="searchTxt"
                type="text"
                @keyup="getHint2">
              <img
                class="search-icon"
                src="https://mds0.com/static/img/20180905search_b.svg">
              <div
                v-if="searchResult && (Object.keys(searchResult.words).length !== 0 || searchResult.designers || searchResult.users || searchResult.hashtags || searchResult.merchants)"
                class="searchres-box">
                <div
                  v-if="Object.keys(searchResult.words).length !== 0"
                  class="searchres-item">
                  <div class="searchres-title">{{ $t('nav.SearchProductbykeyword') }}</div>
                  <ul>
                    <li
                      v-for="(word,index) in searchResult.words"
                      :key="index"
                      :title="$t('nav.Shop')+word">{{ word | capitalize }}</li>
                  </ul>
                </div>
                <div
                  v-if="searchResult.designers"
                  class="searchres-item">
                  <div class="searchres-title">{{ $t('nav.Designers') }}</div>
                  <ul>
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
                      :key="index"
                      class="userbox">
                      <a
                        :href="'/u/'+user.username+'/'"
                        target="_blank">
                        <img
                          :src="user.icon"
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
                  <ul>
                    <li
                      v-for="(hashtag,index) in searchResult.hashtags"
                      :key="index"
                      :title="$t('nav.Searchlookstanged')+hashtag+$t('nav.searchend')"
                      class="momentbox">#{{ hashtag }}</li>
                  </ul>
                </div>
                <div
                  v-if="searchResult.merchants"
                  class="searchres-item">
                  <div class="searchres-title">{{ $t('nav.Store') }}</div>
                  <ul>
                    <li
                      v-for="(merchant,index) in searchResult.merchants"
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
// import headerModals from '../modals'
import navCategory from './navCategory'
export default {
  components: {
    navCategory
    // headerModals
  },
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  props: {
    countries: {
      type: Array,
      default: () => [1, 2, 3]
    },
    lsuid: {
      type: String,
      default: function() {
        return '123'
      }
    }
  },
  data() {
    return {
      langSelected: this.$i18n.locale,
      countryLower: this.$i18n.country,
      COUNTRIES: {},
      preIndexOver: -1,
      secondaryIndexOver: -1,
      searchTxt: '',
      searchResult: '',
      serachInputOpen: false,
      hint2Timeout: null
    }
  },
  computed: {
    lsuser() {
      console.log(333333, this.$store.state.lsuser)
      return this.$store.state.lsuser
    },
    gender() {
      if (this.$store.state.gender === 'm') {
        return 'men'
      }
      return 'women'
    }
  },
  created() {
    console.log(999999, 'header-created')
  },
  mounted() {
    this.getConfig()
    $('.main-container').css('padding-top', $('.header').height())

    $('.navbar-toggler-icon').click(evt => {
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
    clickoutside() {
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
