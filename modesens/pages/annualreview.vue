<template>
  <section class="container annualreview-con">
    <h1
      v-if="$i18n.locale == 'zh'"
      class="hiddenh1">ModeSens 的2018年终总结</h1>
    <h1
      v-else
      class="hiddenh1">2018 Annual Report for ModeSens</h1>
    <div class="bannerimg">
      <img
        :src="handimgsrc"
        alt="">
    </div>
    <div class="totalSaving">
      <div class="username"> {{ username }}</div>
      <div class="memberStartTime">{{ $t('annual.MemberSince') }} {{ user.user_joined }}</div>
      <div class="savingProportion">
        <div class="proportionbox">
          <div class="userseavd">
            <div class="itemtitle">{{ $t('annual.yousaved') }}</div>
            <div class="savedNum">${{ usersavingtotal|NumFormat }}</div>
          </div>
          <div class="overallsaved">
            <div class="itemtitle">{{ $t('annual.modesenssaved') }} </div>
            <div class="savedNum">${{ savingtotal|NumFormat }}</div>
          </div>
        </div>
      </div>
      <ul class="detailsBox">
        <li class="item">
          <div class="itemtitle">{{ $t('annual.shoppingNum') }}</div>
          <div class="itemNum">{{ user.purchase_count }}</div>
        </li>
        <li class="item">
          <div class="itemtitle">{{ $t('annual.wishNum') }}</div>
          <div class="itemNum">{{ user.wish_count }}</div>
        </li>
        <li class="item">
          <div class="itemtitle">{{ $t('annual.postNum') }}</div>
          <div class="itemNum">{{ user.post_count }}</div>
        </li>
      </ul>
    </div>
    <div class="bestDeal">
      <div class="title">{{ $t('annual.bestDealtitle') }}</div>
      <div class="dealDetail">
        <div class="dealitem">
          <a
            :href="touserprd"
            target="_blank">
            <div class="imgbox">
              <div class="img">
                <img
                  :src="userprd.cover"
                  alt="">
              </div>
              <div class="designername">{{ userprd.designer }}</div>
              <div class="prdname">{{ userprd.name }}</div>
            </div>
            <div class="savingbox">
              <div class="itemtitle">{{ $t('annual.usersaved') }}</div>
              <div class="moneyNum">$ {{ userprdsaved|NumFormat }}</div>
            </div>
          </a>
          <div
            v-if="userempty"
            class="markimg">
            <div class="noprocon">{{ $t('annual.emptycon') }}</div>
          </div>
        </div>
        <div class="dealitem overall">
          <a
            :href="toModesensprd"
            target="_blank">
            <div class="imgbox">
              <div class="img">
                <img
                  :src="overallprd.cover"
                  alt="">
              </div>
              <div class="designername">{{ overallprd.designer }}</div>
              <div class="prdname">{{ overallprd.name }}</div>
            </div>
            <div class="savingbox">
              <div class="itemtitle">{{ $t('annual.modesensdaved') }}</div>
              <div class="moneyNum">$ {{ overallsaved|NumFormat }}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="productCategories">
      <div class="title">{{ $t('annual.mostShoptitle') }}</div>
      <div class="histogrambox">  
        <VeHistogram
          :data="histogramData"
          :width="histogram.width"
          :height="histogram.height"
          :colors="histogram.colorArr"
          :extend="histogram.chartExtend"
          :legend="histogram.legend"
          :tooltip-visible="false"
          class="histogram"/>
        <div class="yAxis">
          {{ $t('annual.yaxisname') }}
        </div>
        <div class="xAxis">{{ $t('annual.xaxisname') }}</div>
      </div>
    </div>
    <div class="topdesigner">
      <div class="title">{{ $t('annual.topdesignertitle') }}</div>
      <div class="topdesignerCon">
        <div class="youbox itembox">
          <div class="itemtitle">{{ $t('annual.youtop') }}</div>
          <div class="piebox">
            <vepie
              :width="piechart.width"
              :data="piechartDataY"
              :settings="piechart.chartSettings"
              :extend="piechart.chartExtend"
              :colors="piechart.colorArrY"
              :tooltip-visible="false"
              :legend="piechart.legend"/>
            <div
              v-if="designerempty"
              class="mask">
              <div class="noprocon">{{ $t('annual.emptycon') }}</div>
            </div>
          </div>
        </div>
        <div class="allmemberbox itembox">
          <div class="itemtitle">{{ $t('annual.oeralltop') }}</div>
          <div class="piebox">
            <vepie
              :width="piechart.width"
              :data="piechartDataM"
              :settings="piechart.chartSettings"
              :extend="piechart.chartExtend"
              :colors="piechart.colorArrM"
              :tooltip-visible="false"
              :legend="piechart.legend"/>
          </div>
        </div>
      </div>
    </div>
    <div class="lookforward">
      <div class="title">{{ $t('annual.lookforwardtitle') }}</div>
      <div class="contain">
        <p>
          {{ $t('annual.p1') }}
        </p>
        <p>{{ $t('annual.p2') }}</p>
        <p>{{ $t('annual.p3') }}</p>
      </div>
      <nuxt-link
        to="/loyalty/"
        class="toloyalty"> {{ $t('annual.learnMore') }}</nuxt-link>
    </div>
  </section>
</template>
<script>
import VeHistogram from 'v-charts/lib/histogram.js'
import vepie from 'v-charts/lib/pie.js'
import { NumFormat } from '~/assets/js/utils/utils.js'
export default {
  metaInfo() {
    let headobj = {}
    let H1 = ''
    if (this.$i18n.locale == 'zh') {
      H1 = 'ModeSens 的2018年终总结'
    } else {
      H1 = '2018 Annual Report for ModeSens'
    }
    this.$t('accountLoyalty.my_loyalty')
    let TITLE = this.$t('annual.annualTitle') + ' | ModeSens'
    let request = this.$store.state.request
    if (request) {
      let MS_LOGO = request.STATIC_DOMAIN_IMG + this.gconfig.MS_LOGONEW
      headobj = this.commonfn.creatMetaTitle(H1, TITLE, MS_LOGO)
    }
    return headobj
  },
  filters: {
    NumFormat(value) {
      return NumFormat(value)
    }
  },
  components: {
    VeHistogram,
    vepie
  },
  data() {
    return {
      handimgsrc: '/img/20181228Asset_en.png',
      username: '',
      overall: {},
      overallprd: {},
      user: {},
      userprd: {},
      userempty: false,
      designerempty: false,
      proportion: '',
      proportionalter: '',
      savingtotal: 0,
      usersavingtotal: 0,
      userprdsaved: 2000,
      overallsaved: 0,
      touserprd: 'javascript:;',
      toModesensprd: 'javascript:;',
      histogram: {
        width: '657px',
        height: '494px',
        colorArr: ['#F8472B', '#D8D8D8'],
        chartExtend: {
          series: {
            barMaxWidth: '21px',
            barGap: '0px'
          },
          xAxis: {
            axisLabel: {
              rotate: '0'
            }
          }
        },
        legend: {
          orient: 'vertical',
          align: 'left',
          x: 'right',
          y: 'top'
        }
      },
      histogramData: {
        columns: ['category', 'You', 'ModeSens Members Overall'],
        rows: [
          { category: 'Clothing', You: 0, 'ModeSens Members Overall': 0 },
          { category: 'Shoes', You: 0, 'ModeSens Members Overall': 0 },
          { category: 'Bags', You: 0, 'ModeSens Members Overall': 0 },
          { category: 'Accessories', You: 0, 'ModeSens Members Overall': 0 },
          { category: 'Beauty', You: 0, 'ModeSens Members Overall': 0 }
        ]
      },
      piechart: {
        width: '544px',
        legend: {
          orient: 'vertical',
          align: 'left',
          x: '60%',
          y: 'center',
          textStyle: {
            color: '#1c1c1c',
            fontSize: '16px'
          },
          formatter: function(name) {
            return name.length >= 20 ? name.slice(0, 20) + '...' : name
          }
        },
        chartExtend: {
          series: {
            type: 'pie',
            center: ['30%', '50%']
          }
        },
        chartSettings: {
          hoverAnimation: false,
          radius: 122,
          center: ['5%', '5%'],
          label: {
            normal: {
              show: false
            }
          }
        },
        colorArrY: [
          'rgba(248, 71, 43, 1)',
          'rgba(248, 71, 43, 0.81)',
          'rgba(248, 71, 43, 0.63)',
          'rgba(248, 71, 43, 0.4)',
          'rgba(248, 71, 43, 0.21)'
        ],
        colorArrM: [
          'rgba(140, 136, 136, 1)',
          'rgba(140, 136, 136, 0.81)',
          'rgba(140, 136, 136, 0.63)',
          'rgba(140, 136, 136, 0.4)',
          'rgba(140, 136, 136, 0.21)'
        ]
      },
      piechartDataY: {
        columns: ['designer', 'value'],
        rows: []
      },
      piechartDataM: {
        columns: ['designer', 'value'],
        rows: []
      }
    }
  },
  created() {
    if (this.$store.state.lsuser) {
      this.getannualreview()
    }
    if (this.$i18n.locale == 'zh') {
      this.handimgsrc = '/img/20181228Asset_zh.png'
      this.histogramData = {
        columns: ['category', '你', 'ModeSens 会员'],
        rows: [
          { category: '服装', 你: 0, 'ModeSens 会员': 0 },
          { category: '鞋履', 你: 0, 'ModeSens 会员': 0 },
          { category: '箱包', 你: 0, 'ModeSens 会员': 0 },
          { category: '配饰', 你: 0, 'ModeSens 会员': 0 },
          { category: '美妆', 你: 0, 'ModeSens 会员': 0 }
        ]
      }
    } else {
      this.handimgsrc = '/img/20181228Asset_en.png'
    }
  },
  mounted() {
    if ($(window).width() < 1200) {
      this.histogram.width = '100%'
      this.histogram.height = '400px'
      this.histogram.chartExtend.series.barMaxWidth = '11px'
      this.histogram.chartExtend.xAxis.axisLabel.rotate = '-60'
      this.piechart.width = '100%'
      this.piechart.chartSettings.radius = '80'
      this.piechart.chartExtend.series.center = ['30%', '50%']
    }
  },
  methods: {
    async getannualreview() {
      let { overall, user } = await this.$axios.get('/annualreview/', {
        params: {}
      })
      var that = this
      that.piechartDataM.rows = []
      that.piechartDataY.rows = []
      that.user = user
      that.overall = overall
      if (that.$i18n.locale == 'zh') {
        that.username = that.user.username + ' 的2018年终总结'
      } else {
        that.username = '2018 Annual Report  for ' + that.user.username
      }
      that.savingtotal = that.overall.saving
      that.usersavingtotal = that.user.saving
      that.overallsaved = Math.round(
        that.overall.diff_product_high_price -
          that.overall.diff_product_purchase_price
      )
      if (that.user.diff_product === null) {
        that.userprd.cover =
          'https://cdn-images.farfetch-contents.com/12/95/56/42/12955642_13501004_1000.jpg'
        that.userprd.designer = 'ALEXANDER MCQUEEN'
        that.userprd.name = 'Leather Bucket Bag'
        that.userprdsaved = '588'
        that.userempty = true
      } else {
        that.userprd = that.user.diff_product
        that.touserprd = '/product/' + that.user.diff_product.pid + '/'
        that.userprdsaved = Math.round(
          that.user.diff_product_high_price -
            that.user.diff_product_purchase_price
        )
        that.userempty = false
      }
      that.overallprd = that.overall.diff_product
      that.toModesensprd = '/product/' + that.overall.diff_product.pid + '/'
      that.proportion = Math.round(
        (that.user.saving / that.overall.saving) * 100
      )
      that.$nextTick(() => {
        that.proportionalter = parseInt($('.savingnum').width()) / 2
      })
      var usertotal =
        that.user.purchase_c_count +
        that.user.purchase_s_count +
        that.user.purchase_b_count +
        that.user.purchase_a_count +
        that.user.purchase_e_count
      var overalltotal =
        that.overall.purchase_c_count +
        that.overall.purchase_s_count +
        that.overall.purchase_b_count +
        that.overall.purchase_a_count +
        that.overall.purchase_e_count
      if (this.$i18n.locale == 'zh') {
        var user_histogram = '你'
        var ModeSens_histogram = 'ModeSens 会员'
      } else {
        var user_histogram = 'You'
        var ModeSens_histogram = 'ModeSens Members Overall'
      }
      if (usertotal >= 0) {
        that.histogramData.rows[0][user_histogram] =
          (that.user.purchase_c_count / usertotal) * 100
        that.histogramData.rows[1][user_histogram] =
          (that.user.purchase_s_count / usertotal) * 100
        that.histogramData.rows[2][user_histogram] =
          (that.user.purchase_b_count / usertotal) * 100
        that.histogramData.rows[3][user_histogram] =
          (that.user.purchase_a_count / usertotal) * 100
        that.histogramData.rows[4][user_histogram] =
          (that.user.purchase_e_count / usertotal) * 100
      }
      if (overalltotal >= 0) {
        that.histogramData.rows[0][ModeSens_histogram] =
          (that.overall.purchase_c_count / overalltotal) * 100
        that.histogramData.rows[1][ModeSens_histogram] =
          (that.overall.purchase_s_count / overalltotal) * 100
        that.histogramData.rows[2][ModeSens_histogram] =
          (that.overall.purchase_b_count / overalltotal) * 100
        that.histogramData.rows[3][ModeSens_histogram] =
          (that.overall.purchase_a_count / overalltotal) * 100
        that.histogramData.rows[4][ModeSens_histogram] =
          (that.overall.purchase_e_count / overalltotal) * 100
      }
      if (that.user.top_designers === null) {
        that.designerempty = true
        $.each(that.overall.top_designers, function(i, e) {
          var Youlist = { designer: e[0], value: e[1] }
          that.piechartDataY.rows.push(Youlist)
        })
      } else {
        that.designerempty = false
        $.each(that.user.top_designers, function(i, e) {
          var Youlist = { designer: e[0], value: e[1] }
          that.piechartDataY.rows.push(Youlist)
        })
      }
      $.each(that.overall.top_designers, function(i, e) {
        var overalllist = { designer: e[0], value: e[1] }
        that.piechartDataM.rows.push(overalllist)
      })
    }
  }
}
</script>
<style lang="less">
@import '../assets/css/annualreview.less';
</style>
