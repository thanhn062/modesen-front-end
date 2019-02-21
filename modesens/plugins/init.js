import Vue from 'vue'
import {gconfig} from '~/assets/js/gconfig.js'
import localStorage from '~/assets/js/utils/localStorage.js'

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