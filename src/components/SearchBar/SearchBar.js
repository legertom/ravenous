import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <div className="sorting-options">
          <button>Best Match</button>
          <button>Highest Rated</button>
          <button>Most Reviewed</button>
        </div>
        <div className="search-inputs">
          <input type="text" placeholder="Search Businesses" />
          <input type="text" placeholder="Where?" />
        </div>
        <button type="submit" className="submit-button">Let's Go</button>
      </div>
    );
  }
}

export default SearchBar;
