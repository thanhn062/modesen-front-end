import Vue from 'vue'
import {gconfig} from '~/assets/js/gconfig.js'
import localStorage from '~/assets/js/utils/localStorage.js'

export default function({ app, store }) {
  app.$localStorage = localStorage
  app.gconfig = gconfig

  let lsuser = localStorage.get(gconfig.USERINFO)
  if (app.$cookies.get(gconfig.ACCESS_TOKEN) && lsuser) {
    store.commit('modifyLoginStatus')
    store.commit('setLsuser', JSON.parse(lsuser))
  }
}