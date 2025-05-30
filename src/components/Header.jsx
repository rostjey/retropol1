const Header = () => {
  return (
    <header style={styles.header}>
      <img src="/images/WhatsApp Image 2025-05-31 at 01.57.09.jpeg" alt="Retropol Logo" style={styles.logo} />
    </header>
  );
};

const styles = {
  header: {
    width: '100vw',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  logo: {
    width: '100%',
    maxWidth: '200px',
    height: 'auto',
    objectFit: 'contain',
  },
};
export default Header;
