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
      localStorage.setItem('username', res.data.username)
      localStorage.setItem('role', res.data.role)
      if (res.data.role === 'admin') {
        navigate('/admin')
      } else {
        navigate('/dashboard')
      }
    } catch (err) {
      setError('❌ 登录失败，请检查账号或密码')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0f172a] text-white">
      <div className="bg-[#1e293b] p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4 text-center">Backpack 登录</h1>
        <input className="w-full mb-3 p-2 bg-gray-700 rounded" placeholder="用户名" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="w-full mb-3 p-2 bg-gray-700 rounded" placeholder="密码" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <button className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded" onClick={handleLogin}>登录</button>
      </div>
    </div>
  )
}

export default Login
