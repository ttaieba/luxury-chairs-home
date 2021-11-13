import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

// -------------------------links

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();



    // reloade issue--------

    if (isLoading) {
        return (" wait a second............")
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
