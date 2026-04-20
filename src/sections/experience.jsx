import SectionWrapper from "../components/sectionWrapper";
import ExperienceCard from "../components/experienceCard";
import experience from "../data/experience";

const Experience = () => {
  return (
    <SectionWrapper id="experience">

      <h2 className="section-title">Experience</h2>

      <div className="experience-stack">

        {experience.map((item) => (
          <ExperienceCard
            key={item.id}
            organization={item.organization}
            role={item.role}
            duration={item.duration}
            points={item.points}
          />
        ))}

      </div>

    </SectionWrapper>
  );
};

export default Experience;


