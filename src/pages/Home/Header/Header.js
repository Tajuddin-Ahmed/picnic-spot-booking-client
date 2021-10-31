import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Picnic Spot Booking</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-white" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link className="text-white" as={HashLink} to="/home#experts">Contact</Nav.Link>
                        <Nav.Link className="text-white" as={HashLink} to="/home#experts">About</Nav.Link>
                        {user?.email ?
                            <NavDropdown className="text-uppercase text-decoration-none text-white"
                                title={user?.displayName} id="basic-nav-dropdown">
                                <Nav.Link as={Link} to="/addNewSpot">
                                    <NavDropdown.Item href="#action/3.1">Add New Spot</NavDropdown.Item>
                                </Nav.Link>
                                <Nav.Link>
                                    <NavDropdown.Item href="#action/3.2">Your Orders</NavDropdown.Item>
                                </Nav.Link>
                                <Nav.Link>
                                    <NavDropdown.Item href="#action/3.2">Manage All Orders</NavDropdown.Item>
                                </Nav.Link>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="text-center" href="#action/3.3">
                                    <button className="btn btn-primary" onClick={logOut} variant="light">Logout</button>
                                </NavDropdown.Item>
                            </NavDropdown> :
                            <Nav.Link as={Link} to="/login">
                                <NavDropdown.Item className="text-white bg-dark" href="#action/3.3">Login</NavDropdown.Item>
                            </Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;