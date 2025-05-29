import React from 'react';
import Link from 'next/link';

const CategoryCard = ({ title, image, slug }) => {
  return (
    <Link href={`/menu/${slug}`} passHref>
      <div style={styles.card}>
        <img src={image} alt={title} style={styles.image} />
        <div style={styles.overlay}>
          <h3 style={styles.title}>{title}</h3>
        </div>
      </div>
    </Link>
  );
};

const styles = {
  card: {
    position: 'relative',
    width: '160px',
    height: '160px',
    margin: '1rem',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)', // karartma efekti
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textShadow: '1px 1px 2px black',
  }
};

export default CategoryCard;
