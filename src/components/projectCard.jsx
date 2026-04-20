const ProjectCard = ({ title, tech, highlights, github }) => {
  return (
    <div className="project-card glow-click">

      {/* Project Title */}
      <h3>{title}</h3>

      {/* Tech Stack */}
      <p className="project-tech">
        <strong>Tech Stack:</strong> {tech}
      </p>

      {/* Highlights */}
      <ul className="project-highlights">
        {highlights.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      {/* GitHub Link */}
      <div className="project-links">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-github"
        >
          🔗 View on GitHub
        </a>
      </div>

    </div>
  );
};

export default ProjectCard;


