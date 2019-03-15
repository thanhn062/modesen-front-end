import Vue from 'vue';
import {gconfig} from '~/assets/js/gconfig.js'
import localStorage from '~/assets/js/utils/localStorage.js'

export const state = () => ({
  login_status: false,
  next_url: '/',
  mdLoginShow: false,
  lsuser: null,
  gender: 'f',   //f:women   m:men
  coupons: null,
  navHeadJson: null,
  rhints: {},//26个字母及#的搜索值,
  request: null
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
    console.log(params);
  },
  removeLsuser(state) {
    state.lsuser = null;
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
    
  }
}

export const actions = {
  nuxtServerInit({ commit, state, dispatch }, { req, app }) {
    console.log(21212, req.headers.cookie)
    console.log(3333, req.session)
    console.log(app.gconfig)
    console.log(state)
    let cookies = req.headers.cookie;
    let token = app.$cookies.get(gconfig.ACCESS_TOKEN)
    let lsuid = app.$cookies.get(gconfig.LSUID)
    console.log(token, lsuid)
    if (cookies.indexOf(gconfig.ACCESS_TOKEN) && cookies.indexOf(gconfig.LSUID)) {
      if (!state.lsuser) {
        console.log('没有用户信息')
        // commit('setLsuser', 'werw=324')
        // commit('login')
        // if (cookies.indexOf(gconfig.USERINFO)) {
        //   if (!state.lsuser) {
        //     let res = cookies.match(/lsuser=/)
        //     JSON.parse(lsuser)
        //     commit('setLsuser', )
        //   }
        // } else {
        // let obj = dispatch('getLsuser', app)
        // console.log(obj)
        // }
      } else {
        console.log('一登录')
      }
    } else {

      commit('logout')
    }
    console.log(21212, req.headers.cookie.i18n_country)
  },
  async getRequest({ commit }, $axios) {
    let obj = await $axios.get('/request_context/', { params: {} });
    commit('saveRequest', obj);
    Vue.prototype.ISWECHATLITE = obj.ISWECHATLITE;
    console.log(obj);
  },
  async getLsuser({ commit }, app) {
    console.log(app)
    return 
    let userdata = await app.$axios.post('/accounts/profile/get/', {})
    if (userdata.lsuser) {
      return userdata.lsuser
      console.log(userdata.lsuser.uid)
      let lsuser = JSON.stringify(userdata.lsuser)
      app.$cookies.set(app.gconfig.LSUID, userdata.lsuser.uid)
      // app.$cookies.set(app.gconfig.USERINFO, lsuser, 24 * 30)
      app.$store.commit('setLsuser', userdata.lsuser)
      app.$store.commit('login')
      console.log(userdata.lsuser.uid)
    }
  }
}