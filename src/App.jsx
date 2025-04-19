import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";

const isAdmin = localStorage.getItem("is_admin") === "true";
const isLoggedIn = localStorage.getItem("token");

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/admin" element={isAdmin ? <AdminPanel /> : <Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}