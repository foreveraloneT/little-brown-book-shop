import Vue from 'vue'
import types from './types'

export default {
  [types.MUTATIONS.ADD_ITEM] (state, { id, value }) {
    Vue.set(state.items, id, value)
  },
  [types.MUTATIONS.CLEAR_CART] (state) {
    Vue.set(state, 'items', {})
  },
  [types.MUTATIONS.ADD_ONE_ITEM] (state, id) {
    if (state.items[id]) {
      const newValue = state.items[id] + 1
      Vue.set(state.items, id, newValue)
    } else {
      Vue.set(state.items, id, 1)
    }
  },
  [types.MUTATIONS.REMOVE_ITEM] (state, id) {
    Vue.delete(state.items, id)
  }
}
