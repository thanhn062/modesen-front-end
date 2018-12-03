// import Vue from 'vue'
// import cookie from '~/static/util/cookie.js'
// // import $ from 'jquery'
// console.log(Vue.http)
// Vue.http = { headers: { Authorization: cookie.get('TOKEN') || '' }}
// if (process.server) {
//     Vue.http.headers.common['token'] = cookie.get('TOKEN') || ''
// }

// Vue.use(VueResource)
// Vue.http.interceptors.push((request, next) => {
//   request.headers['Authorization'] = cookie.get('TOKEN') || ''
//   next()
// })

if (process.browser){
  $('[class*=ga-]').click(function() {
    console.log(1111111111)
    var [, resVal] = [...$(this).attr('class').match(/ga-([^ ]+)/)]
    var [, category, action, label, val] = resVal.split('-')
    ga('send', 'event', category, action, label, val)
  })
  // $('[data-ga*=ga-]').click(function() {
  //   console.log(2222222)
  //   var [, category, action, label, val] = [...$(this).attr('data-ga').split('-')];
  //   ga('send', 'event', category, action, label, val)
  // })
}