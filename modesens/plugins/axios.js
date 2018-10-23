import * as axios from 'axios'

export default axios.create({
  // //定义请求文件类型
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  // },
  //定义请求根目录
  baseURL: process.env.baseUrl + 'api/1.0/'
  //与请求一起发送的 URL 参数
  // params: {
  //   secretKey: 'gDsdSXwddn3xp3SWgujuTUizGbfUM3wHcrzj8FLihicCJLUUePkX1dT9NiW8'
  // },
  // //请求主体被发送的数据
  // data: {
  //   secretKey: 'gDsdSXwddn3xp3SWgujuTUizGbfUM3wHcrzj8FLihicCJLUUePkX1dT9NiW8'
  // },
  // 请求超时
  // timeout: 5000
})
// POST传参序列化
// axios.interceptors.request.use(
//   config => {
//     if (config.method === 'post') {
//       console.log(config)
//       config.data = qs.stringify(config.data)
//       console.log(config)
//     }
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )
// // 返回状态判断
// axios.interceptors.response.use(
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
