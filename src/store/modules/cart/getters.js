import sum from 'lodash/sum'
import values from 'lodash/values'
import { getHarryPromotions } from '@/lib/services/harryPromotion'
import { getPromotion } from '@/lib/services/fourBuyThreePromotion'

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
  promotions: (state, getters) => {
    const itemList = getters['itemList']
    const ThreeFreeOnePromotion = getPromotion(itemList)
    const harryPromotions = getHarryPromotions(itemList)
    return [...harryPromotions, ...ThreeFreeOnePromotion]
  },
  totalDiscount: (state, getters) => {
    const promotions = getters['promotions']
    return sum(promotions.map(promotion => promotion.discount))
  },
  summaryTotalPrice: (state, getters) => {
    return getters['totalPrice'] - getters['totalDiscount']
  }
}
