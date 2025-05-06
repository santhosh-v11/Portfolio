import React from 'react'
import './About.css'
import theme from 'E:/portfolio/portfolio/src/assests/theme.svg'
const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={theme} alt="" />
        </div>
        <div className='about-sec'>
            <div className="about-right">
                <div className="about-para">
                    <p>I’m a passionate and curious developer who enjoys building responsive and user-friendly web applications. As a recent graduate, I’m constantly exploring new technologies and turning ideas into real-world projects. I believe in writing clean code, solving problems creatively, and continuously learning to grow both personally and professionally.
                    </p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default About