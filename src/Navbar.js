import React from 'react'
import './Navbar.css'
import pdf from './files/Resume.pdf'

const Navbar = () => {
  return (
    <>
    <h1 className='site-title'>Gus Beringer</h1>
    <nav>
      <ul className='nav-container'>
        <li className="nav-item">
          <a href="https://www.linkedin.com/in/gusberinger/">LinkedIn</a> 
        </li>
        <li className="nav-item">
          <a href="https://www.github.com/gusberinger">Github</a>
        </li>
        <li className="nav-item">
          <a href={pdf} download="resume.pdf">Resume</a>
        </li>
        <li className="nav-item">
          <a href="mailto:gusberinger">CONTACT</a>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar