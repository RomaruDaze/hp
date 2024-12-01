import "./header.css";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-nav roboto-thin">
          <a href="#">Home</a>
          <a href="#">Resume</a>
          <a href="#">News</a>
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
