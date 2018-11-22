<template>
  <section>
    <div>
      <nuxt-link to="/"><img
        src="https://mds0.com/img/newlogosub-en.svg"
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
      <b-button type="submit">Log In</b-button>
      <nuxt-link to="/accounts/password/reset/">Forgot Password?</nuxt-link>
      <label>Not yet a member?</label>
      <nuxt-link to="/accounts/signup/">Sign Up</nuxt-link>
    </b-form>
  </section>
</template>

<script>
import account from '~/static/api/1.0/account.js'
import ga from '~/plugins/ga.js'
import qs from 'qs'
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
      // ga('send', 'event', 'accounts', 'Login', '')
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
        this.$store.commit('SET_TOKEN', token_type + ' ' + access_token)
        this.$cookies.set('TOKEN', token_type + ' ' + access_token)
        let [, nextUrl] = [...window.location.href.match(/next=([^?&=#]+)/)]
        console.log(window.location.href.match(/next=[^?&=#]+/))
        console.log(qs.stringify(nextUrl))
        // window.parent.location.pathname = qs.stringify(nextUrl)
        window.parent.location.pathname = '/about/'
        // this.$router.replace('/about')
      } catch (e) {
        this.error = e.message
      }
    }
  }
}
</script>
