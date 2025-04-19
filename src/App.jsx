import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    api_key: "",
    api_secret: "",
    lower_price: "",
    upper_price: "",
    grid_num: "",
    amount_per_order: "",
    fee_rate: "",
    symbol: "ETH_USDC"
  });

  const [logs, setLogs] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch("http://your-server-ip:8080/grid/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        lower_price: parseFloat(form.lower_price),
        upper_price: parseFloat(form.upper_price),
        grid_num: parseInt(form.grid_num),
        amount_per_order: parseFloat(form.amount_per_order),
        fee_rate: parseFloat(form.fee_rate)
      })
    });
    const data = await res.json();
    setLogs(data.details || [data.message || JSON.stringify(data)]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black">
      <div className="max-w-2xl mx-auto bg-white shadow p-6 rounded-xl">
        <h1 className="text-xl font-bold mb-4">🎯 Backpack 网格交易机器人</h1>
        <div className="space-y-4">
          {["api_key", "api_secret", "lower_price", "upper_price", "grid_num", "amount_per_order", "fee_rate"].map((key) => (
            <input
              key={key}
              name={key}
              type={key.includes("secret") ? "password" : "text"}
              placeholder={key.replaceAll("_", " ")}
              value={form[key]}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          ))}
          <select name="symbol" value={form.symbol} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="ETH_USDC">ETH/USDC</option>
          </select>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
            🚀 启动网格
          </button>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold">执行结果：</h2>
          <pre className="text-sm bg-gray-100 p-2 mt-2 max-h-60 overflow-auto">
            {JSON.stringify(logs, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default App;