import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './softskill.css';

const softskill = () => {
  return (
    <section id="softskill">
      <h2>Soft Skills</h2>
      <div className="container softskill__container">
        <div className="softskill">
          <div className="softskill__content">
          <article className="softskill__details">
              <BsFillPatchCheckFill className="softskill__details-icon" />
              <h4>Leadership</h4>
            </article>
          <article className="softskill__details">
              <BsFillPatchCheckFill className="softskill__details-icon" />
              <h4>Team worker</h4>
            </article>
            <article className="softskill__details">
              <BsFillPatchCheckFill className="softskill__details-icon" />
              <h4>Self learner</h4>
            </article>
            <article className="softskill__details">
              <BsFillPatchCheckFill className="softskill__details-icon" />
              <h4>Good communication</h4>
            </article>
            <article className="softskill__details">
              <BsFillPatchCheckFill className="softskill__details-icon" />
              <h4>Creative thinking</h4>
            </article>
            <article className="softskill__details">
              <BsFillPatchCheckFill className="softskill__details-icon" />
              <h4>Quick learner</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default softskill