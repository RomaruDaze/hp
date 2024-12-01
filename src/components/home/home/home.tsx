import { useEffect, useState } from "react";
import "./home.css";

function Home() {
  const [buttonOpacity, setButtonOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonOpacity(1); // Set button opacity to 1 after the paragraph appears
    }, 2000); // Adjust this timing based on your paragraph's appearance duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      <div
        className="title-container"
        style={{ opacity: 0, animation: "fadeIn 1s forwards" }}
      >
        <h1>
          <span>C</span>ode <span>C</span>reate <span>C</span>onquer
        </h1>
      </div>
      <div
        className="content-container"
        style={{
          opacity: 0,
          animation: "fadeIn 1s forwards",
          animationDelay: "1s",
        }}
      >
        <p>
          Embrace the power of coding, unleash your creativity, and conquer
          challenges with innovative solutions!
        </p>
        <button
          style={{ opacity: buttonOpacity, transition: "opacity 1s ease" }}
        >
          Contact me
        </button>
      </div>
    </div>
  );
}

export default Home;
