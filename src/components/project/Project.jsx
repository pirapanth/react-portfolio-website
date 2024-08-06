import React from 'react';
import IMG1 from '../../assets/movieclick.png';
import IMG2 from '../../assets/captiongenerator.png';
import IMG3 from '../../assets/loansystem.png';
import IMG4 from '../../assets/leohotel.png';
import IMG5 from '../../assets/starshop.png';
import IMG6 from '../../assets/ithalishop.png';

import './project.css';

const project = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Movie Click Website',
      img: IMG1,
      description:
        'It’s a movie watching website that includes latest movies and trailers.User can create a account.',
      technologies: 'React.js | Node.js | Express.js | MongoDB',
      link: 'https://github.com/pirapanth/movie-click-mern',
      github: 'https://github.com/pirapanth/movie-click-mern',
    },
    {
      id: 2,
      title: 'LEO Hotel Website',
      img: IMG4,
      description:
        'It’s a Hotel information website that includes diverse destinations, premier services & offers details',
      technologies: 'React.js | Vue.js',
      link: 'https://leo-hotel.netlify.app/',
      github: 'https://github.com/pirapanth/LEO-hotel-website',
    },
    {
      id: 3,
      title: 'Social Media Caption Generator',
      img: IMG2,
      description: 'Application for automatically generates captions for social media posts using machine learning',
      technologies: 'Python | Jupyter Notebook',
      link: 'https://github.com/pirapanth/Social-media-caption-generator',
      github: 'https://github.com/pirapanth/Social-media-caption-generator',
    },
    {
      id: 4,
      title: 'Loan-Reconciliation-System',
      img: IMG3,
      description:
        'Application for automatically calculate the all loan relatate calculations & It’s work mern technology',
      technologies: 'React.js | Node.js | Express.js | MySQL',
      link: 'https://github.com/pirapanth/Bank-Advise-Loan-Reconciliation-System',
      github: 'https://github.com/pirapanth/Bank-Advise-Loan-Reconciliation-System',
    },
    {
      id: 5,
      title: 'Star Shop E-Commerce Website',
      img: IMG5,
      description:
        'E-commerce website that includes customer can purchase, valuable product reviews.',
      technologies: 'Wordpress',
      link: 'https://github.com/pirapanth/startshop',
      github: 'https://github.com/pirapanth/startshop',
    },
    {
      id: 6,
      title: 'Ithali Book Shop Management System',
      img: IMG6,
      description:
        'Management system that includes sales and customer information for a bookstore.',
      technologies: 'react.js | node.js | MySql',
      github: 'https://github.com/pirapanth/bookshop-gitbash',
    },
  ];

  return (
    <section id="project">
      <h2>My Recent Projects</h2>

      <div className="container project__container">
        {soloProjects.map((pro) => (
          <article className="project__item" key={pro.id}>
            <div className="project__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="project__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="project__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default project;
