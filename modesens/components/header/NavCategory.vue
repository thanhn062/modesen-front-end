<template>
  <b-navbar-nav class="nav-mini-menu">
    <b-nav-item-dropdown no-caret>
      <template slot="button-content">
        {{ $t('common.WOMEN') }}
        <img
          v-lazy="gconfig.SIDEBAR_MORE"
          alt="">
      </template>
      <b-dropdown-item
        href="/product/women/clothing/"
        data-ga-click="navWomen-clothing--">{{ $t('nav.CLOTHING') }}</b-dropdown-item>
      <b-dropdown-item
        href="/product/women/bags/"
        data-ga-click="navWomen-bags--">{{ $t('nav.BAGS') }}</b-dropdown-item>
      <b-dropdown-item
        href="/product/women/shoes/"
        data-ga-click="navWoemn-shoes--">{{ $t('nav.SHOES') }}</b-dropdown-item>
      <b-dropdown-item
        href="/product/women/accessories/"
        data-ga-click="navWomen-accessories--">{{ $t('nav.ACCESSORIES') }}</b-dropdown-item>
      <b-dropdown-item
        v-b-modal.noticemodal1
        v-if="$i18n.country==='cn'"
        data-ga-click="navWomen-beauty--">{{ $t('nav.BEAUTY') }}</b-dropdown-item>
      <b-dropdown-item
        v-else
        href="/product/women/beauty/"
        data-ga-click="navWomen-beauty--">{{ $t('nav.BEAUTY') }}</b-dropdown-item>
      <b-dropdown-item
        href="/product/women/sale/?orderby=-betterprice_time"
        data-ga-click="navWomen-sale--">{{ $t('nav.SALE') }}</b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item-dropdown no-caret>
      <template slot="button-content">
        {{ $t('common.MEN') }}
        <img
          v-lazy="gconfig.SIDEBAR_MORE"
          alt="">
      </template>
      <b-dropdown-item
        href="/product/men/clothing/"
        data-ga-click="navMen-clothing--">{{ $t('nav.CLOTHING') }}</b-dropdown-item>
      <b-dropdown-item
        href="/product/men/bags/"
        data-ga-click="navMen-bags--">{{ $t('nav.BAGS') }}</b-dropdown-item>
      <b-dropdown-item
        href="/product/men/shoes/"
        data-ga-click="navMen-shoes--">{{ $t('nav.SHOES') }}</b-dropdown-item>
      <b-dropdown-item
        href="/product/men/accessories/"
        data-ga-click="navMen-accessories--">{{ $t('nav.ACCESSORIES') }}</b-dropdown-item>
      <b-dropdown-item
        v-b-modal.noticemodal1
        v-if="$i18n.country==='cn'"
        data-ga-click="navMen-grooming--">{{ $t('nav.GROOMING') }}</b-dropdown-item>
      <b-dropdown-item
        v-else
        href="/product/men/grooming/"
        data-ga-click="navMen-grooming--">{{ $t('nav.GROOMING') }}</b-dropdown-item>
      <b-dropdown-item
        href="/product/men/sale/?orderby=-betterprice_time"
        data-ga-click="navMen-sale--">{{ $t('nav.SALE') }}</b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item-dropdown no-caret>
      <template slot="button-content">
        {{ $t('common.OFFERS') }}
        <img
          v-lazy="gconfig.SIDEBAR_MORE"
          alt="">
      </template>
      <b-dropdown-item
        href="/product/coupons/"
        data-ga-click="navOffers-COUPONS--">{{ $t('nav.COUPONS') }}</b-dropdown-item>
      <b-dropdown-item
        href="/product/women/sale/"
        data-ga-click="navOffers-WOMENSSALE--">{{ $t('nav.WOMENSSALE') }}</b-dropdown-item>
      <b-dropdown-item
        href="/product/men/sale/"
        data-ga-click="navOffers-MENSSALE--">{{ $t('nav.MENSSALE') }}</b-dropdown-item>
    </b-nav-item-dropdown>
    <a
      href="/designers/"
      class="nav-link"
      data-ga-click="nav-DESIGNERS--"><span>{{ $t('common.DESIGNERS') }}</span></a>
    <a
      href="/designers/"
      class="nav-link"
      data-ga-click="nav-COMMUNITY--"><span>{{ $t('common.COMMUNITY') }}</span></a>
    <a
      href="/why-modesens/"
      class="nav-link"
      data-ga-click="nav-WHYMODESENS--"><span>{{ $t('nav.WHYMODESENS') }}</span></a>
    <a
      href="javascript:;"
      class="nav-link"
      data-ga-click="nav-PRODUCTALERT--"><span>{{ $t('nav.PRODUCTALERT') }}</span></a>
    <a
      href="javascript:;"
      class="nav-link"
      data-ga-click="nav-SOCIALFEED--"><span>{{ $t('nav.SOCIALFEED') }}</span></a>
  </b-navbar-nav>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
</style>
