<template>
  <section>
    <div id="rankbox">
      <div class="title-part">Your Perks</div>
      <div class="con">
        <div class="percent-circle percent-circle-right">
          <div 
            :style="{transform: 'rotate(' + degRight + 'deg)'}"
            class="right-content"/>
        </div>
        <div class="percent-circle percent-circle-left">
          <div 
            :style="{transform: 'rotate(' + degLeft + 'deg)'}"
            class="left-content"/>
        </div>
        <div class="text-circle">{{ pers_percentage }}%</div>
      </div>
    </div>
    <div id="consume-box">
      <div class="title-part">Loyalty Points</div>
      <ul id="consume">
        <li
          v-for=" (record,index) in myloyaltycontent1.records " 
          :key=" index ">
          <div class="record_info">
            <div>{{ index }}</div>
            <div>{{ record.source }}</div>
            <div>{{ record.points }}</div>
            <div>{{ record.memo.merchant_name }}</div>
            <div
              class="see-more button--green"
              @click="toggle(index)">
              item</div>
          </div>
          <div 
            v-show="index==limit"
            class="consume-item">
            <ul>
              <li>store : {{ record.memo.merchant_name }}</li>
              <li>Order id : {{ record.memo.order_id }}</li>
              <li>price : ${{ record.value }}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="100"
      :per-page="10"
      align="center"/>
  </section>
</template>
<script>
export default {
  props: {
    myloyaltycontent: {
      type: Object,
      default: function() {
        return {}
      }
    },
    myloyaltycontent1: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      limit: -1,
      isShow: false,
      degRight: '',
      degLeft: '',
      pers_percentage: ''
    }
  },
  created() {
    let pers =
      this.myloyaltycontent.points_earned / this.myloyaltycontent.points_goal
    this.pers_percentage = Math.round(pers * 100)
    if (pers <= 0.5) {
      this.degRight = pers * 360
      this.degLeft = 0
    } else if (pers >= 1) {
      this.degRight = 180
      this.degLeft = 180
    } else {
      this.degRight = 180
      this.degLeft = pers * 360 - 180
    }
  },
  methods: {
    toggle: function(index) {
      if (index == this.limit) {
        this.limit = -1
      } else {
        this.limit = index
      }
    }
  }
}
</script>
