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
            :src="moreimg"
            alt="">
        </a>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  // layout: 'noframe',
  data() {
    return {
      menus: [
        { title: 'My Loyalty', url: '/account/loyalty/' },
        { title: 'My Closet', url: '' },
        { title: 'My Offers', url: '/product/coupons/' },
        { title: 'My Orders', url: '/account/orders/' },
        { title: 'Settings', url: '/accounts/profile/' },
        { title: 'Invite Friends', url: '/invite/' }
      ],
      moreimg: '/img/20190225jiantou.svg'
    }
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
@import '../assets/css/common.less';
.more-container {
  .menulist {
    padding: 0 30px;
    height: 40px;
    font-size: 16px;
    border-bottom: 0.5px solid #f9f9f9;
  }
}
</style>
