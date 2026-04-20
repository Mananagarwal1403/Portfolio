import SectionWrapper from "../components/sectionWrapper";
import certifications from "../data/certifications";
import CertificationCard from "../components/certificationCard";

const Certification = () => {
  return (
    <SectionWrapper id="certification">
      <h2 className="section-title">Certifications</h2>

      <div className="cert-stack">
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} {...cert} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certification;


