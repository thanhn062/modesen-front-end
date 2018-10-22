import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state'
// import * as mutations from './mutations'
// import * as actions from './actions'

Vue.use(Vuex)

// require('whatwg-fetch')

const store = () =>
  new Vuex.Store({
    state: {
      secretKey: 'gDsdSXwddn3xp3SWgujuTUizGbfUM3wHcrzj8FLihicCJLUUePkX1dT9NiW8'
    },
    mutations: {},
    actions: {}
  })

export default store
