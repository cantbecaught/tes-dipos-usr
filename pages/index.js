import Link from 'next/link';
export default function Home() {
  return (
    <div style={{textAlign: 'center', padding: '50px'}}>
      <h1>Selamat Datang di Dispost Clone</h1>
      <Link href="/register"><button>Mulai Gratis</button></Link>
    </div>
  );
}