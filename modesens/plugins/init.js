import {gconfig} from '~/assets/js/gconfig.js'
import localStorage from '~/assets/js/utils/localStorage.js'
import Vue from 'vue'

export default function({ app, store }) {
  console.log(11111, 'plugins-init.js')
  console.log(app)
  let lsuser = localStorage.get(gconfig.USERINFO)
  console.log(lsuser)
  if (app.$cookies.get(gconfig.ACCESS_TOKEN) && lsuser) {
    store.commit('modifyLoginStatus')
    store.commit('setLsuser', JSON.parse(lsuser))
  }
}