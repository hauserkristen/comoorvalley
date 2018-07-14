// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFile, faAddressCard, faInfo, faCheckSquare, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false
Vue.use(VueResource)

library.add(faFile)
library.add(faAddressCard)
library.add(faInfo)
library.add(faCheckSquare)
library.add(faThumbsUp)
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
