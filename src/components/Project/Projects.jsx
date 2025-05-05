import ProjectCard from "./ProjectCard";
import projectList from "./projectList";

function Projects() {
    return (
        <div className="projects">
            <h1 className="projects__title">My Work</h1>
            <div className="projects__grid">
                {projectList.map((project, index) => (
                    <div className={`projects__row ${index % 2 !== 0 ? "reverse-on-desktop" : ""}`} key={project.id}>
                    <img
                        src={project.imageUrl}
                        alt={`${project.title} visual`}
                        className="projects__image"
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