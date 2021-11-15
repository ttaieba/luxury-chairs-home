import React from 'react';
import { Container, Row } from 'react-bootstrap';

const DashboardHome = () => {
    return (
        <div>
            <Container>
                <Row xs={12} className="py-5">
                    <h1 className=" text-font">Welcome to Dashboard </h1>
                    <h6 className="text-color">Checked all , what you need...</h6>

                </Row>
            </Container>

        </div>
    );
};

export default DashboardHome;