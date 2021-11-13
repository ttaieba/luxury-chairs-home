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

                <h1 className="text-color">  Read Latest Our News</h1>

                <Row xs={1} lg={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={blog1} />
                            <h6 className="text-start" ><span className="blogs ">sep 9 </span>   <span className="ps-5 ms-5 ">Posted : kabir swifftsss</span></h6>
                            <Card.Body>
                                <Card.Title className="text-color text-start">How Can I Choose A Comfortable Chair For My Drawing Room</Card.Title>
                                <p>Dream about Buying New Furniture is a signal for joy, celebration and festivities...</p>

                                <Button className="text-font" variant="outline-warning">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={blog2} />
                            <h6 className="text-start" ><span className="blogs ">Nov 11 </span>   <span className="ps-5 ms-5 ">Posted : Elizabeth Barrett</span></h6>

                            <Card.Body>
                                <Card.Title className="text-color text-start">Luxurious Furniture Aren't Expensive All The Time</Card.Title>
                                <p>Dream about Buying New Furniture is a signal for joy, celebration and festivities...</p>

                                <Button className="text-font" variant="outline-warning">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={blog3} />
                            <h6 className="text-start" ><span className="blogs ">oct 12 </span>   <span className="ps-5 ms-5 ">Posted : Queen Alezabeth </span></h6>
                            <Card.Body>
                                <Card.Title className="text-color text-start">How To Decorate Your Living Room With Minimal Cost</Card.Title>
                                <p>Dream about Buying New Furniture is a signal for joy, celebration and festivities...</p>

                                <Button className="text-font" variant="outline-warning">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Blogs;