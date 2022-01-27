import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        count:10
    },
    mutations :{
       myincrement(state,payload){
           return state.count=state.count+payload.amount
       },
       mydecrement(state,payload){
        return state.count=state.count-payload.amount
      }
    },
    actions:{
        increment(context,payload){
            context.commit('myincrement',payload)
        },
        decrement(context,payload){
            context.commit('mydecrement',payload)
        }
    }
})