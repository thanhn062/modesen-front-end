import axios from '~/plugins/axios'

export default {
  getUserInfo(params) {
    return axios.post('https://modesens.com/accounts/profile/get/', params)
  }
}
