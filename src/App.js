// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
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