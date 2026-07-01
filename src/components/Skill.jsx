import React from 'react';
import './Skill.css'
import html from '../assests/html5-original.svg'
import css from '../assests/css3-original.svg'
import js from '../assests/javascript-original.svg'
import bs from '../assests/bootstrap-original.svg'
import tailwind from '../assests/tailwind.png'
import react from '../assests/react-original.svg'
import sql from '../assests/mysql-original.svg'
import expressjs from '../assests/expressjs.png'
import nodejs from '../assests/nodejs.webp'
import git from '../assests/github (1).png'
import nextjs from '../assests/nextjs.png'
import firebase from '../assests/firebase.png'
import theme from '../assests/theme.svg'

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: html, color: '#E34F26' },
    { name: 'CSS', icon: css, color: '#1572B6' },
    { name: 'JavaScript', icon: js, color: '#F7DF1E' },
    { name: 'Bootstrap', icon: bs, color: '#7952B3' },
    { name: 'TailwindCSS', icon: tailwind, color: '#00c4ebff' },
    { name: 'React', icon: react, color: '#61DAFB' },
    { name: 'Next.js', icon: nextjs, color: '#ffffffff' },
    { name: 'SQL', icon: sql, color: '#4479A1' },
    { name: 'Express.js', icon: expressjs, color: '#007396' },
    { name: 'Node.js', icon: nodejs, color: '#00a0239e' },
    { name: 'Firebase', icon: firebase, color: '#ffc107ff' },
    { name: 'Git', icon: git, color: '#F05032' }
  ];

  return (
    <div className='about' id='skill'>
      <div id='about-title'>
        <h1 id='hh'>My Skills</h1>
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