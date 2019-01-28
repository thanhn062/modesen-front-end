<template>
  <section class="container login-container">
    <div class="logo-con">
      <nuxt-link
        to="/"
        target="_blank"><img :src="$i18n.locale==='zh' ? GLOBAL.LOGO_ASSISTRANT_ZH : GLOBAL.LOGO_ASSISTRANT_EN"></nuxt-link>
    </div>
    <b-form
      class="login-form"
      @submit="login">
      <b-form-input
        v-model="email"
        :placeholder="$t('Emailaddress')"
        type="email"
        required/>
      <b-form-input
        v-model="password"
        :placeholder="$t('Password')"
        type="password"
        required/>
      <div class="remember-con">
        <input
          id="login-sex"
          type="checkbox">
        <label for="login-sex">{{ $t('Rememberme') }}</label>
      </div>
      <b-button
        variant="primary"
        type="submit"
        title="Sign in to love item, build your closet, and get updates on your likes">{{ $t('LogIn') }}</b-button>
      <div class="forgotpw">
        <nuxt-link
          to="/accounts/password/reset/"
          target="_blank">{{ $t('ForgotPassword') }}</nuxt-link>
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
      <label>{{ $t('Loginwith') }}</label><br>
      <img src="https://mds0.com/static/img/login-icon/icon-weixin.svg">
    </div>
  </section>
</template>

<script>
import { setToken } from '~/static/utils/token.js'
export default {
  layout: 'noframe',
  data() {
    return {
      email: 'yinliyuan520@gmail.com',
      password: 'AAaa123456',
      error: ''
    }
  },
  methods: {
    async login(evt) {
      evt.preventDefault()
      let data = new Object()
      data.client_id = this.$auth.options.client_id
      data.client_secret = this.$auth.options.client_secret
      data.grant_type = 'password'
      data.username = this.email
      data.password = this.password
      try {
        let {
          data: { access_token, token_type }
        } = await this.$axios.post('/o/token/', data)
        console.log(3333)
        // this.$cookies.set('token', access_token)
        setToken(access_token)
        // let [, nextUrl] = [...window.location.href.match(/next=([^?&=#]+)/)]
        // console.log(window.location.href.match(/next=[^?&=#]+/))
        // console.log(decodeURIComponent(nextUrl))
        // window.parent.location.pathname = decodeURIComponent(nextUrl)
        // this.$router.replace('/about')
      } catch (e) {
        this.error = e.message
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/accounts/login.less';
</style>
