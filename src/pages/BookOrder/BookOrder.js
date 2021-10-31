import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const BookOrder = () => {
    const [service, setService] = useState({});
    const { serviceId } = useParams();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [])
    const handleDeleteBooking = (id) => {
        const url = `http://localhost:5000/services/${serviceId}`;
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert("Your Booking Deleted Successfully");
                }
                history.push(redirect_uri);
            })
    }
    return (
        // <div>
        //     <h3>Detail of : {service.name}</h3>
        //     <h2>Booking Service : {serviceId}</h2>
        // </div>
        <div className="card text-center">
            <div className="card-header">
                <h1>Your Booking</h1>
            </div>
            <div className="card-body px-5">
                <img src={service.img} alt="" />
                <h2 className="card-title">{service.name}</h2>
                <p className="card-text">{service.description}</p>
                <button onClick={() => handleDeleteBooking(service._id)} className="btn btn-warning me-2">Cancel</button>
                <Link to="/placeOrder">
                    <button className="btn btn-warning">Place Order</button>
                </Link>

            </div>
            <div className="card-footer">
                Booking Price : {service.price}$
            </div>
        </div>
    );
};

export default BookOrder;