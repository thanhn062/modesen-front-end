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
  appSource: '',  //来源app,
  countries: null, //国家,
  host: '',
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
  setAppSource(state, source) {
    state.appSource = source
  },
  setHost(state, params) {
    state.host = 'https://' + params
  },
  setClickTimes(state, num) {
    state.eventTimes = num
  },
  setGender(state, gender) {
    state.gender = gender
  }
}

export const actions = {
  nuxtServerInit({ commit, state, dispatch }, { req, app }) {
    // 获取cookie然后拆成键值对
    let token = app.$cookies.get(gconfig.ACCESS_TOKEN) || ''
    let lsuid = app.$cookies.get(gconfig.LSUID) || ''
    commit('setHost', req.headers.host)
    commit('setGender', app.$cookies.get(gconfig.GENDER) || 'f')

    if (!token && req.headers.authorization) {
      token = req.headers.authorization.replace('Bearer ','')
      app.$cookies.set(gconfig.ACCESS_TOKEN, token)
    }

    if (!lsuid && req.headers.lsuid) {
      lsuid = req.headers.lsuid
      app.$cookies.set(gconfig.LSUID, lsuid)
    }
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
        console.log('errormessage: ', e)
      })
  },
  loadjjs() {
    (function(){"use strict";var e=null,b="4.0.0",
      n="30524",
      additional="term=value",
      t,r,i;try{t=top.document.referer!==""?encodeURIComponent(top.document.referrer.substring(0,2048)):""}catch(o){t=document.referrer!==null?document.referrer.toString().substring(0,2048):""}try{r=window&&window.top&&document.location&&window.top.location===document.location?document.location:window&&window.top&&window.top.location&&""!==window.top.location?window.top.location:document.location}catch(u){r=document.location}try{i=parent.location.href!==""?encodeURIComponent(parent.location.href.toString().substring(0,2048)):""}catch(a){try{i=r!==null?encodeURIComponent(r.toString().substring(0,2048)):""}catch(f){i=""}}var l,c=document.createElement("script"),h=null,p=document.getElementsByTagName("script"),d=Number(p.length)-1,v=document.getElementsByTagName("script")[d];if(typeof l==="undefined"){l=Math.floor(Math.random()*1e17)}h="dx.steelhousemedia.com/spx?"+"dxver="+b+"&shaid="+n+"&tdr="+t+"&plh="+i+"&cb="+l+additional;c.type="text/javascript";c.src=("https:"===document.location.protocol?"https://":"http://")+h;v.parentNode.insertBefore(c,v)})()
  }
}