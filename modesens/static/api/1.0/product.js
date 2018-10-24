import axios from '~/plugins/axios'

export default {
  getSub(params) {
    return axios.post('/product/v2/getsub/', params)
  },
  getmd(params) {
    return axios.post('/product/getmd/', params)
  },
  getmore(params, timestemp) {
    return axios.post(`/product/${params.pid}/getsimilar/`, params, timestemp)
  },
  getrecentmore(params) {
    return axios.post(`/product/${params.pid}/getrecent/`, params)
  }
}
