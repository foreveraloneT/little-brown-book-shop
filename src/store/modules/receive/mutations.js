import Vue from 'vue'
import types from './types'

export default {
  [types.MUTATIONS.CREATE_RECEIVE] (state, { items, cash }) {
    Vue.set(state, 'items', items)
    Vue.set(state, 'cash', cash)
  }
}
