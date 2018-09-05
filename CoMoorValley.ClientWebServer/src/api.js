import Vue from 'vue'
import { setPage } from './store/actions'
import { Pages } from './components/Enums'
const baseURI = '/home'

export const getHomePage = function ({state, commit, getters}) {
  const uri = `${baseURI}/home`
  Vue.http.get(uri).then(response => {
    let pageObject = JSON.parse()(response.data)
    setPage({state, commit, getters}, Pages.HOME, pageObject)
  }, response => {
    // TODO: error
  })
}

export const getAboutPage = function ({state, commit, getters}) {
  const uri = `${baseURI}/about`
  Vue.http.get(uri).then(response => {
    let pageObject = JSON.parse()(response.data)
    setPage({state, commit, getters}, Pages.ABOUT, pageObject)
  }, response => {
    // TODO: error
  })
}

export const getContactPage = function ({state, commit, getters}) {
  const uri = `${baseURI}/contact`
  Vue.http.get(uri).then(response => {
    let pageObject = JSON.parse()(response.data)
    setPage({state, commit, getters}, Pages.CONTACT, pageObject)
  }, response => {
    // TODO: error
  })
}

export const getGalleryPage = function ({state, commit, getters}) {
  const uri = `${baseURI}/gallery`
  Vue.http.get(uri).then(response => {
    let pageObject = JSON.parse()(response.data)
    setPage({state, commit, getters}, Pages.GALLERY, pageObject)
  }, response => {
    // TODO: error
  })
}

export const getInfoPage = function ({state, commit, getters}) {
  const uri = `${baseURI}/info`
  Vue.http.get(uri).then(response => {
    let pageObject = JSON.parse()(response.data)
    setPage({state, commit, getters}, Pages.INFO, pageObject)
  }, response => {
    // TODO: error
  })
}

export const getNewsPage = function ({state, commit, getters}) {
  const uri = `${baseURI}/news`
  Vue.http.get(uri).then(response => {
    let pageObject = JSON.parse()(response.data)
    setPage({state, commit, getters}, Pages.NEWS, pageObject)
  }, response => {
    // TODO: error
  })
}
