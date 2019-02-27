import Vue from 'vue'
import types from './types'

export default {
  [types.MUTATIONS.CREATE_RECEIVE] (state, payload) {
    const {
      itemList,
      itemCount,
      promotions,
      totalPrice,
      totalDiscount,
      summaryTotalPrice,
      cash
    } = payload
    Vue.set(state, 'itemList', itemList)
    Vue.set(state, 'itemCount', itemCount)
    Vue.set(state, 'promotions', promotions)
    Vue.set(state, 'totalPrice', totalPrice)
    Vue.set(state, 'totalDiscount', totalDiscount)
    Vue.set(state, 'summaryTotalPrice', summaryTotalPrice)
    Vue.set(state, 'cash', cash)
  }
}
