import React, { useState } from 'react'
import ResumeModal from './ResumeModal'
import './Header.css'
import resume from '../assests/resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Header = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const handleResumeDownload = () => {
    window.open(resume, '_blank')
    // Create a temporary anchor element
    // const link = document.createElement('a');
    // link.href = '/SanthoshV_SoftwareDeveloper.pdf';
    // link.download = 'SanthoshV_SoftwareDeveloper.pdf'; // This forces download
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    setIsResumeOpen(true);
  }
  return (
    <div className='hero' id='home'>
      <div className='name'>
        <h1><span>I'm Santhosh.V </span></h1>
        <h2 className='typing'>Fullstack Developer</h2>
        <p>
          Full Stack Developer with 1+ years of experience building responsive, scalable, and user-friendly web applications using React, Node.js, and modern web technologies.
        </p>
      </div>
      <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contactme'> Connect with me</AnchorLink></div>
        <div className="hero-resume" onClick={handleResumeDownload}>My resume</div>
      </div>
      {isResumeOpen && <ResumeModal onClose={() => setIsResumeOpen(false)} />}
    </div>
  )
}
export default Header
