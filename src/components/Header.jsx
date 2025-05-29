import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Antebevi QR Menü</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#8b0000',
    color: '#fff',
    padding: '1.5rem',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '2rem',
    margin: 0,
  },
};

export default Header;
