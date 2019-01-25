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
            :src="GLOBAL.MS_LOGONEW"
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
                <img :src="GLOBAL.SIDEBAR_MORE">
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
                <img :src="GLOBAL.SIDEBAR_MORE">
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
        <!-- 登录/注册 -->
        <div class="userInfo">
          <a
            v-b-modal.mdLogin
            v-if="lsuid===''"
            href="#">
            <img src="https://mds0.com/static/img/20180905account_b.svg">
          </a>
          <div
            v-else
            d-flex>
            <a
              href="#"><img src="https://mds0.com/static/img/prd-update-20180504.svg"></a>
            <a
              href="#"><img src="https://mds0.com/static/img/social-update-20180504.svg"></a>
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
      secondaryIndexOver: -1
    }
  },
  created() {
    console.log('header')
  },
  mounted() {
    console.log('header-mounted')
    this.getConfig()
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
      console.log(333333)
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
    dropdownMenuOpen(evt) {
      console.log(evt.target)
      // console.log($(evt.target).offsetParent()[0].lastElementChild)
    },
    showntest() {
      console.log('shown')
    }
  }
}
</script>
<style lang="less">
@import '../../assets/css/components/header.less';
@import '../../assets/css/components/countries.less';
</style>
