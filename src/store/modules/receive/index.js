import { createNamespacedHelpers } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import types from './types'

const {
  mapActions,
  mapMutations,
  mapState
} = createNamespacedHelpers('receive')

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

export {
  mapActions,
  mapMutations,
  mapState,
  types
}
