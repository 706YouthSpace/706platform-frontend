import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        device: 'desktop'
    },
    mutations: {
        setDevice(state, device) {
            state.device = device
        }
    }
})
