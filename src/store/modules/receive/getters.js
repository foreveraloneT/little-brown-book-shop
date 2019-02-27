import sum from 'lodash/sum'
import values from 'lodash/values'

export default {
  itemCount: state => sum(values(state.items)),
  itemList: (state, getters, rootState, rootGetters) => {
    const hashedBook = rootGetters['book/hashedData']
    return Object.keys(state.items).map(id => ({
      count: state.items[id],
      ...hashedBook[id]
    }))
  },
  totalPrice: (state, getters) => {
    return sum(getters['itemList'].map(item => item.price * item.count))
  },
  summaryTotalPrice: (state, getters) => { // mock
    return getters['totalPrice']
  }
}
