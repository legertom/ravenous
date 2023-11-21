const apiKey = process.env.REACT_APP_YELP_API_KEY;

const yelpEndpoint = 'https://api.yelp.com/v3/businesses/search';

const getYelpListings = async (term, location, sortBy) => {
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    const url = `${corsAnywhere}${yelpEndpoint}?term=${encodeURIComponent(term)}&location=${encodeURIComponent(location)}&sort=${encodeURIComponent(sortBy)}`;

    const response = await fetch(url, { 
        headers: {
            Authorization: `Bearer ${apiKey}`,
            accept: 'application/json'
        }
    });
    const jsonResponse = await response.json();
    
    //console.log('jsonResponse: ' + JSON.stringify(jsonResponse, null, 2));
    return jsonResponse.businesses;
}

export default getYelpListings;