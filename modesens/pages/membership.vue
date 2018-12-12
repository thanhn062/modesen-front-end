<template>
  <section>
    <div>
      <div class="userInfoBox">
        <img 
          :src="lsuser.icon" 
          alt="">
        <div class="info">
          <div class="user_name">{{ lsuser.username }}</div>
          <div class="user_bio">{{ lsuser.bio }}</div>
          <div class="user_words">{{ lsuser.words }}</div>
        </div>
      </div>
      <div class="page-content">
        <div class="page-left">
          <vueNav 
            :navlist="list" 
            :showdir="dir"
            @navchange="tabchange"/>
        </div>
        <div class="page-right ">
          <keep-alive>
            <div 
              :is="currentView"
              :myloyaltycontent="level"
              :myloyaltycontent1="records.records"/>
          </keep-alive>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// import $ from 'jquery'
import axios from '~/plugins/axios'
import membership from '~/static/api/1.0/membership.js'
import vueNav from '~/components/nav.vue'
import myloyalty0 from '~/components/membership/myloyalty.vue'
import myloyalty1 from '~/components/membership/myloyalty1.vue'
import myloyalty2 from '~/components/membership/myloyalty2.vue'
import myloyalty3 from '~/components/membership/myloyalty3.vue'
import myloyalty4 from '~/components/membership/myloyalty4.vue'
export default {
  components: {
    vueNav,
    myloyalty0,
    myloyalty1,
    myloyalty2,
    myloyalty3,
    myloyalty4
  },
  data() {
    return {
      limit: -1,
      isShow: false,
      // tab项列表
      list: [
        'MY LOYALTY',
        'MY LOYALTY1',
        'MY LOYALTY2',
        'MY LOYALTY3',
        'MY LOYALTY4'
      ],
      // tab排列方向
      dir: 'flex-column',
      //当前显示的页面
      currentView: 'myloyalty0',
      currentPage: 1
    }
  },
  head: {
    title: 'membership'
  },
  async asyncData({ app }) {
    var params = {}
    params.level = true
    // params.lsuid = 652
    let {
      data: { lsuser, level }
    } = await axios.postasync(
      '/accounts/profile/get/',
      params,
      0,
      app.$cookies.get('TOKEN')
    )
    var recordsparams = {}
    recordsparams.offset = 0
    recordsparams.amount = 10
    let { data: records } = await axios.postasync(
      '/loyalty/records/',
      recordsparams,
      0,
      app.$cookies.get('TOKEN')
    )
    return {
      lsuser,
      level,
      records
    }
  },
  computed: {},
  methods: {
    tabchange(tabItem) {
      this.currentView = 'myloyalty' + tabItem
    }
  }
}
</script>
<style lang="less">
@import '../assets/css/membership.less';
</style>
