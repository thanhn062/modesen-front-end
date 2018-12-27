<template>
  <section class="container">
    <div class="accountsCon">
      <div class="logoCon"><img 
        src="/img/20180905footer_logo.svg"
        alt="logo"></div>
      <div class="desc">{{ $t('loyalty.desc1') }}<br>{{ $t('loyalty.desc2') }}</div>
      <div
        v-if="lsuid===''"
        class="accountsBox">
        <a
          href="/accounts/signup/?next=/loyalty/"
          target="_blank">
          <button
            class="btn btn-modesens"
            data-ga-click="loyalty-joinBtn--">{{ $t('loyalty.joinNow') }}</button>
        </a>
        <div class="loginBox">{{ $t('loyalty.member') }}<a
          v-b-modal.mdLogin
          data-ga-click="loyalty-loginBtn--"
          href="javascript:;">{{ $t('loyalty.loginNow') }}</a>
        </div>
        <Modals :lsuid="lsuid"/>
      </div>
      <div
        v-else
        class="accountsBox">
        <a
          href="/account/loyalty/"
          target="_blank">
          <button
            class="btn btn-modesens"
            data-ga-click="loyalty-ViewMyAccount--">{{ $t('loyalty.ViewMyAccount') }}</button>
        </a>
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
              :src="'/img/20181213benefits-' + num + '.png'"
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
        <img src="/img/20180905overlay_right_arrow_b.svg">
        <span>{{ $t('loyalty.SwapRight') }}</span>
      </div>
      <div class="levelBox">
        <div class="levelWrap">
          <div class="imgBox-l">
            <div class="levelEach level-platinum">
              <span>{{ $t('loyalty.Platinum') }}</span><br>
              <span>{{ platinumNum }}</span>
            </div>
            <div class="levelEach level-gold">
              <span>{{ $t('loyalty.Gold') }}</span><br>
              <span>{{ goldNum }}</span>
            </div>
            <div class="levelEach level-silver">
              <span>{{ $t('loyalty.Silver') }}</span><br>
              <span>{{ silverNum }}</span>
            </div>
            <div class="levelEach level-bronze">
              <span>{{ $t('loyalty.Bronze') }}</span><br>
              <span>{{ bronzeNum }}</span>
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
              <span><span>100</span></span>
            </div>
            <div class="levelEach level-silver">
              <span>50</span>
            </div>
            <div class="levelEach level-bronze">
              <span><span>10</span></span>
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
      <div class="questionsBox">
        <div
          v-for="(answer,index) in answers"
          :key="index"
          class="questionBox">
          <div
            :id="`question-${index+1}`"
            class="question"
            @click="questionClick(index)">
            <span>{{ $t('loyalty.question'+(index+1)) }}</span>
            <img 
              :class="indexQt===index ? 'imgrotate' : ''"
              src="/img/20181214slidedown.svg"
              alt="">
          </div>
          <div
            v-if="indexQt===index"
            class="answers">
            <div
              v-if="index===1"
              class="answer">
              <div v-if="lsuid">{{ $t('loyalty.answer2_1_1') }}<a
                href="/account/loyalty/"
                target="_blank"
                data-ga-click="loyalty-questionAnswer--2">{{ $t('loyalty.answer2_2_1') }}</a></div>
              <div v-else>{{ $t('loyalty.answer2_1') }}<a
                href="/accounts/signup/?next=/loyalty/"
                target="_blank"
                data-ga-click="loyalty-questionAnswer--2">{{ $t('loyalty.answer2_2') }}</a></div>
            </div>
            <div
              v-else-if="index===14"
              class="answer">
              {{ $t('loyalty.answer15_1') }}<a
                href="/shopping-assistant/"
                target="_blank"
                data-ga-click="loyalty-questionAnswer--15">{{ $t('loyalty.answer15_2') }}</a>
            </div>
            <div
              v-else-if="index===19"
              class="answer">
              {{ $t('loyalty.answer20_1') }}<a
                href="/invite/"
                target="_blank"
                data-ga-click="loyalty-questionAnswer--20">{{ $t('loyalty.answer20_2') }}</a>{{ $t('loyalty.answer20_3') }}
            </div>
            <div
              v-else-if="index===23"
              class="answer">
              {{ $t('loyalty.answer24_1') }} <a
                href="mailto:info@modesens.com"
                data-ga-click="loyalty-questionAnswer--24">info@modesens.com.</a>
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
import Modals from '~/components/Modals.vue'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  components: {
    Modals
  },
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
  async asyncData({ app, query }) {
    let oToken = query.otoken
    if (oToken) {
      app.$cookies.set('token', oToken)
    }
    return { lsuid: oToken || '' }
  },
  mounted() {
    if (this.$route.query.otoken) {
      this.getLevelInfo()
    }
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
  },
  methods: {
    async getLevelInfo() {
      var params = {}
      params.level = true
      let { level } = await this.$axios.post('/accounts/profile/get/', params)
      if (level) {
        this.level = level.level
        $('.levelEach')
          .not($(`.level-${level.level.toLowerCase()}`))
          .addClass('level-gray')
      }
    },
    questionClick(index) {
      if (this.indexQt === index) {
        this.indexQt = -1
        return
      }
      this.indexQt = index
      this.$ga.event('loyalty', 'question', 'click', index + 1)
    }
  }
}
</script>
<style lang="less">
@import '../assets/css/loyalty.less';
</style>
