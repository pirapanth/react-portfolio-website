import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';


import './topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#techskill" onClick={()=> setActiveNav('#techskill')} className={activeNav === '#techskill' ? 'active' : ''}><BiBook /></a>
      <a href="#project" onClick={()=> setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Topbar;