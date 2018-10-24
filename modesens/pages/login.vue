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
import account from '~/static/api/account.js'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login() {
      let data = new Object()
      data.client_id = 'cNO3k5SqBdKtbZFHCduXzHTX1u5pz29gDRa0uitF'
      data.client_secret =
        'quBIP7yZJ5ysiupbaDcLOLOVLlPup5EQ5eBjXEQDj8VtcqQiyWfeBowkb7cjS43XRDgf5NvRY5jOY3qhTfp299S6JvFjDXK96oyrUyJaxJB1TzoL1eJK6ky2hDkNmSdn'
      data.grant_type = 'password'
      data.username = this.email
      data.password = this.password
      try {
        let {
          data: { access_token }
        } = await account.login(data)
        console.log(access_token)
        redirect('/')
      } catch (e) {
        this.error = e.message
      }
    }
  }
}
</script>
