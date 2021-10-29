import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, price, description, img } = service;
    return (
        // <div className="service w-100">
        //     <img width="500px" height="400px" src={img} alt="" />
        //     <h3>{name}</h3>
        //     <h5>Price: {price}</h5>
        //     <p className="px-3">{description}</p>
        //     <Link to={`/booking/${_id}`}>
        //         <button className="btn btn-warning">Book {name.toLowerCase()}</button>
        //     </Link>
        // </div> 

        <div className="card">
            <img src={img} height="100%" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h5 className="card-title"> Booking Price:{price} $</h5>
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

export default Service;