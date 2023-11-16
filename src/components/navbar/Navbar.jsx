import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-buttons'>
        <button onClick={() => {
          const homeSection = document.getElementById('header');
          homeSection.scrollIntoView({ behavior: 'smooth' });
        }}>
          Home
        </button>
        <button onClick={() => {
          const aboutSection = document.getElementById('aboutme');
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }}>
          About Me
        </button>
        <button onClick={() => {
          const projectsSection = document.getElementById('projects');
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }}>
          Portfolio
        </button>
        <button onClick={() => {
          const contactSection = document.getElementById('contact');
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
