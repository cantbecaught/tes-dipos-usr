import { useState } from 'react';
export default function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const handleRegister = async () => {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    });
    const data = await res.json();
    alert(data.message);
  };
  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Username" onChange={e => setForm({...form, username: e.target.value})} />
      <input placeholder="Password" type="password" onChange={e => setForm({...form, password: e.target.value})} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}