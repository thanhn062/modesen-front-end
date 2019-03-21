<template>
  <section class="aloyalty-con">
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
  </section>
</template>
<script>
import Myloyalty from '~/components/accounts/Myloyalty.vue'
import Myorder from '~/components/accounts/Myorder.vue'
export default {
  components: {
    Myloyalty,
    Myorder
  },
  props: {
    userlevel: {
      type: Object,
      default: function() {
        return {}
      }
    },
    activetab: {
      type: String,
      default: function() {
        return 'a'
      }
    },
    userinfoflag: {
      type: Boolean,
      default: function() {
        return true
      }
    }
  },
  data() {
    return {
      level: this.userlevel,
      records: null,
      userRecords: null,
      userflag: this.userinfoflag,
      flag2: false,
      limit: -1,
      //当前显示的页面
      currentPage: 1,
      userOrder: [],
      userOrdertotal: 0,
      orderOffset: 0,
      orderAmount: 16,
      orderflag: false,
      activeTab: this.activetab
    }
  },
  mounted() {
    if (this.activeTab === 'order') {
      this.getOrderInfo()
    } else if (this.activeTab === 'loyalty') {
      this.getRecords()
    }
    if ($(window).width() < 1200 && this.userflag) {
      this.$nextTick(() => {
        let backtab = `<div class='tab-backbtn' >< Back</div>`
        $('.nav-tabs').before(backtab)
        $('.tab-backbtn').on('click', this.tabback)
      })
    }
  },
  methods: {
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
