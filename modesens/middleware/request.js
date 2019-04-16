import Vue from 'vue'
import axios from 'axios';
import { gconfig } from '~/assets/js/gconfig.js'

export default function({ store, req, app }) {
  console.log('middleware----11111111111111111', req.headers);
  // 获取cookie然后拆成键值对
  let cookiesArr = req.headers.cookie.split(';');
  let cookies = {}
  cookiesArr.map(cookieStr => {
    let cookieAry = cookieStr.split('=')
    cookies[cookieAry[0].trim()] = cookieAry[1].trim()
  })
  let token = cookies[gconfig.ACCESS_TOKEN]
  let lsuid = cookies[gconfig.LSUID]

  let reqAry = []
  if (!store.state.request) {
    reqAry.push(app.$axios.get('/request_context/', {params: {}, async: false}))
  }
  if (!store.state.countries) {
    let data = {}
     data.secretkey = process.env.secretKey
     reqAry.push(app.$axios.post('/config/', data, {async: false}))
  }
  if (token && lsuid) {
    store.commit('login')
    if (!store.state.lsuser) {
      reqAry.push(app.$axios.post('/accounts/profile/get/', {}, {async: false}))
    }
  } else {
    app.$cookies.remove(gconfig.SESSIONID)
    store.commit('logout')
  }
  return axios.all(reqAry)
    .then(axios.spread((rerequestRes, countriesRes, lsuserRes) => {
      // request_context
      store.commit('saveRequest', rerequestRes)
      Vue.prototype.ISWECHATLITE = rerequestRes.ISWECHATLITE;
      app.$cookies.set('refinfo', rerequestRes.REFINFO)
      app.$cookies.set('refdate', rerequestRes.REFDATE)
      // countries
      store.commit('saveCountries', countriesRes.COUNTRIES)
      // lsuser
      store.commit('setLsuser', lsuserRes.lsuser)
    }))
    .catch(e => {
      console.log(e)
    })
}