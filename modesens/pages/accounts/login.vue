<template>
  <section>
    <div>
      <nuxt-link to="/"><img
        :src="img_url+imglogo"
        alt="fff" ></nuxt-link>
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
import account from '~/static/api/1.0/account.js'
// import ga from '~/plugins/ga.js'
// import $ from 'jquery'
export default {
  data() {
    return {
      email: 'yinliyuan520@gmail.com',
      password: 'AAaa123456',
      error: '',
      img_url: 'https://mds0.com',
      imglogo: '/img/newlogosub-en.svg'
    }
  },
  methods: {
    async login(evt) {
      evt.preventDefault()
      // console.log($('div'))
      // this.$ga.event('accounts', 'login', 'login', 123)
      let data = new Object()
      data.client_id = this.$auth.options.client_id
      data.client_secret = this.$auth.options.client_secret
      data.grant_type = 'password'
      data.username = this.email
      data.password = this.password
      try {
        let {
          data: { access_token, token_type }
        } = await account.login(data)
        // this.$store.commit('SET_TOKEN', token_type + ' ' + access_token)
        this.$cookies.set('TOKEN', token_type + ' ' + access_token)
        // let [, nextUrl] = [...window.location.href.match(/next=([^?&=#]+)/)]
        // console.log(window.location.href.match(/next=[^?&=#]+/))
        // console.log(decodeURIComponent(nextUrl))
        // window.parent.location.pathname = decodeURIComponent(nextUrl)
        this.$router.replace('/about')
      } catch (e) {
        this.error = e.message
      }
    }
  }
}
</script>
