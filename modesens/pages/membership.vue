<template>
  <section>
    <div>
      <div class="userInfoBox">
        <img 
          :src="usericon" 
          alt="">
        <div class="info">
          <div class="user_name">{{ username }}</div>
          <div class="user_bio">{{ userbio }}</div>
          <div class="user_words">{{ userwords }}</div>
        </div>
      </div>
      <div class="page-content">
        <div class="page-left">
          <b-nav 
            vertical>
            <b-nav-item>MY LOYALTY</b-nav-item>
          </b-nav>
        </div>
        <div class="page-right ">
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import $ from 'jquery'
import axios from '~/plugins/axios'
import product from '~/static/api/1.0/membership.js'
export default {
  data() {
    return {
      limit: -1,
      isShow: false
    }
  },
  head: {
    title: 'membership'
  },
  async asyncData() {
    var params = {}
    params.level = true
    params.lsuid = 652
    let { data } = await axios.post(
      'https://modesens.com/accounts/profile/get/',
      params
    )
    let pers = data.level.points_earned / data.level.points_goal
    let pers_percentage = Math.round(pers * 100)
    if (pers <= 0.5) {
      var degRight = pers * 360
      var degLeft = 0
    } else if (pers >= 1) {
      var degRight = 180
      var degLeft = 180
    } else {
      var degRight = 180
      var degLeft = pers * 360 - 180
    }
    let { data: records } = await axios.post(
      'https://modesens.com/loyalty/records/'
    )
    return {
      usericon: data.lsuser.icon,
      username: data.lsuser.username,
      userbio: data.lsuser.bio,
      userwords: data.lsuser.words,
      pers_percentage,
      degRight,
      degLeft,
      recordslist: records.records
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
