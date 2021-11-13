import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from './Product';

//-------------links------------------

const Products = () => {
    const [products, setProducts] = useState([])





    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {

                setProducts(data)

            })


    }, [])
    // --------------------------------------------------------
    return (
        <div>
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

export default Products;