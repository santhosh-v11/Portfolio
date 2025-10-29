import React from 'react'
import './Project.css'
import theme from '../assests/theme.svg'
import apple from '../assests/taskmanager.png'
import ecom from '../assests/ecomflone.png'
import port from '../assests/port.png'
import weather from '../assests/weather.png'
import cal from '../assests/calender.png'
import estate from '../assests/estate.jpeg'

const Project = () => {
    const projectt = [
        { name: 'Portfolio', icon: port, desc:'Developed a responsive Personal Portfolio Website using React.js and it serves as a digital resume, showcasing projects, skills. Implemented dynamic components, smooth animations, and a mobile-friendly UI. Integrated a contact form for direct communication.' ,link:'https://santhosh-v11.github.io/Portfolio/ '},
        { name: 'Real Estate Landing Page', icon: estate,desc:'Designed and deployed a responsive real estate website using React.js and Tailwind CSS. The project showcases modern UI components including navigation, hero sections, project listings, testimonials, and newsletter subscription. Emphasized clean layout, semantic structure, and mobile-first design principles. Integrated reusable components and optimized for performance and accessibility.',link:'https://santhosh-v11.github.io/Estate/'},

        { name: 'TaskManager', icon: apple,desc:'A simple and responsive task management app to add, track, and complete tasks. Built using React.js with Vite, it features dynamic UI updates, task counters, and a clean layout. Deployed via GitHub Pages.This project strengthened my understanding of React hooks, component structure, and deploying production-ready apps.',link:'https://santhosh-v11.github.io/TaskManager/'},

       
        { name: 'E-commerce', icon: ecom, desc:"A responsive and visually appealing kids' fashion e-commerce homepage built using HTML, CSS, and JavaScript. The design replicates a professional storefront with promotional banners, product showcases, category highlights, and user-friendly navigation—optimized for both desktop and mobile devices.", link:'https://santhosh-v11.github.io/Ecom/'},

         { name: 'WeatherApp', icon: weather, desc:'Developed a responsive web application using React.js to provide real-time weather information. Integrated APIs to fetch and display weather data',link:'https://santhosh-v11.github.io/weather/'  },
        
        { name: 'Appoinment Calender', icon: cal,desc:'A responsive web application built to streamline appointment scheduling for clinic staff. Features include secure login authentication, calendar-based booking interface, and intuitive navigation for managing daily appointments. Developed using React.js with TailwindCSS',link:'https://santhosh-v11.github.io/appointmentcalender/'},
        
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
                            <h1>{pro.name}</h1>
                         <p>{pro.desc}</p>
                        </div>                
            })}

        </div>
    </div>
  )
}

export default Project