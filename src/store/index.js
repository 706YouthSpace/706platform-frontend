import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoadingShow: false,
    token: ''
  },
  mutations: {
    setLoading (state, isShow, token) {
      state.isLoadingShow = isShow
      state.token = token
    }
  }
})
