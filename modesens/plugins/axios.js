import qs from 'qs'
import {gconfig} from '~/assets/js/gconfig.js'
import localStorage from '~/assets/js/utils/localStorage.js'

export default function ({ $axios, app }) {
  app.$localStorage = localStorage
  app.gconfig = gconfig
  
  $axios.onRequest(config => {
    if (config.async === false) { //asyncData函数中调用的接口
      config.baseURL = process.env.baseUrl + 'api/2.0/';  //请求根目录
    } else {
      config.baseURL = process.env.browserBaseURL + 'api/2.0/';  //请求根目录
    }
    config.timeout = 5000;    //请求超时
    config.headers.Authorization = 'Bearer ' + app.$cookies.get(app.gconfig.ACCESS_TOKEN); //获取cookie放在头部传到后端
    // config.withCredentials = true, // 允许携带cookie
    // config.crossDomain = true   //允许跨域
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    if (config.method === 'post') {
      config.data = config.data || {}
      config.data.timestamp = new Date().getTime();
      config.data = qs.stringify(config.data);
    }
    if (config.method === 'get') {
      config.params = config.params || {}
      config.params.secretkey = process.env.secretKey
      config.params.timestamp = new Date().getTime();
    }
    return config;
  });
 
  $axios.onResponse(response => {
    return Promise.resolve(response.data);
  });
 
  $axios.onError(error => {
    return Promise.reject(error);
  });
}
