import { useState, useEffect } from "react";
import "./App.css";
import "./assets/fonts/font-roboto.css";
import Header from "./components/header/header";
import Body from "./components/home/body";
import Resume from "./components/resume/resume";
import Footer from "./components/footer/footer";

function App() {
  const [headerBgColor, setHeaderBgColor] = useState("#000");
  const [currentView, setCurrentView] = useState(() => {
    return localStorage.getItem("currentView") || "body";
  });

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
    window.scrollTo(0, 0); // Scroll to the top of the page on load
  }, []);

  return (
    <>
      <div
        className="app-header-container"
        style={{ backgroundColor: headerBgColor }}
      >
        <Header setCurrentView={setCurrentView} />
      </div>
      <div className="app-body-container" id="body">
        {currentView === "body" ? <Body /> : <Resume />}
      </div>
      <div className="app-footer-container" id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
