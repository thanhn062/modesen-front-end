<template>
  <section>
    <div id="orderlist-Box">
      <ul class="order-title keepLeft row">
        <li class="order-title-list col-2 col-md-2">Order Time</li>
        <li class="order-title-list col-2 col-md-2">ModeSens Order ID</li>
        <li class="order-title-list col-3 col-md-3">Seller</li>
        <li class="order-title-list col-2 col-md-2">Total</li>
        <li class="order-title-list col-2 col-md-2">Status</li>
        <li class="order-title-list col-1 col-md-1"/>
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
              :title="order.transaction_datetime"
              class="col-2 col-md-2">{{ order.transaction_datetime }}</div>
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
                src="/img/20181214slidedown.svg" 
                class="activeimg"
                alt="">
            </div>
          </div>
          <div 
            v-show="index===orderlimit"
            class="order-list-prd"/>
        </li>
      </ul>
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
    }
  },
  data() {
    return {
      orderlimit: -1
    }
  },
  methods: {
    toggle: function(index) {
      if (index === this.orderlimit) {
        this.orderlimit = -1
      } else {
        this.orderlimit = index
      }
    }
  }
}
</script>
