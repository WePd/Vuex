import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    //mutations传参
    addN(state, step){
      state.count += step
    },

    add(state){
      state.count++
    },
    decr(state){
      state.count--
    },
    decrN(state, step){
      state.count -= step
    }
  },
  actions: {
  },
  modules: {
  }
})
