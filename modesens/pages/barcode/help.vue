<template>
  <section class="barcode-help">
    <div class="desc">{{ $t('barcodeHelp.desc') }}</div>
    <div class="imgbox">
      <div
        v-for="(imgname,index) in imgAry"
        :key="index">
        <img :src="'/img/' + imgname">
      </div>
    </div>
  </section>
</template>
<script>
export default {
  head: {
    title: 'Barcode Help | ModeSens'
  },
  data() {
    return {
      imgAry: [
        '20190114barcode1.png',
        '20190114barcode2.png',
        '20190114barcode3.jpg',
        '20190115barcode4.png',
        '20190115barcode5.png',
        '20190115barcode6.png',
        '20190115barcode7.png',
        '20190115barcode8.png',
        '20190115barcode9.png',
        '20190115barcode10.png',
        '20190115barcode11.png',
        '20190115barcode12.png'
      ]
    }
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
