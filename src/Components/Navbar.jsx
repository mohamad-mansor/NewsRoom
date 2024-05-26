import { useState } from "react";
import "./Navbar.css";

function Navbar({ setCategory, setSearchTerm }) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container-fluid">
        <a className="navbar-brand" href="#">
          <span className="brand-badge">News</span>
          <span className="text-light">Room</span>
        </a>
        <ul className="navbar-menu">
          {[
            "technology",
            "business",
            "health",
            "science",
            "sports",
            "entertainment",
          ].map((cat) => (
            <li className="navbar-item" key={cat}>
              <div className="navbar-link" onClick={() => setCategory(cat)}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </div>
            </li>
          ))}
        </ul>
        <form className="navbar-search" onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
