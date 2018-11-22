import Vue from 'vue'
import cookie from '~/static/util/cookie.js'
console.log(Vue.http)
Vue.http = { headers: { Authorization: cookie.get('TOKEN') || '' }}
// if (process.server) {
//     Vue.http.headers.common['token'] = cookie.get('TOKEN') || ''
// }

// Vue.use(VueResource)
// Vue.http.interceptors.push((request, next) => {
//   request.headers['Authorization'] = cookie.get('TOKEN') || ''
//   next()
// })