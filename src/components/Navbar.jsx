import React, { useState,useRef } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import open from '../assests/toggle.svg'
import close from '../assests/close.svg'
const Navbar = () => {
  const[menu,setmenu] = useState("home");
  const menuRef = useRef();
  const openmenu = () =>{
    menuRef.current.style.right="0";
  }
  const closemenu = () =>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
        Software Developer
    <img src={open} onClick={openmenu} alt='_=_' className='open'/>
    <ul ref={menuRef} className='nav-menu'>
      <img src={close} alt='X' onClick={closemenu} className='close'/>
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