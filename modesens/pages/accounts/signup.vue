<template>
  <section>
    <h2>创建账号</h2>
    <div>请输入以下信息创建你的账户</div>
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
      <b-form-group
        label="性别选择：">
        <b-form-radio-group
          v-model="selected"
          :options="options"/>
      </b-form-group>
      <b-button type="submit">注册</b-button>
    </b-form>
  </section>
</template>
<script>
import account from '~/static/api/1.0/account.js'
export default {
  data() {
    return {
      email: '',
      password: '',
      selected: 'f',
      options: [{ text: '女士', value: 'f' }, { text: '男士', value: 'm' }]
    }
  },
  methods: {
    async login(evt) {
      evt.preventDefault()
      let data = new Object()
      data.client_id = this.$auth.options.client_id
      data.client_secret = this.$auth.options.client_secret
      data.grant_type = 'password'
      data.username = 'MSRG-' + this.email
      data.password = this.password
      data.gender = this.selected
      try {
        let {
          data: { access_token, token_type }
        } = await account.login(data)
        alert('注册成功')
      } catch (e) {
        this.error = e.message
      }
    }
  }
}
</script>
