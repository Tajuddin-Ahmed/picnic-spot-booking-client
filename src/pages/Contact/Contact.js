import React from 'react';

const Contact = () => {
    return (
        <div className="my-5 d-flex justify-content-center">
            <div className="w-50">
                <h1>Contact US</h1>
                <div className="form-floating my-3">
                    <input type="text" className="form-control" id="floatingName" placeholder="Name" />
                    <label htmlFor="floatingName">Your Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" style={{ height: "100px" }} id="floatingTextarea"></textarea>
                    <label htmlFor="floatingTextarea">Comments</label>
                </div>
                <button className="btn btn-primary mt-4">Send</button>
            </div>
        </div>
    );
};

export default Contact;