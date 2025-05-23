import { useState } from 'react';
export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const handleLogin = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    });
    const data = await res.json();
    alert(data.message);
  };
  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setForm({...form, username: e.target.value})} />
      <input placeholder="Password" type="password" onChange={e => setForm({...form, password: e.target.value})} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}