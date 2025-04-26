import React from 'react'
import './Header.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
  return (
    <div className='hero' id='home'>
        <div className='name'>
        <h1><span>I'm Santhosh.V </span></h1><h2 className='typing'>Fullstack Developer</h2>
        <p>Passionate developer focused on building clean and user-friendly web experiences.
        Always exploring, learning, and creating something new.</p>
        </div>
        <div className="hero-action">
            <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contactme'> Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
        </div>
  )
}

export default Header