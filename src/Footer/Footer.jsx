import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import assets from "../assets/assets.js";
const Footer = () => {
  return (
    <div className='footer'>
         <div className="row-footer">
        
      <div className="logo">
      <Link to="/">
        <img src={assets.flogo} />
        </Link>
      </div>
     
      </div>
      <div className="row-footer">
      <div className="social">
    <a className="sm_icons" href="https://www.facebook.com/RnCmanipal/"> <i className="fab fa-facebook"></i></a>
    <a className="sm_icons" href="https://www.instagram.com/rnc_manipal?igsh=bnBqZThid2JtMG5n"> <i className="fab fa-instagram"></i></a>
    <a className="sm_icons" href="https://www.linkedin.com/company/robotics-and-circuits/"><i className="fab fa-linkedin"></i></a>
    <a className="sm_icons" href="https://github.com/RNCManipal"><i className="fab fa-github"></i></a>
</div>

    </div>
      <p>&copy; 2026 Robotics and Circuits</p>

      <div className="mahe">
    <p>supported by</p><img src={assets.mahe} />
    
  </div>
  
    </div>
  )
}

export default Footer
