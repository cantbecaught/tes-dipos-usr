import { MongoClient } from 'mongodb';
const client = new MongoClient(process.env.MONGODB_URI);
export default async function connectDB() {
  if (!client.isConnected) await client.connect();
  return client;
}