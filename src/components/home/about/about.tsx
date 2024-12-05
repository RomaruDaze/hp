import { useEffect, useRef, useState } from "react";
import "./about.css";
import profilePicture from "../../../assets/images/pictures/profile-picture.png";
import { Link } from "react-router-dom";

function About() {
  const [isVisible, setIsVisible] = useState({
    picture: false,
    content: false,
  });
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
          setIsVisible({ picture: true, content: true });
        } else if (rect.top < window.innerHeight) {
          setIsVisible((prev) => ({ ...prev, picture: true }));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="about-container"
      ref={aboutRef}
      style={{ opacity: 1, transition: "opacity 0.5s ease" }}
    >
      <div
        className="about-picture"
        style={{
          opacity: isVisible.picture ? 1 : 0,
          transform: isVisible.picture ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
          transitionDelay: "0.6s",
        }}
      >
        <img src={profilePicture} alt="about" />
      </div>
      <div
        className="about-content"
        style={{
          opacity: isVisible.content ? 1 : 0,
          transform: isVisible.content ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
          transitionDelay: "0.3s",
        }}
      >
        <h1>Roger Marvin</h1>
        <h2>Software Engineer</h2>
        <p>
          I am a software engineer with a passion for creating innovative
          solutions for{" "}
          <span>
            <a href="https://en.wikipedia.org/wiki/Digital_transformation">
              Digital Transformation
            </a>
          </span>
          . I have a strong foundation in computer science and a passion for
          learning new technologies. My goal is to make{" "}
          <span>
            <a href="https://en.wikipedia.org/wiki/Indonesia">Indonesia</a>
          </span>{" "}
          a better country.
        </p>
        <Link to="/resume" className="ui-btn">
          <span>Resume</span>
        </Link>
      </div>
    </div>
  );
}

export default About;
