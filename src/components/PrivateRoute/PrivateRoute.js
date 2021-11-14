import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

// ------------------links---------------

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();



    //  stay with page after loading-----

    if (isLoading) {
        return (<Spinner animation="border" variant="success" />)
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );





};
export default PrivateRoute;
