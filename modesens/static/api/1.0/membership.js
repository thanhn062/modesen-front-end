import axios from '~/plugins/axios'

export default {
  getRecords(params, token) {
    console.log(111111111111)
    return axios.post('/loyalty/records/', params, token)
  },
  getProfile(params) {
    return axios.post('/accounts/profile/get/', params)
  }
}
