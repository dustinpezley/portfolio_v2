import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <About />
      <Project />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
