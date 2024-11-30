import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <div className="contact-content">
        <div className="contact-links">
          <a href="mailto:your-email@example.com">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>

          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>

          <a
            href="https://instagram.com/your-instagram-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>

          <a
            href="https://twitter.com/your-twitter-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </div>
        <div className="contact-form">
          <form className="contact-form-container">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
          </form>
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
