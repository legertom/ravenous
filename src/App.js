import React, { useState, useEffect } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import { businessData } from './components/Business/businessData';
import getYelpListings from './utils/yelpAPI';



function App () {

  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
    try {
      const yelpBusinesses = await getYelpListings(term, location, sortBy);
      //console.log(`App>searchYelp>yelpBusinesses: ${JSON.stringify(yelpBusinesses, null, 2)}`)
      const transformedBusinesses = yelpBusinesses.map((business) => {
        return {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }
      });
      
      setBusinesses(transformedBusinesses);
    } catch (error) {
      console.log(error);
    }
  }
  
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={searchYelp}/>
        <BusinessList businesses={businesses}/>
      </div>
    )
  
}

export default App;