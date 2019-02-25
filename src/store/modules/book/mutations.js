import Vue from 'vue'
import types from './types'

export default {
  [types.MUTATIONS.GET_BOOKS.REQUEST] (state) {
    Vue.set(state, 'isLoading', true)
  },
  [types.MUTATIONS.GET_BOOKS.SUCCESS] (state, data) {
    Vue.set(state, 'data', data)
    Vue.set(state, 'isLoading', false)
  },
  [types.MUTATIONS.GET_BOOKS.FAILURE] (state, error) {
    Vue.set(state, 'error', error)
    Vue.set(state, 'isLoading', false)
  },
  [types.MUTATIONS.SEARCH_BOOKS] (state, text) {
    Vue.set(state, 'searchKeyword', text.trim())
  }
}
