import Vue from 'vue'
//引入点击控件外部区域插件
import vClickOutside from 'v-click-outside'
Vue.use(vClickOutside)
//引入懒加载插件
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
//引入meta、titile
import Meta from 'vue-meta'
Vue.use(Meta)


// 引入公共变量和方法
import {gconfig} from '~/assets/js/gconfig.js'
import localStorage from '~/assets/js/utils/localStorage.js'
import cookie from '~/assets/js/utils/cookie.js'
Vue.prototype.gconfig = gconfig;
Vue.prototype.$localStorage = localStorage;
Vue.prototype.$cookie = cookie;

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
    //mouseenter--ga
    $('*[data-ga-enter]').mouseenter(function() {
      let res = $(this).attr('data-ga-enter');
      if (res) {
        var [category, action, label, val] = [...res.split('-')];
        label = label || 'mouseenter'
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
    //置顶功能
    $(window).scroll(bindScroll)
    function bindScroll(){
      var scrollTop = $(window).scrollTop();
      var winHeight = Math.max($(window).height(), $(this).outerHeight(), $('html').height());
      var viewHeight = Math.min(window.innerHeight, document.body.clientHeight);
      if (scrollTop + 200 > viewHeight) $('#to-top').fadeIn(500);
      else $('#to-top').fadeOut(500);
    }
  })
}
