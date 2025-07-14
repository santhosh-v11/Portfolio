import React from 'react'
import './Project.css'
import theme from '../assests/theme.svg'
import apple from '../assests/taskmanager.png'
import ecom from '../assests/ecomflone.png'
import port from '../assests/port.png'
import weather from '../assests/weather.png'

const Project = () => {
    const projectt = [
        { name: 'Portfolio', icon: port, desc:'Developed a responsive Personal Portfolio Website using React.js and it serves as a digital resume, showcasing projects, skills. Implemented dynamic components, smooth animations, and a mobile-friendly UI. Integrated a contact form for direct communication.' ,link:'https://santhosh-v11.github.io/Portfolio/ '},
        { name: 'WeatherApp', icon: weather, desc:'Developed a responsive web application using React.js to provide real-time weather information. Integrated APIs to fetch and display weather data',link:'https://santhosh-v11.github.io/weather/'  },
        { name: 'E-commerce', icon: ecom, desc:"A responsive and visually appealing kids' fashion e-commerce homepage built using HTML, CSS, and JavaScript. The design replicates a professional storefront with promotional banners, product showcases, category highlights, and user-friendly navigation—optimized for both desktop and mobile devices.", link:'https://santhosh-v11.github.io/Ecom/'},
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
                            <img src={pro.icon} alt={pro.name}/>)}
                            
                         <p>{pro.desc}</p>
                        </div>                
            })}

        </div>
    </div>
  )
}

export default Project