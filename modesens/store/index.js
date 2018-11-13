import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      TOKEN: '' //存储登录token，用来写入到header的Authorization
    },
    mutations: {
      SET_TOKEN: (state, token) => {
        state.TOKEN = token
        sessionStorage.setItem('TOKEN', token)
      },
      DEL_TOKEN: state => {
        state.TOKEN = ''
        sessionStorage.removeItem('TOKEN')
      }
    },
    getters: {
      token(state) {
        debugger
        return state.TOKEN
      }
    },
    actions: {}
  })

export default store
