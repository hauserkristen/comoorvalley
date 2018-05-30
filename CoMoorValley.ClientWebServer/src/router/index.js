import Vue from 'vue'
import Router from 'vue-router'

import Splash from '@/components/Splash'
import LogIn from '@/components/LogIn'
import Order from '@/components/FoodOrder'
import NewEmployee from '@/components/NewEmployee'
import Resource from 'vue-resource'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Splash
    },
    {
      path: '/LogIn',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/NewEmployee',
      name: 'NewEmployee',
      component: NewEmployee
    }
  ]
})
