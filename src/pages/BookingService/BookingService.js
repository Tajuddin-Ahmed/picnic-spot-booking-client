import React, { useEffect, useState } from 'react';
import Home from '../Home/Home/Home';
import Service from '../Service/Service';
import './BookingService.css';
const BookingService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://possessed-mummy-20993.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
            <h2>All The Panoramic Picnic Spot</h2>
            <div className="card-group service-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default BookingService;