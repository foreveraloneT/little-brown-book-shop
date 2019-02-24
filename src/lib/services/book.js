import axios from 'axios'
import api from '@/lib/constants/api'

const getList = async () => {
  const [method, url] = api.books
  const response = await axios({
    method,
    url
  })
  return response.data.books
}

export default {
  getList
}
