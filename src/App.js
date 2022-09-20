import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Project from './components/Project';
import ScrollToTop from 'react-scroll-to-top';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <About />
      <Project />
      <ContactForm />
      <Footer />
      <ScrollToTop smooth color={'#ff0035'} />
    </div>
  );
}

export default App;
