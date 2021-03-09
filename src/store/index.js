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
    addAsync(context, step){
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000);
    },
    subNAsync(context, step){
      setTimeout(() => {
        context.commit('decrN', step)
      }, 1000); 
    },
  },
  modules: {
  },
  getters: {
    showNumber(state){
      return '现在的值是' + state.count++
    }
  }
})
