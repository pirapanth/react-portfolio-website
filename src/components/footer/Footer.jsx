import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Baskaran Pirapanth</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#techskill">Tech Skills</a></li>
        <li><a href="#softskill">Soft Skills</a></li>
        <li><a href="#project">project</a></li>
        <li><a href="#achivement">achivement</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/baskaranpirapanth/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/pirapanth" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="mailto:pirapanthbaskaran@gmail.com" target="_blank" rel="noreferrer" ><FaEnvelope /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; BaskaranPirapanth {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
