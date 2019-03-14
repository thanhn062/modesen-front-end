export const state = () => ({
  login_status: false,
  next_url: '/',
  mdLoginShow: false,
  lsuser: null,
  gender: 'f',   //f:women   m:men
  coupons: null,
  navHeadJson: null,
  rhints: {},//26个字母及#的搜索值,
  request: null
})

export const mutations = {
  modifyLoginStatus (state) {
    state.login_status = !state.login_status;
  },
  modifyMdLoginShow() {
    state.mdLoginShow = !state.mdLoginShow;
  },
  setLsuser(state, params) {
    state.lsuser = params;
  },
  removeLsuser(state) {
    state.lsuser = null;
  },
  setCoupons(state, params) {
    state.coupons = params;
  },
  saveNavHeadJson(state, params) {
    state.navHeadJson = params;
  },
  saveRHints(state, params) {
    state.rhints[params[0]] = params[1];
  },
  saveRequest(state, params) {
    state.request = params;
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    console.log(21212, req.headers.cookie)
  },
  async getRequest({ commit }, $axios) {
    let obj = await $axios.get('/request_context/', { params: {} });
    commit('saveRequest', obj);
    console.log(obj);
  }
}