import React, { } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


// ------------ links--------------------

const Login = () => {
    const { handleLogin, handleEmail, handlePassword } = useAuth()


    return (
        <div >


            <Container className="my-5 py-5">
                <Row>
                    <Col sx={12}>
                        <h1 className="text-color p-4">Please Login</h1>
                        <div className="login">
                            <form onSubmit={handleLogin}

                            >
                                <input onChange={handleEmail}
                                    type="email"
                                    placeholder="email "
                                    name=""
                                    id="" />
                                <br />
                                <br />
                                <input
                                    onChange={handlePassword}
                                    type="password"
                                    placeholder="password"
                                    name=""
                                    id="" />
                                <br /><br />
                                <Button type="submit" className="px-4 m-2 btn-success">Log In</Button>

                                <br />
                                <br />
                                <Link to="/register" className="text-primary my-4">New user?please Register</Link>
                            </form>
                        </div>


                    </Col>
                </Row>

            </Container>
        </div >
    );
};

export default Login;