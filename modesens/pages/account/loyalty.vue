<template>
  <section class="aloyalty-con">
    <h1 class="hiddenh1">{{ $t('accountLoyalty.my_loyalty') }}</h1>
    <div
      class="membershippage">
      <UserInfo @userinfoloaded="userInfoLoad"/>
      <div
        v-if="flag1"
        class="page-content container">
        <Tabscon
          v-if="levelinfo"
          :userlevel="levelinfo"
          :activetab="'loyalty'"
          :userinfoflag="flag1"/>
      </div>
    </div>
  </section>
</template>
<script>
import UserInfo from '~/components/accounts/UserInfo.vue'
import Tabscon from '~/components/accounts/Tabscon.vue'
export default {
  metaInfo() {
    let headobj = {}
    let H1 = this.$t('accountLoyalty.my_loyalty')
    let TITLE = this.$t('nav.MyLoyalty') + ' | ModeSens'
    let request = this.$store.state.request
    if (request) {
      let MS_LOGO = 'https://cdn.modesens.com' + this.gconfig.MS_LOGONEW
      headobj = this.commonfn.creatMetaTitle(H1, TITLE, MS_LOGO)
    }
    return headobj
  },
  components: {
    UserInfo,
    Tabscon
  },
  data() {
    return {
      levelinfo: null,
      flag1: false
    }
  },
  methods: {
    userInfoLoad: function(userinfo) {
      this.levelinfo = userinfo.level
      this.flag1 = userinfo.flag1
    }
  }
}
</script>
<style lang="less">
@import '../../assets/css/account/loyalty.less';
</style>
