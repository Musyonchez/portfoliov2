import React from 'react'
import './skills.css'

import skillshtml from '../../assets/brandhtml.png';
import skillscss from '../../assets/brandcss.png';
import skillsbootstrap from '../../assets/brandbootstrap.png';
import skillsjs from '../../assets/brandjs.png';
import skillsreact from '../../assets/brandreact.png';
import skillsmysql from '../../assets/brandmysql.png';


const Brand = () => {
  return (
    <div className='skills-container' id='skills'>
      <a href="https://www.w3.org/html/" target="_blank"><img src={skillshtml} alt="HTML" /></a>
      <a href="https://www.w3.org/TR/CSS/" target="_blank"><img src={skillscss} alt="CSS" /></a>
      <a href="https://getbootstrap.com/" target="_blank"><img src={skillsbootstrap} alt="BOOTSTRAP" /></a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src={skillsjs} alt="JS" /></a>
      <a href="https://reactjs.org/" target="_blank"><img src={skillsreact} alt="REACT" /></a>
      <a href="https://www.mysql.com/" target="_blank"><img src={skillsmysql} alt="MYSQL" /></a>
    </div>
  )
}

export default Brand
