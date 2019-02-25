import keyBy from 'lodash/keyBy'

export default {
  hashedData: state => keyBy(state.data, data => data.id),
  fiteredData: ({ data, searchKeyword }) => data.filter(book =>
    searchKeyword.length === 0 ||
    book.title.toLowerCase().search(searchKeyword.toLowerCase()) !== -1 ||
    String(book.id).toLowerCase().search(searchKeyword.toLowerCase()) !== -1
  )
}
