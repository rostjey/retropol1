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

      {/* Arka Plan Videosu */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '100vw',
          minHeight: '100vh',
          objectFit: 'cover',
          zIndex: -1,
          opacity: 0.4,
        }}
      >
        <source src="/videos/WhatsApp Video 2025-05-31 at 01.18.53.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <p style={{ textAlign: 'center', marginTop: '2rem', color: 'white' }}>
          KATAGORİLER
        </p>
        <CategoryGrid />
      </main>
    </>
  );
}
