import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from '~/store/action.js'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {},
    mutations: {},
    actions
  })

export default store
