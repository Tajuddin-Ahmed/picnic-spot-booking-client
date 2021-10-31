import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import HomeData from '../HomeData/HomeData';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://possessed-mummy-20993.herokuapp.com/home')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="d-flex justify-content-center my-3">
                <div className="rounded-pill bg-dark text-white w-25">
                    <h2>Book Here</h2>
                </div>
            </div>
            <div className=" container services card-group mb-4">
                {
                    services.map(service => <HomeData
                        key={service._id}
                        service={service}
                    ></HomeData>)
                }
            </div>

        </div>
    );
};

export default Home;