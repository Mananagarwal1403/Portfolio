import SectionWrapper from "../components/sectionWrapper";
import education from "../data/education";

const Education = () => {
  return (
    <SectionWrapper id="education">
      <h2 className="section-title">Education</h2>

      <div className="education-stack">

        {education.map((e) => (
          <div key={e.id} className="edu-card glow-click">

            <div className="edu-header">
              <h3>{e.institution}</h3>
              <span className="edu-date">{e.duration}</span>
            </div>

            <p className="edu-degree">{e.degree}</p>
            <p className="edu-score">{e.score}</p>

          </div>
        ))}

      </div>
    </SectionWrapper>
  );
};

export default Education;



