// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const store = () =>
//   new Vuex.Store({
//     state: {
//       TOKEN: '' //存储登录token，用来写入到header的Authorization
//     },
//     mutations: {
//       SET_TOKEN: (state, token) => {
//         state.TOKEN = token
//         sessionStorage.setItem('TOKEN', token)
//       },
//       DEL_TOKEN: state => {
//         state.TOKEN = ''
//         sessionStorage.removeItem('TOKEN')
//       }
//     },
//     getters: {
//       token(state) {
//         debugger
//         return state.TOKEN
//       }
//     },
//     actions: {
//       nuxtServerInit ({ commit }, { req }) {
//         if (req.session.user) {
//           commit('user', req.session.user)
//         }
//       }
//     }
//   })

// export default store


export const state = () => ({
  TOKEN: '',
  availabilities: '',
  product: ''
})

export const mutations = {
  SET_TOKEN: (state, token) => {
    state.TOKEN = token
  },
  DEL_TOKEN: state => {
    state.TOKEN = ''
  },
  setInfos: (state, params) => {
    state.availabilities = params.availabilities
    state.product = params.product
  }
}

export const getters = {
  token(state) {
    debugger
    return state.TOKEN
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    console.log('store---------' + req)
    // if (req.session.user) {
    //   commit('SET_TOKEN', req.session.user)
    // }
  }
}
