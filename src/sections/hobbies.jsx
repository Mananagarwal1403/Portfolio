import SectionWrapper from "../components/sectionWrapper";

const Hobbies = () => {
  return (
    <SectionWrapper id="hobbies">
      <h2 className="section-title">Hobbies</h2>

      <div className="hobbies-card glow-click">

        <h3 className="hobbies-heading">
          When I am not coding
        </h3>

        <p className="hobbies-subtitle">
          Things that recharge me, enhance focus, and support my personal growth
        </p>

        <ul className="hobbies-list">
          <li>🎻 Playing violin and exploring instrumental music</li>

          <li>
            🌍 Following current affairs, geopolitical developments, and their
            geo-economic impact on global markets and policies
          </li>
        </ul>

      </div>
    </SectionWrapper>
  );
};

export default Hobbies;

