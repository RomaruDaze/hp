import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-container roboto-thin">
      <div className="footer-social-media">
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
        <a href="https://x.com/RomaruDaze" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <p>Copyright © 2024 Roger Marvin</p>
    </div>
  );
}

export default Footer;
