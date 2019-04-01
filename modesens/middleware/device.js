import deviceType from '~/assets/js/utils/utils.js'

export default function({ store, req }) {
  if (!store.state.deviceType) {
    let userAgent = process.server ? req.headers['user-agent'] : navigator.userAgent
    let type = deviceType(userAgent)
    if (type === 'pc') {
      store.commit('setDeviceType', type)
    }
  }
}