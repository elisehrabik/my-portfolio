import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import projectList from './projectList';

function Projects() {
  const rowsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    rowsRef.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects">
      <h1 className="projects__title">My Work</h1>
      <div className="projects__grid">
        {projectList.map((project, index) => (
          <div
            className={`projects__row ${index % 2 !== 0 ? 'reverse-on-desktop' : ''}`}
            key={project.id}
            ref={(el) => (rowsRef.current[index] = el)}
          >
            <img
              src={project.imageUrl}
              alt={`${project.title} visual`}
              className={`projects__image projects__image--${index + 1}`}
            />
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
