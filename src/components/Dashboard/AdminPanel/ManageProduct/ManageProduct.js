import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

const ManageProduct = () => {
    const [products, setProducts] = useState([])
    const [control, setControl] = useState(false);


    useEffect(() => {
        fetch('https://polar-chamber-50247.herokuapp.com/allproducts')
            .then(res => res.json())
            .then(data => {

                setProducts(data)

            })


    }, [control])

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you want to delete it?');
        if (confirm) {


            fetch(`https://polar-chamber-50247.herokuapp.com/allproducts/${id}`, {
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
        <div>
            <Container >
                <div className="py-4 text-color">

                    <h1> Product Managment </h1>
                </div>
                <Row xs={1} lg={3} className="g-4 py-4">

                    {
                        products.map((product) => <Col className="">

                            <Row className="g-1 ">
                                <Col xs={2} md={6}>
                                    <img className="w-100" src={product?.img} alt="" />
                                    <h6>{product?.name}</h6>
                                    <h5 >  :${product?.price}</h5>
                                </Col>


                                <Col xs={2} md={4} className="my-5">
                                    {/* <p>{product?.des}</p> */}
                                    <Button
                                        onClick={() => handleDelete(product?._id)}
                                    >
                                        Delete
                                    </Button>
                                </Col>



                            </Row>

                        </Col>







                        )
                    }

                </Row>


            </Container>
        </div>
    );
};

export default ManageProduct;