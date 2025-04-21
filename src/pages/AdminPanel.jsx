import React, { useEffect, useState } from 'react'
import api from '../api'

function AdminPanel() {
  const [strategies, setStrategies] = useState([])

  useEffect(() => {
    api.get('/all/strategies').then((res) => setStrategies(res.data))
  }, [])

  return (
    <div className="p-6 text-white bg-[#0f172a] min-h-screen">
      <h1 className="text-2xl font-bold mb-4">平台所有策略</h1>
      {strategies.map((s, i) => (
        <div key={i} className="bg-gray-800 p-4 mb-2 rounded">
          <p>用户：{s.user_id}</p>
          <p>区间：{s.lower_price} ~ {s.upper_price}</p>
          <p>网格数：{s.grid_num}</p>
          <p>金额：{s.amount}</p>
        </div>
      ))}
    </div>
  )
}

export default AdminPanel
