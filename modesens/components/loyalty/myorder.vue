<template>
  <section>
    <div id="orderlist-Box">
      <ul class="order-title keepLeft row">
        <li class="order-title-list col-2 col-md-2">Order Time</li>
        <li class="order-title-list col-2 col-md-2">ModeSens Order ID</li>
        <li class="order-title-list col-3 col-md-3">Seller</li>
        <li class="order-title-list col-2 col-md-2">Total</li>
        <li class="order-title-list order-title-list-status col-3 col-md-3">
          <div class="order-current-status">Status</div>
          <div class="status-sel">
            <!-- <select
              id="status-sel"
              name="status-sel"
              title="Change Status"
              @change="statusSel">
              <option
                value=""
                class="status-sel-option">All</option>
              <option
                value="completed"
                class="status-sel-option">Completed</option>
              <option
                value="active"
                class="status-sel-option">Active</option>
            </select> -->
            <b-form-select
              id="status-sel"
              v-model="selected"
              @change="statusSel">
              <option
                value=""
                class="status-sel-option">All</option>
              <option
                value="completed"
                class="status-sel-option">Completed</option>
              <option
                value="active"
                class="status-sel-option">Active</option>
            </b-form-select>
            <img
              src="/img/20181214slidedown.svg" 
              alt=""
              class="activeimg">
          </div>
          
        </li>
        <!-- <li class="order-title-list col-1 col-md-1"/> -->
      </ul>
      <hr class="order-title-line">
      <ul
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
              <div class="order-list-con">{{ order.ms_order_id }}</div>
            </div>
            <div
              :title="order.merchant_name"
              class="order-list-box col-12 col-md-3">
              <div class="order-list-title mobile-only">Seller</div>
              <div class="order-list-con"> {{ order.merchant_name }}</div>
            </div>
            <div class="order-list-box col-12 col-md-2">
              <div class="order-list-title mobile-only">Total</div>
              <div class="order-list-con"> {{ order.currency }} {{ order.total }}</div>
            </div>
            <div class="order-list-box col-12 col-md-2">
              <div class="order-list-title mobile-only">Status</div>
              <div class="order-list-con"> {{ orderStatusChange(order.status) }}</div>
            </div>
            <div
              class="see-info order-list-box col-12 col-md-1"
              @click="toggle(index)">
              <img
                :class="index===orderlimit ? 'active' : ''"
                :src="index===orderlimit ? '/img/20190115slideup.svg' : '/img/20190115slidedown.svg'"
                class="activeimg"
                alt="">
            </div>
          </div>
          <div 
            v-show="index===orderlimit"
            class="order-list-prd">
            <div class="waybill row">
              <div class="storeId col-12 col-md-4">
                <div class="storeId-title">Store Order ID</div>
                <div class="storeId-con">{{ order.store_order_id }}</div>
              </div>
              <div
                v-if="order.tracking_no"
                class="waybll-num-title col-6 col-md-5 keepRight">Tracking Number :</div>
              <div
                v-if="order.tracking_no"
                class="waybill-num-con col-6 col-md-3">
                <a
                  :href="order.tracking_url"
                  target="_blank">
                  {{ order.tracking_no }}
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
                      :src="order.availability.cover"
                      alt="">
                  </div>
                  <div class="order-prd-info">
                    <div
                      v-if = "order.availability"
                      class="order-prd-designername">{{ order.availability.designer_id }}</div>
                    <div class="order-prd-productname">{{ order.product_name }}</div>
                    <div class="order-prd-size">
                      <div class="order-size"> 
                        <span class="order-size-kind">Size</span>
                        <span class="order-size-con">{{ order.size === '' ? 'One Size' : order.size }}</span>
                      </div>
                      <div class="order-quantity">
                        <span class="order-size-kind">Quantity</span>
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
                    <div class="order-price-list-title">Product Price:</div>
                    <div class="order-price-num">{{ order.currency }} {{ order.product_cost }}</div>
                  </li>
                  <li
                    v-if="order.shipping_cost"
                    class="order-prd-price-list">
                    <div class="order-price-list-title">Shipping Fee:</div>
                    <div class="order-price-num">{{ order.currency }} {{ order.shipping_cost }}</div>
                  </li>
                  <li
                    v-if="order.duty_cost"
                    class="order-prd-price-list">
                    <div class="order-price-list-title">Duty:</div>
                    <div class="order-price-num">{{ order.currency }} {{ order.duty_cost }}</div>
                  </li>
                  <li
                    v-if="order.service_cost"
                    class="order-prd-price-list">
                    <div class="order-price-list-title">Service fee:</div>
                    <div class="order-price-num">{{ order.currency }} {{ order.service_cost }}</div>
                  </li>
                  <li
                    v-if="order.promo"
                    class="order-prd-price-list">
                    <div class="order-price-list-title">Discount:</div>
                    <div class="order-price-num">{{ order.currency }} {{ order.promo }}</div>
                  </li>
                </ul>
              </div>
              <div class="order-prd-status col-12 col-md-3">
                <div
                  v-for="(aftersale,index) in orderafterSale(order.status)"
                  :key="index"
                  class="after-sale">
                  <a
                    v-if="aftersale === 'File A Claim'"
                    href="/inquery/"
                    target="_blank">
                    {{ aftersale }}
                  </a>
                  <div
                    v-b-modal.service-modal
                    v-else-if="aftersale === 'Message'"
                    class="after-sale-other">{{ aftersale }}</div>
                  <a
                    v-else-if="aftersale === 'Submit a Review'"
                    :href="'https://modesens.com/store/merchantreview/'+order.merchant_name+'/'"
                    target="_blank"
                    class="after-sale-other">{{ aftersale }}</a>
                  <a
                    v-else-if="aftersale === 'Pay Now'"
                    :href="'https://pay.modesens.com/product/'+order.availability_id+'/preview/?t='+usertoken"
                    target="_blank"
                    class="after-sale-other">{{ aftersale }}</a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="ordertotal"
      :per-page="perorder"
      :disabled="pageCannotSwitched"
      align="center"
      prev-text="<"
      next-text=">"
      @input="orderpageSwitching"/>
    <serviceModal/>
  </section>
</template>
<script>
import serviceModal from '~/components/Modals.vue'
export default {
  components: {
    serviceModal
  },
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
    }
  },
  data() {
    return {
      ordertotal: this.userordertotal,
      ordercontent: this.userordercontent,
      pagestate: 1,
      orderlimit: -1,
      waybill: false,
      pageCannotSwitched: false,
      currentPage: 1,
      orderStatus: 0,
      perorder: 16,
      usertoken: '',
      selected: ''
    }
  },
  created() {
    this.usertoken = this.$route.query.otoken
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
      let amount = 16
      let offset = (page - 1) * amount
      let status = stauts ? stauts : ''
      let { orders, total } = await this.$axios.get(
        '/accounts/order/all/?offset=' +
          offset +
          '&amount=' +
          amount +
          '&status=' +
          stauts
      )
      this.ordercontent = orders
      this.ordertotal = total
      this.pageCannotSwitched = false
    },
    toggle: function(index) {
      if (index === this.orderlimit) {
        this.orderlimit = -1
      } else {
        this.orderlimit = index
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
        return ['Pay Now']
      } else if (index === 4) {
        return ['Message', 'File A Claim', 'Submit a Review']
      } else if (index === 't') {
        return ['Submit a Review']
      } else {
        return ['Message']
      }
    },
    orderpageSwitching: function() {
      if (this.pagestate === this.currentPage) {
        return
      } else {
        this.getmoreOrder(this.currentPage, '')
        this.pagestate = this.currentPage
        this.orderlimit = -1
      }
    },
    statusSel: function(value) {
      this.getmoreOrder(1, value)
      this.pagestate = 1
      this.orderlimit = -1
    }
  }
}
</script>
