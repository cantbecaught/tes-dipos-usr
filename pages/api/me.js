import jwt from 'jsonwebtoken';
export default function handler(req, res) {
  const token = req.headers.cookie?.split('token=')[1];
  if (!token) return res.json({ message: 'Tidak ada token' });
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    res.json(user);
  } catch {
    res.json({ message: 'Token tidak valid' });
  }
}