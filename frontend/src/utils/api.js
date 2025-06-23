const API_BASE = 'http://localhost:6011/api';

export async function register(email, password) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

export async function login(email, password) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

export async function fetchProtected(token) {
  const res = await fetch(`${API_BASE}/protected`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return res.json();
}
