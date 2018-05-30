import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Information from '@/components/Information'
import News from '@/components/News'
import Gallery from '@/components/Gallery'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Resource from 'vue-resource'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/info',
      name: 'info',
      component: Information
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUs
    }
  ]
})
