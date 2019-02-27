import Vue from 'vue'
import toNumber from 'lodash/toNumber'
import types from './types'

export default {
  [types.MUTATIONS.GET_BOOKS.REQUEST] (state) {
    Vue.set(state, 'isLoading', true)
  },
  [types.MUTATIONS.GET_BOOKS.SUCCESS] (state, data) {
    Vue.set(state, 'data', data.map(data => ({
      ...data,
      price: toNumber(data.price)
    })))
    Vue.set(state, 'isLoading', false)
  },
  [types.MUTATIONS.GET_BOOKS.FAILURE] (state, error) {
    Vue.set(state, 'error', error)
    Vue.set(state, 'isLoading', false)
  },
  [types.MUTATIONS.SEARCH_BOOKS] (state, text) {
    Vue.set(state, 'searchKeyword', text.trim())
  },
  [types.MUTATIONS.CLEAR_SEARCH] (state) {
    Vue.set(state, 'searchKeyword', '')
  }
}
