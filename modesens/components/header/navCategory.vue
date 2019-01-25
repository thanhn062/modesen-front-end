<template>
  <b-navbar-nav>
    <b-nav-item-dropdown no-caret>
      <template slot="button-content">
        {{ $t('WOMEN') }}
        <img :src="GLOBAL.SIDEBAR_MORE">
      </template>
      <b-dropdown-item href="/product/women/clothing/">{{ $t('CLOTHING') }}</b-dropdown-item>
      <b-dropdown-item href="/product/women/bags/">{{ $t('BAGS') }}</b-dropdown-item>
      <b-dropdown-item href="/product/women/shoes/">{{ $t('SHOES') }}</b-dropdown-item>
      <b-dropdown-item href="/product/women/accessories/">{{ $t('ACCESSORIES') }}</b-dropdown-item>
      <b-dropdown-item
        v-b-modal.noticemodal1
        v-if="$i18n.country==='cn'">{{ $t('BEAUTY') }}</b-dropdown-item>
      <b-dropdown-item
        v-else
        href="/product/women/beauty/">{{ $t('BEAUTY') }}</b-dropdown-item>
      <b-dropdown-item href="/product/women/sale/?orderby=-betterprice_time">{{ $t('SALE') }}</b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item-dropdown no-caret>
      <template slot="button-content">
        {{ $t('MEN') }}
        <img :src="GLOBAL.SIDEBAR_MORE">
      </template>
      <b-dropdown-item href="/product/men/clothing/">{{ $t('CLOTHING') }}</b-dropdown-item>
      <b-dropdown-item href="/product/men/bags/">{{ $t('BAGS') }}</b-dropdown-item>
      <b-dropdown-item href="/product/men/shoes/">{{ $t('SHOES') }}</b-dropdown-item>
      <b-dropdown-item href="/product/men/accessories/">{{ $t('ACCESSORIES') }}</b-dropdown-item>
      <b-dropdown-item
        v-b-modal.noticemodal1
        v-if="$i18n.country==='cn'">{{ $t('GROOMING') }}</b-dropdown-item>
      <b-dropdown-item
        v-else
        href="/product/men/grooming/">{{ $t('GROOMING') }}</b-dropdown-item>
      <b-dropdown-item href="/product/men/sale/?orderby=-betterprice_time">{{ $t('SALE') }}</b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item-dropdown no-caret>
      <template slot="button-content">
        {{ $t('OFFERS') }}
        <img :src="GLOBAL.SIDEBAR_MORE">
      </template>
      <b-dropdown-item href="/product/coupons/">{{ $t('COUPONS') }}</b-dropdown-item>
      <b-dropdown-item href="/product/women/sale/">{{ $t('WOMENSSALE') }}</b-dropdown-item>
      <b-dropdown-item href="/product/men/sale/">{{ $t('MENSSALE') }}</b-dropdown-item>
    </b-nav-item-dropdown>
    <a
      href="/designers/"
      class="nav-link"><span>{{ $t('DESIGNERS') }}</span></a>
    <a
      href="/designers/"
      class="nav-link"><span>{{ $t('COMMUNITY') }}</span></a>
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
