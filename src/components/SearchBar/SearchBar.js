import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar () {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const handleClick = (sortValue) => {
    setSortBy(sortValue);
  }

    return (
      <div className="search-bar">
        <div className="sorting-options">
          <button  onClick={() => handleClick('best_match')}>Best Match</button>
          <button onClick={() => handleClick('highest_rated')}>Highest Rated</button>
          <button onClick={() => handleClick('most_reviewed')}>Most Reviewed</button>
        </div>
        <div className="search-inputs">
          <input type="text" placeholder="Search Businesses" />
          <input type="text" placeholder="Where?" />
        </div>
        <button type="submit" className="submit-button">Let's Go</button>
      </div>
    );
  
}

export default SearchBar;
