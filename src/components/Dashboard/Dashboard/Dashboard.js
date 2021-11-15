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
import DashboardHome from './DashboardHome';


// -----------------links------------------------------

const Dashboard = () => {
    const { user, logout } = useAuth()
    let { path, url } = useRouteMatch();

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`https://polar-chamber-50247.herokuapp.com/admin/${user?.email}`)
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

            <Row xs={12} md={6}>
                <Col md={2} className="bg-light text-color p-4">
                    <h2 className="bg-white">Dashboard</h2>

                    {/*--------- admin panele----------- */}

                    {isAdmin && <div className="mt-5">



                        <Link to={`${url}/addProducts`}>
                            <h5 className="text-start py-2 ">Add Products</h5>
                        </Link>


                        <Link to={`${url}/manageProduct`}>
                            <h5 className="text-start py-2 ">Manage Product</h5>
                        </Link>

                        <Link to={`${url}/makeAdmin`}>
                            <h5 className="text-start py-2 ">Make Admin</h5>
                        </Link>

                        <Link to={`${url}/manageOrder`}>
                            <h5 className="text-start py-2 ">Manage Order</h5>
                        </Link>
                    </div>}

                    {/* -------------user panel------------- */}
                    {!isAdmin && <div>

                        <Link to={`${url}`}>
                            <h5 className=" text-start py-4  mt-5"> Menu</h5>
                        </Link>

                        <Link to={`${url}/myOrders`}>
                            <h5 className=" text-start py-2 " >MyOrders</h5>
                        </Link>


                        <Link to={`${url}/pay`}>
                            <h5 className=" text-start py-2 ">Pay</h5>
                        </Link>



                        <Link to={`${url}/review`}>
                            <h5 className="text-start py-2">Review</h5>
                        </Link>

                    </div>}



                    {/* ----------------------------- */}

                    {/* onClick={logout} */}

                    <Button onClick={logout} className="me-3" variant="light">Logout</Button>
                    <Link to="/home"><Button variant="light" > Home </Button> </Link>

                </Col>
                <Col md={10} >


                    <Switch>
                        {/* -------User dashboard-------- */}
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>



                        {/* ------------------------ */}
                        <Route exact path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>

                        <Route exact path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
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