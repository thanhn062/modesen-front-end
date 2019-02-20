import {gconfig} from '~/assets/js/gconfig.js'
import localStorage from '~/assets/js/utils/localStorage.js'
import Vue from 'vue'

export default function({ app, store }) {
  let lsuser = localStorage.get(gconfig.USERINFO)
  Vue.prototype.login_status = false
  console.log(lsuser)
  if (app.$cookies.get(gconfig.ACCESS_TOKEN) && lsuser) {
    store.commit('modifyLoginStatus')
    store.commit('setLsuser', JSON.parse(lsuser))
    Vue.prototype.login_status = true
    Vue.prototype.lsuser = JSON.parse(lsuser)
    console.log(Vue.prototype.lsuser)
  }
}