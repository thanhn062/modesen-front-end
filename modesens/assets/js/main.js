import Vue from 'vue'
import ls from '~/static/util/localStorage.js'

//浏览器端功能
if (process.browser){
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

  let utils = {
    STATIC_DOMAIN: 'https://d2go30nqlx7k6d.cloudfront.net',
    BASE_URL: 'http://127.0.0.1:8000',
    openBlank: url => window.open(url, '_blank'),
    localStorage: ls
  }
  Vue.prototype.modesens = utils
}
Vue.prototype.BASE_URL = 'http://34.226.204.204'