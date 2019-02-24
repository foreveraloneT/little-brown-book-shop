import { createNamespacedHelpers } from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
import types from './types'

const {
  mapActions,
  mapGetters,
  mapMutations,
  mapState
} = createNamespacedHelpers('book')

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export {
  mapActions,
  mapGetters,
  mapMutations,
  mapState,
  types
}
