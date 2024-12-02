import React from "react";
import LanguageBar from "../LanguageBar";
import SeleniumType from "../../../assets/images/pictures/seltype-banner.png";
import "./cards.css";

interface SeleniumTypeCardProps {
  languages: { name: string; percentage: number; color: string }[];
  visible: boolean;
}

const SeleniumTypeCard: React.FC<SeleniumTypeCardProps> = ({
  languages,
  visible,
}) => {
  return (
    <div className={`flip-project-card ${visible ? "rise-up" : ""}`}>
      <div className="flip-project-card-inner">
        <div className="flip-project-card-front">
          <div className="backshape"></div>
          <img
            src={SeleniumType}
            alt="SeleniumType"
            className="flip-project-image"
          />
        </div>
        <div className="flip-project-card-back">
          <div className="project-card">
            <h2>SeleniumType</h2>
            <p>
              This project automates the process of logging into Monkeytype and
              simulates typing on the website using Selenium.
            </p>
            <LanguageBar languages={languages} />
            <button
              onClick={() => {
                window.open(
                  "https://github.com/RomaruDaze/SeleniumType",
                  "_blank"
                );
              }}
            >
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeleniumTypeCard;
