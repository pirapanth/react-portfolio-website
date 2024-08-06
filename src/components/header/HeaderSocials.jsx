import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/baskaranpirapanth/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/pirapanth" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="mailto:pirapanthbaskaran@gmail.com" target="_blank" rel="noreferrer" ><FaEnvelope /></a>
    </div>
  )
}

export default HeaderSocials