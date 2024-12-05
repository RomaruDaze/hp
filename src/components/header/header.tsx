import { Link } from "react-router-dom";
import "./header.css";

interface HeaderProps {
  opacity: number;
}

function Header({ opacity }: HeaderProps) {
  return (
    <div className="header-container" style={{ opacity: opacity }}>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
    </div>
  );
}

export default Header;
