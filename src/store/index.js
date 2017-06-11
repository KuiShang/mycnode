/**
 * Created by kk on 2017/6/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
// 用 axios 进行 Ajax 请求
Vue.use(VueAxios, axios)
Vue.use(Vuex)

const state = {
  ak: localStorage.ak || '',
  isShowAsideMenu: false,
  isShowMsg: false,
  articleList: [],
  isLoading: false,
  isShowLogin: false,
  isShowInfo: false,
  isShowNewArticle: false,
  isShowAbout: false,
  userInfo: localStorage.userInfo && JSON.parse(localStorage.userInfo) || {avatar_url: '', id: '', loginname: '', success: false}
}
const mutations = {
  showAsideMenu(state, flag) {
    state.isShowAsideMenu = flag
  },
  changeTab(state, payload) {
    state.isLoading = payload.hasOwnProperty('isLoading') ? payload.isLoading : state.isLoading
    state.tab = payload.type || state.tab
    state.articleList = payload.articleList || state.articleList
  },
  showLogin(state, flag) {
    state.isShowLogin = flag
  },
  showInfo(state, flag) {
    state.isShowInfo = flag
  },
  showMsg(state, flag) {
    state.isShowMsg = flag
  },
  updateAk(state, ak) {
    state.ak = ak
  },
  showNewArticle(state, flag) {
    state.isShowNewArticle = flag
  },
  updateUserInfo(state, userInfo) {
    state.userInfo = userInfo
  },
  showAbout(state, flag) {
    state.isShowAbout = flag
  }
}
export default new Vuex.Store({
  state,
  mutations
})
