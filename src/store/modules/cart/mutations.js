import Vue from 'vue'
import types from './types'

export default {
  [types.MUTATIONS.ADD_ITEM] (state, id, number) {
    Vue.set(state.items, id, number)
  },
  [types.MUTATIONS.CLEAR_CART] (state) {
    Vue.set(state, 'items', {})
  },
  [types.MUTATIONS.REMOVE_ITEM] (state, id) {
    Vue.delete(state.items, id)
  }
}
