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
    // if (req.session.user) {
    //   commit('SET_TOKEN', req.session.user)
    // }
  }
}
