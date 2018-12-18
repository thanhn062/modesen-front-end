<template>
  <section class="container">
    <div class="accountsCon">
      <div class="logoCon"><img 
        src="/img/20180905footer_logo.svg"
        alt="logo"></div>
      <div class="desc">Premium Membership Gives<br>You More Benefits Shopping Worldwide</div>
      <div
        v-if="lsuid===''"
        class="accountsBox">
        <a
          :href="'http://127.0.0.1:8000'+'/accounts/signup/?next=' + $route.fullPath"
          target="_blank">
          <button
            class="btn btn-modesens"
            data-ga-click="loyalty-joinBtn--">{{ $t('loyalty.joinNow') }}</button>
        </a>
        <div class="loginBox">Already a member? <a
          v-b-modal.mdLogin
          data-ga-click="loyalty-loginBtn--"
          href="javascript:;">{{ $t('loyalty.loginNow') }}</a>
        </div>
        <Modal :lsuid="lsuid"/>
      </div>
    </div>
    <div class="benefitsCon">
      <div class="benefitsTitle">{{ $t('loyalty.benefitsTitle') }}</div>
      <!-- <div
        v-if="isPC"
        class="benefitsBox">
        <div class="benefitsEach">
          <div class="imgBox"><img
            src="/img/20181213triple.svg"
            alt=""></div>
          <div class="descBox">
            <div class="title">Triple Points Days</div>
            <div class="desc">Enjoy the benefit of earning triple points toward ModeSens premier status on the day(s) of your choice up to 3 times per year. On these days, you earn 3 points for every one dollar spent. That’s 3x the regular dollar-to-point ratio, getting you closer to the next ModeSens membership level even faster.</div>
          </div>
        </div>
        <div class="benefitsEach">
          <div class="imgBox"><img
            src="/img/20181213tip.svg"
            alt=""></div>
          <div class="descBox">
            <div class="title">Sale Alert Priority</div>
            <div class="desc">Be among the first to know about sales from all of your favorite stores. Our unique technology will automatically alert you of new offers in priority of your status level. Simply sign up for alerts on your favorite stores, designers and products.</div>
          </div>
        </div>
        <div class="benefitsEach">
          <div class="imgBox"><img
            src="/img/20181213bag.svg"
            alt=""></div>
          <div class="descBox">
            <div class="title">divmited & Exclusive Product Perks</div>
            <div class="desc">Enjoy the benefit of earning triple points toward ModeSens premier status on the day(s) of your choice up to 3 times per year. On these days, you earn 3 points for every one dollar spent. That’s 3x the regular dollar-to-point ratio, getting you closer to the next ModeSens membership level even faster.</div>
          </div>
        </div>
        <div class="benefitsEach">
          <div class="imgBox"><img
            src="/img/20181213logo-red.svg"
            alt=""></div>
          <div class="descBox">
            <div class="title">Dedicated VIP Service</div>
            <div class="desc">This service allows you to receive shopping assistance from an individual that’s with you every step of the way. They’ll help in any area across all of our partner stores. From finding products to placing orders and beyond.</div>
          </div>
        </div>
      </div> -->
      <div
        class="swiper-container">
        <div class="swiper-wrapper">
          <div
            v-for="num in benefits"
            :key="num"
            class="swiper-slide">
            <div class="imgBox"><img
              :src="'/img/20181213benefits-' + num + '.svg'"
              alt=""></div>
            <div class="descBox">
              <div class="title">{{ $t('loyalty.bfTitle' + num) }}</div>
              <div class="desc">{{ $t('loyalty.bfdesc' + num) }}</div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination swiper-p5"/>
      </div>
    </div>
    <div class="levelCon">
      <div class="title">{{ $t('loyalty.levelTitle') }}</div>
      <div class="arrowBox">
        <img src="/img/20180905overlay_right_arrow_b.svg">
        <span>Swap Right</span>
      </div>
      <div class="levelBox">
        <div class="levelWrap">
          <div class="imgBox-l">
            <div class="levelEach level-platinum">
              <span>Platinum</span><br>
              <span>{{ platinumNum }}</span>
            </div>
            <div class="levelEach level-gold">
              <span>Gold</span><br>
              <span>{{ goldNum }}</span>
            </div>
            <div class="levelEach level-silver">
              <span>Silver</span><br>
              <span>{{ silverNum }}</span>
            </div>
            <div class="levelEach level-bronze">
              <span>Bronze</span><br>
              <span>{{ bronzeNum }}</span>
            </div>
          </div>
          <div class="levelKind">
            <span>Priority Sale Alert</span>
            <div class="levelEach level-platinum">
              <span>First Priority</span>
            </div>
            <div class="levelEach level-gold">
              <span>Second Priority</span>
            </div>
            <div class="levelEach level-silver">
              <span>Third Priority</span>
            </div>
            <div class="levelEach level-bronze">
              <span>Fourth Priority</span>
            </div>
          </div>
          <div class="levelKind">
            <span>Maximum Wanted Products</span>
            <div class="levelEach level-platinum">
              <span>Unlimited</span>
            </div>
            <div class="levelEach level-gold">
              <span><span>1,000</span></span>
            </div>
            <div class="levelEach level-silver">
              <span>50</span>
            </div>
            <div class="levelEach level-bronze">
              <span><span>1,000</span></span>
            </div>
          </div>
          <div class="levelKind">
            <span>ModeSens Protection </span>
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
            <span>Triple Points Days</span>
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
            <span>Early Sale Access</span>
            <div class="levelEach level-platinum">
              <i/>
            </div>
            <div class="levelEach level-gold">
              <i/>
            </div>
          </div>
          <div class="levelKind">
            <span>Dedicated VIP Service</span>
            <div class="levelEach level-platinum">
              <i/>
            </div>
          </div>
          <div class="levelKind">
            <span> Limited Products</span>
            <div class="levelEach level-platinum">
              <i/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="earnCon">
      <div class="title">{{ $t('loyalty.earnTitle') }}</div>
      <div class="desc">{{ $t('loyalty.earnDesc') }}</div>
      <div class="earnBox">
        <div class="row">
          <div class="col-md-3 col-xs-12 earnEach">
            <span>1,000</span><br><span>{{ $t('loyalty.Points') }}</span><br><span>{{ $t('loyalty.browserInstall') }}</span><br><span>{{ $t('loyalty.browserInstall2') }}</span>
          </div>
          <div class="col-md-3 col-xs-12 earnEach">
            <span>1,000</span><br><span>{{ $t('loyalty.Points') }}</span><br><span>{{ $t('loyalty.downloadApp') }}</span><br><span>{{ $t('loyalty.oneTime') }}</span>
          </div>
          <div class="col-md-3 col-xs-12 earnEach">
            <span>100</span><br><span>{{ $t('loyalty.Points') }}</span><br><span>{{ $t('loyalty.saveFilter') }}</span><br><span>{{ $t('loyalty.oneTime') }}</span>
          </div>
          <div class="col-md-3 col-xs-12 earnEach">
            <span>100</span><br><span>{{ $t('loyalty.Points') }}</span><br><span>{{ $t('loyalty.followDesigner') }}</span><br><span>{{ $t('loyalty.oneTime') }}</span>
          </div>
          <div class="col-md-3 col-xs-12 earnEach">
            <span>100</span><br><span>{{ $t('loyalty.Points') }}</span><br><span>{{ $t('loyalty.createPrdAlert') }}</span><br><span>{{ $t('loyalty.oneTime') }}</span>
          </div>
          <div class="col-md-3 col-xs-12 earnEach">
            <span>100</span><br><span>{{ $t('loyalty.Points') }}</span><br><span>{{ $t('loyalty.uploadLook') }}</span>
          </div>
          <div class="col-md-3 col-xs-12 earnEach">
            <span>10</span><br><span>{{ $t('loyalty.Points') }}</span><br><span>{{ $t('loyalty.dailyLogin') }}</span><br><span>{{ $t('loyalty.websiteOrApp') }}</span>
          </div>
          <div class="col-md-3 col-xs-12 earnEach">
            <span>1</span><br><span>{{ $t('loyalty.Points') }}</span><br><span>{{ $t('loyalty.likeALook') }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="questionsCon">
      <div class="title">{{ $t('loyalty.questionTitle') }}</div>
      <div class="questionsBox">
        <div
          v-for="(answer,index) in answers"
          :key="index"
          class="questionBox">
          <div
            class="question"
            @click="questionClick(index)">
            <span>{{ $t('loyalty.question'+(index+1)) }}</span>
            <img
              src="/img/20181214slidedown.svg"
              alt="">
          </div>
          <div
            v-if="indexQt===index"
            class="answers">
            <div
              v-if="index===1"
              class="answer">
              {{ $t('loyalty.answer2_1') }}<a
                :href="'http://127.0.0.1:8000'+'/accounts/signup/?next='+$route.fullPath"
                target="_blank">{{ $t('loyalty.answer2_2') }}</a>
            </div>
            <div
              v-else-if="index===14"
              class="answer">
              {{ $t('loyalty.answer15_1') }}<a
                :href="'http://127.0.0.1:8000'+'/shopping-assistant/'"
                target="_blank">{{ $t('loyalty.answer15_2') }}</a>
            </div>
            <div
              v-for="(a, aindex) in answer"
              v-else
              :key="aindex"
              class="answer">
              {{ $t('loyalty.answer'+(index+1)+'_'+(aindex+1)) }}
              <div v-if="typeof(a)==='object'">
                <div
                  v-for="(num,bindex) in a"
                  :key="bindex">
                  &nbsp;&nbsp;&nbsp;&nbsp;{{ $t('loyalty.answer'+(index+1)+'_'+(aindex+1)+'_'+(bindex+1)) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Modal from '~/components/Modal.vue'
import membership from '~/static/api/1.0/membership.js'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  components: {
    Modal
  },
  data() {
    return {
      level: '',
      bronzeNum: '<20K',
      silverNum: '20K-50k',
      goldNum: '50k-100k',
      platinumNum: '>100k',
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
        [1],
        [1],
        [1],
        [1],
        [1],
        [1]
      ]
    }
  },
  asyncData({ query }) {
    return { lsuid: query.lsuid || '' }
  },
  created() {
    if (this.$route.query.lsuid) {
      this.getLevelInfo()
    }
  },
  mounted() {
    if ($(window).width() < 1200) {
      this.isPC = false
      var banner_swiper_5 = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-p5',
          clickable: true
        },
        autoplay: true,
        speed: 1000,
        loop: true,
        initialSlide: 1
      })
    }
    // $('#banner-swiper_5')
    //   .mouseover(function() {
    //     banner_swiper_5.stopAutoplay()
    //   })
    //   .mouseout(function() {
    //     banner_swiper_5.startAutoplay()
    //   })
  },
  methods: {
    async getLevelInfo() {
      var params = {}
      params.level = true
      params.lsuid = this.$route.query.lsuid
      let {
        data: { level }
      } = await membership.getProfile(params)
      this.level = level.level
      $('.levelEach')
        .not($(`.level-${level.level.toLowerCase()}`))
        .addClass('level-gray')
    },
    questionClick(index) {
      if (this.indexQt === index) {
        this.indexQt = -1
        $($('.question img')[index]).css('transform', 'rotate(180deg)')
        return
      }
      this.indexQt = index
      $($('.question img')[index]).css('transform', 'rotate(0deg)')
    },
    joinnow(url) {
      window.open(url, '_blank')
    }
  }
}
</script>
<style lang="less">
@import '../assets/css/loyalty.less';
</style>
