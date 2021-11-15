import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Topbar from '../../Shared/Topbar';
import Product from '../Product';
// ------------------------links------------

const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://polar-chamber-50247.herokuapp.com/allproducts')
            .then(res => res.json())
            .then(data => {

                setProducts(data)

            })


    }, [])


    return (
        <div>
            <Topbar></Topbar>
            <Container >
                <div className="py-4 text-color">

                    <h1 className="text-font">---Explore Our Products---</h1>
                </div>
                <Row xs={1} lg={3} className="g-4 common-bg py-4">

                    {
                        products.map((product) => <Product

                            key={product._id}
                            product={product}



                        ></Product>)
                    }

                </Row>


            </Container>
        </div>
    );
};

export default AllProducts;