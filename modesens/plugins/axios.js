import qs from 'qs'

export default function ({ $axios, app }) {
  $axios.onRequest(config => {
    if (config.async === false) { //asyncData函数中调用的接口
      config.baseURL = process.env.baseUrl + 'api/2.0/';  //请求根目录
    } else {
      config.baseURL = process.env.browserBaseURL + 'api/2.0/';  //请求根目录
    }
    config.timeout = 5000;    //请求超时
    config.headers.Authorization = 'Bearer ' + app.$cookies.get('token');
    // config.withCredentials = true, // 允许携带cookie
    // config.crossDomain = true   //允许跨域
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    //获取cookie放在头部传到后端
    if (config.secretKey === 1) {
      config.url += `?secretkey=${process.env.secretKey}`
    }
    if (config.method === 'post') {
      config.data.timestamp = new Date().getTime();
    }
    config.data = qs.stringify(config.data);
    return config;
  });
 
  $axios.onResponse(response => {
    return Promise.resolve(response.data);
  });
 
  $axios.onError(error => {
    return Promise.reject(error);
  });
}
