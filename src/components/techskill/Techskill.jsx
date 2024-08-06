import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './techskill.css';

const techskill = () => {
  return (
    <section id="techskill">
      <h2>Technical Skills</h2>
      <div className="container techskill__container">
        <div className="techskill__left">
          <h3>Programming Languages</h3>
          <div className="techskill__content">
          <article className="techskill__details">
              <BsFillPatchCheckFill className="techskill__details-icon" />
              <h4>Java</h4>
            </article>
          <article className="techskill__details">
              <BsFillPatchCheckFill className="techskill__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="techskill__details">
              <BsFillPatchCheckFill className="techskill__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="techskill__details">
              <BsFillPatchCheckFill className="techskill__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="techskill__details">
              <BsFillPatchCheckFill className="techskill__details-icon" />
              <h4>PHP</h4>
            </article>
            <article className="techskill__details">
              <BsFillPatchCheckFill className="techskill__details-icon" />
              <h4>C++</h4>
            </article>
            <article className="techskill__details">
              <BsFillPatchCheckFill className="techskill__details-icon" />
              <h4>Python</h4>
            </article>
          </div>
        </div>
        <div className="techskill__right">
          <h3>Frontend Frameworks</h3>
          <div className="techskill__content">
          <article className="techskill__details">
              <BsFillPatchCheckFill className="techskill__details-icon" />
              <h4>React.js</h4>
            </article>
            <article className="techskill__details">
              <BsFillPatchCheckFill className="techskill__details-icon" />
              <h4>Vue.js</h4>
            </article>
          </div>
          <br />
          <h3>Backend Frameworks</h3>
          <div className="techskill__content">
          <article className="techskill__details">
              <BsFillPatchCheckFill className="techskill__details-icon" />
              <h4>Django</h4>
            </article>
            <article className="techskill__details">
              <BsFillPatchCheckFill className="techskill__details-icon" />
              <h4>Node.js</h4>
            </article>
            <article className="techskill__details">
              <BsFillPatchCheckFill className="techskill__details-icon" />
              <h4>Express.js</h4>
            </article>
          </div>
        </div>
        <div className="techskill__left">
          <h3>Databases</h3>
          <div className="techskill__content">
          <article className="techskill__details">
              <BsFillPatchCheckFill className="techskill__details-icon" />
              <h4>MySQL</h4>
            </article>
          <article className="techskill__details">
              <BsFillPatchCheckFill className="techskill__details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="techskill__details">
              <BsFillPatchCheckFill className="techskill__details-icon" />
              <h4>PostgreSQL</h4>
            </article>
          </div>
          <br />
          <h3>Testing Tools</h3>
          <div className="techskill__content">
          <article className="techskill__details">
              <BsFillPatchCheckFill className="techskill__details-icon" />
              <h4>Selenium</h4>
            </article>
          <article className="techskill__details">
              <BsFillPatchCheckFill className="techskill__details-icon" />
              <h4>TestNG</h4>
            </article>
          </div>
        </div>
        <div className="techskill__right">
          <h3>Version Control</h3>
          <div className="techskill__content">
          <article className="techskill__details">
              <BsFillPatchCheckFill className="techskill__details-icon" />
              <h4>Git/GitHub</h4>
            </article>
          </div>
          <br />
          <h3>Styling</h3>
          <div className="techskill__content">
          <article className="techskill__details">
              <BsFillPatchCheckFill className="techskill__details-icon" />
              <h4>SCSS</h4>
            </article>
            <article className="techskill__details">
              <BsFillPatchCheckFill className="techskill__details-icon" />
              <h4>Tailwind CSS</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default techskill