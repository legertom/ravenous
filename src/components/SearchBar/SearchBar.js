import React, { useState } from "react";
import "./SearchBar.css";
import getYelpListings from "../../utils/yelpAPI";

function SearchBar ({searchYelp}) {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const handleClick = (sortValue) => {
    setSortBy(sortValue);
  }

  const handleTermChange = (event) => {
    event.preventDefault();
    setTerm(event.target.value);
  }

  const handleLocationChange = (event) => {
    event.preventDefault();
    setLocation(event.target.value);
  }

  const handleSearch = (event) => {
    //console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    event.preventDefault();
    searchYelp(term, location, sortBy);
   
  }

    return (
      <div className="search-bar">
        <div className="sorting-options">
          <button  className={sortBy === 'best_match' ? 'active' : ''} onClick={() => handleClick('best_match')}>Best Match</button>
          <button className={sortBy === 'highest_rated' ? 'active' : ''} onClick={() => handleClick('highest_rated')}>Highest Rated</button>
          <button className={sortBy === 'most_reviewed' ? 'active' : ''} onClick={() => handleClick('most_reviewed')}>Most Reviewed</button>
        </div>
        <div className="search-inputs">
          <input onChange={handleTermChange} type="text" placeholder="Search Businesses" />
          <input onChange={handleLocationChange} type="text" placeholder="Where?" />
        </div>
        <button onClick={handleSearch} type="submit" className="submit-button">Let's Go</button>
      </div>
    );
  
}

export default SearchBar;
