// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Retropol Menü</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#8b0000',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
};

export default Header;
