<template>
  <section>
    <div
      v-if = "flag1"
      class="membershippage">
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
        <div
          v-if="activeTab === 'order'"
          class="mobile-tabbtn mobile-only"
          @click="tabswich">{{ $t('accountLoyalty.my_order') }}</div>
        <div
          v-else-if="activeTab === 'loyalty'"
          class="mobile-tabbtn mobile-only"
          @click="tabswich">{{ $t('accountLoyalty.my_loyalty') }}</div>
        <b-tabs
          vertical
          class="loyatyTab">
          <b-tab 
            :title="$t('accountLoyalty.my_loyalty')"
            :active="activeTab ==='loyalty' ? true : false"
            @click="getTabLoyalty">
            <div
              v-if = "flag2"
              class="page-right ">
              <keep-alive>
                <myloyalty 
                  :myloyaltycontent="level"
                  :myloyaltycontent1="userRecords"
                  :recordsflag2="flag2"/>
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
          <b-tab
            :title="$t('accountLoyalty.my_order')"
            :active="activeTab ==='order' ? true : false"
            @click="getTabOrder">
            <div
              v-if = "orderflag"
              class="page-right">
              <keep-alive>
                <myorder
                  :userordercontent="userOrder"
                  :userordertotal="userOrdertotal"
                  :userorderflag="orderflag"/>
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
    <div
      v-else
      class="membershippage">
      <img
        src="/img/20190102sync.gif"
        alt=""
        class="loadmore loadmoreall">
    </div>
  </section>
</template>
<script>
import myloyalty from '~/components/loyalty/myloyalty.vue'
import myorder from '~/components/loyalty/myorder.vue'
export default {
  components: {
    myloyalty,
    myorder
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
      currentPage: 1,
      userOrder: [],
      userOrdertotal: 0,
      orderOffset: 0,
      orderAmount: 16,
      orderflag: false,
      activeTab: ''
    }
  },
  head: {
    title: 'My Loyalty | ModeSens'
  },
  mounted() {
    this.activeTab = this.$route.query.tab
    if (this.$cookies.get(gconfig.ACCESS_TOKEN)) {
      this.getUserInfo()
      if (this.$route.query.tab === 'order') {
        this.getOrderInfo()
      } else if (this.$route.query.tab === 'loyalty') {
        this.getRecords()
      }
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
      if ($(window).width() < 1200 && this.flag1) {
        this.$nextTick(() => {
          let backtab = `<div class='tab-backbtn' >< Back</div>`
          $('.nav-tabs').before(backtab)
          $('.tab-backbtn').on('click', this.tabback)
        })
      }
    },
    async getRecords() {
      var recordsparams = {}
      recordsparams.offset = 0
      recordsparams.amount = 10
      let records = await this.$axios.post('/loyalty/records/', recordsparams)
      let recordsJson = JSON.stringify(records)
      this.$localStorage.set('records', recordsJson, 1)
      this.records = records
      this.userRecords = records.records
      this.flag2 = true
    },
    async getOrderInfo() {
      if ($(window).width() < 1200) {
        this.orderOffset = 0
        this.orderAmount = 7
      }
      let data = {}
      data.offset = this.orderOffset
      data.amount = this.orderAmount
      let orderObj = await this.$axios.get('/accounts/order/all/', {
        params: data
      })
      let orderObjJson = JSON.stringify(orderObj)
      this.$localStorage.set('order', orderObjJson, 1)
      this.userOrder = orderObj.orders
      this.userOrdertotal = orderObj.total
      this.orderflag = true
    },
    getTabOrder: function() {
      this.orderflag = false
      if (this.$localStorage.get('order')) {
        let order = JSON.parse(this.$localStorage.get('order'))
        this.userOrder = order.orders
        this.userOrdertotal = order.total
        this.orderflag = true
      } else {
        this.getOrderInfo()
      }
      if ($(window).width() < 1200) {
        this.tabback()
        $('.mobile-tabbtn').html(this.$t('accountLoyalty.my_order'))
      }
    },
    getTabLoyalty: function() {
      this.flag2 = false
      if (this.$localStorage.get('records')) {
        var records = JSON.parse(this.$localStorage.get('records'))
        this.records = records
        this.userRecords = records.records
        this.flag2 = true
      } else {
        if (this.$store.state.login_status) {
          this.getRecords()
        }
      }
      if ($(window).width() < 1200) {
        this.tabback()
        $('.mobile-tabbtn').html(this.$t('accountLoyalty.my_loyalty'))
      }
    },
    tabswich: function() {
      $('.col-auto').css('left', '0')
    },
    tabback: function() {
      $('.col-auto').css('left', '-100%')
    }
  }
}
</script>
<style lang="less">
@import '../../assets/css/account/loyalty.less';
</style>
