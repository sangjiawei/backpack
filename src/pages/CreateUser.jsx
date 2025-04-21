import React, { useState } from 'react'
import { createUser } from '../api'

function CreateUser() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('user')
  const [msg, setMsg] = useState('')

  const handleCreate = async () => {
    try {
      await createUser({ username, password, role })
      setMsg('✅ 创建成功')
      setUsername('')
      setPassword('')
    } catch {
      setMsg('❌ 创建失败')
    }
  }

  return (
    <div className="p-6 bg-[#1e293b] rounded text-white max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">创建新用户</h2>
      <input className="w-full p-2 mb-2 bg-gray-700 rounded" placeholder="用户名" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input className="w-full p-2 mb-2 bg-gray-700 rounded" placeholder="密码" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <select className="w-full p-2 mb-4 bg-gray-700 rounded" value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">普通用户</option>
        <option value="admin">管理员</option>
      </select>
      <button className="w-full bg-green-600 hover:bg-green-700 p-2 rounded" onClick={handleCreate}>创建用户</button>
      {msg && <p className="text-sm mt-2">{msg}</p>}
    </div>
  )
}

export default CreateUser
