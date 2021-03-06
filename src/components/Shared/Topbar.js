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


                        <Nav.Link as={Link} className="text-white" to="/home">HOME</Nav.Link>


                        <Nav.Link as={Link} className="text-white" to="/allproducts">OUR PRODUCTS</Nav.Link>

                        {/* -------------Need accesss------ */}

                        {user?.email ? <div className="d-flex">

                            <Nav.Link as={Link} className="text-white" to="/dashboard"> DASHBOARD</Nav.Link>

                            <Button onClick={logout} className="me-3" variant="light"><FontAwesomeIcon className="text-info " icon={faUser} /> Logout</Button>

                        </div>

                            :
                            <Nav.Link as={Link} className="text-white" to="/login"> LOGIN</Nav.Link>



                        }


                        <Navbar.Text className="text-dark">
                            <a className="text-info" href="#login">{user.displayName}</a>

                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div>
    );
};

export default Topbar;