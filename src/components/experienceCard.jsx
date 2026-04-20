const ExperienceCard = ({ organization, role, duration, points }) => {
  return (
    <div className="exp-card glow-click">

      {/* Header */}
      <div className="exp-header">
        <h3>{organization}</h3>
        <span>{duration}</span>
      </div>

      {/* Role */}
      <p className="exp-role">{role}</p>

      {/* Points */}
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

    </div>
  );
};

export default ExperienceCard;
