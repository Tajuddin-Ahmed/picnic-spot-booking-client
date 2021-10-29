import React from 'react';
import { Link } from 'react-router-dom';

const HomeData = ({ service }) => {
    const { _id, name, price, description, img } = service;
    return (
        <div className="card rounded-3 shadow">
            <img src={img} height="100%" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h5 className="card-text"> Booking Price:{price} $</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer">
                <Link to={`/booking/${_id}`}>
                    <button className="btn btn-warning">Book {name.toLowerCase()}</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeData;