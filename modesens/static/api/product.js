import axios from '~/plugins/axios'
import qs from 'qs'
// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = process.env.baseUrl + 'api/1.0/'

// POST传参序列化
axios.interceptors.request.use(
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
axios.interceptors.response.use(
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

export function fetch(url, params) {
  params.secretKey =
    'gDsdSXwddn3xp3SWgujuTUizGbfUM3wHcrzj8FLihicCJLUUePkX1dT9NiW8'
  params.timestamp = new Date().getTime() + ''
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
export default {
  getInfo(params) {
    return axios.get(`/product/${params.pid}/getinfo/`)
  },
  getSub(params) {
    return fetch('/product/v2/getsub/', params)
  },
  getmd(params) {
    return fetch('/product/getmd/', params)
  },
  getmore(params) {
    return fetch(`/product/${params.pid}/getsimilar/`, params)
  },
  getrecentmore(params) {
    return fetch(`/product/${params.pid}/getrecent/`, params)
  }
}
