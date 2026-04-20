import SectionWrapper from "../components/sectionWrapper";
import projects from "../data/project";
import ProjectCard from "../components/projectCard";

const Project = () => {
  return (
    <SectionWrapper id="project">
      <h2 className="section-title">Projects</h2>

      <div className="projects-stack">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Project;


