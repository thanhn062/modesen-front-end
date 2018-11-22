<template>
  <section>
    <div>
      <div class="userInfoBox">
        membership
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
                v-for=" n in 10 " 
                :key=" n ">
                <span> {{ n }}</span>
                <div
                  class="see-more button--green"
                  @click="toggle(n)">
                  item</div>
                <div 
                  v-show="n==limit"
                  class="consume-item">
                  aaaaa</div>
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
    params.lsuid = 5
    let { data } = await axios.post(
      'https://modesens.com/accounts/profile/get/',
      params
    )
    let pers = data.level.points_earned / data.level.points_goal
    let pers_percentage = pers * 100
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
    return {
      pers_percentage,
      degRight,
      degLeft
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
