import { useEffect } from "react";
import "./index.css";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Testimonal from "./sections/About";
import About from "./sections/About";
function App() {
  // useEffect(() => {
  //   document.body.style.overflow = "auto";
  //   window.scrollTo(0, 0);
  // });
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />

      <Contact />
      <Footer />
    </>
  );
}

export default App;
