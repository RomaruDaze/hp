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
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            Hi, I'm Roger Marvin, a 22-year-old software engineer from{" "}
            <span>Indonesia</span> currently studying abroad in{" "}
            <span>Japan</span>. I have a passion for coding and aim to
            contribute to the development of Indonesia's tech landscape. My
            skill set includes <span>React</span>, <span>Flutter</span>, and{" "}
            <span>Python</span>, which I leverage to create innovative solutions
            and applications. I'm excited to connect with like-minded
            individuals and explore opportunities in the tech industry.
          </p>
          <div className="social-links">
            <div id="linkedin" className="social-btn flex-center">
              <a
                href="https://linkedin.com/in/roger-marvin-78659b302/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <span>RogerMarvin</span>
            </div>

            <div id="github" className="social-btn flex-center">
              <a href="https://github.com/RomaruDaze" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <span>RomaruDaze</span>
            </div>
            <div id="twitter" className="social-btn flex-center">
              <a href="https://instagram.com/romaru._" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <span>@romaru._</span>
            </div>
            <div id="twitter" className="social-btn flex-center">
              <a href="https://x.com/RomaruDaze" target="_blank">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <span>@RomaruDaze</span>
            </div>
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
