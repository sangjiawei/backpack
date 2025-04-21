// src/api.js
const API_BASE_URL = "http://api.shuguang.tech:8000/api";

export async function login(username, password) {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });
  return response.json();
}
