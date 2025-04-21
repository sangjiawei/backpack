import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../api'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const res = await login({ username, password })
      const { token, role } = res.data
      localStorage.setItem('token', token)
      localStorage.setItem('role', role)
      navigate('/dashboard')
    } catch {
      setError('登录失败，请检查账号或密码')
    }
  }

  return (
    <div className="h-screen bg-[#0f172a] flex items-center justify-center px-4">
      <div className="bg-[#1e293b] p-8 rounded shadow-lg w-full max-w-md">
        <div className="flex items-center gap-2 mb-6">
          <img src="/favicon.ico" className="w-6 h-6" alt="logo" />
          <h1 className="text-2xl font-bold text-white">Backpack 登录</h1>
        </div>

        <input
          className="w-full p-2 mb-3 bg-gray-700 text-white rounded placeholder-gray-400"
          placeholder="用户名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded placeholder-gray-400"
          type="password"
          placeholder="密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
          onClick={handleLogin}
        >
          登录
        </button>

        {error && <p className="text-red-400 text-sm mt-4">{error}</p>}
      </div>
    </div>
  )
}

export default Login
