import ProjectCard from "./ProjectCard";
import projectList from "./projectList";

function Projects() {
    return (
        <div className="projects">
            <h1 className="projects__title">Project Showcase</h1>
            <div className="projects__grid">
                {projectList.map((project) => (
                    <ProjectCard key={project.id} title={project.title} description={project.description} link={project.link} />
                ))}
            </div>
        </div>
    );
}

export default Projects;