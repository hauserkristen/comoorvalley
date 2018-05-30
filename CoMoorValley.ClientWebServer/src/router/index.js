import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Documents from '@/components/Documents'
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
      name: 'Home',
      component: Home
    },
    {
      path: '/documents',
      name: 'Documents',
      component: Documents
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/aboutus',
      name: 'About Us',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'Contact Us',
      component: ContactUs
    }
  ]
})
