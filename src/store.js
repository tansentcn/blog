import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  // 用户刷新保存数据
  plugins: [createPersistedState({
    key: "tansent-blog"
  })],
  state: {
    // 用户信息
    userInfo: {}
  },
  mutations: {
    updateUserInfo(state, obj) {
      state.userInfo = obj
    }
  },
  actions: {
    updateUserInfo({ commit }) {
      commit('updateUserInfo')
    }
  }
})
