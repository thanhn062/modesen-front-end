<template>
  <section>
    <div id="rankbox">
      <div class="title-part">Your Perks</div>
      <div class="levelinfo">
        <div class="levelBenefits">
          <div class="levelBenefitscon">
            <div class="leveltitle">Benefits</div>
            <a 
              href="##" 
              class="Member-failure">
              Your Membership through {{ myloyaltycontent.end_date }}       
              <div class="tointro">?</div>
            </a>
            <div class="current-L">
              <img
                :src="levelimgHref"
                alt="">
            </div>
            <ul class="level-rights">
              <li class="levelrightsliat"><span/>Second Priority Alert</li>
              <li class="levelrightsliat"><span/>10,000 Product Alerts</li>
              <li class="levelrightsliat"><span/>Triple Points: {{ Tripledays }} Days</li>
              <li class="levelrightsliat"><span/>Early Sale Access</li>
              <li class="levelrightsliat"><span/>Resell</li>
            </ul>
          </div>
        </div>
        <div class="userleveldes">
          <div class="leveltitle">Membership Details</div>
          <a 
            href="##" 
            class="Member-failure">
            All activity this year gets you closer to even more benefits!     
            <div class="tointro">?</div>
          </a>
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
                <div class="txt">TOWARDS
                  <br>
                  PLATINUM</div>
              </div>
            </div>
            <div class="condes">
              As Platinum
              <br>
              you enjoy:
              <ul class="level-rights">
                <li class="levelrightsliat"><span/>Dedicated VIP Service</li>
                <li class="levelrightsliat"><span/>Limited & Exclusive Products</li>
                <li class="levelrightsliat"><span/>Product Perks</li>
              </ul>
            </div>
          </div>
          <a 
            href="##" 
            class="toleveldes">
            Learn More About The Benefits     
          </a>
        </div>
      </div>
    </div>
    <div
      v-if="myloyaltycontent.level!=='Bronze' "
      class="num-days">You have {{ Tripledays }} triple points days to use before {{ myloyaltycontent.end_date }}. Please email us at vip@modesens.com to schedule your triple points day.</div>
    <div id="consume-box">
      <div class="title-part">ACCOUNT ACTIVITY</div>
      <div id="consume-title">
        <div class="title-list col-md-3">Date</div>
        <div class="title-list col-md-3">Activity</div>
        <div class="title-list col-md-3">Points/ Earned</div>
        <div class="title-list col-md-3 keepRight">
          <div class="demo"> 
            <div id="config-demo">Filter By</div>
          </div>
        </div>
      </div>
      <ul id="consume">
        <li
          v-for=" (record,index) in recordslist.records " 
          :key=" index ">
          <div class="record_info">
            <div class="col-md-3">{{ record.create_datetime | getLocalTime }}</div>
            <div class="col-md-3">{{ record.source }}</div>
            <div class="col-md-3">{{ record.points }}</div>
            <div
              v-if="record.source==='Purchase'"
              class="see-more  keepRight col-md-3"
              @click="toggle(index)">
              item</div>
          </div>
          <div 
            v-show="index==limit"
            class="consume-item">
            <ul class="openitem keepLeft">
              <li>
                <div class="itemtitle keepLeft">store :</div>
                <div class="itemcon keepRight">{{ record.memo.merchant_name }}</div>
              </li>
              <li>
                <div class="itemtitle keepLeft">Order id :</div>
                <div class="itemcon keepRight">{{ record.memo.order_id }}</div>
              </li>
              <li>
                <div class="itemtitle keepLeft">price :</div>
                <div class="itemcon keepRight">${{ record.value }}</div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="recordslist.amount"
      :per-page="10"
      :disabled="pageCannotSwitched"
      align="center"
      prev-text="<"
      next-text=">"
      @input="pageSwitching"/>
  </section>
</template>

<script>
import daterangepicker from 'bootstrap-daterangepicker'
import membership from '~/static/api/1.0/membership.js'
import { getLocalTime } from '~/static/util/util.js'
import { getTimestamp } from '~/static/util/util.js'
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
      startTime: '',
      endTime: '',
      levelClass: '',
      levelimgHref: '',
      Tripledays: 0
    }
  },
  created() {
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
      this.levelimgHref = '/img/20181213bronze.png'
      this.Tripledays = 0
    } else if (this.myloyaltycontent.level == 'Silver') {
      this.levelClass = 'sliver'
      this.levelimgHref = '/img/20181213silver.png'
      this.Tripledays = 1
    } else if (this.myloyaltycontent.level == 'Gold') {
      this.levelClass = 'gold'
      this.levelimgHref = '/img/20181213gold.png'
      this.Tripledays = 2
    } else if (this.myloyaltycontent.level == 'Platinum') {
      this.levelClass = 'platinum'
      this.levelimgHref = '/img/20181213platinum.png'
      this.Tripledays = 3
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
      let { data: records } = await membership.getRecords(params)
      this.recordslist = records.records
      this.pageCannotSwitched = false
    },
    pageSwitching: function() {
      if (this.pagestate === this.currentPage) {
        return
      } else {
        this.getmoreRecords(this.currentPage, this.startTime, this.endTime)
        this.pagestate = this.currentPage
        this.limit = -1
      }
    }
  }
}
</script>
<style scoped>
@import 'http://netdna.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css';
@import 'https://cdn.bootcss.com/bootstrap-daterangepicker/2.1.25/daterangepicker.css';
.demo {
  position: relative;
  cursor: pointer;
}
.pagination {
  display: flex;
}
</style>
