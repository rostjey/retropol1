import React from 'react';

const MenuCategory = ({ category, items }) => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>{category}</h2>
      <ul style={styles.list}>
        {items.map((item, index) => (
          <li key={index} style={styles.item}>
            <span>{item.name}</span>
            <span>{item.price}₺</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const styles = {
  section: {
    margin: '2rem 0',
    padding: '0 1rem',
  },
  title: {
    borderBottom: '2px solid #ccc',
    paddingBottom: '0.5rem',
    marginBottom: '1rem',
    fontSize: '1.5rem',
    color: '#8b0000'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
    fontSize: '1.1rem'
  }
};

export default MenuCategory;
