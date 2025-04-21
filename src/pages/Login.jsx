import React, { useState } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      alert('登录成功')
    } else {
      setError('账号或密码错误')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
      <div className="bg-[#1e293b] p-8 rounded shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Backpack 登录</h1>
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
        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded"
          onClick={handleLogin}
        >
          登录
        </button>
      </div>
    </div>
  )
}

export default Login