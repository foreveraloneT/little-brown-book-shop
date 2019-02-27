import sum from 'lodash/sum'
import values from 'lodash/values'
import { HARRY_PROMOTION_TITLE } from '@/lib/constants/harry'
import { getHarryPromotions } from '@/lib/services/harryPromotion'

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
  rawPromotions: (state, getters) => {
    const itemList = getters['itemList']
    return getHarryPromotions(itemList)
  },
  promotions: (state, getters) => {
    const raw = getters['rawPromotions'] // [{ books, discount }]
    return raw.map(promotion => ({
      ...promotion,
      title: HARRY_PROMOTION_TITLE[promotion.books.length - 1]
    }))
  },
  totalDiscount: (state, getters) => {
    const promotions = getters['promotions']
    return sum(promotions.map(promotion => promotion.discount))
  },
  summaryTotalPrice: (state, getters) => {
    return getters['totalPrice'] - getters['totalDiscount']
  }
}
