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
      <div class="store-fav-title">{{ $t('Storefav.title') }}</div>
      <div>
        <div class="learnmore">{{ $t('Storefav.LearnMore') }}</div>
        <div class="store-fav-close"/>
      </div>
    </div>
    <div class="main-wrapper">
      <div class="ingfobox">
        <div class="inforleft">
          <p class="inforleft-item">{{ $t('Storefav.desc0') }}</p>
        </div>
        <div class="inforright">
          <div class="inforrighttitle">{{ $t('Storefav.AsaModeSensShopperYouCan') }}</div>
          <ul class="ingforright-itembox">
            <li class="inforright-item">
              <div class="ingforright-start"/>
              {{ $t('Storefav.desc1') }}
            </li>
            <li class="inforright-item">
              <div class="ingforright-start"/>
              {{ $t('Storefav.desc2') }}
            </li>
            <li class="inforright-item">
              <div class="ingforright-start"/>
              {{ $t('Storefav.desc3') }}
            </li>
            <li class="inforright-item">
              <div class="ingforright-start"/>
              {{ $t('Storefav.desc4') }}
            </li>
            <li class="inforright-item">
              <div class="ingforright-start"/>
              {{ $t('Storefav.desc5') }}
            </li>
            <li class="inforright-item">
              <div class="ingforright-start"/>
              {{ $t('Storefav.desc6') }}
            </li>
          </ul>
        </div>
      </div>
      <button
        class="btn btn-primary signupbtn"
        data-ga-click="Frame-Header-SignUp-aboutmoment-model"
        @click="tosignup">{{ $t('common.CreateAnAccount') }}</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      storefavTime: -1,
      storefavTimeout: -1
    }
  },
  methods: {
    favstoreUp() {
      $('.toggle-button').attr('status', '-1')
      $('#store-fav-container').animate({ bottom: '0px' })
      $('.store-fav-close').css({ transform: 'rotate(0deg)' })
      $('.learnmore').css('display', 'none')
    },
    favstoreDown() {
      $('.toggle-button').attr('status', '1')
      $('#store-fav-container').animate({ bottom: '-325px' })
      $('.store-fav-close').css({ transform: 'rotate(540deg)' })
      $('.learnmore').css('display', 'block')
    },
    changefavstore(index) {
      clearTimeout(this.storefavTime)
      if (index == 1) {
        this.storefavTime = setTimeout(() => {
          this.favstoreUp()
        }, 1000)
      } else if (index == -1) {
        this.storefavTime = setTimeout(() => {
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
  bottom: -325px;
  left: 50%;
  z-index: 12;
  width: 805px;
  // height: 330px;
  background-color: #fff;
  transform: translateX(-50%);
  .toggle-button {
    // position: absolute;
    // top: -44px;
    // left: 0;
    // z-index: 50;
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
    padding: 30px 10px 0;
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
    margin-top: 30px;
    margin-left: calc((100% - 154px) / 2);
  }
}
@media (max-width: 1199px) {
  #store-fav-container {
    display: none;
  }
}
</style>
