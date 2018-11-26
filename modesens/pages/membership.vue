<template>
  <section>
    <div>
      <div class="userInfoBox">
        <img 
          :src="usericon" 
          alt="">
        <div class="info">
          <div class="user_name">{{ lsuser.username }}</div>
          <div class="user_bio">{{ lsuser.userbio }}</div>
          <div class="user_words">{{ lsuser.userwords }}</div>
        </div>
      </div>
      <div class="page-content">
        <div class="page-left">
          <vueNav 
            :navlist="list" 
            :showdir="dir"
            :showview="viewlist"/>
        </div>
        <div class="page-right ">
          <!-- <div id="rankbox">
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
                v-for=" (record,index) in recordslist " 
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
          </div> -->
          <div 
            :is="currentView"
            :myloyaltycontent="level"
            :myloyaltycontent1="records"/>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import $ from 'jquery'
import axios from '~/plugins/axios'
import product from '~/static/api/1.0/membership.js'
import vueNav from '~/components/nav.vue'
import myloyalty from '~/components/myloyalty.vue'
import myloyalty1 from '~/components/myloyalty1.vue'
import myloyalty2 from '~/components/myloyalty2.vue'
import myloyalty3 from '~/components/myloyalty3.vue'
import myloyalty4 from '~/components/myloyalty4.vue'
export default {
  components: {
    vueNav,
    myloyalty,
    myloyalty1,
    myloyalty2,
    myloyalty3,
    myloyalty4
  },
  data() {
    return {
      limit: -1,
      isShow: false,
      // tab项列表
      list: [
        'MY LOYALTY',
        'MY LOYALTY1',
        'MY LOYALTY2',
        'MY LOYALTY3',
        'MY LOYALTY4'
      ],
      // tab排列方向
      dir: 'flex-column',
      // tab对应显示内容的name
      viewlist: [
        'myloyalty',
        'myloyalty1',
        'myloyalty2',
        'myloyalty3',
        'myloyalty4'
      ],
      //当前显示的页面
      currentView: 'myloyalty'
    }
  },
  head: {
    title: 'membership'
  },
  async asyncData() {
    var params = {}
    params.level = true
    params.lsuid = 652
    let {
      data: { lsuser, level }
    } = await axios.post('https://modesens.com/accounts/profile/get/', params)
    let { data: records } = await axios.post(
      'https://modesens.com/loyalty/records/'
    )
    return {
      lsuser,
      level,
      records
      // pers_percentage,
      // degRight,
      // degLeft,
      // recordslist: records.records
    }
  },
  computed: {},
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
<style lang="less">
@import '../assets/css/membership.less';
</style>
