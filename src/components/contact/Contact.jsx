import React from 'react';
import './contact.css';
import Monalisa from '../monalisa/Monalisa';



const Contact = () => {
  return (
    <div className='contact-container' id='contact'>
      <div className='contact-title'>
        <span className='contact-top-word'>contact me</span>
        <span className='contact-bottom-word'>CONTACT</span>
      </div>
      <div className='contact-bar'></div>
      <div className='contact-content'>
        <div className='contact-text'>
          <h3>Email: <a href="mailto:musyonchez@gmail.com">musyonchez@gmail.com</a></h3>
          <h3>Tel: <a href="tel:+254110475905">+254(110475905)</a></h3>
          <h3>WhatsApp: <a href="https://wa.me/254110475905">+254(110475905)</a></h3>
        </div>
        <div className='contact-socials'>
          <Monalisa />
        </div>
      </div>
    </div>
  );
}

export default Contact;
