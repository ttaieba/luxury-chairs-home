import React from 'react';
import { Button, Carousel, Col, Row } from 'react-bootstrap';
import img from '../../img/slider-bg-3.jpg';
import img1 from '../../img/slider-bg-3-2.jpg';
import { Link } from 'react-router-dom';
// ---------------------------------links----------------------



const Bannar = () => {

    return (
        <div className="mb-5">
            <Row>
                <Col xs={12} md={8} className="" >

                    <Carousel fade>
                        <Carousel.Item>

                            <Carousel.Caption>
                                <h3 className="text-font text-start">
                                    Get All Trendy Collections   <br /> In One Store
                                </h3>

                            </Carousel.Caption>

                            <img
                                className="d-block w-100 "
                                src={img}
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h3 className="text-font text-start ">Find Out Your Best  <br /> Furniture  Here
                                </h3>

                            </Carousel.Caption>

                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="Second slide"
                            />


                        </Carousel.Item>

                    </Carousel>
                </Col>
                {/* -------------------------------------------- */}
                <Col xs={12} md={4} className="bannar">
                    <div className="my-5 text-start">

                        <h1 className=" text-start">Exceptional</h1>
                        <p className=" text-start mb-4">UP TO 50% OFF</p>
                        <Link to="/allproducts">
                            <Button  >Explore </Button>
                        </Link>

                    </div>



                </Col>
            </Row>


        </div>
    );
};

export default Bannar;