import sum from 'lodash/sum'
import values from 'lodash/values'

export default {
  itemCount: state => sum(values(state.items))
}
