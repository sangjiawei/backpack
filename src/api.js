import axios from 'axios'

const api = axios.create({
  baseURL: 'http://43.160.201.61:8000/api',
})

// 登录
export const login = async (username, password) => {
  try {
    const res = await api.post('/login', { username, password })
    return res.data
  } catch (err) {
    return null
  }
}

// 提交策略
export const submitStrategy = (data) => api.post('/create_strategy', data)

// 获取个人策略
export const getMyStrategies = (username) => api.get(`/my/strategies?username=${username}`)

// 管理员接口
export const getAllStrategies = () => api.get('/all/strategies')
export const createUser = (data) => api.post('/create_user', data)
export const updatePassword = (data) => api.post('/update_password', data)
