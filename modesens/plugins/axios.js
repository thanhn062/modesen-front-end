import * as axios from 'axios'
import store from '~/store'
import qs from 'qs'

// import qs from "qs";
 
export default function ({ $axios, app }) {
  $axios.onRequest(config => {
    config.baseURL = process.env.baseUrl + 'api/2.0/';
    // config.withCredentials = true, // 允许携带cookie
    // config.crossDomain = true   //允许跨域
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    //获取cookie放在头部传到后端
    config.headers.Authorization = 'Bearer ' + app.$cookies.get('token');
    config.data = qs.stringify(config.data);
    return config;
  });
 
  $axios.onResponse(response => {
    return Promise.resolve(response.data);
  });
 
  $axios.onError(error => {
    return Promise.reject(error);
  });

  // $axios.post = () => {

  // }
}

// const req = axios.create({
//   //定义请求根目录
//   // baseURL: process.env.baseUrl + 'api/2.0/',
//   baseURL: 'http://34.226.204.204/' + 'api/2.0/',
//   browserBaseURL: 'http://34.226.204.204/' + 'api/2.0/',
//   // 请求超时
//   timeout: 5000,
//   // withCredentials: true, // 允许携带cookie
//   // crossDomain : true   //允许跨域
// })
// // POST传参序列化
// req.interceptors.request.use(
//   config => {
//     if (config.method === 'post') {
//       config.data = qs.stringify(config.data)
//     }
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )
// // 返回状态判断
// req.interceptors.response.use(
//   res => {
//     if (res.status === 200) {
//       return res
//     } else {
//       return Promise.reject(res)
//     }
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )
// export default {
//   post(url, data, timestamp) {
//     if (timestamp) {
//       data.timestamp = timestamp
//     }
//     console.log('#####', url, cookie.get('token'))
//     return req({
//       method: 'post',
//       url,
//       data: data,
//       headers: {
//         Authorization: `Bearer ${cookie.get('token')}`
//       }
//     })
//   },
//   get(url, data, secretKey) {
//     if (data == 1 || secretKey == 1) {
//       url += `?secretkey=${process.env.secretKey}`
//       if (data == 1) {
//         data = null
//       }
//     }
//     return req({
//       method: 'get',
//       url,
//       data: data,
//       headers: {
//         Authorization: `Bearer ${cookie.get('token')}`
//       }
//     })
//   },
//   getasync(url, data, secretKey, token) {
//     if (data == 1 || secretKey == 1) {
//       url += `?secretkey=${process.env.secretKey}`
//       if (data == 1) {
//         data = null
//       }
//     }
//     return req({
//       method: 'get',
//       url,
//       data: data,
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//   },
//   postasync(url, data, secretKey, token) {
//     if (data == 1 || secretKey == 1) {
//       url += `?secretkey=${process.env.secretKey}`
//       if (data == 1) {
//         data = null
//       }
//     }
//     console.log(url, token)
//     return req({
//       method: 'post',
//       url,
//       data: data,
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//   },
//   delete(url, data) {
//     return service({
//       methods: 'delete',
//       url,
//       params: data
//     })
//   }
// }
