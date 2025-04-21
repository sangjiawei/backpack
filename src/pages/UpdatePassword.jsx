import React, { useState } from 'react'
import { updatePassword } from '../api'

function UpdatePassword() {
  const [username, setUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [msg, setMsg] = useState('')

  const handleUpdate = async () => {
    try {
      await updatePassword({ username, new_password: newPassword })
      setMsg('✅ 修改成功')
      setUsername('')
      setNewPassword('')
    } catch {
      setMsg('❌ 修改失败')
    }
  }

  return (
    <div className="p-6 bg-[#1e293b] rounded text-white max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">修改密码</h2>
      <input className="w-full p-2 mb-2 bg-gray-700 rounded" placeholder="用户名" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input className="w-full p-2 mb-4 bg-gray-700 rounded" placeholder="新密码" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      <button className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded" onClick={handleUpdate}>修改密码</button>
      {msg && <p className="text-sm mt-2">{msg}</p>}
    </div>
  )
}

export default UpdatePassword
