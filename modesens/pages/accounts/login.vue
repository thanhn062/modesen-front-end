<template>
  <section>
    <div>
      <nuxt-link to="/"><img src="https://mds0.com/static/img/20181008newlogosub-zh.svg"></nuxt-link>
    </div>
    <b-form @submit="login">
      <b-form-input
        v-model="email"
        type="email"
        placeholder="Enter your email"
      />
      <b-form-input
        v-model="password"
        type="password"
        placeholder="Enter your password"
      />
      <b-form-checkbox >Remember me</b-form-checkbox>
      <b-button
        class="ga-accounts-login-login-222"
        type="submit">Log In</b-button>
      <nuxt-link to="/accounts/password/reset/">Forgot Password?</nuxt-link>
      <label>Not yet a member?</label>
      <nuxt-link to="/accounts/signup/">Sign Up</nuxt-link>
    </b-form>
  </section>
</template>

<script>
import { setToken } from '~/static/utils/token.js'
export default {
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
