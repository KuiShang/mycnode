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
  isShowMsg: false
}
const mutations = {
  showAsideMenu(state, flag) {
    state.isShowAsideMenu = flag
  },
  showMsg(state, flag) {
    state.isShowMsg = flag
  }
}
export default new Vuex.Store({
  state,
  mutations
})
