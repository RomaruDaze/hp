import Home from "./home/home";
import About from "./about/about";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import { useEffect } from "react";

function Body() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default Body;
