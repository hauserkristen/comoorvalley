import * as types from './mutation-types'

export const setPage = ({state, commit, getters}, pageType, pageContent) => {
  commit(types.SET_PAGE, pageType, pageContent)
}
