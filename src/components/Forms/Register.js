import React, { useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

// --------links--------------------------


const Register = () => {

    const { handdleRegister, user, isLoading } = useAuth()
    const [loginInfo, setLoginInfo] = useState({})
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginInfo = { ...loginInfo };
        newLoginInfo[field] = value;
        setLoginInfo(newLoginInfo);
        // console.log(newLoginInfo)
    }

    const handleregisterSubmit = e => {
        if (loginInfo.password !== loginInfo.repassword) {
            alert('password not matched')
            return
        }

        handdleRegister(loginInfo?.name, loginInfo?.email, loginInfo?.password, history);

        e.preventDefault();
    }

    // ---------------------------------------

    // no need to register at admin@admin as new. because it already register as admin . you only login with this email//


    // -----------------------------------

    return (
        <div>
            <Container className="my-5 py-5">
                <Row>
                    <Col
                        sx={12}>
                        <h1 className="text-color p-4">Please Register</h1>
                        <div className="login">
                            {user?.email && <h5 className="text-success">{user.email}</h5>}

                            {!isLoading && <form onSubmit={handleregisterSubmit}>
                                <input
                                    onBlur={handleOnBlur}
                                    type="text"
                                    placeholder="Your Name "
                                    name="name"
                                    id="" />
                                <br />
                                <br />
                                <input
                                    onBlur={handleOnBlur}
                                    type="email"
                                    placeholder="email "
                                    name="email"
                                    id="" />
                                <br />
                                <br />
                                <input
                                    onBlur={handleOnBlur}
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    id="" />
                                <br /><br />

                                <input
                                    onChange={handleOnBlur}
                                    type="password"
                                    placeholder="Re type password"
                                    name="repassword"
                                    id="" />
                                <br /><br />
                                <Button type="submit" className="px-4 m-2 btn-primary">Register</Button>

                                <br />
                                <br />

                            </form>}
                            {isLoading && <Spinner animation="border" variant="success" />}

                            <Link to="/login" className="text-primary my-4"> registered?please Login</Link>


                        </div>


                    </Col>
                </Row>

            </Container>
        </div >
    );
};

export default Register;