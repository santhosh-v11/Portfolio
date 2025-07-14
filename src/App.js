
import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skill'
import Project from './components/Project'
import Contact from './components/contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>

      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App