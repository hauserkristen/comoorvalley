import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    showLogOut: false,
    user: {
      currentID: '',
      availableTypes: [],
      isLoggedIn: false,
      selectedType: '',
      newEmployeeTypes: []
    },
    order: {
      availableOptions: {},
      notifications: []
    },
    modal: {
      isActive: false,
      title: '',
      currentPayRate: 0,
      currentHours: 0
    }
  },
  actions,
  getters,
  mutations,
  modules: {
  }
})

export default store

