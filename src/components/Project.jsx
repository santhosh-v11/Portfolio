import React from 'react'
import './Project.css'
import theme from '../assests/theme.svg'
import apple from '../assests/taskmanager.png'
import ecom from '../assests/ecom.png'
import port from '../assests/portfolio.png'
import weather from '../assests/weather.png'

const Project = () => {
    const projectt = [
        { name: 'Portfolio', icon: port, desc:'Developed a responsive Personal Portfolio Website using React.js and it serves as a digital resume, showcasing projects, skills. Implemented dynamic components, smooth animations, and a mobile-friendly UI. Integrated a contact form for direct communication.' ,link:'https://santhosh-v11.github.io/Portfolio/ '},
        { name: 'WeatherApp', icon: weather, desc:'Developed a responsive web application using React.js to provide real-time weather information. Integrated APIs to fetch and display weather data',link:'https://santhosh-v11.github.io/weather/'  },
        { name: 'E-commerce', icon: ecom, desc:'Developed a basic clothing website as part of a personal project to practice responsive ui and practices media quries and Flex and Grid using HTML and CSS alone.'},
        { name: 'TaskManager', icon: apple,desc:'A simple and responsive task management app to add, track, and complete tasks. Built using React.js with Vite, it features dynamic UI updates, task counters, and a clean layout. Deployed via GitHub Pages.This project strengthened my understanding of React hooks, component structure, and deploying production-ready apps.',link:'https://santhosh-v11.github.io/TaskManager/'},
        // { name: 'Git', icon: git, color: '#F05032' }
      ];
    
  return (
    <div className='project' id='project'>
       <div className='project-title'>  
            <h1>Projects</h1>
            <img src={theme} alt="" />
        </div>
        <div className="project-container">
            {projectt.map((pro,index)=>{
                return <div key={index} className='format'>
                        {pro.link ? (
                            <a href={pro.link} target='_blank' rel='noopener noreferrer'>
                                <img src={pro.icon} alt={pro.name} />
                            </a>) : (
                            <img src={pro.icon} alt={pro.name} onClick={() => {
                                if (pro.name === 'E-commerce') {
                                    alert("This is a static project built with HTML and CSS only and I'm developing a advance level E-commerce site.So,Check Other Works!");
                                }
                            }} style={{ cursor: 'pointer' }}/>)}
                            
                         <p>{pro.desc}</p>
                        </div>                
            })}

        </div>
    </div>
  )
}

export default Project