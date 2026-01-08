import React from 'react'
import './Project.css'
import theme from '../assests/theme.svg'
import apple from '../assests/taskmanager.png'
import ecom from '../assests/ecomflone.png'
import port from '../assests/port.png'
import weather from '../assests/weather.png'
import cal from '../assests/calender.png'
import estate from '../assests/estate.jpeg'
import gemini from '../assests/gemini-clone.jpeg'
import coffeeshop from '../assests/coffe shopp.png'
import mp3 from '../assests/mp3.png'
import linkedin from '../assests/linkedin.png'

const Project = () => {
    const projectt = [
        { name: 'Portfolio', icon: port, desc:'Developed a responsive Personal Portfolio Website using React.js and it serves as a digital resume, showcasing projects, skills. Implemented dynamic components, smooth animations, and a mobile-friendly UI. Integrated a contact form for direct communication.' ,link:'https://santhosh-v11.github.io/Portfolio/ '},
        { name: 'Real Estate Landing Page', icon: estate,desc:'Designed and deployed a responsive real estate website using React.js and Tailwind CSS. The project showcases modern UI components including navigation, hero sections, project listings, testimonials, and newsletter subscription. Emphasized clean layout, semantic structure, and mobile-first design principles. Integrated reusable components and optimized for performance and accessibility.',link:'https://santhosh-v11.github.io/Estate/'},
        { name: 'Recreated Gemini-2', icon: gemini,desc:'Built a Gemini AI Clone using React, Vite, andCSS. Integrated OpenAI API for intelligent chatbot responses and implemented typing effects with Markdown rendering. Utilized useContext for efficient global state sharing, ensuring seamless user interaction with fade animation and responsive, modern conversational UI design.',link:'https://santhosh-v11.github.io/gemini-clone/'},
        { name: 'SunCafe', icon: coffeeshop,desc:'A coffee theme based single page website(Ui) for coffee shop.This site ensures a responsive layout and consistent user experience across laptop,mobile,tablet Large all the screens. This project was built as a UI-focused frontend project,emphasizing layout design,responsiveness and to showcase my ui skills. Design and developed the website by my own.',link:'https://suncafe.vercel.app/'},
        { name: 'TamilMp3 Downloader', icon: mp3,desc:'A simple and elegant Responsive landing page for a Tamil MP3 downloader application. Built with HTML, CSS and Bootstrap, this page tells about the application, the usage with a preview, and provides download links.',link:'https://santhosh-v11.github.io/Tamil-MP-3-downloader-Landingpage/'},
        { name: 'Linkedin UI', icon: linkedin,desc:'This project is part of my internship work to learn and improve skills in Tailwind CSS. The main task was to clone the LinkedIn UI using Tailwind,focusing on layout,responsiveness,and component styling to get hands-on experience.',link:'https://linkedin-ui-clone-chi.vercel.app/'},

        { name: 'TaskManager', icon: apple,desc:'A simple and responsive task management app to add, track, and complete tasks. Built using React.js with Vite, it features dynamic UI updates, task counters, and a clean layout. Deployed via GitHub Pages.This project strengthened my understanding of React hooks, component structure, and deploying production-ready apps.',link:'https://santhosh-v11.github.io/TaskManager/'},

       
        { name: 'E-commerce', icon: ecom, desc:"Designed and developed a responsive e-commerce front-end using React.js with a Kids Fashion theme.Focused on modern UI design, reusable components, and mobile-first responsiveness for cross-device compatibility.", link:'https://santhosh-v11.github.io/Ecom/'},

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
                                <h1>{pro.name}</h1>
                                <p>{pro.desc}</p>
                            </a>) : (<img src={pro.icon} alt={pro.name}/>)}
                            
                         
                        </div>                
            })}

        </div>
    </div>
  )
}

export default Project