import './App.css';

import React from 'react'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Aboutme from './components/aboutme/Aboutme';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Whyme from './components/whyme/Whyme';
import Repos from './components/repos/Repos';

const App = () => {
  return (
    <>
    <Header />
    <Navbar />
    <Aboutme />
    <Skills />
    <Whyme />
    <Repos />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  )
}

export default App