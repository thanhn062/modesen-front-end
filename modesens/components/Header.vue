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
      <div class="nav navbar-nav navbar-left logo">
        <a
          href="/"
          data-ga-click="header-logo--">
          <div class="logo-box">
            {{ $t('common.ModeSens') }}
            <img :src="GLOBAL.MS_LOGONEW">
          </div>
        </a>
      </div>
      <ul class="nav navbar-nav navbar-left premenu">
        <li class="dropdown">sfsdf</li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="less">
@import '../assets/css/components/header.less';
</style>
