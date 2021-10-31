import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://possessed-mummy-20993.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(result => {
                setOrders(result)
            });
    }, []);

    const handleDeleteOrder = id => {
        const proceed = window.confirm("Are You Sure , You Want to Delete?")
        if (proceed) {
            const url = `https://possessed-mummy-20993.herokuapp.com/allOrders/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Your Order Deleted Successfully");
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
    }
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr key={order._id}>
                            <td>{order?._id}</td>
                            <td>{order?.name}</td>
                            <td>{order?.email}</td>
                            <td>{order?.address}</td>
                            <td>{order?.phone}</td>
                            <td> <button className="btn btn-warning">Update</button> </td>
                            <td> <button onClick={() => handleDeleteOrder(order._id)} className='btn btn-danger'>Delete</button></td>
                        </tr>)
                    }

                </tbody>
            </Table>
        </div>
    )
};
export default ManageAllOrders;