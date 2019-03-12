export const state = () => ({
  login_status: false,
  next_url: '/',
  mdLoginShow: false,
  lsuser: null,
  gender: 'f',   //f:women   m:men
  coupons: null,
  navHeadJson: null,
  rhints: {},//26个字母及#的搜索值
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
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    console.log(21212, req.headers.cookie)
  }
}