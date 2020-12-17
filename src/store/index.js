import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoadingShow: false
  },
  mutations: {
    setLoading (state, isShow) {
      state.isLoadingShow = isShow
    }
  }
})
