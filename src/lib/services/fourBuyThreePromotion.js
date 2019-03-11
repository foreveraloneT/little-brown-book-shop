import fill from 'lodash/fill'
import flatMap from 'lodash/flatMap'
import omit from 'lodash/omit'
import {
  HARRY_BOOK_IDS
} from '@/lib/constants/harry'

export const _getNonHarry = (cartItemList) => {
  return cartItemList.filter(book => !HARRY_BOOK_IDS.includes(book.id))
    .sort((book1, book2) => book1.price - book2.price)
}

export const getPromotion = (cartItemList) => {
  const interestedItem = _getNonHarry(cartItemList)
  const seperatedBooks = flatMap(interestedItem, (book) =>
    fill(Array(book.count), omit(book, ['count']))
  )
  const freeCount = seperatedBooks.length / 4
  const freeBooks = seperatedBooks.slice(0, freeCount)
  const discount = freeBooks.reduce((sum, book) => sum + book.price, 0)
  return freeCount > 0
    ? [{
      title: '3 Free 1',
      books: seperatedBooks,
      discount,
      freeBooks
    }]
    : []
}
