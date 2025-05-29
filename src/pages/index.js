import Head from 'next/head';
import Header from '@/components/Header';
import MenuCategory from '@/components/MenuCategory';
import menu from '@/data/menu';

export default function Home() {
  return (
    <>
      <Head>
        <title>Retropol Menü</title>
        <meta name="description" content="Antebevi Cafe Menü Sayfası" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <p style={{ textAlign: 'center' }}>Menüyü aşağıdan inceleyebilirsiniz.</p>
        
        {menu.map((section, index) => (
          <MenuCategory
            key={index}
            category={section.category}
            items={section.items}
          />
        ))}
      </main>
    </>
  );
}
