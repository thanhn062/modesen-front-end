<template>
  <section class="container loyalty-con">
    <div class="accountsCon">
      <div class="logoCon"><img
        v-lazy="'/img/20180905footer_logo.svg'"
        alt=""></div>
      <h1 class="desc">{{ $t('loyalty.desc1') }}<br>{{ $t('loyalty.desc2') }}</h1>
      <div
        v-if="!$store.state.login_status"
        class="accountsBox">
        <a href="/accounts/signup/?next=/loyalty/">
          <button
            class="btn btn-modesens"
            data-ga-click="loyalty-joinBtn--">{{ $t('loyalty.joinNow') }}</button>
        </a>
        <div class="loginBox login_btn">{{ $t('loyalty.member') }}<a
          data-ga-click="loyalty-loginBtn--"
          href="javascript:;"
          @click="openloginmodal">{{ $t('loyalty.loginNow') }}</a>
        </div>
      </div>
      <div
        v-else
        class="accountsBox">
        <nuxt-link to="/account/loyalty/?tab=loyalty">
          <button
            class="btn btn-modesens"
            data-ga-click="loyalty-ViewMyAccount--">{{ $t('loyalty.ViewMyAccount') }}</button>
        </nuxt-link>
      </div>
    </div>
    <div
      id="benefitsCon"
      class="benefitsCon">
      <div class="benefitsTitle">{{ $t('loyalty.benefitsTitle') }}</div>
      <div
        class="swiper-container">
        <div class="swiper-wrapper">
          <div
            v-for="num in benefits"
            :key="num"
            class="swiper-slide">
            <div class="imgBox"><img
              v-lazy="'/img/20181213benefits-' + num + '.png'"
              alt=""></div>
            <div class="descBox">
              <div class="title">{{ $t('loyalty.bfTitle' + num) }}</div>
              <div class="desc">{{ $t('loyalty.bfdesc' + num) }}</div>
              <!-- <a href="">{{ $t('loyalty.MoreDetails') }}</a> -->
            </div>
          </div>
        </div>
        <div class="swiper-pagination swiper-p5"/>
      </div>
    </div>
    <div class="levelCon">
      <div class="title">{{ $t('loyalty.levelTitle') }}</div>
      <div class="arrowBox">
        <img
          v-lazy="'/img/20180905overlay_right_arrow_b.svg'"
          alt="">
        <span>{{ $t('loyalty.SwapRight') }}</span>
      </div>
      <div class="levelBox">
        <div class="levelWrap">
          <div class="imgBox-l">
            <div class="levelEach level-platinum">
              <span>{{ $t('loyalty.Platinum') }}</span><br>
              <span>{{ platinumNum }}</span><br>
              <span>{{ $t('loyalty.Points') }}</span>
            </div>
            <div class="levelEach level-gold">
              <span>{{ $t('loyalty.Gold') }}</span><br>
              <span>{{ goldNum }}</span><br>
              <span>{{ $t('loyalty.Points') }}</span>
            </div>
            <div class="levelEach level-silver">
              <span>{{ $t('loyalty.Silver') }}</span><br>
              <span>{{ silverNum }}</span><br>
              <span>{{ $t('loyalty.Points') }}</span>
            </div>
            <div class="levelEach level-bronze">
              <span>{{ $t('loyalty.Bronze') }}</span><br>
              <span>{{ bronzeNum }}</span><br>
              <span>{{ $t('loyalty.Points') }}</span>
            </div>
          </div>
          <div class="levelKind">
            <span>{{ $t('loyalty.PrioritySaleAlert') }}</span>
            <div class="levelEach level-platinum">
              <span>{{ $t('loyalty.FirstPriority') }}</span>
            </div>
            <div class="levelEach level-gold">
              <span>{{ $t('loyalty.SecondPriority') }}</span>
            </div>
            <div class="levelEach level-silver">
              <span>{{ $t('loyalty.ThirdPriority') }}</span>
            </div>
            <div class="levelEach level-bronze">
              <span>{{ $t('loyalty.FourthPriority') }}</span>
            </div>
          </div>
          <div class="levelKind">
            <span>{{ $t('loyalty.MaxProducts') }}</span>
            <div class="levelEach level-platinum">
              <span>{{ $t('loyalty.Unlimited') }}</span>
            </div>
            <div class="levelEach level-gold">
              <span><span>10,000</span></span>
            </div>
            <div class="levelEach level-silver">
              <span>1,000</span>
            </div>
            <div class="levelEach level-bronze">
              <span><span>100</span></span>
            </div>
          </div>
          <div class="levelKind">
            <span>{{ $t('loyalty.ModeSensProtection') }}</span>
            <div class="levelEach level-platinum">
              <i/>
            </div>
            <div class="levelEach level-gold">
              <i/>
            </div>
            <div class="levelEach level-silver">
              <i/>
            </div>
            <div class="levelEach level-bronze">
              <i/>
            </div>
          </div>
          <div class="levelKind">
            <span>{{ $t('loyalty.TriplePointsDays') }}</span>
            <div class="levelEach level-platinum">
              <span>3</span>
            </div>
            <div class="levelEach level-gold">
              <span>2</span>
            </div>
            <div class="levelEach level-silver">
              <span>1</span>
            </div>
          </div>
          <div class="levelKind">
            <span>{{ $t('loyalty.EarlySaleAccess') }}</span>
            <div class="levelEach level-platinum">
              <i/>
            </div>
            <div class="levelEach level-gold">
              <i/>
            </div>
          </div>
          <div class="levelKind">
            <span>{{ $t('loyalty.DedicatedVIPService') }}</span>
            <div class="levelEach level-platinum">
              <i/>
            </div>
          </div>
          <div class="levelKind">
            <span>{{ $t('loyalty.LimitedProducts') }}</span>
            <div class="levelEach level-platinum">
              <i/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="earnCon"
      class="earnCon">
      <div class="title">{{ $t('loyalty.earnTitle') }}</div>
      <div class="desc">{{ $t('loyalty.earnDesc') }}</div>
      <div class="earnBox">
        <div class="row">
          <div class="col-md-3 col-12 earnEach">
            <span>1,000</span><br><span>{{ $t('loyalty.Points') }}</span><br><span>{{ $t('loyalty.browserInstall') }}</span><br><span>{{ $t('loyalty.browserInstall2') }}</span>
          </div>
          <div class="col-md-3 col-12 earnEach">
            <span>1,000</span><br><span>{{ $t('loyalty.Points') }}</span><br><span>{{ $t('loyalty.downloadApp') }}</span><br><span>{{ $t('loyalty.oneTime') }}</span>
          </div>
          <div class="col-md-3 col-12 earnEach">
            <span>100</span><br><span>{{ $t('loyalty.Points') }}</span><br><span>{{ $t('loyalty.saveFilter') }}</span><br><span>{{ $t('loyalty.oneTime') }}</span>
          </div>
          <div class="col-md-3 col-12 earnEach">
            <span>100</span><br><span>{{ $t('loyalty.Points') }}</span><br><span>{{ $t('loyalty.followDesigner') }}</span><br><span>{{ $t('loyalty.oneTime') }}</span>
          </div>
          <div class="col-md-3 col-12 earnEach">
            <span>100</span><br><span>{{ $t('loyalty.Points') }}</span><br><span>{{ $t('loyalty.createPrdAlert') }}</span><br><span>{{ $t('loyalty.oneTime') }}</span>
          </div>
          <div class="col-md-3 col-12 earnEach">
            <span>100</span><br><span>{{ $t('loyalty.Points') }}</span><br><span>{{ $t('loyalty.uploadLook') }}</span>
          </div>
          <div class="col-md-3 col-12 earnEach">
            <span>10</span><br><span>{{ $t('loyalty.Points') }}</span><br><span>{{ $t('loyalty.dailyLogin') }}</span><br><span>{{ $t('loyalty.websiteOrApp') }}</span>
          </div>
          <div class="col-md-3 col-12 earnEach">
            <span>1</span><br><span>{{ $t('loyalty.Points') }}</span><br><span>{{ $t('loyalty.likeALook') }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="questionsCon">
      <div class="title">{{ $t('loyalty.questionTitle') }}</div>
      <div
        class="questionsBox"
        role="tablist">
        <b-card
          v-for="(answer,index) in answers"
          :key="index"
          class="questionBox"
          no-body>
          <div
            class="d-flex justify-content-between align-items-center question"
            role="tab"
            @click="openAnswer(index)">
            <span>{{ $t('loyalty.question'+(index+1)) }}</span>
            <img 
              v-lazy="'/img/20181214slidedown.svg'"
              alt="">
          </div>
          <b-collapse
            :id="`answer-${index}`"
            class="answers"
            accordion="my-accordion">
            <b-card-body>
              <div v-if="index===1">
                <div v-if="$store.state.login_status">{{ $t('loyalty.answer2_1_1') }}
                  <nuxt-link
                    to="/account/loyalty/"
                    data-ga-click="loyalty-questionAnswer--2">{{ $t('loyalty.answer2_2_1') }}</nuxt-link>
                </div>
                <div v-else>{{ $t('loyalty.answer2_1') }}
                  <a
                    href="/accounts/signup/?next=/loyalty/"
                    data-ga-click="loyalty-questionAnswer--2">{{ $t('loyalty.answer2_2') }}</a>
                </div>
              </div>
              <div v-else-if="index===14">
                {{ $t('loyalty.answer15_1') }}<a
                  href="/shopping-assistant/"
                  target="_blank"
                  data-ga-click="loyalty-questionAnswer--15">{{ $t('loyalty.answer15_2') }}</a>
              </div>
              <div v-else-if="index===19">
                {{ $t('loyalty.answer20_1') }}<a
                  href="/invite/"
                  target="_blank"
                  data-ga-click="loyalty-questionAnswer--20">{{ $t('loyalty.answer20_2') }}</a>{{ $t('loyalty.answer20_3') }}
              </div>
              <div v-else-if="index===23">
                {{ $t('loyalty.answer24_1') }} <a
                  href="mailto:info@modesens.com"
                  data-ga-click="loyalty-questionAnswer--24">info@modesens.com.</a>
              </div>
              <div
                v-for="(a, aindex) in answer"
                v-else
                :key="aindex">
                {{ $t('loyalty.answer'+(index+1)+'_'+(aindex+1)) }}
                <div v-if="typeof(a)==='object'">
                  <div
                    v-for="(num,bindex) in a"
                    :key="bindex">
                    &nbsp;&nbsp;&nbsp;&nbsp;{{ $t('loyalty.answer'+(index+1)+'_'+(aindex+1)+'_'+(bindex+1)) }}
                  </div>
                </div>
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </section>
</template>
<script>
import { wxlogin } from '~/assets/js/utils/utils.js'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  head() {
    let headobj = {}
    let H1 = this.$t('loyalty.desc1') + ' ' + this.$t('loyalty.desc2')
    let TITLE = this.$t('loyalty.loyaltyTitle') + ' | ModeSens'
    let request = this.$store.state.request
    if (request) {
      let MS_LOGO = request.STATIC_DOMAIN_IMG + this.gconfig.MS_LOGONEW
      // let url = request.
      headobj = this.commonfn.creatMetaTitle(H1, TITLE, MS_LOGO, 'https://test.modesens.com/loyalty/')
    }
    return headobj
  },
  // head() {
  //   link: [
  //     { rel: 'preload', type: 'text/css', href: '~/assets/css/loyalty.less' }
  //   ]
  // },
  data() {
    return {
      level: '',
      bronzeNum: '0-19,999',
      silverNum: '20,000-49,999',
      goldNum: '50,000-99,999',
      platinumNum: '100,000+',
      indexQt: -1,
      isPC: true,
      nextUrl: '/',
      benefits: [1, 2, 3, 4],
      answers: [
        [1],
        [1],
        [1],
        [1],
        [1],
        [1, [1, 2, 3, 4, 5, 6, 7, 8, 9], 3],
        [1],
        [1, 2],
        [1, 2],
        [1, 2],
        [1, 2],
        [1, 2],
        [1, 2],
        [1, 2],
        [1],
        [1],
        [1],
        [1],
        [1],
        [1, 2, 3],
        [1],
        [1],
        [1],
        [1],
        [1]
      ]
    }
  },
  created() {
    // if (this.$store.state.login_status) {
    //   this.getLevelInfo()
    // }
  },
  // mounted() {
  //   if ($(window).width() < 1200) {
  //     this.isPC = false
  //     let banner_swiper_5 = new Swiper('.swiper-container', {
  //       pagination: {
  //         el: '.swiper-p5',
  //         clickable: true
  //       },
  //       autoplay: true,
  //       speed: 1000,
  //       loop: true,
  //       initialSlide: 0
  //     })
  //   }
  // },
  methods: {
    async getLevelInfo() {
      let params = {}
      params.level = true
      let { level } = await this.$axios.post('/accounts/profile/get/', params)
      if (level) {
        this.level = level.level
        $('.levelEach')
          .not($(`.level-${level.level.toLowerCase()}`))
          .addClass('level-gray')
      }
    },
    openAnswer(index) {
      this.$root.$emit('bv::toggle::collapse', `answer-${index}`)
    },
    questionClick(index) {
      if (this.indexQt === index) {
        this.indexQt = -1
        return
      }
      this.indexQt = index
      this.$ga.event('loyalty', 'question', 'click', index + 1)
    },
    openloginmodal() {
      let ua = window.navigator.userAgent.toLowerCase()
      if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        wxlogin(this.$route.fullPath)
      } else {
        this.$root.$emit('bv::show::modal', 'mdLogin')
      }
    }
  }
}
</script>
<style lang="less">
@import '../assets/css/loyalty.less';
</style>
