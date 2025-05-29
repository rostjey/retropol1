import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Diğer içerikler buraya gelecek */}
      <p style={{ textAlign: 'center' }}>Menüyü aşağıdan inceleyebilirsiniz.</p>
    </div>
  );
}

export default App;
