import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import "./projects.css";
import { getLanguageColor } from "../../assets/colors/langcolor";
import SeleniumType from "../../assets/images/pictures/seltype-banner.png";
import TDL from "../../assets/images/pictures/tdl-banner.png";
import DokoTabe from "../../assets/images/pictures/dokotabe-banner.png";
import APReader from "../../assets/images/pictures/apreader-banner.png";

interface LanguageData {
  [key: string]: number; // Each key is a language name, and the value is the number of bytes
}

interface Language {
  name: string;
  percentage: number;
  color: string;
}

function LanguageBar({
  languages,
}: {
  languages: { name: string; percentage: number; color: string }[];
}) {
  const totalPercentage = languages.reduce(
    (total, lang) => total + lang.percentage,
    0
  );

  return (
    <div className="language-bar">
      <div className="language-bar-total" style={{ width: "100%" }}>
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="language-bar-item"
            style={{
              width: `${(lang.percentage / totalPercentage) * 100}%`,
              backgroundColor: lang.color,
            }}
          />
        ))}
      </div>
      <div className="language-bar-labels">
        {languages.map((lang) => (
          <div key={lang.name} className="language-bar-label">
            <div
              className="color-circle"
              style={{ backgroundColor: lang.color }}
            />
            <span>
              {lang.name} - {lang.percentage.toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const [seleniumLanguages, setSeleniumLanguages] = useState<Language[]>([]);
  const [tdlLanguages, setTDLLanguages] = useState<Language[]>([]);
  const [dokoTabeLanguages, setDokoTabeLanguages] = useState<Language[]>([]);
  const [apreaderLanguages, setAPReaderLanguages] = useState<Language[]>([]);
  const fetchLanguages = async (
    repo: string,
    setLanguages: React.Dispatch<React.SetStateAction<any[]>>
  ) => {
    try {
      const response = await axios.get<LanguageData>(
        `https://api.github.com/repos/RomaruDaze/${repo}/languages`
      );
      const totalBytes = Object.values(response.data).reduce(
        (a, b) => a + b,
        0
      );
      const langData = Object.entries(response.data).map(([name, bytes]) => ({
        name,
        percentage: (bytes / totalBytes) * 100.0,
        color: getLanguageColor(name),
      }));
      setLanguages(langData);
    } catch (error) {
      console.error(`Error fetching languages for ${repo}:`, error);
    }
  };

  useEffect(() => {
    fetchLanguages("SeleniumType", setSeleniumLanguages);
    fetchLanguages("TDL", setTDLLanguages);
    fetchLanguages("Hackathon-DokoTabe", setDokoTabeLanguages);
    fetchLanguages("APReader", setAPReaderLanguages);
  }, []);

  return (
    <div className="projects-container">
      <div className="projects-content">
        <h1>My Projects</h1>
        <div className="projects-list">
          <div className="projects-row">
            <div className="flip-project-card">
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
                      This project automates the process of logging into
                      Monkeytype and simulates typing on the website using
                      Selenium.
                    </p>
                    <LanguageBar languages={seleniumLanguages} />{" "}
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
                      A simple and intuitive Todo List application built with
                      Flutter. This app allows users to efficiently manage their
                      tasks, helping you stay organized and productive.
                    </p>
                    <LanguageBar languages={tdlLanguages} />{" "}
                    <button
                      onClick={() => {
                        window.open(
                          "https://github.com/RomaruDaze/TDL",
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
          </div>
          <div className="projects-row">
            <div className="flip-project-card">
              <div className="flip-project-card-inner">
                <div className="flip-project-card-front">
                  <div className="backshape"></div>
                  <img
                    src={DokoTabe}
                    alt="DokoTabe"
                    className="flip-project-image"
                  />
                </div>
                <div className="flip-project-card-back">
                  <div className="project-card">
                    <h2>DokoTabe</h2>
                    <p>
                      Dokotabe displays nearby restaurants on a map and shows
                      the menu of the selected restaurant. It also has the
                      ability to narrow down your search by distance and
                      category, and to add restaurants to your favorites.
                    </p>
                    <LanguageBar languages={dokoTabeLanguages} />{" "}
                    {/* Use fetched languages */}
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
            <div className="flip-project-card">
              <div className="flip-project-card-inner">
                <div className="flip-project-card-front">
                  <div className="backshape"></div>
                  <img
                    src={APReader}
                    alt="APReader"
                    className="flip-project-image"
                  />
                </div>
                <div className="flip-project-card-back">
                  <div className="project-card">
                    <h2>APReader</h2>
                    <p>
                      This program is designed to execute commands on a
                      specified Access Point (AP) and log the output results to
                      a selected folder as a .txt file. The program retrieves
                      the username and password required to access the AP from a
                      CSV file.
                    </p>
                    <LanguageBar languages={apreaderLanguages} />{" "}
                    {/* Use fetched languages */}
                    <button
                      onClick={() => {
                        window.open(
                          "https://github.com/RomaruDaze/APReader",
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
