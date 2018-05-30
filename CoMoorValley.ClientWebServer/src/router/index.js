import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/Home'
import information from '@/components/Information'
import news from '@/components/News'
import gallery from '@/components/Gallery'
import about from '@/components/AboutUs'
import contact from '@/components/ContactUs'

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
