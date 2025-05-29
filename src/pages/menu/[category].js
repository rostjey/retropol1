import { useRouter } from 'next/router';
import menu from '@/data/menu';
import ProductList from '@/components/ProductList';
import Header from '@/components/Header';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  const section = menu.find(sec => sec.category === category);

  if (!section) {
    return (
      <div>
        <Header />
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
          Bu kategori bulunamadı.
        </p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <h2 style={styles.heading}>{category.toUpperCase()}</h2>
      <ProductList items={section.items} />
    </div>
  );
};

const styles = {
  heading: {
    textAlign: 'center',
    marginTop: '2rem',
    fontSize: '1.5rem',
    color: '#8b0000',
  },
};

export default CategoryPage;
