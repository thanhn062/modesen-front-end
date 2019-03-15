// import {gconfig} from '~/assets/js/gconfig.js'
// import localStorage from '~/assets/js/utils/localStorage.js'

export default function({ app, store }) {
  // app.$localStorage = localStorage
  // app.gconfig = gconfig
  store.dispatch('getRequest', app.$axios)
  let token = app.$cookies.get(app.gconfig.ACCESS_TOKEN)
  let lsuid = app.$cookies.get(app.gconfig.LSUID)
  if (token && lsuid) {
    let lsuser = app.$localStorage.get(app.gconfig.USERINFO)
    if (lsuser) {
      store.commit('modifyLoginStatus')
      store.commit('setLsuser', JSON.parse(lsuser))  
    } else {
      store.dispatch('getLsuser', app.$axios)
    }
    
  }
  console.log('plugin-init')
}