import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div >
      <hr />
      <div className='footer'>
        <div className="one">
          <p></p>
        </div>
        <div className="tow">
          <p>©{new Date().getFullYear()} Developed by Santhosh.V</p>
        </div>
      </div>
    </div>
  )
}

export default Footer