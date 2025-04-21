import React, { useState } from 'react'
import { submitStrategy } from '../api'

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
      const username = localStorage.getItem('username')
      await submitStrategy({ ...form, username })
      setMsg('✅ 提交成功')
    } catch {
      setMsg('❌ 提交失败')
    }
  }

  return (
    <div className="bg-[#1e293b] p-4 rounded max-w-xl">
      <h2 className="text-lg mb-2">提交策略</h2>
      <input className="w-full p-2 mb-2 bg-gray-700 rounded" name="lower_price" placeholder="下限价格" onChange={handleChange} />
      <input className="w-full p-2 mb-2 bg-gray-700 rounded" name="upper_price" placeholder="上限价格" onChange={handleChange} />
      <input className="w-full p-2 mb-2 bg-gray-700 rounded" name="grid_num" placeholder="网格数量" onChange={handleChange} />
      <input className="w-full p-2 mb-2 bg-gray-700 rounded" name="amount" placeholder="金额" onChange={handleChange} />
      <input className="w-full p-2 mb-4 bg-gray-700 rounded" name="fee_rate" placeholder="手续费" onChange={handleChange} />
      <button className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded" onClick={handleSubmit}>提交</button>
      {msg && <p className="text-sm mt-2">{msg}</p>}
    </div>
  )
}

export default StrategyForm
