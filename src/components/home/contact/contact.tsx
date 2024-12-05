import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const middleOfScreen = window.innerHeight / 2;
      const contactPosition = document
        .querySelector(".contact-home-container")
        ?.getBoundingClientRect().top;

      if (contactPosition && contactPosition < middleOfScreen) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("mail") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement)
      .value;

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(() => {
        alert("Email sent successfully!");
      })
      .catch(() => {
        alert("Failed to send email!");
      });
  };

  return (
    <div className={`contact-home-container ${isVisible ? "visible" : ""}`}>
      <h2>Contact</h2>
      <div className="contact-home-content">
        <div className="contact-home-links">
          <a href="mailto:romarudazee99@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
          <a
            href="https://linkedin.com/in/roger-marvin-78659b302/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
          <a
            href="https://github.com/RomaruDaze"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>

          <a
            href="https://instagram.com/romaru._"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>

          <a
            href="https://x.com/RomaruDaze"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} /> Twitter
          </a>
        </div>
        <div className="contact-home-form">
          <form className="contact-home-form-container">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
          </form>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
