import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './store/actions'
import * as getters from './store/getters'
import mutations from './store/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    about: {
      title: 'About',
      infoRows: [],
      boardMemberRow: {
        title: '',
        content: '',
        members: []
      }
    },
    contact: {
      email: ''
    },
    gallery: {
      title: 'Photo Gallery',
      images: []
    },
    home: {
      coMoorLogo: '',
      subtitle: ''
    },
    info: {
      title: 'Information',
      tabs: []
    },
    news: {
      title: 'News and Events',
      newsItems: []
    }
  },
  actions,
  getters,
  mutations,
  modules: {
  }
})
