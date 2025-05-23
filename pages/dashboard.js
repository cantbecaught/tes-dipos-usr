import { useEffect, useState } from 'react';
export default function Dashboard() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('/api/me').then(res => res.json()).then(setUser);
  }, []);
  if (!user) return <div>Loading...</div>;
  return <h1>Halo, {user.username}!</h1>;
}