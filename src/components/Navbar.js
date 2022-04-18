import React from "react";
import "./Navbar.css";
import pdf from "../files/Resume.pdf";

const Navbar = () => {
  return (
    <header>
      <div onselectstart="return false" className="background">
        <h1 className="site-title">Gus Beringer</h1>
      </div>
      <nav>
        <ul className="nav-container">
          <li className="nav-item" tabIndex={0}>
            <a href="https://www.linkedin.com/in/gusberinger/">LinkedIn</a>
          </li>
          <li className="nav-item" tabIndex={0}>
            <a href="https://www.github.com/gusberinger">Github</a>
          </li>
          <li className="nav-item" tabIndex={0}>
            <a href={pdf} download="resume.pdf">
              Resume
            </a>
          </li>
          <li className="nav-item" tabIndex={0}>
            <a href="mailto:gusberinger@gmail.com">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
