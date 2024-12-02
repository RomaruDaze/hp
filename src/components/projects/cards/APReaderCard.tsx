import React from "react";
import LanguageBar from "../LanguageBar";
import APReader from "../../../assets/images/pictures/apreader-banner.png";
import "./cards.css";

interface APReaderCardProps {
  languages: { name: string; percentage: number; color: string }[];
  visible: boolean;
}

const APReaderCard: React.FC<APReaderCardProps> = ({ languages }) => {
  return (
    <div className="flip-project-card">
      <div className="flip-project-card-inner">
        <div className="flip-project-card-front">
          <div className="backshape"></div>
          <img src={APReader} alt="APReader" className="flip-project-image" />
        </div>
        <div className="flip-project-card-back">
          <div className="project-card">
            <h2>APReader</h2>
            <p>
              This program is designed to execute commands on a specified Access
              Point (AP) and log the output results to a selected folder as a
              .txt file. The program retrieves the username and password
              required to access the AP from a CSV file.
            </p>
            <LanguageBar languages={languages} />
            <button
              onClick={() => {
                window.open("https://github.com/RomaruDaze/APReader", "_blank");
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

export default APReaderCard;
