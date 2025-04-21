import axios from 'axios'

const api = axios.create({
  baseURL: 'http://43.160.201.61:8000/api',
})

export default api
