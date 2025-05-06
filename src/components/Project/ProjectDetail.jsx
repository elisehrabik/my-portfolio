import { useParams, Link } from 'react-router-dom';
import projectList from './projectList';

function ProjectDetail() {
  const { id } = useParams();
  const project = projectList.find((proj) => proj.id.toString() === id);

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <div className="project-detail">
      <h1 className="project-detail__title">{project.title}</h1>
      <p className="project-detail__text">{project.description}</p>

      <div className="project-detail__columns-wrapper">
        <div className="project-detail__img-column">
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-detail__image"
            />
          </a>
        </div>

        <div className="project-detail__skills-column">
          <h2 className="project-detail__skills-title">Technologies Used</h2>
          <ul className="project-detail__skills-list">
            {project.technologies.map((tech, index) => (
              <li key={index} className="project-detail__skills-item">
                {project.technologies[index]}
              </li>
            ))}
          </ul>
          <h2 className="project-detail__skills-title">Skills Employed</h2>
          <ul className="project-detail__skills-list">
            {project.skills.map((skills, index) => (
              <li key={index} className="project-detail__skills-item">
                {project.skills[index]}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="project-detail__full-description">{project.full_description}</p>
      <Link to="/#projects" className="project-detail__link">
        Back to Projects
      </Link>
    </div>
  );
}

export default ProjectDetail;
