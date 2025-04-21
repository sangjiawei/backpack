import React from 'react'
import StrategyForm from './StrategyForm'

function Dashboard() {
  return (
    <div className="dark:bg-[#0f172a] min-h-screen text-white p-4">
      <h1 className="text-2xl mb-4">我的策略</h1>
      <StrategyForm />
    </div>
  )
}

export default Dashboard
