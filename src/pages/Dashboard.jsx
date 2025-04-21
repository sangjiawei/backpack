import React from 'react'
import StrategyForm from './StrategyForm'

function Dashboard() {
  const username = localStorage.getItem('username')

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6">
      <h1 className="text-2xl font-bold mb-4">欢迎，{username}</h1>
      <StrategyForm />
    </div>
  )
}

export default Dashboard
