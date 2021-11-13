import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'




const Products = (props) => {
    const { _id, name, img, des, price } = props.product


    return (
        <div>

            <Col className="" >

                <div className="py-4 ">
                    <div className="">

                        <img className=" w-75 card-style" src={img} alt="" /></div>

                    <div className="text-start p-3">
                        <h5>$: {price}</h5>
                        <h4 className="text-color text-font">{name}</h4>
                        <p>{des}</p>


                        <Link to={`/Purchase/${_id}`}><Button className="text-font"><FontAwesomeIcon icon={faShoppingCart} /> purchase Now </Button> </Link>
                    </div>
                </div>




            </Col>


        </div >
    );
};

export default Products;