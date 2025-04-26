import React from 'react';
import './Skill.css'
import html from '../assests/html5-original.svg'
import css from '../assests/css3-original.svg'
import js from '../assests/javascript-original.svg'
import bs from '../assests/bootstrap-original.svg'
import react from '../assests/react-original.svg'
import sql from '../assests/mysql-original.svg'
import java from '../assests/java-original.svg'
import py from '../assests/python-original.svg'
import git from '../assests/github (1).png'
import theme from '../assests/theme.svg'

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: html, color: '#E34F26' },
    { name: 'CSS', icon: css, color: '#1572B6' },
    { name: 'JavaScript', icon: js, color: '#F7DF1E' },
    { name: 'Bootstrap', icon: bs, color: '#7952B3' },
    { name: 'React', icon: react, color: '#61DAFB' },
    { name: 'SQL', icon: sql, color: '#4479A1' },
    { name: 'Java', icon: java, color: '#007396' },
    { name: 'Python', icon: py, color: '#3776AB' },
    { name: 'Git', icon: git, color: '#F05032' }
  ];

  return (
        <div className='about' id='skill'>
        <div id='about-title'>
            <h1>My Skills</h1>
            <img src={theme} alt="" />
        </div>

      <div className="skills-container">
        
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-item"
            style={{ '--skill-color': skill.color }}
          >
            <div className="skill-icon">
              <img src={skill.icon} alt={skill.name} />
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
      </div>
    
  );
};

export default Skills;