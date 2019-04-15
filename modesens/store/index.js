import axios from 'axios';
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
  countries: null //国家
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
  }
}

export const actions = {
  nuxtServerInit({ commit, state, dispatch }, { req, app }) {
    // console.log('nuxtServerInit--11111')
    // 获取cookie然后拆成键值对
    let cookiesArr = req.headers.cookie.split(';');
    let cookies = {}
    cookiesArr.map(cookieStr => {
      let cookieAry = cookieStr.split('=')
      cookies[cookieAry[0].trim()] = cookieAry[1].trim()
    })
    let token = cookies[gconfig.ACCESS_TOKEN]
    let lsuid = cookies[gconfig.LSUID]
    //设置axios的全局变量
    axios.baseURL = process.env.browserBaseURL + 'api/2.0/';  //请求根目录
    axios.defaults.headers['Authorization'] = 'Bearer ' + cookies[gconfig.ACCESS_TOKEN]; //获取cookie放在头部传到后端
    
    let reqAry = []
    if (!state.request) {
      reqAry.push(axios.get(`https://modesens.com/api/2.0/request_context/?secretkey=${process.env.secretKey}`))
    }
    if (!state.countries) {
      reqAry.push(axios.post('https://test.modesens.com/api/2.0/config/', {secretkey: process.env.secretKey}))
    }
    if (token && lsuid) {
      commit('login')
      if (!state.lsuser) {
        reqAry.push(axios.post('https://modesens.com/api/2.0/accounts/profile/get/'))
      }
    } else {
      app.$cookies.remove(gconfig.SESSIONID)
      commit('logout')
    }
    return axios.all(reqAry)
      .then(axios.spread((rerequestRes, countriesRes, lsuserRes) => {
        // request_context
        commit('saveRequest', rerequestRes.data)
        Vue.prototype.ISWECHATLITE = rerequestRes.data.ISWECHATLITE;
        app.$cookies.set('refinfo', rerequestRes.data.REFINFO)
        app.$cookies.set('refdate', rerequestRes.data.REFDATE)
        // countries
        console.log(countriesRes)
        commit('saveCountries', countriesRes.data.COUNTRIES)
        // lsuser
        commit('setLsuser', lsuserRes.data.lsuser)
      }))
      .catch(e => {
        console.log(e)
      })
  },
  async getRequest({ commit }, app) {
    let obj = await app.$axios.get('/request_context/', { params: {} });
    commit('saveRequest', obj);
    Vue.prototype.ISWECHATLITE = obj.ISWECHATLITE;
    app.$cookies.set('refinfo', obj.REFINFO)
    app.$cookies.set('refdate', obj.REFDATE)
  },
  async getLsuser({ commit }, app) {
    let userdata = await app.$axios.post('/accounts/profile/get/', {})
    if (userdata.lsuser) {
      commit('login')
      commit('setLsuser', userdata.lsuser)
      app.$cookies.set(gconfig.LSUID, userdata.lsuser.uid)
    }
  },
  async getProfile({ commit }, { app, params}) {
    let userdata = await app.$axios.post('/accounts/profile/get/', params)
    if (userdata.lsuser) {
      commit('login')
      commit('setLsuser', userdata.lsuser)
      app.$cookies.set(gconfig.LSUID, userdata.lsuser.uid)
    }
    if (userdata.level) {
      commit('setUserlevel', userdata.level)
    }
  }
}