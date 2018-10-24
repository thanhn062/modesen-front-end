import axios from '~/plugins/axios.js'

export const sub = async (store, params) => {
  return await axios.post('/product/v2/getsub/', params)
}
