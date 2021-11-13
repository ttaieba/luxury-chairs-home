import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from './Review';

// -----------------------links---------------------------


const GetReviews = () => {

    const [reviews, setReviews] = useState([])





    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {

                setReviews(data)

            })


    }, [])

    return (
        <div>
            <Container >
                <div className="py-4 text-color ">
                    <h2 >OUR CLIENT TESTIMONIALS
                    </h2>

                </div>
                <Row xs={1} lg={4} className="g-4  py-4">

                    {
                        reviews.map((review) => <Review

                            key={review._id}
                            review={review}



                        ></Review>)
                    }

                </Row>


            </Container>

        </div>
    );
};

export default GetReviews;