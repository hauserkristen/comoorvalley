import router from '@/router'
import * as types from './mutation-types'
import {apiSubmitUser, apiSubmitEmployeeType, apiSubmitTableOrder, apiLogOut, apiGetNotifications, apiAddNewEmployee, apiGetAvailableTypes} from './../api/api'

export const setUserID = ({state, commit, getters}, ID) => {
  commit(types.SET_CURRENT_ID, ID)
}

export const submitUser = ({state, commit, getters}, userInfo) => {
  apiSubmitUser({state, commit, getters}, userInfo)
}

export const employeeLogOut = ({state, commit, getters}, userInfo) => {
  apiLogOut({state, commit, getters})
}

export const logOut = ({state, commit, getters}, logOutInfo) => {
  commit(types.SET_SHOW_LOGOUT, false)

  // Reset
  commit(types.SET_CURRENT_ID, '')
  commit(types.SET_CURRENT_TYPE, '')
  commit(types.SET_EMPLOYEE_TYPES, [])

  // Set modal data
  const modalInfo = {}
  modalInfo.title = 'Employee Shift Data'
  modalInfo.currentPayRate = logOutInfo.payRate
  modalInfo.currentHours = logOutInfo.hours
  modalInfo.isActive = true
  commit(types.SET_MODAL_DATA, modalInfo)

  router.push(`/`)
}

export const employeeLockPage = ({state, commit, getters}) => {
  commit(types.SET_SHOW_LOGOUT, false)

  // lock
  commit(types.SET_CURRENT_ID, '')
  commit(types.SET_CURRENT_TYPE, '')
  commit(types.SET_EMPLOYEE_TYPES, [])
  router.push(`/`)
}

export const disableModal = ({state, commit, getters}) => {
  // Set modal data
  const modalInfo = {}
  modalInfo.title = ''
  modalInfo.currentPayRate = 0
  modalInfo.currentHours = 0
  modalInfo.isActive = false
  commit(types.SET_MODAL_DATA, modalInfo)
}

export const setNotifications = ({state, commit, getters}, notifications) => {
  commit(types.ADD_NOTIFICATIONS, notifications)
}

export const getNotifications = ({state, commit, getters}) => {
  apiGetNotifications({state, commit, getters})
}

export const setEmployeeData = ({state, commit, getters}, {availableTypes, currentType, menuItems}) => {
  commit(types.SET_EMPLOYEE_TYPES, availableTypes)
  const isLoggedIn = availableTypes.indexOf(currentType) !== -1
  commit(types.SET_EMPLOYEE_STATUS, isLoggedIn)
  if (!isLoggedIn) {
    commit(types.SET_SHOW_LOGOUT, true)
    router.push(`/LogIn`)
  } else {
    commit(types.SET_CURRENT_TYPE, currentType)
    commit(types.SET_MENU_ITEMS, menuItems)
    commit(types.SET_SHOW_LOGOUT, true)
    router.push(`/Order`)
  }
}

export const submitEmployeeType = ({state, commit, getters}, element) => {
  commit(types.SET_CURRENT_TYPE, element)
  apiSubmitEmployeeType({state, commit, getters}, element)
}

export const setMenuItems = ({state, commit, getters}, data) => {
  commit(types.SET_MENU_ITEMS, data)
  commit(types.SET_SHOW_LOGOUT, true)
  router.push(`/Order`)
}

export const submitTableOrder = ({state, commit, getters}, {orders, tableNum}) => {
  apiSubmitTableOrder({state, commit, getters}, {orders: orders, tableNum: tableNum})
}

export const submitNewEmployee = ({state, commit, getters}, {name, password, employeeTypes}) => {
  apiAddNewEmployee({state, commit, getters}, {name: name, password: password, employeeTypes: employeeTypes})
}

export const getAllEmployeeTypes = ({state, commit, getters}) => {
  apiGetAvailableTypes({state, commit, getters})
}

export const setNewEmployeeTypes = ({state, commit, getters}, employeeTypes) => {
  commit(types.SET_AVAILABLE_EMP_TYPES, employeeTypes)
  router.push(`/NewEmployee`)
}

export const navigateToOrder = ({state, commit, getters}) => {
  router.push(`/Order`)
}
