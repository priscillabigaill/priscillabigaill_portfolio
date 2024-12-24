import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main title="Projects" description="Learn about my projects.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
          <p>A collection of some of my past projects! :)</p>
        </div>
      </header>
      <article className="projects-grid">
        {data.map((project) => (
          <div className="cell" key={project.title}>
            <h2>{project.title}</h2>
            <div className="image-container">
              <img src={project.image} alt={project.title} />
            </div>
            <p>{project.desc}</p>
            {/* <small> <strong> {project.date} </strong> </small> */}
            <div>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="view-project-button"
              >
                View Project
              </a>
            </div>
            <div className="technologies">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </article>
    </article>
  </Main>
);

export default Projects;
