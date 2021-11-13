import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import chair from '../../img/chair logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

//  ----------------------links-----------------------




const Topbar = () => {

    const { user, logout } = useAuth()


    return (
        <div className=" mb-3 background-styl">



            <Navbar variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container className="">
                    <Navbar.Brand href="#home"><img className="w-50" src={chair} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">


                        <Nav.Link as={Link} className="text-info" to="/home">Home</Nav.Link>


                        <Nav.Link as={Link} className="text-info" to="/allproducts">Our Products</Nav.Link>

                        {/* -------------Need accesss------ */}

                        {user?.email ? <div className="d-flex">

                            <Nav.Link as={Link} className="text-info" to="/dashboard"> Dashboard</Nav.Link>

                            <Button onClick={logout} className="me-3" variant="light"><FontAwesomeIcon className="text-info " icon={faUser} /> Logout</Button>

                        </div>

                            :
                            <Nav.Link as={Link} className="text-info" to="/login"> Login</Nav.Link>



                        }


                        <Navbar.Text className="text-dark">
                            <a className="text-info" href="#login">{user.email}</a>

                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div>
    );
};

export default Topbar;