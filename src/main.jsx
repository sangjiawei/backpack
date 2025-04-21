import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AdminPanel from './pages/AdminPanel'
import CreateUser from './pages/CreateUser'
import UpdatePassword from './pages/UpdatePassword'

const isAdmin = localStorage.getItem('role') === 'admin'
const isLoggedIn = !!localStorage.getItem('username')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/admin" element={isAdmin ? <AdminPanel /> : <Navigate to="/" />} />
        <Route path="/create-user" element={isAdmin ? <CreateUser /> : <Navigate to="/" />} />
        <Route path="/update-password" element={isAdmin ? <UpdatePassword /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
