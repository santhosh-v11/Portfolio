
import './App.css';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skill'
import Project from './components/Project'
import Experience from './components/Experience'
import Contact from './components/contact'
import Footer from './components/Footer'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div>

      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App