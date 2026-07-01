import React from 'react';
import './Experience.css';
import theme from '../assests/theme.svg';

const Experience = () => {
    const experiences = [
        {
            role: "Associate Consultant - Web Development",
            company: "Brit Technology Services LLC(BTS)",
            duration: "March 2026 - Present",
            description: "Currently working as a Web Developer at Brit Technology Services LLC (BTS), contributing to the development of innovative web applications and solutions."
        },
        {
            role: "Full Stack Engineer Intern",
            company: "CyberDude Networks Pvt Ltd",
            duration: "October 2025 - March 2026",
            description: "Gained hands on experience in full-stack development, working on both frontend and backend technologies. Contributed to building scalable web applications and learned industry best practices."
        }
    ];

    return (
        <div className='experience' id='experience'>
            <div className='experience-title' data-aos="fade-right">
                <h1>Experience</h1>
                <img src={theme} alt="" />
            </div>
            <div className="experience-timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className='timeline-item' data-aos="fade-up" data-aos-delay={index * 200}>
                        <div className='timeline-dot'></div>
                        <div className='timeline-content'>
                            <div className='timeline-header'>
                                <h2>{exp.role}</h2>
                                <span className='duration-badge'>{exp.duration}</span>
                            </div>
                            <h3>{exp.company}</h3>
                            <p>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience;
