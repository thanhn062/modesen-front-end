<template>
  <div class="usericon-box">
    <div class="icon-box">
      <img
        v-lazy="url"
        class="user-icon"
        alt="">
    </div>
    <img
      v-lazy="isoffical ? '/img/official.png' : '/img/mstar.png'"
      v-if="isoffical || ismaster"
      :style="cornericonstyle"
      class="corner-icon"
      alt="">
  </div>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      default: function() {
        return ''
      }
    },
    isoffical: {
      type: Boolean,
      default: function() {
        return false
      }
    },
    ismaster: {
      type: Boolean,
      default: function() {
        return false
      }
    },
    // cornericonstyle: 角标的样式，可不传，默认width=36px
    cornericonstyle: {
      type: String,
      default: function() {
        return ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
.usericon-box {
  position: relative;
  .icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    overflow: hidden;
    .user-icon {
      width: 100%;
    }
  }
  .corner-icon {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 36px;
    height: 36px;
  }
}
</style>
