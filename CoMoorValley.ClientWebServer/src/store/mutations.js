import * as types from './mutation-types'
import Vue from 'vue'

export default {
  [types.SET_PAGE] (state, pageType, page) {
    Vue.set(state, pageType, page)
  }
}
