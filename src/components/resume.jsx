import React from 'react';
import Navbar from '../components/navbar.jsx';
import { studies, experiences } from '../data/resume.js';

const Resume = () => {
    console.log(studies);
  return (
    <div>
      <Navbar />
      <h1>Resume</h1>
      <h2>Work Experience</h2>
      <ul>
        {experiences.map(experience => (
          <li key={experience.id}>
            <h3>{experience.title} at {experience.company}</h3>
            <p>{experience.date}</p>
          </li>
        ))}
      </ul>
      <h2>Education</h2>
      <ul>
        {studies.map(study => (
          <li key={study.id}>
            <h3>{study.title}</h3>
            <p>{study.institution} - {study.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;
