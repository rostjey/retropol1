import React from 'react';
import Link from 'next/link';

const CategoryCard = ({ title, image, slug }) => {
  return (
    <Link href={`/menu/${slug}`}>
      <div style={styles.card}>
        <img src={image} alt={title} style={styles.image} />
        <h3 style={styles.title}>{title}</h3>
      </div>
    </Link>
  );
};

const styles = {
  card: {
    width: '150px',
    height: '170px',
    margin: '1rem',
    border: '1px solid #ddd',
    borderRadius: '12px',
    textAlign: 'center',
    padding: '1rem',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
  },
  image: {
    width: '60px',
    height: '60px',
    objectFit: 'contain',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '1rem',
    color: '#333',
  },
};

export default CategoryCard;
