import deviceType from '~/assets/js/utils/utils.js'

export default function({ store, req }) {
  if (!store.state.deviceType) {
    let userAgent = process.server ? req.headers['user-agent'] : navigator.userAgent
    // 是否是爬虫工具等
    let reg = /bot|spider| Lighthouse/
    store.commit('setTestTool', reg.test(userAgent))
    // 设备来源
    let type = deviceType(userAgent)
    if (type === 'pc') {
      store.commit('setDeviceType', type)
    }
  }
}