import React from 'react';
import './portfolio.css';
import projectsimage2 from '../../assets/projectsimage2.png';
import projectsimage4 from '../../assets/projectsimage4.png';

const Portfolio = () => {
  return (
    <div className='portfolio-container'>
      <div className='portfolio-title'>
        <span className='portfolio-top-word'>projects</span>
        <span className='portfolio-bottom-word'>PROJECTS</span>
      </div>
      {/* First Card */}
      <div className='portfolio-content'>
      <div className='portfolio-card'>
        <div className='portfolio-card-inner'>
          <div className='portfolio-card-front'>
            <img src={projectsimage2} alt="" />
          </div>
          <div className='portfolio-card-back'>
            <h4>BIOAGRO</h4>
            <a href="https://biagrosolutions.netlify.app/">KNOW MORE &rarr;</a>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className='portfolio-card'>
        <div className='portfolio-card-inner'>
          <div className='portfolio-card-front'>
            <img src={projectsimage4} alt="" />
          </div>
          <div className='portfolio-card-back'>
            <h4>AP MUSYOKA</h4>
            <a href="https://paysaas.netlify.app/">KNOW MORE &rarr;</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
