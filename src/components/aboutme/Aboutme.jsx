import React from 'react'
import './aboutme.css'
import profilephoto from '../../assets/profilephoto.jpeg'

const Aboutus = () => {
  return (
    <div className='aboutme-container' id='aboutme'>
      <div className='aboutme-title'>
        <span className='about-top-word'>about me</span>
        <span className='about-bottom-word'>ABOUT</span>
      </div>
      <div className='aboutme-content'>
        <div className='aboutme-profile'>
          <img src={profilephoto} alt="" />
        </div>
        <div className='aboutme-text'>
          <h2>My name is Philip Musyoka</h2>
          <p>I am currently based in Nairobi Kenya.  I am excited to start new projects and to work with clients from all over the world. I am skilled in a variety of web development technologies, including HTML, CSS, JavaScript, React, and MySQL. </p>
          <p>In addition to my technical skills, I am also a strong communicator and team player. I am able to work effectively with clients and other developers to deliver high-quality results. I am also always willing to go the extra mile to help my team members and to learn new things. If you are looking for a web developer who is passionate about their work and who is committed to delivering high-quality results, then I am the person for you.</p>
        </div>
      </div>
    </div>
  )
}

export default Aboutus