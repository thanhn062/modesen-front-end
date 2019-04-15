import Vue from 'vue'
import axios from 'axios';
import qs from 'qs'
import { gconfig } from '~/assets/js/gconfig.js'

export default function({ store, req, app }) {
//   // 获取cookie然后拆成键值对
//   let cookiesArr = req.headers.cookie.split(';');
//   let cookies = {}
//   cookiesArr.map(cookieStr => {
//     let cookieAry = cookieStr.split('=')
//     cookies[cookieAry[0].trim()] = cookieAry[1].trim()
//   })
//   let token = cookies[gconfig.ACCESS_TOKEN]
//   let lsuid = cookies[gconfig.LSUID]
//   //设置axios的全局变量
//   axios.baseURL = process.env.browserBaseURL + 'api/2.0/';  //请求根目录
//   axios.timeout = 5000;
//   axios.defaults.headers['Authorization'] = 'Bearer ' + cookies[gconfig.ACCESS_TOKEN]; //获取cookie放在头部传到后端

//   let reqAry = []
//   if (!store.state.request) {
//     reqAry.push(axios.get(`https://modesens.com/api/2.0/request_context/?secretkey=${process.env.secretKey}`))
//   }
//   if (!store.state.countries) {
//     let data = {}
//      data.secretkey = process.env.secretKey
//      data = qs.stringify(data)
//      reqAry.push(axios.post('https://test.modesens.com/api/2.0/config/', data))
//   }
//   if (token && lsuid) {
//     store.commit('login')
//     if (!store.state.lsuser) {
//       reqAry.push(axios.post('https://modesens.com/api/2.0/accounts/profile/get/'))
//     }
//   } else {
//     app.$cookies.remove(gconfig.SESSIONID)
//     store.commit('logout')
//   }
//   return axios.all(reqAry)
//     .then(axios.spread((rerequestRes, countriesRes, lsuserRes) => {
//       // request_context
//       store.commit('saveRequest', rerequestRes.data)
//       Vue.prototype.ISWECHATLITE = rerequestRes.data.ISWECHATLITE;
//       app.$cookies.set('refinfo', rerequestRes.data.REFINFO)
//       app.$cookies.set('refdate', rerequestRes.data.REFDATE)
//       // countries
//       console.log(countriesRes)
//       store.commit('saveCountries', countriesRes.data)
//       // lsuser
//       store.commit('setLsuser', lsuserRes.data.lsuser)
//     }))
//     .catch(e => {
//       console.log(e)
//     })
}