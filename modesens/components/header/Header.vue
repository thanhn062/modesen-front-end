<template>
  <header class="navmenu">
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
    <div>
      <b-navbar toggleable="xl">
        <b-navbar-toggle target="nav_collapse"/>
        <!-- 名牌位置：logo -->
        <b-navbar-brand href="/">
          <!-- {{ $t('common.ModeSens') }} -->
          <img
            :src="GLOBAL.MS_LOGONEW"
            :alt="$t('common.ModeSens')">
        </b-navbar-brand>
        <!-- menu -->
        <b-collapse
          id="nav_collapse"
          is-nav>

          <!-- <b-navbar-nav>
            <b-nav-item-dropdown
              text="WOMEN"
              horizontal
              no-caret>
              <b-dropdown-item>
                <b-navbar-nav>
                  <b-nav-item-dropdown text="1">
                    <b-dropdown-item>00</b-dropdown-item>
                    <b-dropdown-item>11</b-dropdown-item>
                  </b-nav-item-dropdown>
                </b-navbar-nav>
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown
              text="WOMEN"
              horizontal
              no-caret>
              <b-dropdown-item>
                1
              </b-dropdown-item>
              <b-dropdown-item>
                2
              </b-dropdown-item>
              <b-dropdown-item>
                4
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav> -->
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
                {{ COUNTRIES[$i18n.country.toUpperCase()] ? COUNTRIES[$i18n.country.toUpperCase()][1] : '' }}
              </template>
              <b-dropdown-item
                v-for="(opt,index) in COUNTRIES"
                :key="index"
                :href="switchLocalePath(index.toLowerCase(), $i18n.locale)">
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
                  v-b-modal.noticepmd
                  href="#"><img src="https://mds0.com/static/img/prd-update-20180504.svg"></a>
                <a
                  v-b-modal.noticeumd
                  href="#"><img src="https://mds0.com/static/img/social-update-20180504.svg"></a>
              </div>
            </div>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </div>
    <headerModals/>
  </header>
</template>
<script>
import headerModals from '../modals'
export default {
  components: {
    headerModals
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
      COUNTRIES: {}
    }
  },
  created() {
    console.log('header')
    this.getConfig()
  },
  mounted() {
    console.log('header-mounted')
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
    }
  }
}
</script>
<style lang="less">
@import '../../assets/css/components/header.less';
@import '../../assets/css/components/countries.less';
</style>
