import React from 'react';
import blog1 from '../../img/blog-3.jpg'
import blog2 from '../../img/blog-2.jpg'
import blog3 from '../../img/blog-1.jpg'
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
// ---------------------links----------------

const Blogs = () => {
    return (
        <div className="p-5">
            <Container>

                <h1 className="text-color text-font">  Read Latest Our News</h1>

                <Row xs={1} lg={3} className="g-4">
                    <Col>
                        <Card>
                            <Row xs={12} className="py-3" >
                                <Col xs={6} md={6} className="py-3">

                                    <Card.Img variant="top" src={blog1} />
                                    <h6 className="text-start ps-3 " >  <br /> <br /> Posted : kabir molla </h6></Col>
                                <Col>
                                    <h5 className="text-color text-start">How To Decorate Your Living Room With Minimal Cost</h5>
                                    <p>Dream about Buying New Furniture is a signal for joy, celebration and festivities...</p>

                                    <Button className="text-font" variant="outline-warning">Read more</Button>

                                </Col>
                            </Row>

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Row xs={12} className="py-3" >
                                <Col xs={6} md={6} className="py-3">

                                    <Card.Img variant="top" src={blog2} />
                                    <h6 className="text-start ps-3 " >  <br /> <br /> Posted : Elizabeth </h6></Col>
                                <Col>
                                    <h5 className="text-color text-start">Luxurious Furniture Aren't Expensive All The Time you can get </h5>
                                    <p>Dream about Buying New Furniture is a signal for joy, celebration and festivities...</p>

                                    <Button className="text-font" variant="outline-warning">Read more</Button>

                                </Col>
                            </Row>


                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Row xs={12} className="py-3" >
                                <Col xs={6} md={6} className="py-3">

                                    <Card.Img variant="top" src={blog3} />
                                    <h6 className="text-start ps-3 " >  <br /> <br /> Posted : Queen Ale </h6></Col>
                                <Col>
                                    <h5 className="text-color text-start">How To Decorate Your Living Room With Minimal Cost</h5>
                                    <p>Dream about Buying New Furniture is a signal for joy, celebration and festivities...</p>

                                    <Button className="text-font" variant="outline-warning">Read more</Button>

                                </Col>
                            </Row>




                        </Card>
                    </Col>

                </Row>
            </Container>
        </div >
    );
};

export default Blogs;