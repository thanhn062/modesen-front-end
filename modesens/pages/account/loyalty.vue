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
                  <div
                    v-if="lsuser.first_name !== '' || lsuser.last_name !== ''"
                    class="name">{{ lsuser.first_name }} {{ lsuser.last_name }}</div>
                  <div
                    v-else
                    class="name">{{ lsuser.username }}</div>
                </div>
                <div class="currentLevel">{{ $t('accountLoyalty.'+userLevel.toUpperCase()) }}</div>
                <div class="userEnd">
                  <a
                    href="/loyalty/"
                    data-ga-click="accountLoyalty-card--"
                    target="_blank">
                    {{ $t('accountLoyalty.memberendTimgcard') }} {{ level.end_date }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-content container">
        <b-tabs
          vertical>
          <b-tab
            :title="$t('accountLoyalty.account_overview')" 
            active>
            <div
              v-if = "flag1 && flag2"
              class="page-right ">
              <keep-alive>
                <myloyalty 
                  :myloyaltycontent="level"
                  :myloyaltycontent1="userRecords"/>
              </keep-alive>
            </div>
            <div
              v-else
              class="page-right">
              <img
                src="/img/20190102sync.gif"
                alt=""
                class="loadmore">
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </section>
</template>
<script>
import myloyalty from '~/components/loyalty/myloyalty.vue'
export default {
  components: {
    myloyalty
  },
  data() {
    return {
      lsuser: {},
      level: {},
      records: {},
      userLevel: '',
      userRecords: {},
      flag1: false,
      flag2: false,
      limit: -1,
      //当前显示的页面
      currentPage: 1
    }
  },
  head: {
    title: 'membership'
  },
  async asyncData({ app, route, $axios }) {
    let oToken = route.query.otoken
    if (oToken) {
      app.$cookies.set('token', oToken)
    }
  },
  created() {
    if (this.$route.query.otoken) {
      this.getUserInfo()
      this.getRecords()
    }
  },
  methods: {
    async getUserInfo() {
      var params = {}
      params.level = true
      let { lsuser, level } = await this.$axios.post(
        '/accounts/profile/get/',
        params
      )
      this.lsuser = lsuser
      this.level = level
      this.userLevel = level.level
      this.flag1 = true
    },
    async getRecords() {
      var recordsparams = {}
      recordsparams.offset = 0
      recordsparams.amount = 10
      let records = await this.$axios.post('/loyalty/records/', recordsparams)
      this.records = records
      this.userRecords = records.records
      this.flag2 = true
    }
  }
}
</script>
<style lang="less">
@import '../../assets/css/account/loyalty.less';
</style>
