import SectionWrapper from "../components/sectionWrapper";
import skills from "../data/skills";

const Skills = () => {
  const allSkills = [
    ...skills.languages,
    ...skills.web,
    ...skills.database,
  ];

  return (
    <SectionWrapper id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {allSkills.map((skill, index) => (
          <span key={index} className="skill-chip glow-click">

            {skill}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;



