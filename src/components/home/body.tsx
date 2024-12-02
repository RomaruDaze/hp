import Home from "./home/home";
import About from "./about/about";
import Projects from "./projects/projects";
import Contact from "./contact/contact";

function Body({ setCurrentView }: { setCurrentView: (view: string) => void }) {
  return (
    <>
      <Home />
      <About setCurrentView={setCurrentView} />
      <Projects setCurrentView={setCurrentView} />
      <Contact />
    </>
  );
}

export default Body;
