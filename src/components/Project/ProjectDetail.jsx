import { useParams, Link } from "react-router-dom";
import projectList from "./projectList";

function ProjectDetail() {
    const { id } = useParams();
    const project = projectList.find(proj => proj.id.toString() === id);

    if (!project) {
        return <h1>Project not found</h1>;
    }

    return (
        <div className="project-detail">
            <h1 className="project-detail__title">{project.title}</h1>
            <p className="project-detail__text">{project.description}</p>
            <Link to={project.websiteUrl} className="project-detail__link">See Website</Link>
            <img src={project.imageUrl} alt={project.title} className="project-detail__image" />
            <Link to="/" className="project-detail__link">Back to Projects</Link>
        </div>
    );
}

export default ProjectDetail;