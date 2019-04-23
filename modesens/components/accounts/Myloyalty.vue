<template>
  <section>
    <div id="rankbox">
      <div class="title-part">{{ $t('accountLoyalty.account_overview') }}</div>
      <div class="levelinfo">
        <div class="levelBenefits">
          <div class="levelBenefitscon">
            <div class="leveltitle">{{ $t('accountLoyalty.benefits') }}</div>
            <nuxt-link
              to="/loyalty/"
              data-ga-click="accountLoyalty-Benefits--"
              class="Member-failure">
              <span>{{ $t('accountLoyalty.memberendTimg') }} {{ myloyaltycontent.end_date }}</span>
              <div class="tointro">
                <img
                  v-lazy="'/img/20181221tointro.png'"
                  alt="">
              </div>
            </nuxt-link>
            <div class="current-L">
              <img
                v-lazy="levelimgHref"
                alt="">
            </div>
            <ul class="level-rights">
              <li
                v-for="(rightlist,index) in levelRights"
                :key="index"
                class="levelrightsliat"><span/>{{ $t('accountLoyalty.'+myloyaltycontent.level+'_'+index) }}</li>
            </ul>
          </div>
        </div>
        <div class="userleveldes">
          <div class="leveltitle">{{ $t('accountLoyalty.membershipDeltails') }}</div>
          <nuxt-link
            to="/loyalty/"
            data-ga-click="accountLoyalty-Membership_Details--"
            class="Member-failure">
            <span>{{ $t('accountLoyalty.deltail') }}</span>
            <div class="tointro">
              <img
                v-lazy="'/img/20181221tointro.png'"
                alt="">
            </div>
          </nuxt-link>
          <div class="conbox">
            <div class="con">
              <div
                :class="levelClass"
                class="percent-circle percent-circle-right">
                <div 
                  :style="{transform: 'rotate(' + degRight + 'deg)'}"
                  class="right-content"/>
              </div>
              <div
                :class="levelClass"
                class="percent-circle percent-circle-left">
                <div 
                  :style="{transform: 'rotate(' + degLeft + 'deg)'}"
                  class="left-content"/>
              </div>
              <div class="text-circle">
                <div class="percentage">{{ pers_percentage }}%</div>
                <div
                  class="txt">{{ $t('accountLoyalty.Towards') }}
                  <br>
                  {{ $t('accountLoyalty.'+nexrLevel.toUpperCase()+'2') }}</div>
              </div>
            </div>
            <div
              class="condes">
              {{ $t('accountLoyalty.as') }}{{ $t('accountLoyalty.'+nexrLevel+'2') }}
              {{ $t('accountLoyalty.enjoy') }}:
              <ul class="level-rights">
                <li
                  v-for="(nxtRightlist,index) in nextLevelRights"
                  :key="index"
                  class="levelrightsliat"><span/>{{ $t('accountLoyalty.'+nexrLevel+'_'+index) }}</li>
              </ul>
            </div>
          </div>
          <nuxt-link
            to="/loyalty/"
            data-ga-click="accountLoyalty-Learn_More_Benefits--"
            class="toleveldes">
            {{ $t('accountLoyalty.moreBennefits') }}     
          </nuxt-link>
        </div>
      </div>
    </div>
    <div
      v-if="myloyaltycontent.level!=='Bronze' && Tripledays === 1"
      class="num-days">{{ $t('accountLoyalty.youhave') }} {{ Tripledays }} {{ $t('accountLoyalty.pointsday') }} {{ myloyaltycontent.end_date }}{{ $t('accountLoyalty.triple') }}</div>
    <div
      v-else-if="myloyaltycontent.level!=='Bronze' && Tripledays > 1"
      class="num-days">{{ $t('accountLoyalty.youhave') }} {{ Tripledays }} {{ $t('accountLoyalty.pointsdays') }} {{ myloyaltycontent.end_date }}{{ $t('accountLoyalty.triple') }}</div>
    <div id="consume-box">
      <div class="title-part">{{ $t('accountLoyalty.account_activity') }}</div>
      <div id="recordbox">
        <div
          id="consume-title"
          class="row">
          <div class="title-list col-md-3 col-3">{{ $t('accountLoyalty.date') }}</div>
          <div class="title-list col-md-3 col-3">{{ $t('accountLoyalty.activity') }}</div>
          <div class="title-list col-md-3 col-3">{{ $t('accountLoyalty.earn') }}</div>
          <div class="title-list col-md-3 col-3 keepRight">
            <div class="demo"> 
              <div id="config-demo">
                {{ $t('accountLoyalty.filter') }}
                <img
                  v-lazy="'/img/20181214slidedown.svg'"
                  :class="dateSlideDown ? 'active' : ''"
                  class="activeimg"
                  alt="">
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="flag2"
          class="consumeload">
          <ul id="consume">
            <li
              v-for=" (record,index) in recordslist.records " 
              :key=" index ">
              <div class="record_info row">
                <div class="col-md-3 col-3">{{ record.create_datetime | getLocalTime }}</div>
                <div class="col-md-3 col-3">{{ $t('accountLoyalty.record_' + record.source_s) }}</div>
                <div class="col-md-3 col-3">{{ record.points }}</div>
                <div
                  v-if="record.source==='Purchase'"
                  class="see-more  keepRight col-md-3 col-3"
                  @click="toggle(index)">
                  <img
                    v-lazy="'/img/20181214slidedown.svg'" 
                    :class="index===limit ? 'active' : ''"
                    alt="">
                </div>
              </div>
              <div 
                v-show="index===limit"
                class="consume-item">
                <ul class="openitem keepLeft">
                  <li>
                    <div class="itemtitle keepLeft">{{ $t('common.Store') }} :</div>
                    <div class="itemcon keepRight">{{ record.memo.merchant_name }}</div>
                  </li>
                  <li>
                    <div class="itemtitle keepLeft">{{ $t('accountLoyalty.order') }} :</div>
                    <div class="itemcon keepRight">{{ record.memo.order_id }}</div>
                  </li>
                  <li>
                    <div class="itemtitle keepLeft">{{ $t('common.price') }} :</div>
                    <div class="itemcon keepRight">${{ record.value }}</div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <b-pagination
            v-if="recordslist.amount > 10 && recordslist.records.length > 0"
            v-model="currentPage"
            :total-rows="recordslist.amount"
            :per-page="10"
            :disabled="pageCannotSwitched"
            :hide-goto-end-buttons="true"
            align="center"
            prev-text="<"
            next-text=">"
            @input="pageSwitching"/>
        </div>
        <div
          v-else
          class="order-loadmore">
          <img
            v-lazy="'/img/20190102sync.gif'"
            alt=""
            class="loadmore">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import daterangepicker from 'bootstrap-daterangepicker'
import { getLocalTime, getTimestamp } from '~/assets/js/utils/utils.js'
import 'bootstrap-daterangepicker/daterangepicker.css'
export default {
  filters: {
    getLocalTime(time) {
      return getLocalTime(time)
    }
  },
  props: {
    myloyaltycontent: {
      type: Object,
      default: function() {
        return {}
      }
    },
    myloyaltycontent1: {
      type: Object,
      default: function() {
        return {}
      }
    },
    recordsflag2: {
      type: Boolean,
      default: function() {
        return true
      }
    }
  },
  data() {
    return {
      limit: -1,
      pageCannotSwitched: false,
      degRight: '',
      degLeft: '',
      pers_percentage: '',
      currentPage: 1,
      pagestate: 1,
      recordslist: this.myloyaltycontent1,
      flag2: this.recordsflag2,
      startTime: '',
      endTime: '',
      levelClass: '',
      levelimgHref: '',
      Tripledays: 0,
      dateSlideDown: false,
      levelRights: [],
      nextLevelRights: [],
      nexrLevel: ''
    }
  },
  created() {
    if (this.$store.state.login_status) {
      let pers =
        this.myloyaltycontent.points_earned / this.myloyaltycontent.points_goal
      this.pers_percentage = Math.round(pers * 100)
      if (pers <= 0.5) {
        this.degRight = pers * 360
        this.degLeft = 0
      } else if (pers >= 1) {
        this.degRight = 180
        this.degLeft = 180
      } else {
        this.degRight = 180
        this.degLeft = pers * 360 - 180
      }
      if (this.myloyaltycontent.level == 'Bronze') {
        this.levelClass = 'bronze'
        this.levelimgHref = this.$i18n.locale === 'en' ? '/img/20181221bronze-en.png':'/img/20181221bronze-zh.png'
        this.Tripledays = 0
        this.levelRights = [1, 2, 3]
        this.nextLevelRights = [1, 2, 3, 4]
        this.nexrLevel = 'Silver'
      } else if (this.myloyaltycontent.level == 'Silver') {
        this.levelClass = 'sliver'
        this.levelimgHref = this.$i18n.locale === 'en' ? '/img/20181221silver-en.png':'/img/20181221silver-zh.png'
        this.Tripledays = 1
        this.levelRights = [1, 2, 3, 4]
        this.nextLevelRights = [1, 2, 3, 4, 5]
        this.nexrLevel = 'Gold'
      } else if (this.myloyaltycontent.level == 'Gold') {
        this.levelClass = 'gold'
        this.levelimgHref = this.$i18n.locale === 'en' ? '/img/20181221gold-en.png':'/img/20181221gold-zh.png'
        this.Tripledays = 2
        this.levelRights = [1, 2, 3, 4, 5]
        this.nextLevelRights = [1, 2, 3, 4, 5]
        this.nexrLevel = 'Platinum'
      } else if (this.myloyaltycontent.level == 'Platinum') {
        this.levelClass = 'platinum'
        this.levelimgHref = this.$i18n.locale === 'en' ? '/img/20181221platinum-en.png':'/img/20181221platinum-zh.png'
        this.Tripledays = 3
        this.levelRights = [1, 2, 3, 4, 5, 6, 7]
        this.nextLevelRights = [1, 2, 3, 4, 5]
        this.nexrLevel = 'Platinum'
      }
    }
  },
  mounted() {
    var beginTimeStore = ''
    var endTimeStore = ''
    var that = this
    $('#config-demo').daterangepicker(
      {
        linkedCalendars: false,
        autoApply: false,
        autoUpdateInput: true,
        maxDate: new Date(),
        opens: 'left',
        locale: {
          format: 'YYYY-MM-DD',
          separator: ' ~ ',
          applyLabel: 'OK',
          cancelLabel: 'Cancel'
        }
      },
      function(start, end, label) {
        beginTimeStore = start
        endTimeStore = start
      }
    )
    $('#config-demo').on('apply.daterangepicker', function(ev, picker) {
      that.startTime = picker.startDate.format('YYYY-MM-DD')
      that.endTime = picker.endDate.format('YYYY-MM-DD')
      that.getmoreRecords(1, that.startTime, that.endTime)
      that.pagestate = 1
      this.flag2 = false
    })
    $('#config-demo').on('show.daterangepicker', function() {
      that.dateSlideDown = true
    })
    $('#config-demo').on('hide.daterangepicker', function() {
      that.dateSlideDown = false
    })
  },
  methods: {
    toggle: function(index) {
      if (index == this.limit) {
        this.limit = -1
      } else {
        this.limit = index
      }
    },
    async getmoreRecords(page, starttime, endtime) {
      this.pageCannotSwitched = true
      var params = {}
      params.amount = 10
      params.offset = (page - 1) * 10
      params.start_datetime = starttime
      params.end_datetime = endtime
      let records = await this.$axios.post('/loyalty/records/', params)
      this.recordslist = records.records
      this.pageCannotSwitched = false
      this.flag2 = true
    },
    pageSwitching: function() {
      if (this.pagestate === this.currentPage) {
        return
      } else {
        this.getmoreRecords(this.currentPage, this.startTime, this.endTime)
        this.pagestate = this.currentPage
        this.limit = -1
        this.flag2 = false
      }
    }
  }
}
</script>
<style scoped>
/* @import 'http://netdna.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css'; */
.demo {
  position: relative;
  cursor: pointer;
}
.demo img {
  width: 9px;
  margin-left: 8px;
  transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -o-transform: rotate(180deg);
}
.demo img.active {
  transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  -o-transform: rotate(0deg);
}
.pagination {
  display: flex;
}
</style>
