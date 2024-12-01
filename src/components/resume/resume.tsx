import "./resume.css";
import profilePicture from "../../assets/images/pictures/profile-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef } from "react";

function Resume() {
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('rise-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    if (headerRef.current) observer.observe(headerRef.current);

    timelineItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

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
          </div>
        </div>
      </div>
      <div className="resume-content">
        <h1>
          <span>#</span> Experience
        </h1>
        <div className="resume-body">
          <div className="timeline">
            <div className="timeline-today">
              <div className="timeline-date-today">Today</div>
              <div className="timeline-circle-today"> </div>
              <div className="timeline-content-today"> </div>
            </div>
            <div className="timeline-item" ref={(el) => (timelineItemsRef.current[0] = el!)}>
              <div className="timeline-date">April 2022</div>
              <div className="timeline-circle"> </div>
              <div className="timeline-content">
                <h3>
                  <a href="https://kaishi-pu.ac.jp/" target="_blank">
                    Kaishi Professional University
                  </a>
                </h3>
                <p>Niigata, Japan</p>
                <p>From April 2022 to Today</p>
                <p>Information Faculty</p>
              </div>
            </div>
            <div className="timeline-item" ref={(el) => (timelineItemsRef.current[1] = el!)}>
              <div className="timeline-date">October 2020</div>
              <div className="timeline-circle"> </div>
              <div className="timeline-content">
                <h3>
                  <a
                    href="https://www.kla.ac/school/kyotochuo/"
                    target="_blank"
                  >
                    Kyoshin Language Academy
                  </a>
                </h3>
                <p>Kyoto, Japan</p>
                <p>From October 2020 to March 2022</p>
                <p>Japanese Language</p>
              </div>
            </div>
            <div className="timeline-item" ref={(el) => (timelineItemsRef.current[2] = el!)}>
              <div className="timeline-date">July 2017</div>
              <div className="timeline-circle"> </div>
              <div className="timeline-content">
                <h3>
                  <a
                    href="https://sutomo-mdn.sch.id/sutomo1-sma"
                    target="_blank"
                  >
                    SMA Sutomo 1 Medan
                  </a>
                </h3>
                <p>Medan, Indonesia</p>
                <p>From July 2017 to June 2020</p>
                <p>High School</p>
              </div>
            </div>
            <div className="timeline-item" ref={(el) => (timelineItemsRef.current[3] = el!)}>
              <div className="timeline-date">July 2014</div>
              <div className="timeline-circle"> </div>
              <div className="timeline-content">
                <h3>
                  <a
                    href="https://sutomo-mdn.sch.id/sutomo1-smp"
                    target="_blank"
                  >
                    SMP Sutomo 1 Medan
                  </a>
                </h3>
                <p>Medan, Indonesia</p>
                <p>From July 2014 to June 2017</p>
                <p>Middle School</p>
              </div>
            </div>
            <div className="timeline-item" ref={(el) => (timelineItemsRef.current[4] = el!)}>
              <div className="timeline-date">July 2008</div>
              <div className="timeline-circle"> </div>
              <div className="timeline-content">
                <h3>
                  <a
                    href="https://sutomo-mdn.sch.id/sutomo1-sd"
                    target="_blank"
                  >
                    SD Sutomo 1 Medan
                  </a>
                </h3>
                <p>Medan, Indonesia</p>
                <p>From July 2008 to June 2014</p>
                <p>Elementary School</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
