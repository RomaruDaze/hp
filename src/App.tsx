import { useState, useEffect } from "react";
import "./App.css";
import "./assets/fonts/font-roboto.css";
import Header from "./components/header/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
function App() {
  const [headerBgColor, setHeaderBgColor] = useState("#000");

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

  return (
    <>
      <div
        className="app-header-container"
        style={{ backgroundColor: headerBgColor }}
      >
        <Header />
      </div>
      <div className="app-body-container">
        <Body />
      </div>
      <div className="app-footer-container">
        <Footer />
      </div>
    </>
  );
}

export default App;
