import db from '../../utils/db';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
export default async function handler(req, res) {
  const { username, password } = req.body;
  const client = await db();
  const user = await client.db().collection('users').findOne({ username });
  if (!user) return res.json({ message: 'User tidak ditemukan' });
  const match = await compare(password, user.password);
  if (!match) return res.json({ message: 'Password salah' });
  const token = jwt.sign({ username }, process.env.JWT_SECRET);
  res.setHeader('Set-Cookie', `token=${token}; Path=/`);
  res.json({ message: 'Login berhasil' });
}