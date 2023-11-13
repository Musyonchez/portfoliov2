import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Aboutme from './components/aboutme/Aboutme';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Repos from './components/repos/Repos';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Skills />
        <Repos />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
