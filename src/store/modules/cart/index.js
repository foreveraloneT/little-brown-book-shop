import { createNamespacedHelpers } from 'vuex'
import getters from './getters'
import mutations from './mutations'
import state from './state'
import types from './types'

const {
  mapGetters,
  mapMutations,
  mapState
} = createNamespacedHelpers('cart')

export default {
  namespaced: true,
  state,
  getters,
  mutations
}

export {
  mapGetters,
  mapMutations,
  mapState,
  types
}
