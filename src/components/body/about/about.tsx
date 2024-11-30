import "./about.css";
import profilePicture from "../../../assets/images/pictures/profile-picture.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-picture">
        <img src={profilePicture} alt="about" />
      </div>
      <div className="about-content">
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
        <button>My Resume</button>
      </div>
    </div>
  );
}

export default About;
