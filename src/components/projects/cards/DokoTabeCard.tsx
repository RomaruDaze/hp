import React from "react";
import LanguageBar from "../LanguageBar";
import DokoTabe from "../../../assets/images/pictures/dokotabe-banner.png";
import "./cards.css";

interface DokoTabeCardProps {
  languages: { name: string; percentage: number; color: string }[];
  visible: boolean;
}

const DokoTabeCard: React.FC<DokoTabeCardProps> = ({ languages }) => {
  return (
    <div className="flip-project-card">
      <div className="flip-project-card-inner">
        <div className="flip-project-card-front">
          <div className="backshape"></div>
          <img src={DokoTabe} alt="DokoTabe" className="flip-project-image" />
        </div>
        <div className="flip-project-card-back">
          <div className="project-card">
            <h2>DokoTabe</h2>
            <p>
              Dokotabe displays nearby restaurants on a map and shows the menu
              of the selected restaurant. It also has the ability to narrow down
              your search by distance and category, and to add restaurants to
              your favorites.
            </p>
            <LanguageBar languages={languages} />
            <button
              onClick={() => {
                window.open(
                  "https://github.com/RomaruDaze/Hackathon-DokoTabe",
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

export default DokoTabeCard;
