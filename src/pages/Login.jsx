import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../api'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    const res = await login(username, password)
    if (res && res.token) {
      localStorage.setItem('token', res.token)
      localStorage.setItem('username', res.username)
      localStorage.setItem('role', res.role)
      if (res.role === 'admin') {
        navigate('/admin')
      } else {
        navigate('/dashboard')
      }
    } else {
      setError('❌ 登录失败，请检查账号或密码')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
      <div className="bg-[#1e293b] p-8 rounded shadow w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">🎒 Backpack 登录</h2>
        <input
          className="w-full p-2 mb-3 rounded bg-gray-700 border border-gray-600"
          placeholder="用户名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full p-2 mb-3 rounded bg-gray-700 border border-gray-600"
          type="password"
          placeholder="密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="text-red-500 text-sm mb-3">{error}</div>}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          登录
        </button>
      </div>
    </div>
  )
}

export default Login
