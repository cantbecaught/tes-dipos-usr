import db from '../../utils/db.js';
import { hash } from 'bcryptjs';
export default async function handler(req, res) {
  const { username, password } = req.body;
  const client = await db();
  const user = await client.db().collection('users').findOne({ username });
  if (user) return res.json({ message: 'Username sudah terdaftar' });
  await client.db().collection('users').insertOne({ username, password: await hash(password, 10) });
  res.json({ message: 'Registrasi berhasil' });
}
