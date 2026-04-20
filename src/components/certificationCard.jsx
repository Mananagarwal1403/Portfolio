const CertificationCard = ({ title, platform, badge, skills }) => {
  return (
    <div className="cert-card glow-click">

      <h3>{title}</h3>

      <p className="cert-platform">{platform}</p>

      {badge && <span className="cert-badge">{badge}</span>}

      <ul className="cert-skills">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

    </div>
  );
};

export default CertificationCard;



