<template>
  <div
    id="to-top"
    data-ga-click="Side-totop--"
    @click="totop">
    <img
      v-lazy="'/img/20180929arrow_top.svg'"
      alt="">
    <img
      v-lazy="'/img/20180929top.svg'"
      alt="">

  </div>
</template>
<script>
export default {
  methods: {
    totop: function() {
      $('html, body').animate({ scrollTop: 0 }, 'fast')
    }
  }
}
</script>

<style lang="less">
// @import '../assets/css/common.less';
#to-top {
  position: fixed;
  right: 0;
  top: 65%;
  display: none;
  width: 30px;
  height: 46px;
  margin-right: 10px;
  padding-top: 8px;
  line-height: 8px;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  color: #1c1c1c;
  z-index: 1000;
  text-transform: uppercase;
  cursor: pointer;
  img {
    width: 90%;
    margin-bottom: 8px;
  }
  &:hover {
    border-bottom: @border4;
  }
}
</style>
