<template>
  <section class="aloyalty-con">
    <h1 class="hiddenh1">{{ $t('accountLoyalty.my_loyalty') }}</h1>
    <div
      v-if = "flag1"
      class="membershippage">
      <UserInfo/>
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
                <Myloyalty 
                  :myloyaltycontent="level"
                  :myloyaltycontent1="userRecords"
                  :recordsflag2="flag2"/>
              </keep-alive>
            </div>
            <div
              v-else
              class="page-right">
              <img
                v-lazy="'/img/20190102sync.gif'"
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
                <Myorder
                  :userordercontent="userOrder"
                  :userordertotal="userOrdertotal"
                  :userorderflag="orderflag"/>
              </keep-alive>
            </div>
            <div
              v-else
              class="page-right">
              <img
                v-lazy="'/img/20190102sync.gif'"
                alt=""
                class="loadmore">
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
    <div
      v-else
      class="membershippage loading">
      <img
        v-lazy="'/img/20190102sync.gif'"
        alt=""
        class="loadmore loadmoreall">
    </div>
  </section>
</template>
<script>
import UserInfo from '~/components/loyalty/UserInfo.vue'
import Myloyalty from '~/components/loyalty/Myloyalty.vue'
import Myorder from '~/components/loyalty/Myorder.vue'
export default {
  metaInfo() {
    let headobj = {}
    let H1 = this.$t('accountLoyalty.my_loyalty')
    let TITLE = this.$t('nav.MyLoyalty') + ' | ModeSens'
    let request = this.$store.state.request
    if (request) {
      let MS_LOGO = request.STATIC_DOMAIN_IMG + this.gconfig.MS_LOGONEW
      headobj = this.commonfn.creatMetaTitle(H1, TITLE, MS_LOGO)
    }
    return headobj
  },
  components: {
    UserInfo,
    Myloyalty,
    Myorder
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
  mounted() {
    this.activeTab = this.$route.query.tab
    if (this.$cookies.get(this.gconfig.ACCESS_TOKEN)) {
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
