import Vue from 'vue'
import {setMenuItems, setEmployeeData, logOut, setNotifications, setNewEmployeeTypes, navigateToOrder} from './../store/actions'
const baseURI = '/api'

export const apiSubmitUser = function ({state, commit, getters}, json) {
  const uri = `${baseURI}/submitUser`
  Vue.http.post(uri, JSON.stringify(json)).then(response => {
    setEmployeeData({state, commit, getters}, response.data)
  }, response => {
      // TODO: error
  })
}

export const apiLogOut = function ({state, commit, getters}) {
  const uri = `${baseURI}/logOut/${state.user.currentID}`
  Vue.http.get(uri).then(response => {
    logOut({state, commit, getters}, response.data)
  }, response => {
      // TODO: error
  })
}

export const apiSubmitEmployeeType = function ({state, commit, getters}, type) {
  const json = {}
  json.UserID = state.user.currentID
  json.Type = type
  const uri = `${baseURI}/submitType`
  Vue.http.post(uri, JSON.stringify(json)).then(response => {
    setMenuItems({state, commit, getters}, response.data)
  }, response => {
      // TODO: error
  })
}

export const apiSubmitTableOrder = function ({state, commit, getters}, {orders, tableNum}) {
  const json = {}
  json.TableNum = tableNum
  json.Orders = orders
  json.EmployeeID = getters.currentUserID
  const uri = `${baseURI}/submitOrder`
  Vue.http.post(uri, JSON.stringify(json)).then(response => {
  }, response => {
      // TODO: error
  })
}

export const apiGetNotifications = function ({state, commit, getters}) {
  const uri = `${baseURI}/notifications`
  Vue.http.get(uri).then(response => {
    setNotifications({state, commit, getters}, response.data)
  }, response => {
      // TODO: error
  })
}

export const apiGetAvailableTypes = function ({state, commit, getters}) {
  const uri = `${baseURI}/allEmployeeTypes`
  Vue.http.get(uri).then(response => {
    setNewEmployeeTypes({state, commit, getters}, response.data)
  }, response => {
      // TODO: error
  })
}

export const apiAddNewEmployee = function ({state, commit, getters}, {name, password, employeeTypes}) {
  const json = {}
  json.Name = name
  json.Password = password
  json.SelectedTypes = employeeTypes
  const uri = `${baseURI}/addNewEmployee`
  Vue.http.post(uri, JSON.stringify(json)).then(response => {
  }, response => {
    navigateToOrder({state, commit, getters})
  })
}
