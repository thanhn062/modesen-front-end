import axios from 'axios';
import qs from 'qs'
import Vue from 'vue';
import {gconfig} from '~/assets/js/gconfig.js'
import localStorage from '~/assets/js/utils/localStorage.js'

export const state = () => ({
  next_url: '/',
  login_status: false,
  mdLoginShow: false,
  lsuser: null,
  gender: 'f',   //f:women   m:men
  coupons: null,
  navHeadJson: null,
  rhints: {},//26个字母及#的搜索值,
  request: null,
  userLevel: null,
  deviceType: '',  //设备类型,
  countries: null, //国家,
  host: '',
  testTool: false,
  eventTimes: 0
})

export const mutations = {
  login(state) {
    state.login_status = true;
  },
  logout(state) {
    state.login_status = false;
    state.lsuser = null;
  },
  setLsuser(state, params) {
    state.lsuser = params;
  },
  setUserlevel(state, params) {
    state.userLevel = params;
  },
  setCoupons(state, params) {
    state.coupons = params;
  },
  saveNavHeadJson(state, params) {
    state.navHeadJson = params;
  },
  saveRHints(state, params) {
    state.rhints[params[0]] = params[1];
  },
  saveRequest(state, params) {
    state.request = params;
  },
  saveCountries(state, params) {
    state.countries = params;
  },
  setDeviceType(state, type) {
    state.deviceType = type
  },
  setHost(state, params) {
    state.host = 'https://' + params
  },
  setTestTool(state, params) {
    state.testTool = params
  },
  setClickTimes(state, num) {
    state.eventTimes = num
  }
}

export const actions = {
  nuxtServerInit({ commit, state, dispatch }, { req, app }) {
    // 获取cookie然后拆成键值对
    let token = app.$cookies.get(gconfig.ACCESS_TOKEN) || ''
    let lsuid = app.$cookies.get(gconfig.LSUID) || ''
    commit('setHost', req.headers.host)
    // if (req.headers.cookie) {
    //   let cookiesArr = req.headers.cookie.split(';');
    //   let cookies = {}
    //   cookiesArr.map(cookieStr => {
    //     let cookieAry = cookieStr.split('=')
    //     cookies[cookieAry[0].trim()] = cookieAry[1].trim()
    //   })
    //   token = cookies[gconfig.ACCESS_TOKEN]
    //   lsuid = cookies[gconfig.LSUID]
    // }

    let reqAry = []
    if (!state.request) {
      reqAry.push(app.$axios.get('/request_context/', {params: {}, async: false}))
    }
    if (!state.countries) {
      let data = {}
      data.secretkey = process.env.secretKey
      reqAry.push(app.$axios.post('/config/', data, {async: false}))
    }
    if (token && lsuid) {
      commit('login')
      if (!state.lsuser) {
        reqAry.push(app.$axios.post('/accounts/profile/get/', {}, {async: false}))
      }
    } else {
      app.$cookies.remove(gconfig.SESSIONID)
      commit('logout')
    }
    return axios.all(reqAry)
      .then(axios.spread((rerequestRes, countriesRes, lsuserRes) => {
        // request_context
        commit('saveRequest', rerequestRes)
        Vue.prototype.ISWECHATLITE = rerequestRes.ISWECHATLITE;
        app.$cookies.set('refinfo', rerequestRes.REFINFO)
        app.$cookies.set('refdate', rerequestRes.REFDATE)
        // countries
        commit('saveCountries', countriesRes.COUNTRIES)
        // lsuser
        if (lsuserRes) {
          commit('setLsuser', lsuserRes.lsuser)
        }
      }))
      .catch(e => {
        console.log(e)
      })
  }
}