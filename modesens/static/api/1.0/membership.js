import axios from '~/plugins/axios'

export default {
  getRecords(params) {
    return axios.post('/loyalty/records/', params)
  }
}
