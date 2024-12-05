import { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  const [buttonOpacity, setButtonOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonOpacity(1);
    }, 2000);

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
        <Link
          to="/contacts"
          style={{ opacity: buttonOpacity, transition: "opacity 1s ease" }}
        >
          Contacts
        </Link>
      </div>
    </div>
  );
}

export default Home;
