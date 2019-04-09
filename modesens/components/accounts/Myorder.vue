<template>
  <section>
    <div id="orderlist-Box">
      <ul class="order-title keepLeft row">
        <li class="order-title-list col-2 col-md-2">{{ $t('accountOrder.orderTime') }}</li>
        <li class="order-title-list col-2 col-md-2">{{ $t('accountOrder.msOrderId') }}</li>
        <li class="order-title-list col-3 col-md-3">{{ $t('accountOrder.Seller') }}</li>
        <li class="order-title-list col-2 col-md-2">{{ $t('accountOrder.Total') }}</li>
        <li class="order-title-list order-title-list-status col-3 col-md-3">
          <div class="order-current-status">{{ $t('accountOrder.Status') }}</div>
          <div class="status-sel">
            <b-dropdown
              id="status-sel"
              variant="link"
              right
              no-caret>
              <template slot="button-content">
                <span class="status-selected">{{ $t('accountOrder.'+status_selected) }}</span>
                <img
                  v-lazy="'/img/20181214slidedown.svg'" 
                  alt=""
                  class="activeimg">
              </template>
              <b-dropdown-item
                href="javascrit:;"
                @click="statusSel('All', 'all')">{{ $t('accountOrder.All') }}</b-dropdown-item>
              <b-dropdown-item
                href="javascrit:;"
                @click="statusSel('Completed', 'completed')">{{ $t('accountOrder.Completed') }}</b-dropdown-item>
              <b-dropdown-item
                href="javascrit:;"
                @click="statusSel('Active', 'active')">{{ $t('accountOrder.Active') }}</b-dropdown-item>
            </b-dropdown>
          </div>
          
        </li>
      </ul>
      <hr class="order-title-line">
      <div v-if="orderflag">
        <ul
          v-if="ordercontent.length > 0"
          id="order-list"
          class="keepLeft">
          <li
            v-for=" (order,index) in ordercontent"
            :key=" index ">
            <div class="order-list-info row">
              <div
                :title="order.transaction_datetime.slice(0,10)"
                class="order-list-box col-12 col-md-2">
                <div class="order-list-title mobile-only">Order Time</div>
                <div class="order-list-con"> {{ order.transaction_datetime.slice(0,10) }}</div>
              </div>
              <div class="order-list-box col-12 col-md-2">
                <div class="order-list-title mobile-only">ModeSens Order ID</div>
                <div class="order-list-con">{{ order.id }}</div>
              </div>
              <div
                :title="order.merchant_id ? order.merchant_id : order.merchant_name"
                class="order-list-box col-12 col-md-3">
                <div class="order-list-title mobile-only">Seller</div>
                <div class="order-list-con"> {{ order.merchant_id ? order.merchant_id : order.merchant_name }}</div>
              </div>
              <div class="order-list-box col-12 col-md-2">
                <div class="order-list-title mobile-only">Total</div>
                <div class="order-list-con orderlist-con-total">
                  <span>{{ order.currency }}</span>
                  <span class="orderlist-total-num">{{ order.total.toFixed(2) }}</span>
                </div>
              </div>
              <div class="order-list-box col-12 col-md-2">
                <div class="order-list-title mobile-only">Status</div>
                <div class="order-list-con"> {{ orderStatusChange(order.status) }}</div>
              </div>
              <div
                class="see-info order-list-box col-12 col-md-1"
                @click="toggle(index)">
                <img
                  v-lazy="index===orderlimit ? '/img/20190115slideup.svg' : '/img/20190115slidedown.svg'"
                  :class="index===orderlimit ? 'active' : ''"
                  class="activeimg"
                  alt="">
              </div>
            </div>
            <div 
              :id="'orderlist'+index"
              class="order-list-prd">
              <div
                v-if="order.store_order_id && order.tracking_no"
                class="waybill row">
                <div
                  v-if="order.store_order_id"
                  class="storeId col-12 col-md-4">
                  <div class="storeId-title">{{ $t('accountOrder.storeId') }}<span class="colon">:</span></div>
                  <div class="storeId-con">{{ order.store_order_id }}</div>
                </div>
                <div
                  v-if="order.tracking_no"
                  class="waybll-num-title col-6 col-md-5 keepRight">{{ $t('accountOrder.trackNum') }}<span class="colon">:</span></div>
                <div
                  v-if="order.tracking_no"
                  class="waybill-num-con col-6 col-md-3">
                  <a
                    :href="order.tracking_url"
                    target="_blank">
                    {{ order.tracking_no }} ({{ order.tracking_company }})
                  </a>
                </div>
              </div>
              <div class="order-detail">
                <div class="order-prd-box col-12 col-md-5">
                  <a
                    :href="order.availability ? '/product/'+order.availability.product_id+'/' : 'javascript:;'"
                    target="_blank"
                    class="to-product">
                    <div
                      v-if = "order.availability"
                      class="order-prd-img">
                      <img
                        v-lazy="order.availability.cover"
                        alt="">
                    </div>
                    <div class="order-prd-info">
                      <div
                        v-if = "order.availability"
                        class="order-prd-designername">{{ order.availability.designer_id }}</div>
                      <div
                        v-if = "order.product_name !== 'null'"
                        class="order-prd-productname">{{ order.product_name }}</div>
                      <div class="order-prd-size">
                        <div class="order-size"> 
                          <span class="order-size-kind">{{ $t('accountOrder.Size') }}</span>
                          <span class="order-size-con">{{ order.size === '' ? $t('accountOrder.oneSize') : order.size }}</span>
                        </div>
                        <div class="order-quantity">
                          <span class="order-size-kind">{{ $t('accountOrder.Quantity') }}</span>
                          <span class="order-size-con">{{ order.items }}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="order-prd-price col-12 col-md-4">
                  <ul class="order-prd-price-box">
                    <li
                      v-if="order.product_cost"
                      class="order-prd-price-list">
                      <div class="order-price-list-title">{{ $t('accountOrder.ProductP') }}:</div>
                      <div class="order-price-num">
                        <span>{{ order.currency }}</span>
                        <span class="order-price-number">{{ order.product_cost.toFixed(2) }}</span>
                      </div>
                    </li>
                    <li
                      v-if="order.shipping_cost"
                      class="order-prd-price-list">
                      <div class="order-price-list-title">{{ $t('accountOrder.ShippingF') }}:</div>
                      <div class="order-price-num">
                        <span>{{ order.currency }}</span>
                        <span class="order-price-number">{{ order.shipping_cost.toFixed(2) }}</span>
                      </div>
                    </li>
                    <li
                      v-if="order.duty_cost"
                      class="order-prd-price-list">
                      <div class="order-price-list-title">{{ $t('accountOrder.Duty') }}:</div>
                      <div class="order-price-num">
                        <span>{{ order.currency }}</span>
                        <span class="order-price-number">{{ order.duty_cost.toFixed(2) }}</span>
                      </div>
                    </li>
                    <li
                      v-if="order.service_cost"
                      class="order-prd-price-list">
                      <div class="order-price-list-title">{{ $t('accountOrder.Servicef') }}:</div>
                      <div class="order-price-num">
                        <span>{{ order.currency }}</span>
                        <span class="order-price-number">{{ order.service_cost.toFixed(2) }}</span>
                      </div>
                    </li>
                    <li
                      v-if="order.promo"
                      class="order-prd-price-list">
                      <div class="order-price-list-title">{{ $t('accountOrder.Discount') }}:</div>
                      <div class="order-price-num">
                        <span>{{ order.currency }}</span>
                        <span class="order-price-number">{{ order.promo.toFixed(2) }}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="order-prd-status col-12 col-md-3">
                  <div
                    v-for="(aftersale,index) in orderafterSale(order.status)"
                    :key="index"
                    class="after-sale">
                    <a
                      v-if="aftersale === 3"
                      href="/orderinquery/"
                      target="_blank">
                      {{ $t('accountOrder.afterstatus'+aftersale) }}
                    </a>
                    <div
                      v-b-modal.service-modal
                      v-else-if="aftersale === 2 && order.merchant_id"
                      class="after-sale-other"
                    >{{ $t('accountOrder.afterstatus'+aftersale) }}</div>
                    <a
                      v-else-if="aftersale === 4"
                      :href="order.availability ? '/product/'+order.availability.product_id+'/review/' : '/store/merchantreview/'+order.merchant_url+'/'"
                      target="_blank"
                      class="after-sale-other">{{ $t('accountOrder.afterstatus'+aftersale) }}</a>
                    <a
                      v-else-if="aftersale === 1"
                      :href="'https://pay.modesens.com/product/'+order.availability_id+'/preview/?t='+usertoken"
                      target="_blank"
                      class="after-sale-other">{{ $t('accountOrder.afterstatus'+aftersale) }}</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div v-else-if="ordercontent.length <= 0">
          <img
            v-lazy="'/img/20190408empty.svg'"
            alt=""
            class="order_nothing">
        </div>
        <div class="pagebox">
          <b-pagination
            v-if="ordertotal > perorder && ordercontent.length > 0"
            v-model="currentPage"
            :total-rows="ordertotal"
            :per-page="perorder"
            :disabled="pageCannotSwitched"
            :hide-goto-end-buttons="true"
            align="center"
            prev-text="<"
            next-text=">"
            @input="orderpageSwitching"/>
          <a
            href="/orderinquiry/"
            target="_blank"
            class="toIquery">{{ $t('accountOrder.Orderinquiry') }}</a>
        </div>       
      </div> 
      <div
        v-else
        class="order-loadmore">
        <img
          v-lazy="'/img/20190102sync.gif'"
          alt=""
          class="loadmore">
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    userordercontent: {
      type: Array,
      default: function() {
        return []
      }
    },
    userordertotal: {
      type: Number,
      default: function() {
        return 0
      }
    },
    userorderflag: {
      type: Boolean,
      default: function() {
        return true
      }
    }
  },
  data() {
    return {
      ordertotal: this.userordertotal,
      ordercontent: this.userordercontent,
      orderflag: this.userorderflag,
      pagestate: 1,
      orderlimit: -1,
      waybill: false,
      pageCannotSwitched: false,
      currentPage: 1,
      orderStatus: 0,
      perorder: 16,
      usertoken: '',
      selected: '',
      status_selected: 'All'
    }
  },
  created() {
    this.usertoken = this.$cookies.get(this.gconfig.ACCESS_TOKEN)
  },
  mounted() {
    if ($(window).width() < 1200) {
      this.$nextTick(() => {
        this.perorder = 7
      })
    }
  },
  methods: {
    async getmoreOrder(page, stauts) {
      let data = {}
      data.amount = this.perorder
      data.offset = (page - 1) * this.perorder
      data.status = stauts || ''
      let { orders, total } = await this.$axios.get('/accounts/order/all/', {
        params: data
      })
      this.ordercontent = orders
      this.pageCannotSwitched = false
      this.orderflag = true
    },
    toggle: function(index) {
      if (index === this.orderlimit) {
        this.orderlimit = -1
        $('.order-list-prd').slideUp()
      } else {
        this.orderlimit = index
        $('.order-list-prd').slideUp()
        $('#orderlist' + this.orderlimit).slideDown()
      }
    },
    orderStatusChange: function(index) {
      if (index === 0) {
        return this.$t('accountOrder.status0')
      } else if (index === 1) {
        return this.$t('accountOrder.status1')
      } else if (index === 2) {
        return this.$t('accountOrder.status2')
      } else if (index === 3) {
        return this.$t('accountOrder.status3')
      } else if (index === 4) {
        return this.$t('accountOrder.status4')
      } else if (index === 5) {
        return this.$t('accountOrder.status5')
      } else if (index === 6) {
        return this.$t('accountOrder.status6')
      } else if (index === 8) {
        return this.$t('accountOrder.status8')
      } else if (index === 't') {
        return this.$t('accountOrder.statusTracked')
      } else {
        return this.$t('accountOrder.status_1')
      }
    },
    orderafterSale: function(index) {
      if (index === 0) {
        return [1]
      } else if (index === 4) {
        return [2, 4]
      } else if (index === 't') {
        return [4]
      } else {
        return [2]
      }
    },
    orderpageSwitching: function() {
      if (this.pagestate === this.currentPage) {
        return
      } else {
        this.getmoreOrder(this.currentPage, this.selected)
        this.pagestate = this.currentPage
        this.orderlimit = -1
        this.orderflag = false
      }
    },
    statusSel: function(selval, value) {
      this.getmoreOrder(1, value)
      this.selected = value
      this.status_selected = selval
      this.pagestate = 1
      this.orderlimit = -1
      this.currentPage = 1
      this.orderflag = false
    }
  }
}
</script>
