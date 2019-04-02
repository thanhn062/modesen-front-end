<template>
  <b-navbar-nav class="nav-mini-menu">
    <div role="tablist">
      <b-card no-body>
        <div
          v-b-toggle.card-women
          class="nav-menu"
          role="tab">
          <span>{{ $t('common.WOMEN') }}</span>
          <img
            v-lazy="gconfig.SIDEBAR_MORE"
            alt="">
        </div>
        <b-collapse
          id="card-women"
          accordion="my-accordion">
          <b-card-body>
            <a
              href="/product/women/clothing/"
              data-ga-click="navWomen-clothing--">{{ $t('nav.CLOTHING') }}</a>
            <a
              href="/product/women/bags/"
              data-ga-click="navWomen-bags--">{{ $t('nav.BAGS') }}</a>
            <a
              href="/product/women/shoes/"
              data-ga-click="navWoemn-shoes--">{{ $t('nav.SHOES') }}</a>
            <a
              href="/product/women/accessories/"
              data-ga-click="navWomen-accessories--">{{ $t('nav.ACCESSORIES') }}</a>
            <a
              v-b-modal.noticemodal1
              v-if="$i18n.country==='cn'"
              data-ga-click="navWomen-beauty--">{{ $t('nav.BEAUTY') }}</a>
            <a
              v-else
              href="/product/women/beauty/"
              data-ga-click="navWomen-beauty--">{{ $t('nav.BEAUTY') }}</a>
            <a
              href="/product/women/sale/?orderby=-betterprice_time"
              data-ga-click="navWomen-sale--">{{ $t('nav.SALE') }}</a>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body>
        <div
          v-b-toggle.card-men
          class="nav-menu"
          role="tab">
          <span>{{ $t('common.MEN') }}</span>
          <img
            v-lazy="gconfig.SIDEBAR_MORE"
            alt="">
        </div>
        <b-collapse
          id="card-men"
          accordion="my-accordion">
          <b-card-body>
            <a
              href="/product/men/clothing/"
              data-ga-click="navMen-clothing--">{{ $t('nav.CLOTHING') }}</a>
            <a
              href="/product/men/bags/"
              data-ga-click="navMen-bags--">{{ $t('nav.BAGS') }}</a>
            <a
              href="/product/men/shoes/"
              data-ga-click="navMen-shoes--">{{ $t('nav.SHOES') }}</a>
            <a
              href="/product/men/accessories/"
              data-ga-click="navMen-accessories--">{{ $t('nav.ACCESSORIES') }}</a>
            <a
              v-b-modal.noticemodal1
              v-if="$i18n.country==='cn'"
              data-ga-click="navMen-grooming--">{{ $t('nav.GROOMING') }}</a>
            <a
              v-else
              href="/product/men/grooming/"
              data-ga-click="navMen-grooming--">{{ $t('nav.GROOMING') }}</a>
            <a
              href="/product/men/sale/?orderby=-betterprice_time"
              data-ga-click="navMen-sale--">{{ $t('nav.SALE') }}</a>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body>
        <div
          v-b-toggle.card-offers
          class="nav-menu"
          role="tab">
          <span>{{ $t('common.OFFERS') }}</span>
          <img
            v-lazy="gconfig.SIDEBAR_MORE"
            alt="">
        </div>
        <b-collapse
          id="card-offers"
          accordion="my-accordion">
          <b-card-body>
            <a
              href="/product/coupons/"
              data-ga-click="navOffers-COUPONS--">{{ $t('nav.COUPONS') }}</a>
            <a
              href="/product/women/sale/"
              data-ga-click="navOffers-WOMENSSALE--">{{ $t('nav.WOMENSSALE') }}</a>
            <a
              href="/product/men/sale/"
              data-ga-click="navOffers-MENSSALE--">{{ $t('nav.MENSSALE') }}</a>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body>
        <a
          class="nav-menu"
          href="/designers/"
          data-ga-click="nav-DESIGNERS--"><span>{{ $t('common.DESIGNERS') }}</span></a>
      </b-card>
      <b-card no-body>
        <a
          class="nav-menu"
          href="/designers/"
          data-ga-click="nav-COMMUNITY--"><span>{{ $t('common.COMMUNITY') }}</span></a>
      </b-card>
      <b-card no-body>
        <a
          class="nav-menu"
          href="/why-modesens/"
          data-ga-click="nav-WHYMODESENS--"><span>{{ $t('nav.WHYMODESENS') }}</span></a>
      </b-card>
      <b-card no-body>
        <a
          v-b-modal.noticeproductmd
          v-if="$store.state.login_status"
          href="javascript:;"
          data-ga-click="nav-PRODUCTALERT--"><span>{{ $t('nav.PRODUCTALERT') }}</span></a>
      </b-card>
      <b-card no-body>
        <a
          v-b-modal.noticeusermd
          v-if="$store.state.login_status"
          href="javascript:;"
          data-ga-click="nav-SOCIALFEED--"><span>{{ $t('nav.SOCIALFEED') }}</span></a>
      </b-card>
      <b-card no-body>
        <div
          v-b-toggle.card-country
          class="nav-menu"
          role="tab">
          <span>{{ $t('common.COUNTRY') }}</span>
          <img
            v-lazy="gconfig.SIDEBAR_MORE"
            alt="">
        </div>
        <b-collapse
          id="card-country"
          accordion="my-accordion">
          <b-card-body>
            <a
              v-for="(opt,index) in countries"
              :key="index"
              href="javascript:;"
              @click="switchLocalCountry(index.toLowerCase(), $i18n.locale)">
              {{ opt[4] }}
            </a>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body>
        <div
          v-b-toggle.card-language
          class="nav-menu"
          role="tab">
          <span>{{ $t('common.LANGUAGE') }}</span>
          <img
            v-lazy="gconfig.SIDEBAR_MORE"
            alt="">
        </div>
        <b-collapse
          id="card-language"
          accordion="my-accordion">
          <b-card-body>
            <a
              v-for="locale in $i18n.locales"
              :key="locale.code"
              @click="switchLocalCountry($i18n.country, locale.code)">{{ locale.name }}</a>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </b-navbar-nav>
</template>
<script>
export default {
  props: {
    countries: {
      type: Object,
      default: function() {
        return {}
      }
    },
    switchlocalcountry: {
      type: Function,
      default: null
    }
  },
  methods: {
    switchLocalCountry(country, locale) {
      this.switchlocalcountry(country, locale)
    }
  }
}
</script>
<style lang="less" scoped>
// @media (max-width: 1199px) {
.nav-mini-menu {
  padding: 0 15px;
  height: 100%;
  background: inherit;
  overflow-y: auto;
  .card {
    border: unset;
    border-radius: unset;
    background-color: @background-eee;
  }
  .card-body {
    padding: 0 10px;
    a {
      display: block;
      padding: 5px 0;
      height: 30px;
      color: #9d9d9d;
    }
  }
  .nav-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    height: 40px;
    color: inherit;
  }
}
// }
</style>
