<template>
  <div
    id="store-fav-container"
    @mouseenter="changefavstore(1)"
    @mouseleave="changefavstore(-1)"
    @click="closefavstore">
    <div
      class="toggle-button"
      status="1"
      @click="favstoreup(1)">
      <div class="store-fav-title">{{ $t('Become a ModeSens Member for exclusive VIP shopping benefits') }}</div>
      <div>
        <div class="learnmore">{{ $t('Learn more') }}</div>
        <div class="store-fav-close"/>
      </div>
    </div>
    <div class="main-wrapper">
      <div class="ingfobox">
        <div class="inforleft">
          <p
            v-if="$i18n.locale ==='zh'"
            class="inforleft-item">
            ModeSens是技术驱动的时尚购物助手。我们汇集了全球11,000+高端时尚品牌，整合每件产品在全球150+优质电商的库存及搭配信息，为你打造无缝，透明，安全的未来购物体验。
          </p>
          <p
            v-else
            class="inforleft-item">
            A world of fashion, powered by technology. ModeSens pulls from the racks of 11,000+ luxury brands, aggregating every product at the item level for a seamless, transparent and secure shopping experience
          </p>
        </div>
        <div class="inforright">
          <div class="inforrighttitle">{{ $t('As a ModeSens Shopper You Can:') }}</div>
          <ul class="ingforright-itembox">
            <li class="inforright-item">
              <div class="ingforright-start"/>
              {{ $t('Find the best price from over 150+ stores ') }}
            </li>
            <li class="inforright-item">
              <div class="ingforright-start"/>
              {{ $t('Keep track of what you want to buy ') }}
            </li>
            <li class="inforright-item">
              <div class="ingforright-start"/>
              {{ $t('Be the first to know when something you want goes on sale ') }}
            </li>
            <li class="inforright-item">
              <div class="ingforright-start"/>
              {{ $t('Share your style and connect with others') }}
            </li>
            <li class="inforright-item">
              <div class="ingforright-start"/>
              {{ $t('Shop like a pro with ModeSens Shopping Assistant') }}
            </li>
            <li class="inforright-item">
              <div class="ingforright-start"/>
              {{ $t('Enjoy exclusive perks and protection with our membership program') }}
            </li>
          </ul>
        </div>
      </div>
      <button
        class="signupbtn"
        data-ga-click="Frame-Header-SignUp-aboutmoment-model"
        @click="tosignup">{{ $t('Create An Account') }}</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    favstoreUp() {
      $('.toggle-button').attr('status', '-1')
      $('#store-fav-container').animate({ bottom: '25px' })
      $('.store-fav-close').css({ transform: 'rotate(0deg)' })
      $('.learnmore').css('display', 'none')
    },
    favstoreDown() {
      $('.toggle-button').attr('status', '1')
      $('#store-fav-container').animate({ bottom: '-330px' })
      $('.store-fav-close').css({ transform: 'rotate(540deg)' })
      $('.learnmore').css('display', 'block')
    },
    changefavstore(index) {
      if (index == 1) {
        clearTimeout(storefavTime)
        let storefavTime = setTimeout(() => {
          this.favstoreUp()
        }, 1000)
      } else if (index == -1) {
        clearTimeout(storefavTimeout)
        let storefavTimeout = setTimeout(() => {
          this.favstoreDown()
        }, 1000)
      }
    },
    favstoreup(currentindex) {
      if ($('.toggle-button').attr('status') == -1) {
        return
      } else {
        this.favstoreUp()
      }
    },
    closefavstore(evt) {
      if (
        $('.toggle-button').attr('status') == -1 ||
        evt.target === $('#store-fav-container,.toggle-button,.main-wrapper')
      ) {
        return
      } else {
        this.favstoreDown()
      }
    },
    tosignup() {
      if (this.$route.fullPath != 'about') {
        window.open('/accounts/signup/?next=' + this.$route.fullPath)
      } else {
        window.open('/accounts/signup/?next=/')
      }
    }
  }
}
</script>

<style lang="less">
@import '../assets/css/common.less';
#store-fav-container {
  position: fixed;
  bottom: -330px;
  left: 50%;
  z-index: 12;
  width: 805px;
  height: 330px;
  background-color: #fff;
  transform: translateX(-50%);
  .toggle-button {
    position: absolute;
    top: -44px;
    left: 0;
    z-index: 50;
    justify-content: space-between;
    align-items: center;
    display: flex;
    width: 100%;
    height: 44px;
    border-left: @border4;
    border-right: @border4;
    padding: 0 10px;
    font-size: 20px;
    background: #1c1c1c;
    color: #fff;
    cursor: pointer;
    .store-fav-title {
      display: inline-block;
      width: auto;
      height: 100%;
      padding-left: 2%;
      line-height: 44px;
      font-size: 16px;
      text-align: center;
    }
    .learnmore {
      font-size: @fontStandard;
      color: #fff;
      line-height: 44px;
      float: left;
    }
    .store-fav-close {
      transform: rotate(180deg);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      float: right;
      background-image: url(https://cdn.modesens.com/static/img/store_fav/20180523favopen.svg);
      background-repeat: no-repeat;
      background-position: 50%, 50%;
      transition: transform 0.5s cubic-bezier(1, 0.01, 1, 0.5);
    }
  }
  .main-wrapper {
    padding: 30px 10px 35px;
    border-left: @border4;
    border-right: @border4;
    .ingfobox {
      display: flex;
      justify-content: center;
    }
    .inforleft {
      width: 220px;
      margin-right: 60px;
    }
    .inforleft-item {
      padding: 0;
      margin: 0;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0;
      color: @fontColor;
    }
    .inforright {
      margin-left: 20px;
    }
    .inforrighttitle {
      font-size: 16px;
      color: @fontColor;
    }
    .ingforright-itembox {
      padding: 0;
      margin: 0;
    }
    .inforright-item {
      position: relative;
      padding-left: 24px;
      margin: 10px 0;
      font-size: @fontStandard;
      color: @fontColor;
      list-style: none;
    }
    .ingforright-start {
      position: absolute;
      top: 3px;
      left: 0;
      width: 14px;
      height: 14px;
      background: url(https://cdn.modesens.com/static/img/store_fav/20180523star.svg);
    }
  }
  .signupbtn {
    width: 310px;
    height: 36px;
    margin: 30px 0 30px 238px;
    outline: 0;
    border: 0;
    background: #1c1c1c;
    font-size: @fontStandard;
    text-align: center;
    line-height: 36px;
    color: #fff;
    cursor: pointer;
  }
}
</style>
