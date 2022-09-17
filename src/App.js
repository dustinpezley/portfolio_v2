import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <About />
      <Footer />
    </div>
  );
}

export default App;
