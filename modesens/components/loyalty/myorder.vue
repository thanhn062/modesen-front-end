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
          v-for=" (order,index) in userordercontent"
          :key=" index ">
          <div class="order-list-info row">
            <div
              :title="order.transaction_datetime.slice(0,10)"
              class="col-2 col-md-2">{{ order.transaction_datetime.slice(0,10) }}</div>
            <div class="col-2 col-md-2">{{ order.ms_order_id }}</div>
            <div
              :title="order.merchant_name"
              class="col-3 col-md-3">{{ order.merchant_name }}</div>
            <div class="col-2 col-md-2">{{ order.amount * order.items }}</div>
            <div class="col-2 col-md-2">{{ order.status }}</div>
            <div
              class="see-info col-1 col-md-1"
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
            <div class="waybill">
              <div class="storeId">
                <span class="storeId-title">Store Order ID</span>
                <span class="storeId-con">{{ order.store_order_id }}</span>
              </div>
              <div
                v-if = "waybill"
                class="waybill-num">
                <span class="waybll-null-title">Tracking Number :</span>
                <span class="waybill-num-con">99999999</span>
              </div>
            </div>
            <div class="order-detail">
              <div class="order-prd-box col-5 col-md-5">
                <div class="order-prd-img">
                  <img
                    v-if = "order.availability"
                    :src="order.availability.cover"
                    alt="">
                </div>
                <div
                  v-if = "order.availability"
                  class="order-prd-info">
                  <div class="order-prd-designername">{{ order.availability.designer_id }}</div>
                  <div class="order-prd-productname">{{ order.availability.name }}</div>
                </div>
              </div>
              <div class="order-prd-price col-4 col-md-4">
                <ul class="order-prd-price-box">
                  <li class="order-prd-price-list">
                    <div class="order-price-list-title">Product Price:</div>
                    <div class="order-price-num">$ 8,395,823,8</div>
                  </li>
                  <li class="order-prd-price-list">
                    <div class="order-price-list-title">Shipping Fee:</div>
                    <div class="order-price-num">$ 8,395,823,823</div>
                  </li>
                  <li class="order-prd-price-list">
                    <div class="order-price-list-title">Duty:</div>
                    <div class="order-price-num">$ 8,395,8</div>
                  </li>
                  <li class="order-prd-price-list">
                    <div class="order-price-list-title">Service fee:</div>
                    <div class="order-price-num">$ 8,3</div>
                  </li>
                  <li class="order-prd-price-list">
                    <div class="order-price-list-title">Discount:</div>
                    <div class="order-price-num">$ 8,395,82</div>
                  </li>
                </ul>
              </div>
              <div class="order-prd-status col-3 col-md-3">Submit A Review</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="ordertotal"
      :per-page="9"
      :disabled="pageCannotSwitched"
      align="center"
      prev-text="<"
      next-text=">"/>
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
    }
  },
  data() {
    return {
      ordertotal: this.userordertotal,
      pagestate: 1,
      orderlimit: -1,
      waybill: false,
      pageCannotSwitched: false,
      currentPage: 1
    }
  },
  methods: {
    async getorderPrdInfo(ms_orderId) {
      let { data } = await this.$axios.get(
        'https:///pay.modesens.com/v1/order/api/' + ms_orderId + '/'
      )
    },
    toggle: function(index) {
      if (this.userordercontent[index].ms_order_no) {
        this.getorderPrdInfo(this.userordercontent[index].ms_order_no)
      }
      if (index === this.orderlimit) {
        this.orderlimit = -1
      } else {
        this.orderlimit = index
      }
    }
  },
  pageSwitching: function() {
    if (this.pagestate === this.currentPage) {
      return
    } else {
      this.pagestate = this.currentPage
      this.orderlimit = -1
    }
  }
}
</script>
