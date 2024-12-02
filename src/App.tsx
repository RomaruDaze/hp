import { useState, useEffect } from "react";
import "./App.css";
import "./assets/fonts/font-roboto.css";
import Header from "./components/header/header";
import Body from "./components/home/body";
import Resume from "./components/resume/resume";
import Projects from "./components/projects/projects";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";

function App() {
  const [headerBgColor, setHeaderBgColor] = useState("#000");
  const [currentView, setCurrentView] = useState(() => {
    return localStorage.getItem("currentView") || "body";
  });

  const handleSetCurrentView = (view: string) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 30) {
        setHeaderBgColor("rgba(0, 0, 0, 0.75)");
      } else {
        setHeaderBgColor("rgba(0, 0, 0, 1)");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("currentView", currentView);
  }, [currentView]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="app-header-container"
        style={{ backgroundColor: headerBgColor }}
      >
        <Header setCurrentView={handleSetCurrentView} />
      </div>
      <div className="app-body-container" id="body">
        {currentView === "body" ? (
          <Body setCurrentView={handleSetCurrentView} />
        ) : currentView === "resume" ? (
          <Resume />
        ) : currentView === "projects" ? (
          <Projects />
        ) : (
          <Contacts />
        )}
      </div>
      <div className="app-footer-container" id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
