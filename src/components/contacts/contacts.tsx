import "./contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

function Contacts() {
  return (
    <div className="contacts-container">
      <h2 className="rise">Contact</h2>
      <div className="contact-content">
        <div className="form-container rise">
          <div className="form">
            <span className="heading">Text Me</span>
            <input placeholder="Name" type="text" className="input rise" />
            <input
              placeholder="Email"
              id="mail"
              type="email"
              className="input"
            />
            <textarea
              placeholder="Say Hello"
              rows={10}
              cols={30}
              id="message"
              name="message"
              className="textarea"
            ></textarea>
            <div className="button-container">
              <div className="send-button ">Send</div>
              <div className="reset-button-container">
                <div id="reset-btn" className="reset-button ">
                  Reset
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-links">
          <div id="linkedin" className="social-btn flex-center rise rise-delay">
            <a
              href="https://linkedin.com/in/roger-marvin-78659b302/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <span>RogerMarvin</span>
          </div>

          <div id="github" className="social-btn flex-center rise rise-delay">
            <a href="https://github.com/RomaruDaze" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <span>RomaruDaze</span>
          </div>
          <div id="twitter" className="social-btn flex-center rise rise-delay">
            <a href="https://instagram.com/romaru._" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <span>@romaru._</span>
          </div>
          <div id="twitter" className="social-btn flex-center rise rise-delay">
            <a href="https://x.com/RomaruDaze" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <span>@RomaruDaze</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
