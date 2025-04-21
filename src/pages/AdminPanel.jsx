import React, { useEffect, useState } from 'react'
import api from '../api'

function AdminPanel() {
  const [strategies, setStrategies] = useState([])

  useEffect(() => {
    api.get('/all/strategies').then((res) => setStrategies(res.data))
  }, [])

  return (
    <div className="p-6 text-white bg-[#0f172a] min-h-screen">
      <h1 className="text-2xl font-bold mb-6">所有用户策略</h1>
      {strategies.length === 0 ? (
        <p className="text-gray-400">暂无策略数据</p>
      ) : (
        strategies.map((s, i) => (
          <div key={i} className="bg-gray-800 p-4 mb-2 rounded shadow">
            <p><strong>用户：</strong>{s.user_id}</p>
            <p><strong>区间：</strong>{s.lower_price} ~ {s.upper_price}</p>
            <p><strong>网格数：</strong>{s.grid_num}</p>
            <p><strong>金额：</strong>{s.amount}</p>
            <p><strong>手续费：</strong>{s.fee_rate}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default AdminPanel
