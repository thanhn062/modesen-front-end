<template>
  <div class="userInfoBox">
    <div
      v-if="lsuser"
      class="userInfoinnerBox">
      <div class="userinfo">
        <img 
          v-lazy="lsuser.icon" 
          alt="">
        <div class="info">
          <div class="user_name">{{ lsuser.username }}</div>
          <div class="user_bio">{{ lsuser.bio }}</div>
          <div class="user_words">{{ lsuser.words }}</div>
        </div>
      </div>
      <div class="levelcard">
        <div
          v-if="level"
          class="card">
          <img
            v-lazy="'/img/20181213bronzecard.svg'"
            v-if="level.level==='Bronze'" 
            alt="">
          <img
            v-lazy="'/img/20181213silvercard.svg'"
            v-if="level.level==='Silver'" 
            alt="">
          <img
            v-lazy="'/img/20181213goldcard.svg'"
            v-if="level.level==='Gold'" 
            alt="">
          <img
            v-lazy="'/img/20181213platinumcard.svg'"
            v-if="level.level==='Platinum'" 
            alt="">
          <div class="cardinfo keepLeft">
            <div class="userStart">
              <div
                v-if="lsuser.first_name !== '' || lsuser.last_name !== ''"
                class="name">{{ lsuser.first_name }} {{ lsuser.last_name }}</div>
              <div
                v-else
                class="name">{{ lsuser.username }}</div>
            </div>
            <div class="currentLevel">{{ $t('accountLoyalty.'+userLevel.toUpperCase()) }}</div>
            <div class="userEnd">
              <nuxt-link
                to="/loyalty/"
                data-ga-click="accountLoyalty-card--">
                {{ $t('accountLoyalty.memberendTimgcard') }} {{ level.end_date }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="userInfoinnerBox">
      <img
        v-lazy="'/img/20190102sync.gif'"
        alt=""
        class="loadmore loadmoreall">  
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
        lsuser: null,
        level: null,
        userLevel: null,
        flag1: false
      },
      lsuser: null,
      level: null,
      userlevel: ''
    }
  },
  mounted() {
    this.getUserInfo()
  },
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
      this.userInfo.lsuser = lsuser
      this.userInfo.level = level
      this.userInfo.flag1 = true
      this.$emit('userinfoloaded', this.userInfo)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/account/userInfo.less';
</style>
