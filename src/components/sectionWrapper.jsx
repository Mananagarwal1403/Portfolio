const SectionWrapper = ({ id, children }) => {
  return (
    <section id={id} className="section">
      <div className="section-container">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;

