import React from 'react'
import './About.css'
import theme from 'E:/portfolio/portfolio/src/assests/theme.svg'
const About = () => {
    return (
        <div className='about' id='about'>
            <div className='about-title' data-aos="fade-right">
                <h1>About Me</h1>
                <img src={theme} alt="" />
            </div>
            <div className='about-sec' data-aos="fade-up" data-aos-delay="200">
                <div className="about-right">
                    <div className="about-para">
                        <p>I'm a Web Developer currently working as an Associate Web Consultant, passionate about building responsive, scalable, and user-friendly web applications. With a strong foundation in frontend development and growing expertise in the MERN stack, I enjoy transforming ideas into practical digital solutions. I believe in writing clean, maintainable code, solving problems with a logical approach, and continuously learning modern technologies to improve my skills and deliver high-quality applications.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About