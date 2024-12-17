import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/fonts/font-roboto.css";
import Header from "./components/header/header";
import Body from "./components/home/body";
import Resume from "./components/resume/resume";
import Projects from "./components/projects/projects";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";

function App() {
  const [headerOpacity, setHeaderOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 30) {
        setHeaderOpacity(0.75);
      } else {
        setHeaderOpacity(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <Header opacity={headerOpacity} />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
