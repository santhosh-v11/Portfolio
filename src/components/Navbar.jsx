import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const[menu,setmenu] = useState("home")


  return (
    <div className='navbar'>
        Software Developer
    <ul className='nav-menu'>
        <li><AnchorLink className='anchor-link'href='#home'><p onClick={()=>setmenu("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setmenu("aboutme")}> AboutMe </p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#skill'><p  onClick={()=>setmenu("skills")}>Skills</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#project'><p onClick={()=>setmenu("projects")}>Projects</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contactme'><p  onClick={()=>setmenu("contact")}>ContactMe</p></AnchorLink></li>
        
    </ul>
    {/* <div className='nav-connect'> <AnchorLink className='anchor-link' offset={50} href='#contactme'><p  onClick={()=>setmenu("contact")}></p>Connect with Me</AnchorLink></div> */}
    
    </div>
    
  )
}

export default Navbar