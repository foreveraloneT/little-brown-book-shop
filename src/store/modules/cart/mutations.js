import Vue from 'vue'
import types from './types'

export default {
  [types.MUTATIONS.ADD_ITEM] (state, { id, number }) {
    Vue.set(state.items, id, number)
  },
  [types.MUTATIONS.CLEAR_CART] (state) {
    Vue.set(state, 'items', {})
  },
  [types.MUTATIONS.ADD_ONE_ITEM] (state, id) {
    if (state.items[id]) {
      Vue.set(state.items, id, state.items[id] + 1)
    } else {
      Vue.set(state.items, id, 1)
    }
  },
  [types.MUTATIONS.REMOVE_ITEM] (state, id) {
    Vue.delete(state.items, id)
  }
}
