import React from "react";
import LanguageBar from "../LanguageBar";
import TDL from "../../../assets/images/pictures/tdl-banner.png";
import "./cards.css";

interface TDLCardProps {
  languages: { name: string; percentage: number; color: string }[];
  visible: boolean;
}

const TDLCard: React.FC<TDLCardProps> = ({ languages }) => {
  return (
    <div className="flip-project-card">
      <div className="flip-project-card-inner">
        <div className="flip-project-card-front">
          <div className="backshape"></div>
          <img src={TDL} alt="TDL" className="flip-project-image" />
        </div>
        <div className="flip-project-card-back">
          <div className="project-card">
            <h2>TDL</h2>
            <p>
              A simple and intuitive Todo List application built with Flutter.
              This app allows users to efficiently manage their tasks, helping
              you stay organized and productive.
            </p>
            <LanguageBar languages={languages} />
            <button
              onClick={() => {
                window.open("https://github.com/RomaruDaze/TDL", "_blank");
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

export default TDLCard;
