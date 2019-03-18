<template>
  <div>
    <div
      v-if="mybrowse==='Chrome'"
      class="modelinkbrowsebtn chrome-install-button"
      @click="installChromeExtention">
      <img
        v-lazy="gconfig.CHROME_LOGO"
        alt="">
      <span>{{ $t('nav.InstallNow') }}</span>
    </div>
    <div
      v-else-if="mybrowse==='QQBrowser'"
      class="modelinkbrowsebtn chrome-install-button"
      @click="installChromeExtention">
      <img
        v-lazy="gconfig.QQBROWSER_LOGO"
        alt="">
      <span>{{ $t('nav.InstallNow') }}</span>
    </div>
    <div
      v-else-if="mybrowse==='Opera'"
      class="modelinkbrowsebtn opera-install-button btn-primary"
      @click="installOperaExtention">
      <img
        v-lazy="gconfig.OPERA_LOGO"
        alt="">
      <span>{{ $t('nav.InstallNow') }}</span>
    </div>
    <div
      v-else-if="mybrowse==='FF'"
      class="modelinkbrowsebtn ff-install-button btn-primary"
      @click="installFFExtention">
      <img
        v-lazy="gconfig.FIREFOX_LOGO"
        alt="">
      <span>{{ $t('nav.InstallNow') }}</span>
    </div>
    <div
      v-else-if="mybrowse==='Safari'"
      class="modelinkbrowsebtn Safari-install-button btn-primary"
      @click="installSafariExtention">
      <a
        href="https://safari-extensions.apple.com/details/?id=com.modesens.shoppingassistant-6EL854LDB8"
        target="_blank">
        <img
          v-lazy="gconfig.SAFARI_LOGO"
          alt="">
        <span>{{ $t('nav.InstallNow') }}</span>
      </a>
    </div>
    <div
      v-else
      class="d-flex justify-content-start">
      <div
        class="modelinkbrowsebtnlogo"
        @click="modelinkGoToBrowse('Chrome')">
        <img
          v-lazy="gconfig.CHROME_LOGO"
          alt="">
      </div>
      <div
        class="modelinkbrowsebtnlogo"
        @click="modelinkGoToBrowse('Firefox')">
        <img
          v-lazy="gconfig.FIREFOX_LOGO"
          alt="">
      </div>
      <div
        class="modelinkbrowsebtnlogo"
        @click="modelinkGoToBrowse('Safari')">
        <img
          v-lazy="gconfig.SAFARI_LOGO"
          alt="">
      </div>
    </div>
  </div>
</template>
<script>
import { getBrowse } from '~/assets/js/utils/utils.js'
export default {
  data() {
    return {
      mybrowse: null
    }
  },
  mounted() {
    this.mybrowse = getBrowse()
  },
  methods: {
    installChromeExtention(evt) {
      ga('send', 'event', 'HeaderExtention', 'Chrome', 'click')
      window.open(
        'https://chrome.google.com/webstore/detail/modesens-shopping-assista/cmfmhegpbogfmojekmidappigcfbgbcb',
        '_blank'
      )
      evt.stopPropagation()
    },
    installOperaExtention(evt) {
      ga('send', 'event', 'HeaderExtention', 'Opera', 'click')
      var id = 'efjhmecngnegjbeammojcaecfmjllpbk'
      opr.addons.installExtension(
        id,
        function() {
          $.each($('.opera-install-button'), function(i, e) {
            $(e).attr('onclick', "window.open('')")
            $(e)
              .find('span')
              .html(this.$t('Write Review'))
          })
          ga('send', 'event', 'HeaderExtention', 'operaSuccess')
        },
        function(errorMessage) {
          alert('Error: ' + errorMessage)
          extentionErrorMsg = errorMessage
        }
      )
      evt.stopPropagation()
    },
    installFFExtention() {
      ga('send', 'event', 'HeaderExtention', 'Firefox', 'click')
      var params = {
        Foo: {
          URL: FIREFOX_INSTALL_XPI
        }
      }
      InstallTrigger.install(params)
      event.stopPropagation()
    },
    installSafariExtention() {
      ga('send', 'event', 'HeaderExtention', 'Safari', 'click')
    },
    modelinkGoToBrowse(browse) {
      if (browse === 'Chrome') {
        window.open(
          'https://chrome.google.com/webstore/detail/modesens-shopping-assista/cmfmhegpbogfmojekmidappigcfbgbcb',
          '_blank'
        )
      } else if (browse === 'Firefox') {
        window.open(
          'https://addons.mozilla.org/firefox/addon/modesens-shopping-assistant/',
          '_blank'
        )
      } else if (browse === 'Safari') {
        window.open(
          'https://safari-extensions.apple.com/details/?id=com.modesens.shoppingassistant-6EL854LDB8',
          '_blank'
        )
      }
      ga('send', 'event', 'HeaderExtention', browse, 'click')
    }
  }
}
</script>
<style lang="less" scoped>
.modelinkbrowsebtn {
  display: flex;
  align-items: center;
  padding: 0 6px;
  // height: 24px;
  margin-right: 10px;
  background-image: linear-gradient(#575757, #575757),
    linear-gradient(#696969, #191919);
  cursor: pointer;
  img {
    width: 14px;
    height: 14px;
  }
  span {
    // font-size: 10px;
    color: #fff;
    margin-left: 10px;
    vertical-align: middle;
    line-height: 22px;
  }
}
.modelinkbrowsebtnlogo {
  margin-right: 5px;
  width: 14px;
  height: 14px;
  img {
    width: 14px;
    height: 14px;
    vertical-align: baseline;
  }
}
</style>
