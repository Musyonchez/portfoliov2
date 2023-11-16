import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header-container' id='header'>
      <div className='header-title'>
        <h1>MUSYOKA</h1>
      </div>
      <div className='header-content'>
        <p>I'm a</p>
        <p>FRONTEND</p>
        <p>DESIGNER.</p>
        <button onClick={() => {
          const contactSection = document.getElementById('contact');
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }}>Contact ME</button>
      </div>
    </div>
  );
};

export default Header;
