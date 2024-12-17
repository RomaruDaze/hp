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

  useEffect(() => {
    const grid = document.querySelector(".grid");
    const cells = grid?.querySelectorAll(".grid-cell");

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cells?.forEach((cell) => {
        const rect = (cell as HTMLElement).getBoundingClientRect();
        const distance = Math.hypot(clientX - rect.x, clientY - rect.y);
        const maxDistance = 120;
        const opacity = Math.max(0, 1 - distance / maxDistance);
        (
          cell as HTMLElement
        ).style.backgroundColor = `rgba(255,215,0, ${opacity})`;
        (cell as HTMLElement).style.borderColor = `rgba(0,0,0, ${opacity})`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="home-container">
      <div className="grid">
        {Array.from({ length: 900 }).map((_, index) => (
          <div key={index} className="grid-cell"></div>
        ))}
      </div>
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
