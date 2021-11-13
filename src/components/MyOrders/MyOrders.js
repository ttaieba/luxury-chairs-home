import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";


const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);
    const { user } = useAuth();
    const email = user.email



    useEffect(() => {
        fetch(`https://polar-chamber-50247.herokuapp.com/orders/${email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [control]);

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you want to delete it?');
        if (confirm) {


            fetch(`https://polar-chamber-50247.herokuapp.com/orders/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        alert('deleted successfully');
                        setControl(!control);
                    }
                });




        }

    };

    return (
        <Container>
            <h1 className="text-center text-color"> Your Order list </h1>
            <Row className="g-2" >

                {orders?.map((order) => (
                    <Col xs={12} md={4} className="">

                        <div className=" p-3">
                            <p className="text-start text-danger">Order status: {order?.status}</p>
                            <img className="w-100" src={order?.img} alt="" />

                            <h6>{order?.Productname}</h6>
                            <h4 >  ${order?.price}</h4>

                            <p>{order?.des}</p>


                            <Button
                                onClick={() => handleDelete(order?._id)}
                                className=" btn-danger"
                            >
                                Cancel
                            </Button>
                        </div>

                    </Col>


                ))}

            </Row>




        </Container >
    );
};

export default MyOrders;
