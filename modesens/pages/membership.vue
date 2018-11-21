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
        <div class="page-right">
          <div id="rankbox">
            <div class="title-part">Your Perks</div>
            <div class="con">
              <div class="percent-circle percent-circle-left">
                <div class="left-content"/>
              </div>
              <div class="percent-circle percent-circle-right">
                <div class="right-content"/>
              </div>
              <div class="text-circle">0%</div>
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
export default {
  data() {
    return {
      limit: -1,
      isShow: false
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
  },
  head: {
    title: 'membership'
  }
}
</script>
<style lang="less">
@import '../assets/css/membership.less';
</style>
