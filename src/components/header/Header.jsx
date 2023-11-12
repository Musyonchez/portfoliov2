import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header-title'>
            <h1>MUSYOKA</h1>
            <button>Download CV</button>
        </div>
        <div className='header-content'>
            <p>I'm a</p>
            <p>FRONTEND</p>
            <p>DESIGNER.</p>
            <button>CONTACT ME</button>
        </div>
    </div>
  )
}

export default Header