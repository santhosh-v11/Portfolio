import React from 'react'
import './Header.css'
import resume from '../assests/SanthoshV_SoftwareDeveloper.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
  const handleResumeDownload = () => {
    window.open(resume,'_blank')
    // Create a temporary anchor element
    // const link = document.createElement('a');
    // link.href = '/SanthoshV_SoftwareDeveloper.pdf';
    // link.download = 'SanthoshV_SoftwareDeveloper.pdf'; // This forces download
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  }
  return (
    <div className='hero' id='home'>
        <div className='name'>
        <h1><span>I'm Santhosh.V </span></h1><h2 className='typing'>Fullstack Developer</h2>
        <p>Passionate developer focused on building clean and user-friendly web experiences.
        Always exploring, learning, and creating something new.</p>
        </div>
        <div className="hero-action">
            <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contactme'> Connect with me</AnchorLink></div>
            <div className="hero-resume" onClick={handleResumeDownload}>My resume</div>
        </div>
        </div>
  )
}

export default Header
