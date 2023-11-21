import React from "react";
import "./Business.css";

function Business (props) {

    const { business } = props;

    return (
      <div className="business">
        <div className="image-container">
          <img src={business.imageSrc} alt={business.name} />
        </div>
        <h2>{business.name}</h2>
        <div className="address">
          {business.address}
          <br />
          {business.city}, {business.state} {business.zipCode}
        </div>
        <div className="business-info">
          {business.category}
          <div className="rating">{business.rating} stars</div>
          <div className="review-count">{business.reviewCount} reviews</div>
        </div>
      </div>
    );
  
}

export default Business;
