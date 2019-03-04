<template>
  <section>
    <b-tabs
      no-nav-style
      nav-class="filterTab"
      class="genderTab">
      <b-tab
        :title-item-class="'womentab'"
        :title="$t('common.womens')"
        active
        @click="currentGender('womentab')">
        <div class="filter-con filter-con-f">
          <div class="filter-kinds filter">
            <ul class="kinds-box-big">
              <li class="kind-item">
                <a 
                  target="_self"
                  @click="wechatclick('/product/women/clothing/')">
                  <img
                    v-lazy="countryUrl+female_0.icon"
                    alt="">
                  <div class="kind-title">{{ $t('Wechat.fc') }}</div>
                </a>
              </li>
              <li class="kind-item">
                <a
                  target="_self"
                  @click="wechatclick('/product/women/bags/')">   
                  <img
                    v-lazy="countryUrl+female_1.icon"
                    alt="">
                  <div class="kind-title">{{ $t('Wechat.fb') }}</div>
                </a>
              </li>
            </ul>
            <ul class="kinds-box-sm">
              <li class="kind-item">
                <a
                  target="_self"
                  @click="wechatclick('/product/women/shoes/')">  
                  <img
                    v-lazy="countryUrl+female_2.icon"
                    alt="">
                  <div class="kind-title">{{ $t('Wechat.fs') }}</div>
                </a>
              </li>
              <li class="kind-item">
                <a
                  target="_self"
                  @click="wechatclick('/product/women/accessories/')">
                  <img
                    v-lazy="countryUrl+female_3.icon"
                    alt="">
                  <div class="kind-title">{{ $t('Wechat.fa') }}</div>
                </a>
              </li>
              <li class="kind-item">
                <a
                  v-b-modal.noticemodal1
                  v-if="$i18n.country==='cn'"
                  href="#"
                  target="_self">   
                  <img
                    v-lazy="countryUrl+female_4.icon"
                    alt="">
                  <div class="kind-title">{{ $t('Wechat.fbe') }}</div>
                </a>
                <a
                  v-else
                  target="_self"
                  @click="wechatclick('/product/women/beauty/')">   
                  <img
                    v-lazy="countryUrl+female_4.icon"
                    alt="">
                  <div class="kind-title">{{ $t('Wechat.fbe') }}</div>
                </a>
              </li>
            </ul>
          </div>
          <div class="filter-hot filter">
            <div class="filter-title">
              <hr>
              <div class="title">{{ $t('Wechat.hc') }}</div>
              <hr>
            </div>
            <ul class="filter-con-box row">
              <li
                v-for="(f_menu, index) in f_menus"
                :key="index"
                class="col-3 filter-item-list">
                <div class="filter-item-box">
                  <a
                    v-if="f_menu.category === 'c'"
                    target="_self"
                    @click="wechatclick('/product/women/clothing/#page=1&category='+f_menu.category+'&subcategory='+f_menu.subcategory)">  
                    <img
                      v-lazy="countryUrl+f_menu.icon"
                      alt="">
                    <div class="filter-item-title">{{ $t('Wechat. f_subcategory' + index) }}</div>
                  </a>
                  <a
                    v-else-if="f_menu.category === 'b'"
                    target="_self"
                    @click="wechatclick('/product/women/bags/#page=1&category='+f_menu.category+'&subcategory='+f_menu.subcategory)">  
                    <img
                      v-lazy="countryUrl+f_menu.icon"
                      alt="">
                    <div class="filter-item-title">{{ $t('Wechat. f_subcategory' + index) }}</div>
                  </a>
                  <a
                    v-else-if="f_menu.category === 's'"
                    :href="'/product/women/shoes/#page=1&category='+f_menu.category+'&subcategory='+f_menu.subcategory"
                    target="_self">  
                    <img
                      v-lazy="countryUrl+f_menu.icon"
                      alt="">
                    <div class="filter-item-title">{{ $t('Wechat. f_subcategory' + index) }}</div>
                  </a>
                  <a
                    v-else-if="f_menu.category === 'a'"
                    target="_self"
                    @click="wechatclick('/product/women/accessories/#page=1&category='+f_menu.category+'&subcategory='+f_menu.subcategory)">  
                    <img
                      v-lazy="countryUrl+f_menu.icon"
                      alt="">
                    <div class="filter-item-title">{{ $t('Wechat. f_subcategory' + index) }}</div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div class="filter-designer filter">
            <div class="filter-title">
              <hr>
              <div class="title">{{ $t('Wechat.hd') }}</div>
              <hr>
            </div>
            <ul class="filter-con-box row">
              <li
                v-for="(f_designer, index) in f_designers"
                :key="index"
                class="col-3 filter-item-list">
                <a
                  target="_self"
                  @click="wechatclick('/'+f_designer.url+'-women/')">
                  <div class="filter-item-box">
                    <img
                      v-lazy="f_designer.logo"
                      alt="">
                  </div>
                </a>
              </li>
              <li class="col-3 filter-item-list">
                <a
                  target="_self"
                  @click="wechatclick('/designers/')"> 
                  <div class="filter-item-box to-more-box">
                    <img
                      v-lazy="'/img/more 02@2x.png'"
                      alt="">
                    <div class="to-more">More</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="filter-store filter">
            <div class="filter-title">
              <hr>
              <div class="title">{{ $t('Wechat.hm') }}</div>
              <hr>
            </div>
            <ul class="filter-con-box row">
              <li
                v-for="(f_merchant, index) in f_merchants"
                :key="index"
                class="col-3 filter-item-list">
                <a
                  target="_self"
                  @click="wechatclick('/store/'+f_merchant.url+'-women/')">
                  <div class="filter-item-box">
                    <img
                      v-lazy="f_merchant.logo"
                      alt="">
                  </div>
                </a>
              </li>
              <li class="col-3 filter-item-list">
                <a
                  target="_self"
                  @click="wechatclick('/stores/')">
                  <div class="filter-item-box to-more-box">
                    <img
                      v-lazy="'/img/more 02@2x.png'"
                      alt="">
                    <div class="to-more">More</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </b-tab>
      <b-tab
        :title-item-class="'mentab'"
        :title="$t('common.mens')"
        @click="currentGender('mentab')">
        <div class="filter-con filter-con-m">
          <div class="filter-kinds filter">
            <ul class="kinds-box-big">
              <li class="kind-item">
                <a 
                  target="_self"
                  @click="wechatclick('/product/men/clothing/')">
                  <img
                    v-lazy="countryUrl+male_0.icon"
                    alt="">
                  <div class="kind-title">{{ $t('Wechat.mc') }}</div>
                </a>
              </li>
              <li class="kind-item">
                <a
                  target="_self"
                  @click="wechatclick('/product/men/bags/')">   
                  <img
                    v-lazy="countryUrl+male_1.icon"
                    alt="">
                  <div class="kind-title">{{ $t('Wechat.mb') }}</div>
                </a>
              </li>
            </ul>
            <ul class="kinds-box-sm">
              <li class="kind-item">
                <a
                  target="_self"
                  @click="wechatclick('/product/men/shoes/')">  
                  <img
                    v-lazy="countryUrl+male_2.icon"
                    alt="">
                  <div class="kind-title">{{ $t('Wechat.ms') }}</div>
                </a>
              </li>
              <li class="kind-item">
                <a
                  target="_self"
                  @click="wechatclick('/product/men/accessories/')">
                  <img
                    v-lazy="countryUrl+male_3.icon"
                    alt="">
                  <div class="kind-title">{{ $t('Wechat.ma') }}</div>
                </a>
              </li>
              <li class="kind-item">
                <a
                  v-b-modal.noticemodal1
                  v-if="$i18n.country==='cn'"
                  href="#"
                  target="_self">   
                  <img
                    v-lazy="countryUrl+male_4.icon"
                    alt="">
                  <div class="kind-title">{{ $t('Wechat.mbe') }}</div>
                </a>
                <a
                  v-else
                  target="_self"
                  @click="wechatclick('/product/men/beauty/')">   
                  <img
                    v-lazy="countryUrl+male_4.icon"
                    alt="">
                  <div class="kind-title">{{ $t('Wechat.mbe') }}</div>
                </a>
              </li>
            </ul>
          </div>
          <div class="filter-hot filter">
            <div class="filter-title">
              <hr>
              <div class="title">{{ $t('Wechat.hc') }}</div>
              <hr>
            </div>
            <ul class="filter-con-box row">
              <li
                v-for="(m_menu, index) in m_menus"
                :key="index"
                class="col-3 filter-item-list">
                <div class="filter-item-box">
                  <a
                    v-if="m_menu.category === 'c'"
                    target="_self"
                    @click="wechatclick('/product/men/clothing/#page=1&category='+m_menu.category+'&subcategory='+m_menu.subcategory)">  
                    <img
                      v-lazy="countryUrl+m_menu.icon"
                      alt="">
                    <div class="filter-item-title">{{ $t('Wechat. m_subcategory' + index) }}</div>
                  </a>
                  <a
                    v-else-if="m_menu.category === 'b'"
                    target="_self"
                    @click="wechatclick('/product/men/bags/#page=1&category='+m_menu.category+'&subcategory='+m_menu.subcategory)">  
                    <img
                      v-lazy="countryUrl+m_menu.icon"
                      alt="">
                    <div class="filter-item-title">{{ $t('Wechat. m_subcategory' + index) }}</div>
                  </a>
                  <a
                    v-else-if="m_menu.category === 's'"
                    target="_self"
                    @click="wechatclick('/product/men/shoes/#page=1&category='+m_menu.category+'&subcategory='+m_menu.subcategory)">  
                    <img
                      v-lazy="countryUrl+m_menu.icon"
                      alt="">
                    <div class="filter-item-title">{{ $t('Wechat. m_subcategory' + index) }}</div>
                  </a>
                  <a
                    v-else-if="m_menu.category === 'a'"
                    target="_self"
                    @click="wechatclick('/product/men/accessories/#page=1&category='+m_menu.category+'&subcategory='+m_menu.subcategory)">  
                    <img
                      v-lazy="countryUrl+m_menu.icon"
                      alt="">
                    <div class="filter-item-title">{{ $t('Wechat. m_subcategory' + index) }}</div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div class="filter-designer filter">
            <div class="filter-title">
              <hr>
              <div class="title">{{ $t('Wechat.hd') }}</div>
              <hr>
            </div>
            <ul class="filter-con-box row">
              <li
                v-for="(m_designer, index) in m_designers"
                :key="index"
                class="col-3 filter-item-list">
                <a
                  target="_self"
                  @click="wechatclick('/'+m_designer.url+'-men/')">
                  <div class="filter-item-box">
                    <img
                      v-lazy="m_designer.logo"
                      alt="">
                  </div>
                </a>
              </li>
              <li class="col-3 filter-item-list">
                <a
                  target="_self"
                  @click="wechatclick('/designers/')"> 
                  <div class="filter-item-box to-more-box">
                    <img
                      v-lazy="'/img/more 02@2x.png'"
                      alt="">
                    <div class="to-more">More</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="filter-store filter">
            <div class="filter-title">
              <hr>
              <div class="title">{{ $t('Wechat.hm') }}</div>
              <hr>
            </div>
            <ul class="filter-con-box row">
              <li
                v-for="(m_merchant, index) in m_merchants"
                :key="index"
                class="col-3 filter-item-list">
                <a
                  target="_self"
                  @click="wechatclick('/store/'+m_merchant.url+'-men')">
                  <div class="filter-item-box">
                    <img
                      v-lazy="m_merchant.logo"
                      alt="">
                  </div>
                </a>
              </li>
              <li class="col-3 filter-item-list">
                <a
                  target="_self"
                  @click="wechatclick('/stores/')">
                  <div class="filter-item-box to-more-box">
                    <img
                      v-lazy="'/img/more 02@2x.png'"
                      alt="">
                    <div class="to-more">More</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </b-tab>
    </b-tabs>
  </section>
</template>
<script>
export default {
  layout: 'noframe',
  data() {
    return {
      countryUrl: '',
      female_0: {},
      female_1: {},
      female_2: {},
      female_3: {},
      female_4: {},
      f_menus: [],
      f_designers: [],
      f_merchants: [],
      male_0: {},
      male_1: {},
      male_2: {},
      male_3: {},
      male_4: {},
      m_menus: [],
      m_designers: [],
      m_merchants: []
    }
  },
  head: {
    title: 'ModeSens',
    script: [{ src: 'https://res.wx.qq.com/open/js/jweixin-1.3.2.js' }]
  },
  mounted() {
    this.getConfig()
    this.$nextTick(() => {
      $('.nav.filterTab').css('justify-content', 'center')
      $('.nav-link').css('color', '#8e8e8e')
      $('.nav-link.active').css('color', '#1c1c1c')
      $('.nav-item').css('flex', '1')
      $('.womentab').css('text-align', 'right')
      $('.mentab').css('text-align', 'left')
    })
  },
  methods: {
    async getConfig() {
      let configinfo = await this.$axios.post('/v2/config/', {
        secretkey: process.env.secretKey
      })
      this.countryUrl = configinfo.CDN_HOST
      this.female_0 = configinfo.SHOP_MENUS[0].main_menus[0]
      this.female_1 = configinfo.SHOP_MENUS[0].main_menus[1]
      this.female_2 = configinfo.SHOP_MENUS[0].main_menus[2]
      this.female_3 = configinfo.SHOP_MENUS[0].main_menus[3]
      this.female_4 = configinfo.SHOP_MENUS[0].main_menus[4]
      this.f_menus = configinfo.SHOP_MENUS[0].hot_menus
      this.f_designers = configinfo.SHOP_MENUS[0].hot_designers
      this.f_merchants = configinfo.SHOP_MENUS[0].hot_merchants
      this.male_0 = configinfo.SHOP_MENUS[1].main_menus[0]
      this.male_1 = configinfo.SHOP_MENUS[1].main_menus[1]
      this.male_2 = configinfo.SHOP_MENUS[1].main_menus[2]
      this.male_3 = configinfo.SHOP_MENUS[1].main_menus[3]
      this.male_4 = configinfo.SHOP_MENUS[1].main_menus[4]
      this.m_menus = configinfo.SHOP_MENUS[1].hot_menus
      this.m_designers = configinfo.SHOP_MENUS[1].hot_designers
      this.m_merchants = configinfo.SHOP_MENUS[1].hot_merchants
    },
    currentGender: function(gendertab) {
      $('.nav-link').css('color', '#8e8e8e')
      $('.' + gendertab + ' .nav-link').css('color', '#1c1c1c')
    },
    wechatclick: function(href) {
      wx.miniProgram.navigateTo({
        url: '/pages/webview_1?url=' + href
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/css/shop.less';
</style>
