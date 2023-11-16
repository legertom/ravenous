import React from 'react';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        const businesses = []
        return (
            <div className="business-list">
                {businesses.map(business => {
                    return <Business key={Business.id} />
                })}
            </div>
        );
    }
}

export default BusinessList;
