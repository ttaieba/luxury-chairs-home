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
        <div className=" mb-1 background-styl py-3 ">



            <Navbar variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container className="">
                    <Navbar.Brand href="#home"><img className="w-50" src={chair} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-start ">


                        <Nav.Link as={Link} className="text-white" to="/home">Home</Nav.Link>


                        <Nav.Link as={Link} className="text-white" to="/allproducts">Our Products</Nav.Link>

                        {/* -------------Need accesss------ */}

                        {user?.email ? <div className="d-flex">

                            <Nav.Link as={Link} className="text-white" to="/dashboard"> Dashboard</Nav.Link>


                            <Button onClick={logout} className=" logout-btn" variant="light"> Logout</Button>



                        </div>

                            :
                            <Nav.Link as={Link} className="text-white" to="/login"> Login</Nav.Link>



                        }
                        <Navbar.Text className="text-dark ms-2">
                            <a className="text-info" href="#login"><FontAwesomeIcon className="text-info " icon={faUser} /> {user.email}</a>

                        </Navbar.Text>


                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div>
    );
};

export default Topbar;