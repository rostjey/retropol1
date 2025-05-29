import React from 'react';

const ProductList = ({ items }) => {
  return (
    <div style={styles.list}>
      {items.map((item, idx) => (
        <div key={idx} style={styles.item}>
          <span>{item.name}</span>
          <span>{item.price}₺</span>
        </div>
      ))}
    </div>
  );
};

const styles = {
  list: {
    padding: '1rem',
    maxWidth: '600px',
    margin: '0 auto',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.75rem',
    borderBottom: '1px solid #eee',
    fontSize: '1.1rem',
  }
};

export default ProductList;
