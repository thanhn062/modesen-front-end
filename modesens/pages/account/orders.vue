<template>
  <section>
    <h1 class="hiddenh1">{{ $t('accountLoyalty.my_loyalty') }}</h1>
    <UserInfo
      :lsuser="lsuser"
      :level="level"/>
  </section>
</template>
<script>
import UserInfo from '~/components/loyalty/UserInfo.vue'

export default {
  components: {
    UserInfo
  },
  data() {
    return {
      lsuser: null,
      level: null,
      userLevel: ''
    }
  },
  mounted() {},
  methods: {
    async getUserInfo() {
      let params = {}
      params.level = true
      let { lsuser, level } = await this.$axios.post(
        '/accounts/profile/get/',
        params
      )
      this.lsuser = lsuser
      this.level = level
      this.userLevel = level.level
      this.flag1 = true
      if ($(window).width() < 1200) {
        this.$nextTick(() => {
          let backtab = `<div class='tab-backbtn' >< Back</div>`
          $('.nav-tabs').before(backtab)
          $('.tab-backbtn').on('click', this.tabback)
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
</style>
