import "./resume.css";
import Timeline from "./timeline/timeline";
import profilePicture from "../../assets/images/pictures/profile-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef } from "react";
import { faLightbulb} from "@fortawesome/free-solid-svg-icons";

function Resume() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("rise-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="resume-container">
      <div className="resume-header" ref={headerRef}>
        <div className="resume-about-picture">
          <img src={profilePicture} alt="about" />
        </div>
        <div className="resume-about-content">
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
          <div className="resume-link-button">
            <a href="https://github.com/RomaruDaze" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://linkedin.com/in/roger-marvin-78659b302/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://instagram.com/romaru._" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://x.com/romaruDaze" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
      </div>
      <Timeline />
      <div className="resume-question">
        <h1>
          <FontAwesomeIcon icon={faLightbulb} /> Want to chat?
        </h1>
        <p>
          You can contact me by email at{" "}
          <a href="mailto:romarudazee99@gmail.com">romarudazee99@gmail.com</a>.
          You will also find my phone number on my CV.
        </p>
      </div>
    </div>
  );
}

export default Resume;
