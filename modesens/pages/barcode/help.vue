<template>
  <section class="barcode-help">
    <h1 class="desc">{{ $t('barcodeHelp.desc') }}</h1>
    <div class="imgbox">
      <div
        v-for="(imgname,index) in imgAry"
        :key="index">
        <img
          v-lazy="'/img/' + imgname"
          alt="">
      </div>
    </div>
  </section>
</template>
<script>
export default {
  layout: 'noframe',
  metaInfo() {
    let headobj = {}
    let H1 = this.$t('barcodeHelp.desc')
    let TITLE = this.$t('barcodeHelp.barcodeTitle') + ' | ModeSens'
    let request = this.$store.state.request
    let MS_LOGO = ''
    if (request) {
      if (this.$i18n.locale == 'zh') {
        MS_LOGO = request.STATIC_DOMAIN_IMG + '/static/img/20190201scan_zh.png'
      } else {
        MS_LOGO = request.STATIC_DOMAIN_IMG + '/static/img/20190201scan_en.png'
      }
      headobj = this.commonfn.creatMetaTitle(H1, TITLE, MS_LOGO)
    }
    return headobj
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
.barcode-help {
  padding: 0 20px;
  .desc {
    margin-top: @sectionSpace;
    font-size: 14px;
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
