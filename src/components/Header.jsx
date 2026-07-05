import React from 'react'
import {trackEvent} from './analytics'
import './Header.css'
import resume from '../assests/resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Header = () => {

  const handleResumeDownload = () => {
    trackEvent('resume_download', { location: 'hero' });
    window.open(resume, '_blank');
  };

  return (
    <div className='hero' id='home' data-aos="fade-in">
      <div className='name' data-aos="fade-up" data-aos-delay="200">
        <h1><span>I'm Santhosh.V </span></h1>
        <h2 className='typing'>Fullstack Developer</h2>
        <p>
          Full Stack Developer with 1+ years of experience building responsive, scalable, and user-friendly web applications using React, Node.js, and modern web technologies.
        </p>
      </div>
      <div className="hero-action" data-aos="fade-up" data-aos-delay="400">
        <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contactme'> Connect with me</AnchorLink></div>
        <div className="hero-resume" onClick={handleResumeDownload}>My resume</div>
      </div>

    </div>
  )
}
export default Header
