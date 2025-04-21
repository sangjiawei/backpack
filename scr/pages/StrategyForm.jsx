import React, { useState } from 'react'
import api from '../api'

function StrategyForm() {
  const [form, setForm] = useState({
    lower_price: '',
    upper_price: '',
    grid_num: '',
    amount: '',
    fee_rate: '',
  })
  const [msg, setMsg] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    try {
      await api.post('/create_strategy', {
        username: localStorage.getItem('username'),
        ...form,
      })
      setMsg('✅ 提交成功')
    } catch {
      setMsg('❌ 提交失败')
    }
  }

  return (
    <div className="bg-[#1e293b] p-4 rounded">
      <h2 className="text-lg mb-2">提交策略</h2>
      <input className="w-full p-2 mb-2 bg-gray-700 rounded" placeholder="下限价格" name="lower_price" onChange={handleChange} />
      <input className="w-full p-2 mb-2 bg-gray-700 rounded" placeholder="上限价格" name="upper_price" onChange={handleChange} />
      <input className="w-full p-2 mb-2 bg-gray-700 rounded" placeholder="网格数量" name="grid_num" onChange={handleChange} />
      <input className="w-full p-2 mb-2 bg-gray-700 rounded" placeholder="投入金额" name="amount" onChange={handleChange} />
      <input className="w-full p-2 mb-4 bg-gray-700 rounded" placeholder="手续费（如 0.0005）" name="fee_rate" onChange={handleChange} />
      <button className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded" onClick={handleSubmit}>提交</button>
      {msg && <p className="text-sm mt-2">{msg}</p>}
    </div>
  )
}

export default StrategyForm
