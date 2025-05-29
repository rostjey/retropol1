import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  { title: 'Yemekler', slug: 'yemekler', image: '/vercel.svg' },
  { title: 'Tatlılar', slug: 'tatlilar', image: '/next.svg' },
  { title: 'İçecekler', slug: 'icecekler', image: '/globe.svg' },
  { title: 'Nargileler', slug: 'nargileler', image: '/images/f995-dark-side-intro-hookah-0-1-1600x1600.jpg' },
];

const CategoryGrid = () => {
  return (
    <div style={styles.grid}>
      {categories.map((cat, idx) => (
        <CategoryCard key={idx} {...cat} />
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '2rem',
  },
};

export default CategoryGrid;
