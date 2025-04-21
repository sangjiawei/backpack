import React, { useEffect, useState } from 'react'
import { getAllStrategies } from '../api'

function AdminPanel() {
  const [strategies, setStrategies] = useState([])

  useEffect(() => {
    getAllStrategies().then(res => setStrategies(res.data || []))
  }, [])

  return (
    <div className="min-h-screen p-6 bg-[#0f172a] text-white">
      <h1 className="text-2xl font-bold mb-4">所有用户策略</h1>
      {strategies.length === 0 ? (
        <p className="text-gray-400">暂无数据</p>
      ) : (
        strategies.map((s, i) => (
          <div key={i} className="bg-gray-800 p-4 mb-2 rounded">
            <p>用户：{s.user_id}</p>
            <p>区间：{s.lower_price} ~ {s.upper_price}</p>
            <p>网格数：{s.grid_num}，金额：{s.amount}，手续费：{s.fee_rate}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default AdminPanel
