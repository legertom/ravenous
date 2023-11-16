import React from 'react';

const businessData = [{
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}]

class Business extends React.Component {
    render () {
        return (
            <div className='business'>
                <div className='image-container'>
                    <img />
                </div>
                <h2>Restaurant Name</h2>
                <div className='address'>
                    123 Main St.
                    Anytown, US 11222
                
                </div>
                <div className='business-info'>
                Category
                <div className="rating">
                    9.2 stars
                </div>
                <div className='review-count'>
                    90 reviews
                </div>
                </div>

            </div>
        )
    }
}

export default Business;