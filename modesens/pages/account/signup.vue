<template>
  <section>
    <h2>创建账号</h2>
    <div>请输入以下信息创建你的账户</div>
    <b-form>
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
      <b-button>注册</b-button>
    </b-form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      selected: 'first',
      options: [
        { text: '女士', value: 'first' },
        { text: '男士', value: 'second' }
      ]
    }
  }
}
</script>
