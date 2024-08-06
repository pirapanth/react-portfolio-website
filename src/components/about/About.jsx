import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import ME from '../../assets/pic.jpg';
import './about.css';

const about = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Bachelor of Computer Science</h5>
              <small>Trincomalee Campus <br /> EUSL <br />
              2020-2023</small>
              <h5>G.C.E Advanced Level in Physical
              Science</h5>
              <small>M.M.T.M.V <br /> Thirukkovil <br /> 2018</small>
            </article>
            <article className="about__card">
              <FaBriefcase className="about__icon" />
              <h5>Internship</h5>
              <small>KING SPARROW <br />
              GROUP OF COMPANIES (PVT) LTD <br /> March 2024 - September 2024</small>
            </article>
          </div>
          <p>Internship Junior Software Engineer with 6 months of techskill in full-stack development. Good at building high-quality software and contributing to organizational succeed. Strong skills in problem-solving and teamwork. Always eager to learn and improve.</p>
        </div>
      </div>
    </section>
  )
}

export default about