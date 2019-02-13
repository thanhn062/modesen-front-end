export const state = () => ({
  login_status: false,
  next_url: '/',
  mdLoginShow: false,
  lsuser: {},
  sex: 'f',   //f:women   m:men
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
    state.lsuser = {};
  },
}