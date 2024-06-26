import React from 'react';
import Navbar from '../components/navbar.jsx';
import projects from '../data/projects.js';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <img src={project.image} alt={project.name} />
            <p>{project.description}</p>
            <a href={project.url}>View Project</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
