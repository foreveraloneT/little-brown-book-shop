import sum from 'lodash/sum'
import values from 'lodash/values'
import { HARRY_PROMOTION_TITLE } from '@/lib/constants/harry'

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
  rawPromotions: (state, getters) => { // mock
    const mock = [
      {
        books: [9781408855652, 9781408855669, 9781408855676],
        discount: 116.6
      },
      {
        books: [9781408855652, 9781408855669],
        discount: 70
      }
    ]
    return mock
  },
  promotions: (state, getters, rootState, rootGetters) => {
    const raw = getters['rawPromotions']
    const hashedBook = rootGetters['book/hashedData']
    return raw.map(promotion => ({
      title: HARRY_PROMOTION_TITLE[promotion.books.length - 2],
      discount: promotion.discount,
      books: promotion.books.map(bookId => hashedBook[bookId])
    }))
  },
  summaryTotalPrice: (state, getters) => { // mock
    return getters['totalPrice']
  }
}
