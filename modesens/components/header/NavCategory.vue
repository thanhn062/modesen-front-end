<template>
  <b-navbar-nav class="nav-mini-menu">
    <b-nav-item-dropdown no-caret>
      <template slot="button-content">
        {{ $t('common.WOMEN') }}
        <img v-lazy="gconfig.SIDEBAR_MORE">
      </template>
      <b-dropdown-item href="/product/women/clothing/">{{ $t('nav.CLOTHING') }}</b-dropdown-item>
      <b-dropdown-item href="/product/women/bags/">{{ $t('nav.BAGS') }}</b-dropdown-item>
      <b-dropdown-item href="/product/women/shoes/">{{ $t('nav.SHOES') }}</b-dropdown-item>
      <b-dropdown-item href="/product/women/accessories/">{{ $t('nav.ACCESSORIES') }}</b-dropdown-item>
      <b-dropdown-item
        v-b-modal.noticemodal1
        v-if="$i18n.country==='cn'">{{ $t('nav.BEAUTY') }}</b-dropdown-item>
      <b-dropdown-item
        v-else
        href="/product/women/beauty/">{{ $t('nav.BEAUTY') }}</b-dropdown-item>
      <b-dropdown-item href="/product/women/sale/?orderby=-betterprice_time">{{ $t('nav.SALE') }}</b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item-dropdown no-caret>
      <template slot="button-content">
        {{ $t('common.MEN') }}
        <img v-lazy="gconfig.SIDEBAR_MORE">
      </template>
      <b-dropdown-item href="/product/men/clothing/">{{ $t('nav.CLOTHING') }}</b-dropdown-item>
      <b-dropdown-item href="/product/men/bags/">{{ $t('nav.BAGS') }}</b-dropdown-item>
      <b-dropdown-item href="/product/men/shoes/">{{ $t('nav.SHOES') }}</b-dropdown-item>
      <b-dropdown-item href="/product/men/accessories/">{{ $t('nav.ACCESSORIES') }}</b-dropdown-item>
      <b-dropdown-item
        v-b-modal.noticemodal1
        v-if="$i18n.country==='cn'">{{ $t('nav.GROOMING') }}</b-dropdown-item>
      <b-dropdown-item
        v-else
        href="/product/men/grooming/">{{ $t('nav.GROOMING') }}</b-dropdown-item>
      <b-dropdown-item href="/product/men/sale/?orderby=-betterprice_time">{{ $t('nav.SALE') }}</b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item-dropdown no-caret>
      <template slot="button-content">
        {{ $t('common.OFFERS') }}
        <img v-lazy="gconfig.SIDEBAR_MORE">
      </template>
      <b-dropdown-item href="/product/coupons/">{{ $t('nav.COUPONS') }}</b-dropdown-item>
      <b-dropdown-item href="/product/women/sale/">{{ $t('nav.WOMENSSALE') }}</b-dropdown-item>
      <b-dropdown-item href="/product/men/sale/">{{ $t('nav.MENSSALE') }}</b-dropdown-item>
    </b-nav-item-dropdown>
    <a
      href="/designers/"
      class="nav-link"><span>{{ $t('common.DESIGNERS') }}</span></a>
    <a
      href="/designers/"
      class="nav-link"><span>{{ $t('common.COMMUNITY') }}</span></a>
    <a
      href="/why-modesens/"
      class="nav-link"><span>{{ $t('nav.WHYMODESENS') }}</span></a>
    <a
      href="javascript:;"
      class="nav-link"><span>{{ $t('nav.PRODUCTALERT') }}</span></a>
    <a
      href="javascript:;"
      class="nav-link"><span>{{ $t('nav.SOCIALFEED') }}</span></a>
  </b-navbar-nav>
</template>
<script>
export default {
  methods: {
    openDesigners(evt) {
      evt.preventDefault()
      window.open('https://modesens.com/designers/', '_self')
    }
  }
}
</script>
<style lang="less" scoped>
</style>
