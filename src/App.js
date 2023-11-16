import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Aboutme from './components/aboutme/Aboutme';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Repos from './components/repos/Repos';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div className="App">
        <Header />
        <Navbar />
        < Aboutme />
        <Skills />
        <Repos />
       < Portfolio />
        < Contact />
        <Footer />
    </div>
  );
};

export default App;
