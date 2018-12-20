<template>
  <section>
    <div class="membershippage">
      <div class="userInfoBox">
        <div class="userInfoinnerBox">
          <div class="userinfo">
            <img 
              :src="lsuser.icon" 
              alt="">
            <div class="info">
              <div class="user_name">{{ lsuser.username }}</div>
              <div class="user_bio">{{ lsuser.bio }}</div>
              <div class="user_words">{{ lsuser.words }}</div>
            </div>
          </div>
          <div class="levelcard">
            <div class="card">
              <img
                v-if="level.level==='Bronze'" 
                src="/img/20181213bronzecard.svg"
                alt="">
              <img
                v-if="level.level==='Silver'" 
                src="/img/20181213silvercard.svg"
                alt="">
              <img
                v-if="level.level==='Gold'" 
                src="/img/20181213goldcard.svg"
                alt="">
              <img
                v-if="level.level==='Platinum'" 
                src="/img/20181213platinumcard.svg"
                alt="">
              <div class="cardinfo keepLeft">
                <div class="userStart">
                  <div class="name">{{ lsuser.username }}</div>
                  <div class="start">{{ $t('accountLoyalty.memberstartTimg') }} {{ level.start_date }}</div>
                </div>
                <div class="currentLevel">{{ $t('accountLoyalty.'+level.level.toUpperCase()) }}</div>
                <div class="userEnd">
                  <a
                    :href="BASE_URL+'/loyalty/'"
                    data-ga-click="accountLoyalty-card--"
                    target="_blank">
                    {{ $t('accountLoyalty.memberendTimg') }} {{ level.end_date }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-content container">
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
import vueNav from '~/components/nav.vue'
import myloyalty0 from '~/components/loyalty/myloyalty.vue'
export default {
  components: {
    vueNav,
    myloyalty0
  },
  data() {
    return {
      limit: -1,
      isShow: false,
      // tab项列表
      list: ['ACCOUNT OVERVIEW'],
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
  async asyncData({ app, route, $axios }) {
    var params = {}
    params.level = true
    var token = route.query.otoken
    app.$cookies.set('token', token)
    let { lsuser, level } = await $axios.post('/accounts/profile/get/', params)
    var recordsparams = {}
    recordsparams.offset = 0
    recordsparams.amount = 10
    let records = await $axios.post('/loyalty/records/', recordsparams)
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
@import '../../assets/css/account/loyalty.less';
</style>
