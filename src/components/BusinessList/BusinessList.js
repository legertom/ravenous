import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';
import { businessData } from '../Business/businessData';

class BusinessList extends React.Component {
    render() {
        const businesses = []
        return (
            <div className="business-list">
                {businessData.map((business) => {
                    return <Business key={Business.id} business={business}/>
                })}
            </div>
        );
    }
}

export default BusinessList;
