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
  deviceType: ''
})

export const mutations = {
  login(state) {
    state.login_status = true;
  },
  logout(state) {
    state.login_status = false;
  },
  setLsuser(state, params) {
    state.lsuser = params;
  },
  removeLsuser(state) {
    state.lsuser = null;
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
  setDeviceType(state, type) {
    state.deviceType = type
  }
}

export const actions = {
  nuxtServerInit({ commit, state, dispatch }, { req, app }) {
    let cookies = req.headers.cookie;
    let token = app.$cookies.get(gconfig.ACCESS_TOKEN)
    let lsuid = app.$cookies.get(gconfig.LSUID)
    if (token && lsuid) {
      commit('login')
    } else {
      commit('logout')
    }
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