import React from 'react';
import { Col, Row } from 'react-bootstrap';
import payment from '../../img/payment1.png'
import payment1 from '../../img/payment2.png'
import payment2 from '../../img/payment3.png'
import payment3 from '../../img/payment4.png'



const Footer = () => {
    return (
        <div className=" mt-5">

            <Row xs={1} lg={4} className="g-4 p-5 text-start text-color">

                <Col>

                    <h3>Luxury Charis Home</h3>
                    <p>WELCOME TO our shop </p>
                    <p>Explore our world class Collections </p>
                    <br />
                    <img className="p-1" src={payment} alt="" />
                    <img className="p-1" src={payment1} alt="" />
                    <img className="p-1" src={payment2} alt="" />
                    <img className="p-1" src={payment3} alt="" />

                </Col>
                <Col>




                    <h4>Information</h4>
                    <p>About Us</p>
                    <p>Delivery Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>

                </Col>
                <Col>


                    <h4> My Accound</h4>
                    <p>Order History</p>
                    <p>  Wish List</p>
                    <p> Newsletter</p>
                    <p>Order History</p>

                </Col>
                <Col>
                    <>



                        <h4>Get in touch</h4>
                        <p> Jln Cempaka Wangi No 22, <br /> Jakarta - Indonesia</p>
                        <p>contact@Gmail.Com</p>
                        <p>+(62)21 2002-2012</p>
                        <br /><br />

                        <p> Open : 8:00 AM - Close : 18:00 PM</p>

                        <p>Saturday - Sunday : Close</p>

                    </>
                </Col>

            </Row>

        </div>
    );
};

export default Footer;