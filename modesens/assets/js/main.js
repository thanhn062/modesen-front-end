import Vue from 'vue'
import vClickOutside from 'v-click-outside'
Vue.use(vClickOutside)

// 引入公共变量和方法
// import {gconfig} from '~/assets/js/gconfig.js'
// import localStorage from '~/assets/js/utils/localStorage.js'
// Vue.prototype.gconfig = gconfig;
// Vue.prototype.$localStorage = localStorage;
// export default ({ app }) => {
//   app.gconfig = gconfig
//   app.$localStorage = localStorage
// }

//浏览器端功能
if (process.browser){
  $(document).ready(function() {
    //click--ga
    $('*[data-ga-click]').click(function() {
      let res = $(this).attr('data-ga-click');
      if (res) {
        var [category, action, label, val] = [...res.split('-')];
        label = label || 'click'
        ga('send', 'event', category, action, label, val)
      }
    })
    //mouseover--ga
    $('*[data-ga-enter]').mouseenter(function() {
      let res = $(this).attr('data-ga-enter');
      if (res) {
        var [category, action, label, val] = [...res.split('-')];
        label = label || 'mouseover'
        ga('send', 'event', category, action, label, val)
      }
    })
    // 注册 所有的注册按钮添加类名：btn-signup
    $('.btn-signup').click(function() {
      let res = location.pathname.match(/(.+)/)
      // let res = location.pathname.match(/\/[a-z]+\/[a-z]+(.+)/)
      if (!res) return
      let next_url = [...res][1]
      if (next_url === '/about/') {
        window.open('/accounts/signup/?next=/')
      } else {
        window.open('/accounts/signup/?next=' + next_url)
      }
    })
  })
}
