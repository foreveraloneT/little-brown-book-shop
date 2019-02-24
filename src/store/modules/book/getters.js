import keyBy from 'lodash/keyBy'

export default {
  hashedData: state => keyBy(state.data, data => data.id)
}
