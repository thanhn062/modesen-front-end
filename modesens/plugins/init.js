import Vue from 'vue'

//引入公共变量和方法
import {gconfig} from '~/assets/js/gconfig.js'
import localStorage from '~/assets/js/utils/localStorage.js'
// Vue.prototype.gconfig = gconfig;
// Vue.prototype.$localStorage = localStorage;

export default function({ app, store }) {
  app.$localStorage = localStorage
  app.gconfig = gconfig

  let lsuser = localStorage.get(gconfig.USERINFO)
  Vue.prototype.login_status = false
  console.log(store.state.login_status)
  if (app.$cookies.get(gconfig.ACCESS_TOKEN) && lsuser) {
    store.commit('modifyLoginStatus')
    store.commit('setLsuser', JSON.parse(lsuser))
    Vue.prototype.login_status = true
    // Vue.prototype.lsuser = JSON.parse(lsuser)
    console.log(store.state.login_status)
  }
}