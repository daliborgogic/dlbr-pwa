import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
      notes: '',
      note: '',
      title: '',
      tag: ''
    },
    actions,
    mutations,
    getters
  })
}
