<template>
  <section>
    <div id="rankbox">
      <div class="title-part">Your Perks</div>
      <div class="con">
        <div class="percent-circle percent-circle-right">
          <div 
            :style="{transform: 'rotate(' + degRight + 'deg)'}"
            class="right-content"/>
        </div>
        <div class="percent-circle percent-circle-left">
          <div 
            :style="{transform: 'rotate(' + degLeft + 'deg)'}"
            class="left-content"/>
        </div>
        <div class="text-circle">{{ pers_percentage }}%</div>
      </div>
    </div>
    <div id="consume-box">
      <div class="title-part">Loyalty Points</div>
      <div> 
        <input 
          id="config-demo" 
          type="text" 
          class="form-control">
        <i class="glyphicon glyphicon-calendar fa fa-calendar"/>
      </div>
      <ul id="consume">
        <li
          v-for=" (record,index) in recordslist.records " 
          :key=" index ">
          <div class="record_info">
            <div>{{ index }}</div>
            <div>{{ record.source }}</div>
            <div>{{ record.points }}</div>
            <div>{{ record.memo.merchant_name }}</div>
            <div
              class="see-more button--green"
              @click="toggle(index)">
              item</div>
          </div>
          <div 
            v-show="index==limit"
            class="consume-item">
            <ul>
              <li>store : {{ record.memo.merchant_name }}</li>
              <li>Order id : {{ record.memo.order_id }}</li>
              <li>price : ${{ record.value }}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="myloyaltycontent1.amount"
      :per-page="20"
      :disabled="pageCannotSwitched"
      align="center"
      @input="pageSwitching"/>
  </section>
</template>
<script>
import membership from '~/static/api/1.0/membership.js'
// import 'https://cdn.bootcss.com/bootstrap-daterangepicker/2.1.25/moment.js'
// import 'https://cdn.bootcss.com/bootstrap-daterangepicker/2.1.25/daterangepicker.js'
export default {
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
      recordslist: this.myloyaltycontent1
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
  },
  mounted() {
    var beginTimeStore = ''
    var endTimeStore = ''
    $('#config-demo').daterangepicker(
      {
        timePicker: true,
        timePicker24Hour: true,
        linkedCalendars: false,
        autoUpdateInput: false,
        locale: {
          format: 'YYYY-MM-DD',
          separator: ' ~ ',
          applyLabel: '应用',
          cancelLabel: '取消',
          resetLabel: '重置'
        }
      },
      function(start, end, label) {
        beginTimeStore = start
        endTimeStore = end
        console.log(this.startDate.format(this.locale.format))
        console.log(this.endDate.format(this.locale.format))
        if (!this.startDate) {
          this.element.val('')
        } else {
          this.element.val(
            this.startDate.format(this.locale.format) +
              this.locale.separator +
              this.endDate.format(this.locale.format)
          )
        }
      }
    )
  },
  methods: {
    toggle: function(index) {
      if (index == this.limit) {
        this.limit = -1
      } else {
        this.limit = index
      }
    },
    async getmoreRecords(page) {
      this.pageCannotSwitched = true
      var params = {}
      params.amount = 20
      params.offset = (page - 1) * 20
      let { data: records } = await membership.getRecords(params)
      this.recordslist = records.records
      this.pageCannotSwitched = false
    },
    pageSwitching: function() {
      if (this.pagestate === this.currentPage) {
        return
      } else {
        this.getmoreRecords(this.currentPage)
        this.pagestate = this.currentPage
      }
    }
  }
}
</script>
<style scoped>
@import 'http://netdna.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css';
@import 'https://cdn.bootcss.com/bootstrap-daterangepicker/2.1.25/daterangepicker.css';
</style>
