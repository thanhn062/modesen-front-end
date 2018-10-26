<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Welcome back!</h2>
          <form 
            method="post"
            @submit.prevent="login">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  v-model="email"
                  type="email"
                  class="input"
                  name="email"
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  v-model="password"
                  type="password"
                  class="input"
                  name="password"
                >
              </div>
            </div>
            <div class="control">
              <button 
                type="submit"
                class="button is-dark is-fullwidth">Log In</button>
            </div>
          </form>
          <div 
            class="has-text-centered"
            style="margin-top: 20px">
            <p>
              Don't have an account? <nuxt-link to="/register">Register</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import qs from 'qs'
import account from '~/static/api/1.0/account.js'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
      access_token: '',
      token_type: ''
    }
  },
  head() {
    return {
      Authorization: this.token_type + ' ' + this.access_token
    }
  },
  methods: {
    async login() {
      console.log(this)
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
        console.log(access_token, token_type)
        this.$store.commit('SET_TOKEN', token_type + ' ' + access_token)
        headers.Authorization = token_type + ' ' + access_token
        this.access_token = access_token
        this.token_type = token_type
        console.log(this.$route.path)
        redirect({ path: '/about/' })
      } catch (e) {
        this.error = e.message
      }
    }
  }
}
</script>
