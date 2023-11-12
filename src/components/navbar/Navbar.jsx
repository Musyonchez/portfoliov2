import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <ul>
        <li>
          <h3>Home</h3>
        </li>
        <li>
          <h3>About me</h3>
        </li>
        <li>
          <h3>Portfolio</h3>
        </li>
        <li>
          <h3>Contact</h3>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
