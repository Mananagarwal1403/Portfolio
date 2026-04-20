import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Intro from "./sections/intro";
import Experience from "./sections/experience";
import Project from "./sections/project";
import Skills from "./sections/skills";
import Education from "./sections/education";
import Certification from "./sections/certification";
import Hobbies from "./sections/hobbies";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Experience />
      <Project />
      <Skills />
      <Education />
      <Certification />
      <Hobbies />
      <Footer />
    </>
  );
}

export default App;

