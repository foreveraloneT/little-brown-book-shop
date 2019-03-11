import fill from 'lodash/fill'
import flatMap from 'lodash/flatMap'
import omit from 'lodash/omit'
import values from 'lodash/values'
import sum from 'lodash/sum'
import {
  HARRY_BOOK_IDS,
  HARRY_PROMOTION_PERCENT_DISCOUNT,
  HARRY_PROMOTION_TITLE
} from '@/lib/constants/harry'

export const _calculateDiscount = (hashedBooks) => {
  const books = values(hashedBooks)
  const totalPrice = sum(books.map(book => book.price))
  return totalPrice * HARRY_PROMOTION_PERCENT_DISCOUNT[books.length - 1]
}

export const _createHashedBooks = (book, oldHashed) => ({
  ...oldHashed,
  [book.id]: book
})

export const _creatGroup = hashedBooks => ({
  hashedBooks,
  discount: _calculateDiscount(hashedBooks)
})

export const _getUseableGroup = groups => groups.map(group => ({
  books: values(group.hashedBooks),
  discount: group.discount
})).filter(group => group.books.length > 1)

export const _getHarryPromotionsByLongestPromotion = (books) => {
  let groups = []
  let lastBookId = -1
  let currentIndex = 0

  books.forEach((book) => {
    if (book.id === lastBookId) {
      currentIndex += 1
    } else {
      currentIndex = 0
      lastBookId = book.id
    }
    const oldHashed = groups[currentIndex] ? groups[currentIndex].hashedBooks : {}
    groups[currentIndex] = _creatGroup(_createHashedBooks(book, oldHashed))
  })

  return _getUseableGroup(groups)
}

export const summaryDiscount = groups => sum(groups.map(group => group.discount))

export const getHarryPromotions = (cartItemList) => {
  const sortedHarryBooks = cartItemList.filter(book => HARRY_BOOK_IDS.includes(book.id))
    .sort((book1, book2) => {
      const countDiff = book2.count - book1.count
      if (countDiff === 0) {
        return book1.price - book2.price
      }
      return countDiff
    })

  const seperatedBooks = flatMap(sortedHarryBooks, (book) =>
    fill(Array(book.count), omit(book, ['count']))
  )

  const groupsLongest = _getHarryPromotionsByLongestPromotion(seperatedBooks)
  return groupsLongest.map(promotion => ({
    ...promotion,
    title: HARRY_PROMOTION_TITLE[promotion.books.length - 1]
  }))
}
