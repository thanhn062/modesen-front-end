<template>
  <section class="container">
    <div class="accountsCon">
      <div class="logoCon"><img 
        src="/img/20180905footer_logo.svg"
        alt="logo"></div>
      <div class="desc">Premium Membership Gives<br>You More Benefits Shopping Worldwide</div>
      <div
        v-if="isNotLogin"
        class="accountsBox">
        <div>
          <button class="btn btn-modesens">JOIN NOW</button>
        </div>
        <div class="loginBox">Already a member? <a
          v-b-modal.mdLogin
          href="javascript:;">Login Now</a></div>
      </div>
    </div>
    <div class="benefitsCon">
      <div class="benefitsTitle">MEMBERSHIP BENEFITS</div>
      <div class="benefitsBox">
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
      </div>
    </div>
    <div class="levelCon">
      <div class="title">MEMBERSHIP LEVELS</div>
      <div class="levelBox">
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
            <span>silver</span><br>
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
            <span>100</span>
          </div>
          <div class="levelEach level-silver">
            <span>50</span>
          </div>
          <div class="levelEach level-bronze">
            <span>10</span>
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
    <div>
      <div>SHOP-JOIN-EARN</div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isNotLogin: true,
      bronzeNum: '<20K',
      silverNum: '20K-50k',
      goldNum: '50k-100k',
      platinumNum: '>100k'
    }
  }
}
</script>
<style lang="less">
@import '../../assets/css/membership/introduction.less';
</style>
