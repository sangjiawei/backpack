import React, { useState } from 'react'
import api from '../api'

function UpdatePassword() {
  const [username, setUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [msg, setMsg] = useState('')

  const handleUpdate = async () => {
    try {
      await api.post('/update_password', {
        username,
        new_password: newPassword,
      })
      setMsg('✅ 修改成功')
      setUsername('')
      setNewPassword('')
    } catch {
      setMsg('❌ 修改失败')
    }
  }

  return (
    <div className="bg-[#1e293b] p-4 rounded max-w-xl mx-auto mt-10 text-white">
      <h2 className="text-xl font-bold mb-4">修改用户密码</h2>
      <input className="w-full p-2 mb-2 bg-gray-700 rounded" placeholder="用户名" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input className="w-full p-2 mb-4 bg-gray-700 rounded" placeholder="新密码" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      <button className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded" onClick={handleUpdate}>修改密码</button>
      {msg && <p className="text-sm mt-2">{msg}</p>}
    </div>
  )
}

export default UpdatePassword
