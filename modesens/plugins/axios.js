import * as axios from 'axios'
import qs from 'qs'

const req = axios.create({
  //定义请求根目录
  baseURL: process.env.baseUrl + 'api/1.0/',
  // 请求超时
  timeout: 5000
})
// POST传参序列化
req.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 返回状态判断
req.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return res
    } else {
      return Promise.reject(res)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default {
  post(url, data, timestamp) {
    if (timestamp) {
      data.timestamp = timestamp
    }
    return req({
      method: 'post',
      url,
      data: data
    })
  },
  get(url, data, secretKey) {
    if (data == 1 || secretKey == 1) {
      url += `?secretkey=${process.env.secretKey}`
      if (data == 1) {
        data = null
      }
    }
    return req({
      method: 'get',
      url,
      data: data
    })
  }
}
