<template>
  <section class="container login-container">
    <div class="logo-con">
      <a
        href="/"
        target="_blank"><img
          v-lazy="$i18n.locale==='zh' ? gconfig.LOGO_ASSISTRANT_ZH : gconfig.LOGO_ASSISTRANT_EN"
          alt=""></a>
    </div>
    <b-form
      class="login-form"
      @submit="login">
      <b-form-input
        v-model="email"
        :placeholder="$t('common.emailaddress')"
        type="email"
        required/>
      <b-form-input
        v-model="password"
        :placeholder="$t('common.Password')"
        type="password"
        required/>
      <div class="remember-con">
        <input
          id="login-sex"
          type="checkbox">
        <label for="login-sex">{{ $t('common.Rememberme') }}</label>
      </div>
      <b-button
        variant="primary"
        type="submit"
        title="Sign in to love item, build your closet, and get updates on your likes">{{ $t('common.Login') }}</b-button>
      <div class="forgotpw">
        <a
          to="/accounts/password/reset/"
          target="_blank">{{ $t('common.ForgotPassword') }}</a>
      </div>
      <div class="sign-con">
        <label>Not yet a member?</label><br>
        <a
          class="btn btn-default"
          href="/accounts/signup/"
          target="_blank">Sign Up</a>
      </div>
    </b-form>
    <div class="loginwith-con">
      <label>{{ $t('common.Loginwith') }}</label><br>
      <img
        v-lazy="'/img/login-icon/icon-weixin.svg'"
        alt="">
    </div>
  </section>
</template>

<script>
export default {
  layout: 'noframe',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login(evt) {
      evt.preventDefault()
      let data = new Object()
      data.client_id = process.env.client_id
      data.client_secret = process.env.client_secret
      data.grant_type = 'password'
      data.username = this.email
      data.password = this.password
      let obj = await this.$axios.post('/o/token/', data)
      if (obj.access_token) {
        this.$cookies.set(this.gconfig.ACCESS_TOKEN, obj.access_token)
        this.$store.dispatch('getLsuser', this)
        window.parent.open(this.$route.query.next, '_self')
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/accounts/login.less';
</style>
