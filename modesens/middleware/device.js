import {deviceType, isIOSApp, isAndroidApp} from '~/assets/js/utils/utils.js'

export default function({ store, req }) {
  let userAgent = process.server ? req.headers['user-agent'] : navigator.userAgent
  if (!store.state.deviceType) {
    // 设备来源
    let type = deviceType(userAgent)
    if (type === 'pc') {
      store.commit('setDeviceType', type)
    }
  }
  if (!store.state.appSource) {
    if (isIOSApp(userAgent)) {
      store.commit('setAppSource', 'iosmsapp')
    }
    else if (isAndroidApp(userAgent)) {
      store.commit('setAppSource', 'andoidmsapp')
    }
  }
}