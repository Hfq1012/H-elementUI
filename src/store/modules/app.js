/*
set sidebar open or close,and some app setting
 */
import { saveErrorLogger } from '@/api/data'

const state = {
  hasReadErrorPage: false,
  errorList: [],
  opened: sessionStorage.getItem('open')
    ? sessionStorage.getItem('open')
    : 'false',
  msgIsShow: false,
  showDriver: localStorage.getItem('driver')
    ? localStorage.getItem('driver')
    : 'yes'
}
const mutations = {
  SET_OPENED(state, payload) {
    state.opened = String(payload)
    sessionStorage.setItem('open', payload)
  },
  SET_MSGISOPEN(state) {
    state.msgIsShow = !state.msgIsShow
  },
  SET_DRIVER(state, payload) {
    state.showDriver = payload
    localStorage.setItem('driver', payload)
  },
  addError (state, error) {
    state.errorList.push(error)
  },
  setHasReadErrorLoggerStatus (state, status = true) {
    state.hasReadErrorPage = status
  }
}
const actions = {
  addErrorLog ({ commit, rootState }, info) {
    if (!window.location.href.includes('error_logger_page')) commit('setHasReadErrorLoggerStatus', false)
    const { user: { token, userId, userName } } = rootState
    let data = {
      ...info,
      time: Date.parse(new Date()),
      token,
      userId,
      userName
    }
    saveErrorLogger(info).then(() => {
      commit('addError', data)
    })
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
