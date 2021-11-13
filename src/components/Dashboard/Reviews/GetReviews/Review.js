import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Rating from '../Rating/Rating';

// --------------------LINKS----------------------


const Review = (props) => {
    const { name, Review } = props.review


    return (
        <div>

            <Col className="" >

                <div className="py-4 review">
                    <h5>
                        <FontAwesomeIcon icon={faUser} />    {name}
                    </h5>
                    <p>
                        {Review}
                    </p>
                    <Rating></Rating>
                </div>

            </Col>


        </div >
    );
};

export default Review;