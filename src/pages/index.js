import Head from 'next/head';
import Header from '../components/Header';
import CategoryGrid from '../components/CategoryGrid';

export default function Home() {
  return (
    <>
      <Head>
        <title>Retropol QR Menü</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
          KATAGORİLER
        </p>
        <CategoryGrid />
      </main>
    </>
  );
}
