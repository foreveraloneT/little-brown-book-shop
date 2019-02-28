import getters from '@/store/modules/book/getters'

describe('store/modules/book/getters', () => {
  let state
  beforeEach(() => {
    state = {
      searchKeyword: '',
      data: [
        {
          id: '1a',
          title: 'Aha'
        },
        {
          id: '2b',
          title: 'brAvo'
        }
      ]
    }
  })

  it('hashedData', () => {
    const expectedData = {
      '1a': {
        id: '1a',
        title: 'Aha'
      },
      '2b': {
        id: '2b',
        title: 'brAvo'
      }
    }
    expect(getters.hashedData(state)).toEqual(expectedData)
  })

  it('fiteredData: when no key word will return all book', () => {
    const expected = state.data
    expect(getters.fiteredData(state)).toEqual(expected)
  })

  it('fiteredData: can search by name', () => {
    state.searchKeyword = 'rav'
    const expected = [{
      id: '2b',
      title: 'brAvo'
    }]
    expect(getters.fiteredData(state)).toEqual(expected)
  })

  it('fiteredData: can search by id', () => {
    state.searchKeyword = '1'
    const expected = [{
      id: '1a',
      title: 'Aha'
    }]
    expect(getters.fiteredData(state)).toEqual(expected)
  })
})
