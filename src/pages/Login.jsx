import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const res = await api.post('/login', { username, password })
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('username', username)
      if (username === 'admin') {
        navigate('/admin')
      } else {
        navigate('/dashboard')
      }
    } catch (err) {
      setError('登录失败，请检查账号或密码')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0f172a] text-white">
      <div className="bg-[#1e293b] p-10 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">登录系统</h2>
        <input
          className="w-full p-2 mb-4 bg-gray-700 rounded"
          placeholder="用户名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full p-2 mb-4 bg-gray-700 rounded"
          placeholder="密码"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-400 mb-4">{error}</p>}
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded"
          onClick={handleLogin}
        >
          登录
        </button>
      </div>
    </div>
  )
}

export default Login
