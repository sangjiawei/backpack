// src/pages/Login.jsx
import React, { useState } from "react";
import { login } from "../api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(username, password);
    if (result?.token) {
      alert("登录成功");
      localStorage.setItem("token", result.token);
      window.location.href = "/dashboard";
    } else {
      setError("登录失败，请检查账号或密码");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold text-center text-white mb-4">Backpack 登录</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="用户名"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
          />
          <input
            type="password"
            placeholder="密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
          />
          {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            登录
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
