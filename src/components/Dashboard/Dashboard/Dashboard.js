import React, { useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import AddProducts from '../../AddNewProduct/AddProducts';
import ManageOrder from '../../ManageOrders/ManageOrder';
import MyOrders from '../../MyOrders/MyOrders';
import PostReviews from '../Reviews/PostReviews/PostReviews';
import MakeAdmin from '../AdminPanel/MakeAdmin/MakeAdmin'
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Pay from './Payment/Pay';
import ManageProduct from '../AdminPanel/ManageProduct/ManageProduct';
import useAuth from '../../../hooks/useAuth';

// -----------------links------------------------------

const Dashboard = () => {
    const { user, logout } = useAuth()
    let { path, url } = useRouteMatch();

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/admin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, [user?.email]);



    return (
        <div>

            <Row>
                <Col md={2} className="bg-light text-color p-4">
                    <h2 className="bg-white">Dashboard</h2>

                    {/*--------- admin panele----------- */}

                    {isAdmin && <div className="mt-5">



                        <Link to={`${url}/addProducts`}>
                            <li className="text-start">Add Products</li>
                        </Link>

                        <Link to={`${url}/manageProduct`}>
                            <li className="text-start">Manage Product</li>
                        </Link>

                        <Link to={`${url}/makeAdmin`}>
                            <li className="text-start">Make Admin</li>
                        </Link>
                        <Link to={`${url}/manageOrder`}>
                            <li className="text-start">Manage Order</li>
                        </Link>
                    </div>}

                    {/* -------------user panel------------- */}
                    {!isAdmin && <div>

                        <Link to={`${url}`}>
                            <li className=" text-start  mt-5">My Order</li>
                        </Link>

                        <Link to={`${url}/pay`}>
                            <li className=" text-start  ">Pay</li>
                        </Link>

                        <Link to={`${url}/myOrders`}>
                            <li className=" text-start  " >MyOrders</li>
                        </Link>

                        <Link to={`${url}/review`}>
                            <li className="text-start">Review</li>
                        </Link>
                    </div>}



                    {/* ----------------------------- */}

                    {/* onClick={logout} */}

                    <Button onClick={logout} className="me-3" variant="light">Logout</Button>

                </Col>
                <Col md={10} >


                    <Switch>
                        {/* -------User dashboard-------- */}
                        <Route exact path={path}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route exact path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route>

                        {/* ------------------------ */}
                        <Route exact path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route exact path={`${path}/review`}>
                            <PostReviews></PostReviews>
                        </Route>

                        {/* -------------Admin panale------- */}


                        <Route exact path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route exact path={`${path}/addProducts`}>
                            <AddProducts></AddProducts>
                        </Route>
                        <Route exact path={`${path}/manageProduct`}>
                            <ManageProduct></ManageProduct>
                        </Route>
                        <Route exact path={`${path}/manageOrder`}>
                            <ManageOrder></ManageOrder>
                        </Route>
                    </Switch>



                </Col>
            </Row>

        </div>
    );
};

export default Dashboard;