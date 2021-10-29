import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BookOrder = () => {
    const [service, setService] = useState({});
    const { serviceId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [])
    return (
        <div>
            <h3>Detail of : {service.name}</h3>
            <h2>Booking Service : {serviceId}</h2>
        </div>
    );
};

export default BookOrder;