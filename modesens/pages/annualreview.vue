<template>
  <section class="container">
    <div class="bannerimg">
      <img
        src="/img/20181228Asset_en.png"
        alt="">
    </div>
    <div class="totalSaving">
      <div class="username keepLeft">{{ user.username }}</div>
      <div class="memberStartTime keepLeft">Member Since {{ user.user_joined }}</div>
      <div class="savingProportion">
        <div class="title">Your Total Saving | ModeSens Members Total Saving </div>
        <div class="proportionbox">
          <div class="start">$0</div>
          <div class="proportionImg">
            <div
              :style="{width:proportion+'%'}"
              class="proportionitem"/>
            <div
              :style="{left:proportion+'%', marginLeft:'-'+proportionalter+'px'}"
              class="savingnum">
              <div
                class="tooltip bs-tooltip-top bs-tooltip-top-docs"
                role="tooltip">
                <div
                  class="arrow"/>
                <div class="tooltip-inner">
                  ${{ user.saving }}
                </div>
              </div>
            </div>
          </div>
          <div class="end">${{ overall.saving }}</div>
        </div>
      </div>
      <ul class="detailsBox">
        <li class="item">
          <div class="itemtitle"># Of Times Shopped</div>
          <div class="itemNum">{{ user.purchase_count }}</div>
        </li>
        <li class="item">
          <div class="itemtitle"># Of Items Wishlisted</div>
          <div class="itemNum">{{ user.wish_count }}</div>
        </li>
        <li class="item">
          <div class="itemtitle"># Of Times Posted</div>
          <div class="itemNum">{{ user.post_count }}</div>
        </li>
      </ul>
    </div>
    <div class="bestDeal">
      <div class="title">Best Deal Received</div>
      <div class="dealDetail">
        <div
          v-if="userprd !== null"
          class="dealitem">
          <div class="imgbox">
            <div class="img">
              <img
                :src="userprd.cover"
                alt="">
            </div>
            <div class="designername">{{ userprd.designer }}</div>
            <div class="prdname">{{ userprd.name }}</div>
          </div>
          <div class="savingbox keepLeft">
            <div class="itemtitle">Total Saved</div>
            <div class="moneyNum">$ {{ userprdsaved|NumFormat }}</div>
            <div
              :style="{width:savedPercentage+'%'}"
              class="proportion_user proportion"/>
          </div>
        </div>
        <div
          v-else
          class="dealitem">
          <div class="dealimgbox">
            <img
              src="/img/20181228proimg.png"
              alt="">
            <div class="noprocon">
              Oh no! We don't see any purchase history for you. Be sure your purchases are tracked next year to view these results and enjoy the full benefits of ModeSens membership.
            </div>

          </div>
        </div>
        <div class="dealitem overall">
          <div class="imgbox">
            <div class="img">
              <img
                :src="overallprd.cover"
                alt="">
            </div>
            <div class="designername">{{ overallprd.designer }}</div>
            <div class="prdname">{{ overallprd.name }}</div>
          </div>
          <div class="savingbox keepLeft">
            <div class="itemtitle">Cutomer Total Saved</div>
            <div class="moneyNum">$ {{ overallsaed|NumFormat }}</div>
            <div class="proportion_modesens proportion"/>
          </div>
        </div>
      </div>
    </div>
    <div class="productCategories">
      <div class="title">Most Shopped Product Categories</div>
      <div class="histogrambox">  
        <VeHistogram
          :data="histogramData"
          :width="histogram.width"
          :height="histogram.height"
          :colors="histogram.colorArr"
          :extend="histogram.chartExtend"
          :legend="histogram.legend"
          :settings="histogram.chartSettings"
          :tooltip-visible="false"
          class="histogram"/>
        <div class="yAxis">
          Percentages Of 
          <br>
          Total Purchases
        </div>
        <div class="xAxis">Product Category</div>
      </div>
    </div>
    <div class="topdesigner">
      <div class="title">Top Designers Purchased</div>
      <div class="topdesignerCon">
        <div class="youbox itembox">
          <div class="itemtitle">Your Top 5</div>
          <div
            v-if="user.top_designers !== null"
            class="piebox">
            <vepie
              :width="piechart.width"
              :data="piechartDataY"
              :settings="piechart.chartSettings"
              :extend="piechart.chartExtend"
              :colors="piechart.colorArrY"
              :tooltip-visible="false"
              :legend="piechart.legend"/>
          </div>
          <div
            v-else
            class="piebox">
            <div class="imgbox">
              <img
                src="/img/20181228pieY.png"
                alt="">
              <div class="noprocon">
                Oh no! We don't see any purchase history for you. Be sure your purchases are tracked next year to view these results and enjoy the full benefits of ModeSens membership.
              </div>
            </div>
          </div>
        </div>
        <div class="allmemberbox itembox">
          <div class="itemtitle">Overall Members Top 5</div>
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
      <div class="title">Looking Forward To 2019</div>
      <div class="contain">
        <p>
          " We're rolling out exciting new features in 2019, including the launch of our
          <b> membership program, ModeSens Rewards.</b>
          "
        </p>
        <div class="itemtitle">Through ModeSens Rewards..</div>
        <p>
          Members automatically have access to a plethora of 
          <b>membership benefits</b>
          at varying reward levels, including
          <b>free protection </b>
          for product
          <b>authenticity</b>
          and satisfaction on all purchases made through our site,
          <b>early access</b>
          to the best sales, limited and
          <b>exclusive product</b>
          access and more. 
        </p>
        <p>
          See how you can start enjoying an even more rewarding shopping experience today.
        </p>
      </div>
      <a
        :href="BASE_URL+'/loyalty/'"
        target="_blank"
        class="toloyalty">Learn More</a>
    </div>
  </section>
</template>
<script>
import VeHistogram from 'v-charts/lib/histogram.js'
import vepie from 'v-charts/lib/pie.js'
import { NumFormat } from '~/static/util/util.js'
export default {
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
      overall: {},
      overallprd: {},
      user: {},
      userprd: {},
      proportion: '',
      proportionalter: '',
      userprdsaved: 0,
      overallsaed: 0,
      savedPercentage: '',
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
        },
        chartSettings: {
          metrics: ['You', 'ModeSens Members Overall'],
          yAxisType: ['KMB', '']
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
          x: 'right',
          y: 'center'
        },
        chartExtend: {
          series: {
            type: 'pie',
            center: ['50%', '50%']
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
  async asyncData({ app, query }) {
    let oToken = query.otoken
    if (oToken) {
      app.$cookies.set('token', oToken)
    }
  },
  created() {
    if (this.$route.query.otoken) {
      this.getannualreview()
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
      let { overall, user } = await this.$axios.get('/annualreview/')
      var that = this
      that.piechartDataM.rows = []
      that.piechartDataY.rows = []
      that.user = user
      that.overall = overall
      that.userprd = that.user.diff_product
      that.overallprd = that.overall.diff_product
      that.proportion = Math.round(
        (that.user.saving / that.overall.saving) * 100
      )
      that.$nextTick(() => {
        that.proportionalter = parseInt($('.savingnum').width()) / 2
      })
      that.userprdsaved = Math.round(
        that.user.diff_product_high_price -
          that.user.diff_product_purchase_price
      )
      that.overallsaed = Math.round(
        that.overall.diff_product_high_price -
          that.overall.diff_product_purchase_price
      )
      that.savedPercentage = (that.userprdsaved / that.overallsaed) * 100
      that.histogramData.rows[0].You = that.user.purchase_c_count
      that.histogramData.rows[1].You = that.user.purchase_s_count
      that.histogramData.rows[2].You = that.user.purchase_b_count
      that.histogramData.rows[3].You = that.user.purchase_a_count
      that.histogramData.rows[4].You = that.user.purchase_e_count
      that.histogramData.rows[0]['ModeSens Members Overall'] =
        that.overall.purchase_c_count
      that.histogramData.rows[1]['ModeSens Members Overall'] =
        that.overall.purchase_s_count
      that.histogramData.rows[2]['ModeSens Members Overall'] =
        that.overall.purchase_b_count
      that.histogramData.rows[3]['ModeSens Members Overall'] =
        that.overall.purchase_a_count
      that.histogramData.rows[4]['ModeSens Members Overall'] =
        that.overall.purchase_e_count
      $.each(that.user.top_designers, function(i, e) {
        var Youlist = { designer: e[0], value: e[1] }
        that.piechartDataY.rows.push(Youlist)
      })
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
