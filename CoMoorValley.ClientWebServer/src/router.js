import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/Home'
import information from '@/views/Information'
import news from '@/views/News'
import gallery from '@/views/Gallery'
import about from '@/views/About'
import contact from '@/views/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/info',
      name: 'Information',
      component: information
    },
    {
      path: '/news',
      name: 'News',
      component: news
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: gallery
    },
    {
      path: '/about',
      name: 'About',
      component: about
    },
    {
      path: '/contact',
      name: 'Contact',
      component: contact
    }
  ]
})
