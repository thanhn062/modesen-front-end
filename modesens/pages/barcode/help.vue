<template>
  <section class="barcode-help">
    <div class="desc">{{ $t('barcodeHelp.desc') }}</div>
    <div class="imgbox">
      <div>
        <img src="/img/20190114barcode1.png">
      </div>
      <div>
        <img src="/img/20190114barcode2.png">
      </div>
      <div>
        <img src="/img/20190114barcode3.jpg">
      </div>
    </div>
  </section>
</template>
<script>
export default {
  head: {
    title: 'Barcode Help | ModeSens'
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/common.less';
.barcode-help {
  padding: 0 20px;
  .desc {
    margin-top: @sectionSpace;
    font-weight: 300;
    text-align: center;
  }
  .imgbox {
    text-align: center;
    margin-top: 30px;
    div {
      margin-bottom: @descSpace-s;
      img {
        width: 198px;
      }
    }
  }
}
</style>
