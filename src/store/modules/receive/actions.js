import types from './types'
import { types as cartTypes } from '@/store/modules/cart'

export default {
  async [types.ACTIONS.CREATE_PAYMENT] ({ commit, rootGetters }, cash) {
    const itemList = rootGetters['cart/itemList']
    const itemCount = rootGetters['cart/itemCount']
    const promotions = rootGetters['cart/promotions']
    const totalPrice = rootGetters['cart/totalPrice']
    const totalDiscount = rootGetters['cart/totalDiscount']
    const summaryTotalPrice = rootGetters['cart/summaryTotalPrice']
    commit(types.MUTATIONS.CREATE_RECEIVE, {
      itemList,
      itemCount,
      promotions,
      totalPrice,
      totalDiscount,
      summaryTotalPrice,
      cash
    })
    commit(`cart/${cartTypes.MUTATIONS.CLEAR_CART}`, null, { root: true })
  }
}
