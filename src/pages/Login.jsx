import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://your-server-ip:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.success) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("is_admin", data.is_admin);
      window.location.href = "/dashboard";
    } else {
      alert("登录失败");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded shadow-lg w-80">
        <h2 className="text-xl mb-4 font-bold text-center">登录系统</h2>
        <input className="w-full p-2 mb-2 bg-gray-700 rounded" placeholder="用户名" value={username} onChange={e => setUsername(e.target.value)} />
        <input className="w-full p-2 mb-4 bg-gray-700 rounded" type="password" placeholder="密码" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin} className="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded">登录</button>
      </div>
    </div>
  );
}