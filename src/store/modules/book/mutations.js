import Vue from 'vue'
import types from './types'

export default {
  [types.MUTATIONS.GET_BOOKS_REQUEST] (state) {
    Vue.set(state, 'isLoading', true)
  },
  [types.MUTATIONS.GET_BOOKS_SUCCESS] (state, data) {
    Vue.set(state, 'data', data)
  },
  [types.MUTATIONS.GET_BOOKS_FAILURE] (state, error) {
    Vue.set(state, 'error', error)
  }
}
