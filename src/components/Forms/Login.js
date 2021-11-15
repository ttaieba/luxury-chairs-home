import React, { useState } from 'react';
import { Row, Col, Container, Button, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Topbar from '../Shared/Topbar';


// ------------ links--------------------

const Login = () => {
    const { handleUserLogin, user, isLoading } = useAuth()
    const [loginInfo, setLoginInfo] = useState({})

    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginInfo = { ...loginInfo };
        newLoginInfo[field] = value;
        setLoginInfo(newLoginInfo);
        // console.log(field, value)
    }

    const handleSubmit = e => {
        handleUserLogin(loginInfo.email, loginInfo.password, location, history);
        e.preventDefault();

    }


    return (
        <div >
            <Topbar></Topbar>

            <Container className="my-5 py-5">
                <Row>
                    <Col sx={12}>
                        <h1 className="text-color p-4">Please Login</h1>
                        <div className="login">
                            <p>{user.displayName}</p>

                            {!isLoading && <form onSubmit={handleSubmit}>
                                <input
                                    onChange={handleOnChange}
                                    type="email"
                                    placeholder="email "
                                    name="email"
                                    id="" />
                                <br />
                                <br />
                                <input
                                    onChange={handleOnChange}
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    id="" />
                                <br /><br />
                                <Button type="submit" className="px-4 m-2 btn-success">Log In</Button>

                                <br />
                                <br />
                                <Link to="/register" className="text-primary my-4">New user?please Register</Link>
                            </form>}

                            {isLoading && <Spinner animation="border" variant="success" />}
                        </div>


                    </Col>
                </Row>

            </Container>
        </div >
    );
};

export default Login;