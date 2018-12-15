import axios from '~/plugins/axios'

export default {
  getRecords(params) {
    return axios.post('/loyalty/records/', params)
  },
  getProfile(params) {
    return axios.post('/accounts/profile/get/', params)
  }
}
