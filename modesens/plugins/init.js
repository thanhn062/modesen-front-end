import {gconfig} from '~/assets/js/gconfig.js'
import localStorage from '~/assets/js/utils/localStorage.js'
import Vue from 'vue'

export default function({ app, store }) {
  let lsuser = localStorage.get(gconfig.USERINFO)
  if (app.$cookies.get(gconfig.ACCESS_TOKEN) && lsuser) {
    store.commit('modifyLoginStatus')
    store.commit('setLsuser', JSON.parse(lsuser))
  }
}