import React, { useEffect, useState } from 'react'
import { getMyStrategies } from '../api'
import StrategyForm from './StrategyForm'

function Dashboard() {
  const username = localStorage.getItem('username')
  const [strategies, setStrategies] = useState([])

  useEffect(() => {
    if (username) {
      getMyStrategies(username).then(res => setStrategies(res.data || []))
    }
  }, [])

  return (
    <div className="min-h-screen p-6 bg-[#0f172a] text-white">
      <h1 className="text-2xl mb-4">欢迎，{username}</h1>
      <StrategyForm />
      <div className="mt-6">
        <h2 className="text-lg font-bold mb-2">我的策略</h2>
        {strategies.map((s, i) => (
          <div key={i} className="bg-gray-800 p-4 mb-2 rounded">
            <p>区间：{s.lower_price} ~ {s.upper_price}</p>
            <p>网格数：{s.grid_num}，金额：{s.amount}，手续费：{s.fee_rate}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
