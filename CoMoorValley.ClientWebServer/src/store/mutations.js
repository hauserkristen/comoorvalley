import * as types from './mutation-types'
import Vue from 'vue'
import {cloneDeep, union} from 'lodash'

export default {
  [types.SET_SHOW_LOGOUT] (state, toShow) {
    Vue.set(state, 'showLogOut', toShow)
  },
  [types.SET_CURRENT_ID] (state, ID) {
    Vue.set(state.user, 'currentID', ID)
  },
  [types.SET_EMPLOYEE_TYPES] (state, avail) {
    Vue.set(state.user, 'availableTypes', avail)
  },
  [types.SET_EMPLOYEE_STATUS] (state, isLoggedIn) {
    Vue.set(state.user, 'isLoggedIn', isLoggedIn)
  },
  [types.SET_CURRENT_TYPE] (state, type) {
    Vue.set(state.user, 'selectedType', type)
  },
  [types.SET_MENU_ITEMS] (state, data) {
    Vue.set(state.order, 'availableOptions', data)
  },
  [types.SET_MODAL_DATA] (state, data) {
    Vue.set(state, 'modal', data)
  },
  [types.ADD_NOTIFICATIONS] (state, data) {
    let deepCopy = cloneDeep(state.order.notifications)
    let merge = union(deepCopy, data)
    Vue.set(state.order, 'notifications', merge)
  },
  [types.SET_AVAILABLE_EMP_TYPES] (state, data) {
    const deepCopy = cloneDeep(data)
    Vue.set(state.user, 'newEmployeeTypes', deepCopy)
  }
}
