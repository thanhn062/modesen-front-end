<template>
  <section>
    <div class="membershippage">
      <div class="userInfoBox">
        <div class="userInfoinnerBox">
          <div class="userinfo">
            <img 
              :src="lsuser.icon" 
              alt="">
            <div class="info">
              <div class="user_name">{{ lsuser.username }}</div>
              <div class="user_bio">{{ lsuser.bio }}</div>
              <div class="user_words">{{ lsuser.words }}</div>
            </div>
          </div>
          <div class="levelcard">
            <div class="card">
              <img
                v-if="level.level==='Bronze'" 
                src="/img/20181213bronzecard.svg"
                alt="">
              <img
                v-if="level.level==='Silver'" 
                src="/img/20181213silvercard.svg"
                alt="">
              <img
                v-if="level.level==='Gold'" 
                src="/img/20181213goldcard.svg"
                alt="">
              <img
                v-if="level.level==='Platinum'" 
                src="/img/20181213platinumcard.svg"
                alt="">
              <div class="cardinfo keepLeft">
                <div class="userStart">
                  <div
                    v-if="lsuser.first_name !== '' || lsuser.last_name !== ''"
                    class="name">{{ lsuser.first_name }} {{ lsuser.last_name }}</div>
                  <div
                    v-else
                    class="name">{{ lsuser.username }}</div>
                </div>
                <div class="currentLevel">{{ $t('accountLoyalty.'+level.level.toUpperCase()) }}</div>
                <div class="userEnd">
                  <a
                    :href="BASE_URL+'/loyalty/'"
                    data-ga-click="accountLoyalty-card--"
                    target="_blank">
                    {{ $t('accountLoyalty.memberendTimgcard') }} {{ level.end_date }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-content container">
        <b-tabs
          vertical>
          <b-tab
            :title="$t('accountLoyalty.account_overview')" 
            active>
            <div class="page-right ">
              <keep-alive>
                <myloyalty 
                  :myloyaltycontent="level"
                  :myloyaltycontent1="records.records"/>
              </keep-alive>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </section>
</template>
<script>
// import $ from 'jquery'
import axios from '~/plugins/axios'
import membership from '~/static/api/1.0/membership.js'
import myloyalty from '~/components/loyalty/myloyalty.vue'
export default {
  components: {
    myloyalty
  },
  data() {
    return {
      limit: -1,
      //当前显示的页面
      currentPage: 1
    }
  },
  head: {
    title: 'membership'
  },
  async asyncData({ app, route, $axios }) {
    var params = {}
    params.level = true
    var token = route.query.otoken
    app.$cookies.set('token', token)
    let { lsuser, level } = await $axios.post('/accounts/profile/get/', params)
    var recordsparams = {}
    recordsparams.offset = 0
    recordsparams.amount = 10
    let records = await $axios.post('/loyalty/records/', recordsparams)
    return {
      lsuser,
      level,
      records
    }
  },
  computed: {}
}
</script>
<style lang="less">
@import '../../assets/css/account/loyalty.less';
</style>
