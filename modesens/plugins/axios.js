import * as axios from 'axios'

export default axios.create({
  baseURL: process.env.baseUrl
})
// axios.defaults.baseURL = 'https://modesens.com'
