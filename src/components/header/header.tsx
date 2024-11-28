import "./header.css";

function Header() {
  return (
    <>
      <div className="container">
        <div className="header-content">
          <img src="/src/assets/images/icons/hp-icon.png" alt="hp-icon" />
        </div>
        <div className="header-nav roboto-thin">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <form className="header-search" role="search">
          <input
            className="header-search-input roboto-thin"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="header-search-button roboto-thin">
            <img
              src="/src/assets/images/icons/search-icon.svg"
              alt="search-icon"
            />
          </button>
        </form>
      </div>
    </>
  );
}

export default Header;
