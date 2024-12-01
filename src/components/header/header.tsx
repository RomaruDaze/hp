import "./header.css";

function Header({
  setCurrentView,
}: {
  setCurrentView: (view: string) => void;
}) {
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    view: string
  ) => {
    event.preventDefault();
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="header-container">
        <div className="header-nav roboto-thin">
          <a href="#" onClick={(e) => handleLinkClick(e, "body")}>
            Home
          </a>
          <a href="#" onClick={(e) => handleLinkClick(e, "resume")}>
            Resume
          </a>
          <a href="#" onClick={(e) => handleLinkClick(e, "news")}>
            News
          </a>
          <a href="#" onClick={(e) => handleLinkClick(e, "contact")}>
            Contact
          </a>
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
