<template>
  <section class="more-container">
    <ul>
      <li
        v-for="(menu,i) in menus"
        :key="i"
        class="menulist">
        <a
          :href="menu.url"
          class="d-flex justify-content-between align-items-center h-100">
          <span>{{ menu.title }}</span>
          <img
            v-lazy="moreimg"
            alt="">
        </a>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  layout: 'noframe',
  data() {
    return {
      menus: [
        { title: this.$t('nav.MyLoyalty'), url: '/account/loyalty/' },
        { title: this.$t('nav.MyCloset'), url: '' },
        { title: this.$t('nav.MyOffers'), url: '/product/coupons/' },
        { title: this.$t('nav.MyOrders'), url: '/account/orders/' },
        { title: this.$t('nav.Settings'), url: '/accounts/profile/' },
        { title: this.$t('nav.InviteFriends'), url: '/invite/' }
      ],
      moreimg: '/img/20190225jiantou.svg'
    }
  },
  head: {
    title: 'ModeSens'
  },
  mounted() {
    this.getProfile()
  },
  methods: {
    async getProfile() {
      let { lsuser } = await this.$axios.post('/accounts/profile/get/', {})
      this.menus[1].url = '/u/' + lsuser.username + '/'
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common.less';
.more-container {
  .menulist {
    padding: 0 30px;
    height: 40px;
    font-size: 16px;
    border-bottom: 0.5px solid #f9f9f9;
  }
}
</style>
