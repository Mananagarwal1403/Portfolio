import SectionWrapper from "../components/sectionWrapper";

const Intro = () => {
  return (
    <SectionWrapper id="intro">
      <h1 className="intro-name">Manan Agarwal</h1>
      <p className="intro-role">
        Software Developer | MERN • Python • SQL • C++
      </p>

      <div className="intro-content-card glow-click">

        <p>
          Aspiring software developer pursuing a Bachelor’s degree in Computer
          Science, with a strong focus on building scalable, user-centric
          solutions across multiple domains.
        </p>

        <p>
          Actively exploring the intersection of full-stack web development,
          data analytics, and artificial intelligence to identify where
          technical passion meets real-world impact. Proficient in the MERN
          stack, Python, SQL, and C++, with an emphasis on clean code,
          maintainability, and performance.
        </p>

        <p>
          Driven by curiosity and a commitment to continuous learning,
          currently building expertise in machine learning and data-driven
          technologies while remaining adaptable to evolving technical
          challenges. Seeking opportunities to contribute to innovative
          projects, collaborate with experienced professionals, and grow
          through meaningful work.
        </p>

        <div className="intro-actions">
          <a href="#project" className="btn-primary">
            View Projects
          </a>
        </div>

      </div>

    </SectionWrapper>
  );
};

export default Intro;





