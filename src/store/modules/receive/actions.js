import types from './types'
import { types as cartTypes } from '@/store/modules/cart'

export default {
  async [types.ACTIONS.CREATE_PAYMENT] ({ commit, rootState }, cash) {
    const items = rootState.cart.items
    commit(types.MUTATIONS.CREATE_RECEIVE, { items, cash })
    commit(`cart/${cartTypes.MUTATIONS.CLEAR_CART}`, null, { root: true })
  }
}
